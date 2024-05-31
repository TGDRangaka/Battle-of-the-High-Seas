import { initializeApp } from "firebase/app";
import { User, getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { DataSnapshot, child, get, getDatabase, onChildAdded, onValue, ref, update, remove } from "firebase/database";
import { Direction, Ship, ShipStatus } from "../models/Ship";
import { Board, Cell } from "../models/Board";
import { Player, PlayerState } from "../models/Player";
import { Room, RoomStatus } from "../models/Room";
import { GameStat } from "../models/GameStat";
import $ from "jquery";

const firebaseConfig = {
    apiKey: "AIzaSyAL0AmcXBH1zr7EKL8pE3-Joge0Pxyljfg",
    authDomain: "battle-of-the-high-seas.firebaseapp.com",
    databaseURL: "https://battle-of-the-high-seas-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "battle-of-the-high-seas",
    storageBucket: "battle-of-the-high-seas.appspot.com",
    messagingSenderId: "95988470782",
    appId: "1:95988470782:web:b745e9ce5edeeebbe566af",
    measurementId: "G-ZVDQNVR4JY"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const database = getDatabase();

// Get Room Id from URL
const urlParams = new URLSearchParams(window.location.search);
let roomId: string | null = urlParams.get("roomId");
// console.log(roomId);

// Sign in
const auth = getAuth();
let userId: string;
let userRef: any;
let userSnapshot: DataSnapshot;

onAuthStateChanged(auth, async (user: User | null) => {
    if (user) {
        userRef = ref(database, 'users/' + user.uid);
        userId = user.uid;

        try {
            userSnapshot = await get(userRef);

            if (!userSnapshot.exists()) {
                //     // User is new, assign a name
            } else {
                //     // User is returning, fetch their name
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }

        //   onDisconnect(userRef).remove();
    } else {
        // No user is signed in, sign in anonymously
        signInAnonymously(auth).catch((error) => {
            console.error('Error signing in anonymously:', error);
        });
    }
});

// Get Players Data
let playerRef;
let player: Player;
let enemy: Player;
let room: Room;

const $dropzone = $("#dropzone");

// for (let i = 0; i < 100; i++) {
//     $dropzone.append(`<div data-index="${i}" class="cell"></div>`);
// }
// const $cells = $('.cell');
let $cells: JQuery<HTMLElement>;
// Get Room Data
const roomRef = ref(database, 'rooms/' + roomId);

get(roomRef).then(snapshot => {
    if (snapshot.exists()) {
        room = snapshot.val();
        const players = new Map<string, Player>(Object.entries(room.players || {}));

        // console.log("Room get successfuly")
        $("#roomId").text(`ROOM ID: #${room.roomId}`);
        const player1: Player | undefined = players.get(userId);

        if (player1) {
            player = player1;
            playerRef = ref(database, `rooms/${roomId}/players/${userId}`);
            $(".player .player-name").text(player.name);
            if (player.state === PlayerState.NOT_READY) {
                $(".player button").prop("disabled", true);
            }
        }

        createBoard(player1!.board);
        $cells = $('.cells') as JQuery<HTMLElement>;
        if ($cells) {
            buildPlayground();
        }
    } else {
        console.error("no room to get...")
    }
})

onChildAdded(ref(database, `rooms/${roomId}/players`), snapshot => {
    if (snapshot.exists() && snapshot.val().id !== userId) {
        enemy = snapshot.val();
        $(".enemy .player-name").text(enemy.name);
        alert("Player Joined!!!");
    }
})

let isStartedGame = false;

onValue(ref(database, `rooms/${roomId}/players`), async snapshot => {
    if (isStartedGame) return;
    const room = await get(roomRef);
    if (room.val().status !== RoomStatus.WAITING) {
        // Update UI
        updateUI()

        // Update database board
        updateBoard();
        // console.log("start >>>")
        !isStartedGame && startGame();
        return;
    }
    const playersMap = new Map<string, Player>(Object.entries(snapshot.val() || {}));
    let isPlayersAreReady: [boolean, boolean] = [false, false];
    playersMap.forEach((player, key) => {
        // player action
        if (key === userId) {
            player.state !== PlayerState.NOT_READY && (isPlayersAreReady[0] = true);
        }
        // enemy action
        else {
            player.state !== PlayerState.NOT_READY && $(".enemy button").prop("disabled", false) && (isPlayersAreReady[1] = true);
        }
    })

    // players are ready
    if (isPlayersAreReady[0] && isPlayersAreReady[1]) {
        // console.log("Both Players are ready");
        //TODO
        update(roomRef, { status: RoomStatus.PLAYING }).then(() => {
            // Update UI
            updateUI()

            // Update database board
            updateBoard();

            // Update player state as playing
            player.state = PlayerState.PLAYING;
            update(playerRef!, player);

            // Start game
            // console.log("start -->")
            startGame();
        }).catch(err => console.log("error updating room status to playing", err));
    }
})

// Create Board -- Create ships
let $selectedShip: any = null;
function buildPlayground(): void {
    $(".guide-pane, #dropzone").on("dragstart", '.ship', function (_e: JQuery.TriggeredEvent) {
        
        if (room.status !== RoomStatus.WAITING) return;
        $selectedShip = $(this);
        const ship = player.ships.find(ship => ship.id === $selectedShip.attr("id"));
        if (!ship) return false;
        const shipSize = ($(this).data("size") as string).split("x");
        const shipLength = parseInt(shipSize[0]);

        $dropzone.on("dragover", '.cell', function (e: JQuery.TriggeredEvent) {
            e.preventDefault();
            let index: number = $('.cell').index(this);

            let placingCells: number[] = [];
            for (let i = 0; i < shipLength; i++) {
                let cellGap = ship.direction === Direction.ROW
                    ? i
                    : (i * 10);
                const currentCellIndex = index + cellGap;
                placingCells.push(currentCellIndex);
            }
            $('.cell').removeClass("highlight");
            $('.cell').removeClass("warning");
            if (isShipCanPlace(index, ship)) {
                placingCells.map(cellIndex => $('.cell').eq(cellIndex).addClass("highlight"))
            } else {
                placingCells.map(cellIndex => $('.cell').eq(cellIndex).addClass("warning"))
            }

        });
    });

    $dropzone.on('drop', '.cell', function (e) {
        if (room.status !== RoomStatus.WAITING) return;
        const index = $(this).data("index");
        const ship = player.ships.find(ship => ship.id === $selectedShip.attr('id'));
        if (!ship) return;

        if (isShipCanPlace(index, ship)) {
            e.preventDefault();
            $('.cell').removeClass("highlight");
            $('.cell').removeClass("warning");
            $(this).prepend($selectedShip);

            // update ship status
            const ship = player.ships.find(ship => ship.id === $selectedShip.attr("id"));
            if (ship) {
                ship.index = index;
                ship.status = ShipStatus.PLACED;

                // update player ships database
                if (player.ships.filter(ship => ship.status === ShipStatus.INACTIVE).length == 0) {
                    $(".player button").prop("disabled", false);
                } else {
                    $(".player button").prop("disabled", true);
                }
                update(playerRef!, player).catch(err => console.log("error while updating ships", err));
            }
            return;
        }
        $('.cell').removeClass("highlight");
        $('.cell').removeClass("warning");
    });


    // Rotate the placed ship
    $dropzone.on('click', '.cell', function (): void {
        if (room.status !== RoomStatus.WAITING) return;
        const index = $(this).data("index");
        const clickedShip = player.ships.find(ship => ship.index === index);
        if (!clickedShip) return;
        // console.log(index, clickedShip)
        if (isShipCanRotate(clickedShip, player.ships)) {
            // Rotate ship
            // console.log('ok');
            if (clickedShip.direction === Direction.COLUMN) {
                $('.cell').eq(clickedShip.index).find('.ship').attr('direction', 'row');
                clickedShip.direction = Direction.ROW;
            } else {
                $('.cell').eq(clickedShip.index).find('.ship').attr('direction', 'column');
                clickedShip.direction = Direction.COLUMN;
            }

            // update player ships database
            update(playerRef!, {
                ships: player.ships
            }).catch(err => console.log("error while updating ships", err));
        } else {
            // Warn if cant rotate
            // console.log('not ok');
            $('.cell').eq(index).addClass('warning');
            setTimeout(() => {
                $('.cell').eq(index).removeClass('warning');
            }, 1500);
        }
    })
    setShips(player.ships);
    replaceShipsToDropzone(player.ships);
}

// player button action
$('.player button').on('click', function () {
    if (player.state === PlayerState.NOT_READY) {
        update(playerRef!, {
            state: PlayerState.READY
        }).then(() => {
            // console.log("Player is Ready updated");
        }).catch(err => console.log("error while updating ships", err));
    }
})

const getAssetSrc = (name: string): string => {
    const path = `/src/assets/imgs/${name}`;
    const modules = import.meta.glob("/src/assets/imgs/*", { eager: true });

    // Find the module corresponding to the requested path
    const mod = modules[path] as { default: string };
    return mod ? mod.default : '';
};

// set guide pane ships
function setShips(ships: Array<Ship>): void {

    for (let ship of ships) {
        const shipImgPath = getAssetSrc(ship.id + '.png');
        console.log(`Loading image from path: ${shipImgPath}`);
        if (ship.status === ShipStatus.INACTIVE) {
            $(".guide-pane .ships").append(`
            <div id="${ship.id}" class="ship" draggable="true" data-size="${ship.size}" direaction="column">
                <img src="${shipImgPath}">
            </div>
        `)
        }
        $('.fleet .ships').append(`
            <div id="${ship.id}" class="ship" data-size="${ship.size}" direaction="column">
                <img src="${shipImgPath}">
            </div>
        `)
    }
}

function createBoard(board: Board): void {
    const cellsCount: number = board.size * board.size;
    for (let i = 0; i < cellsCount; i++) {
        $dropzone.append(`<div data-index="${i}" class="cell"></div>`);
        $("#enemy-board .board").append(`<div data-index="${i}" class="cell"></div>`);
    }
}

function isShipCanPlace(index: number, ship: Ship): boolean {
    let startX: number = index % 10;
    const startY: number = Math.floor(index / 10);
    let isCanPlace = true;

    // if ship direction row
    if (ship.direction === Direction.ROW) {
        if (startX + ship.length > 10) return false;
        l1: for (let i = 0; i < ship.length; i++) {
            let currentIndex = index + i;
            for (let otherShip of player.ships) {
                if (otherShip.status !== ShipStatus.INACTIVE && otherShip.id !== ship.id) {
                    if (otherShip.direction === Direction.ROW) {
                        if (otherShip.index === currentIndex) {
                            isCanPlace = false;
                            break l1;
                        }
                    } else {
                        for (let j = 0; j < otherShip.length; j++) {
                            if (currentIndex === (otherShip.index + j * 10)) {
                                isCanPlace = false;
                                break l1;
                            }
                        }
                    }
                }
            }
        }
        if (!isCanPlace) return false;
    } else {
        if (startY + ship.length > 10) return false;
        l1: for (let i = 0; i < ship.length; i++) {
            let currentIndex = index + i * 10;
            for (let otherShip of player.ships) {
                if (otherShip.status !== ShipStatus.INACTIVE && otherShip.id !== ship.id) {
                    if (otherShip.direction === Direction.COLUMN) {
                        if (otherShip.index === currentIndex) {
                            isCanPlace = false;
                            break l1;
                        }
                    } else {
                        for (let j = 0; j < otherShip.length; j++) {
                            if (currentIndex === (otherShip.index + j)) {
                                isCanPlace = false;
                                break l1;
                            }
                        }
                    }
                }
            }
        }
        if (!isCanPlace) return false;
    }
    return true;
}

function isShipCanRotate(clickedShip: Ship, ships: Array<Ship>): boolean {
    let isCanRotate: boolean = true;
    const index = clickedShip.index;
    // Check if can rotate
    // if ship current direction is row
    if (clickedShip.direction === Direction.ROW) { // check column direction
        if ((Math.floor(index / 10) + clickedShip.length) > 10) return false;
        for (let i = 1; i < clickedShip.length; i++) {
            let nxtPlace = index + i * 10;
            if (nxtPlace >= 100) return false;
            ships.forEach(ship => {
                if (ship.status !== ShipStatus.INACTIVE && ship.id !== clickedShip.id) {
                    if (ship.direction === Direction.COLUMN) {
                        if (ship.index === nxtPlace) {
                            isCanRotate = false;
                            return;
                        }
                    } else {
                        if (ship.index <= nxtPlace && (ship.index + ship.length) > nxtPlace) {
                            isCanRotate = false;
                            return;
                        }
                    }
                }
            })
            if (!isCanRotate) return false;
        }
        // check row direction 
    } else {
        if (index % 10 + clickedShip.length > 10) return false;
        for (let i = 1; i < clickedShip.length; i++) {
            let nxtPlace = index + i;
            ships.forEach(ship => {
                if (ship.status !== ShipStatus.INACTIVE && ship.id !== clickedShip.id) {
                    if (ship.direction === Direction.ROW) {
                        if (ship.index === nxtPlace) {
                            isCanRotate = false;
                            return;
                        }
                    } else {
                        for (let j = 0; j < ship.length; j++) {
                            if (nxtPlace === (ship.index + j * 10)) {
                                isCanRotate = false;
                                return;
                            }
                        }
                    }
                }
            })
            if (!isCanRotate) return false;
        }
    }
    return true;
}

// Replace ships to dropzone
function replaceShipsToDropzone(ships: Array<Ship>): void {
    for (let ship of ships) {
        if (ship.status != ShipStatus.INACTIVE) {
            const index = ship.index;
            const direction = ship.direction;
            const imagePath = getAssetSrc(ship.id + '.png');

            let $cell = $('.cell').eq(index);
            if (direction == Direction.ROW) {
                $cell.append(`
                <div id="${ship.id}" class="ship" draggable="true" data-size="${ship.size}" direction="row">
                    <img src="${imagePath}" alt="">
                </div>
                `)
            } else {
                $cell.append(`
                <div id="${ship.id}" class="ship" draggable="true" data-size="${ship.size}" direction="column">
                    <img src="${imagePath}" alt="">
                </div>
                `)
            }
        }
    }
    // set ready button enable if all ships are placed
    if (player.ships.filter(ship => ship.status === ShipStatus.INACTIVE).length == 0) {
        $(".player button").prop("disabled", false);
    } else {
        $(".player button").prop("disabled", true);
    }
}

// Update database boards
function updateBoard(): void {
    // console.log("Player Board", player.board);
    player.ships.map(ship => {
        const index = ship.index;
        const direction = ship.direction;

        if (direction === Direction.ROW) {
            for (let i = 0; i < ship.length; i++) {
                player.board.grid[index + i].inside = ship.id;
            }
        } else {
            for (let i = 0; i < ship.length; i++) {
                player.board.grid[index + i * 10].inside = ship.id;
            }
        }
    });
    // console.log("Player Board", player.board);
}

function updateUI(): void {
    $(".guide-pane").hide();
    $(".board-area + .right").show();
    $("aside").removeClass("hidden");
    $(".player-info button").hide();
    $("#dropzone .ship[draggable='true']").attr('draggable', 'false');
    $("#dropzone .ship").css('zIndex', '-1');
    $("#turnPlayerName").show();
}





// Game start
async function startGame() {
    if (isStartedGame) return;

    // add cells to shot element
    $(".cell").append("<div class='shot'></div>")

    // Add game stat model
    get(child(ref(database), `rooms/${roomId}/gameStat`)).then(gameStat => {
        if (gameStat.exists()) return;
        update(roomRef, { gameStat: new GameStat(false, null, -1) }).then(() => {
            // console.log("game stat added to room")
        }).catch(err => console.error("Error while adding game stat", err));
    })

    // refereces
    const turnRef = ref(database, `rooms/${roomId}/turn`);
    const gameStatRef = ref(database, `rooms/${roomId}/gameStat`);
    const isHaveWinnerRef = ref(database, `rooms/${roomId}/gameStat/isHaveWinner`);
    const selectedCellRef = ref(database, `rooms/${roomId}/gameStat/selectedCell`);
    const enemyBoardRef = ref(database, `rooms/${roomId}/players/${enemy.id}/board/grid`);
    const playerBoardRef = ref(database, `rooms/${roomId}/players/${player.id}/board/grid`);

    let enemyBoardSnapshot: DataSnapshot = await get(ref(database, `rooms/${roomId}/players/${enemy.id}/board/grid`));
    let enemyBoard: Array<Cell> = enemyBoardSnapshot.val();
    let myBoardSnapshot: DataSnapshot = await get(ref(database, `rooms/${roomId}/players/${player.id}/board/grid`));
    let myBoard: Array<Cell> = myBoardSnapshot.val();

    onValue(turnRef, snapshot => {
        const turnPlayerId = snapshot.val();
        $("#turnPlayerName").text(turnPlayerId == player.id ? "YOUR TURN" : "ENEMY TURN");
        $("#turnPlayerName").css("color", turnPlayerId == player.id ? "#9DFF21" : "#ff2121");
    });

    $("#enemy-board .board").on('click', '.cell', async function () {
        const currentTurn = await get(turnRef);
        if (currentTurn.val() === player.id) {
            const clickedIndex = $(this).index();
            if (enemyBoard[clickedIndex].isHit) return;

            await update(gameStatRef, { selectedCell: clickedIndex });
        }
    })

    // listen to selected cell index
    onValue(selectedCellRef, async snapshot => {
        const selectedCell = snapshot.val();
        const currentTurn = await get(turnRef);
        if (selectedCell == -1) return;
        // I attacked
        if (currentTurn.val() === player.id) {

        } else {  // Enemy attacked me
            const shotCell = player.board.grid[selectedCell];
            // update ship (health, status)
            player.board.grid[selectedCell].isHit = true;
            // console.log("attacked shot - ", player.board.grid[selectedCell]);
            if (shotCell.inside !== 'empty') {
                let i = player.ships.findIndex(ship => ship.id === shotCell.inside);
                if (!player.ships[i]) return;
                if (player.ships[i].health > 1) {
                    player.ships[i].health = player.ships[i].health - 1;
                    player.ships[i].status = ShipStatus.DAMAGED;
                } else {
                    player.ships[i].health = 0;
                    player.ships[i].status = ShipStatus.DESTROYED;
                }
            }

            // update player data
            update(playerRef!, player).then(async () => {
                // check winner
                if (isHaveWinner(player.ships)) {
                    await update(gameStatRef, { isHaveWinner: true, winner: enemy });
                }

                // change turn now
                await update(roomRef, {
                    turn: player.id
                })

            }).catch(err => console.log("error updating the player after attack", err));
        }



    })
    // update my grid ui if its enemy turn
    onValue(playerBoardRef, async snapshot => {
        // const currentTurn = await get(turnRef);
        // if (currentTurn.val() === player.id) return;
        myBoard = snapshot.val();
        // console.log('updated my grid--');
        myBoard.map((cell, i) => {
            if (cell.isHit) {
                $("#player-board .board .cell .shot").eq(i).html(
                    cell.inside === 'empty'
                        ? `<img src="${getAssetSrc('missed-shot.png')}" alt="missed"/>`
                        : `<img src="${getAssetSrc('player-ship-fire.gif')}" alt="fire"/>`
                )
            }
        })
    })

    // Update enemy grid ui if its my turn
    onValue(enemyBoardRef, async snapshot => {
        // const currentTurn = await get(turnRef);
        // if (currentTurn.val() !== player.id) return;
        enemyBoard = snapshot.val();
        // console.log('updated enemy grid--');
        enemyBoard.map((cell, i) => {
            if (cell.isHit) {
                $("#enemy-board .board .cell .shot").eq(i).html(
                    cell.inside === 'empty'
                        ? `<img src="${getAssetSrc('missed-shot.png')}" alt="missed"/>`
                        : `<img src="${getAssetSrc('fire.png')}" alt="fire"/>`
                )
            }
        })
    })

    onValue(isHaveWinnerRef, async snapshot => {
        if (snapshot.val()) {
            const winnerSnapsot: DataSnapshot = await get(ref(database, `rooms/${roomId}/gameStat/winner`));
            const winnerPlayer = winnerSnapsot.val();
            alert("Winner is " + winnerPlayer.name);

            $("#turnPlayerName").text(winnerPlayer == player.id ? "YOUR WIN" : "ENEMY WIN");
            $("#turnPlayerName").css("color", winnerPlayer == player.id ? "#9DFF21" : "#ff2121");
        }

    })

    isStartedGame = true;
    // console.log("game started");
}

function isHaveWinner(ships: Array<Ship>): boolean {
    return ships.filter(ship => ship.status === ShipStatus.DESTROYED).length === ships.length;
}

$("#exitButton").click(async function () {
    // remove room
    await remove(roomRef);
})
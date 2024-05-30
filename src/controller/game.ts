import { initializeApp } from "firebase/app";
import { User, getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { DataSnapshot, child, get, getDatabase, onChildAdded, onValue, ref, set, update } from "firebase/database";
import { Direction, Ship, ShipStatus } from "../models/Ship";
import { Board } from "../models/Board";
import { Player, PlayerState } from "../models/Player";
import { Room, RoomStatus } from "../models/Room";

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
console.log(roomId);

// Sign in
const auth = getAuth();
let userId: string;
let userRef: any;
const usersRef = ref(database, 'users');
let userSnapshot: DataSnapshot;

onAuthStateChanged(auth, async (user: User | null) => {
    if (user) {
        userRef = ref(database, 'users/' + user.uid);
        userId = user.uid;

        try {
            userSnapshot = await get(userRef);

            if (!userSnapshot.exists()) {
                // User is new, assign a name
            } else {
                // User is returning, fetch their name
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
        const room: Room = snapshot.val();
        const players = new Map<string, Player>(Object.entries(room.players || {}));

        console.log("Room get successfuly")
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
        console.log("no room to get...")
    }
})

onChildAdded(ref(database, `rooms/${roomId}/players`), snapshot => {
    if (snapshot.exists() && snapshot.val().id !== userId) {
        enemy = snapshot.val();
        $(".enemy .player-name").text(enemy.name);
    }
})

onValue(ref(database, `rooms/${roomId}/players`), snapshot => {
    const playersMap = new Map<string, Player>(Object.entries(snapshot.val() || {}));
    let isPlayersAreReady: [boolean, boolean] = [false, false];
    playersMap.forEach((player, key) => {
        console.log("some value changed", key);
        // player action
        if (key === userId) {
            player.state === PlayerState.READY && (isPlayersAreReady[0] = true);
        }
        // enemy action
        else {
            player.state === PlayerState.READY && $(".enemy button").prop("disabled", false) && (isPlayersAreReady[1] = true);
        }
    })

    // players are ready
    if (isPlayersAreReady[0] && isPlayersAreReady[1]) {
        console.log("Both Players are ready");
        //TODO
        update(roomRef,{status: RoomStatus.PLAYING}).then(() =>{

        }).catch(err => console.log("error updating room status to playing",err));
    }
})

// Create Board -- Create ships
let $selectedShip: any = null;
function buildPlayground(): void {
    $(".guide-pane, #dropzone").on("dragstart", '.ship', function (e: JQuery.TriggeredEvent) {
        $selectedShip = $(this);
        const ship = player.ships.find(ship => ship.id === $selectedShip.attr("id"));
        if (!ship) return false;
        console.log(ship);
        const shipSize = ($(this).data("size") as string).split("x");
        const shipLength = parseInt(shipSize[0]);

        $dropzone.on("dragover", '.cell', function (e: JQuery.TriggeredEvent) {
            e.preventDefault();
            let index: number = $('.cell').index(this);
            console.log(index);

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
        const index = $(this).data("index");
        console.log('dropped', index);
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
                update(playerRef!, player).then(() => {
                    console.log("ships updated");
                }).catch(err => console.log("error while updating ships", err));
            }
            return;
        }
        $('.cell').removeClass("highlight");
        $('.cell').removeClass("warning");
    });


    // Rotate the placed ship
    $dropzone.on('click', '.cell', function (): void {
        const index = $(this).data("index");
        console.log('clicked', index);
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
            }).then(() => {
                console.log("ships updated");
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
            console.log("Player is Ready updated");
        }).catch(err => console.log("error while updating ships", err));
    }
})

// set guide pane ships
function setShips(ships: Array<Ship>): void {
    for (let ship of ships) {
        // break;
        if (ship.status === ShipStatus.INACTIVE) {
            $(".guide-pane .ships").append(`
        <div id="${ship.id}" class="ship" draggable="true" data-size="${ship.size}" direaction="column">
            <img src="../assets/imgs/${ship.id}.png" alt="">
        </div>
    `)
        }
        $('.fleet .ships').append(`
    <div id="${ship.id}" class="ship" data-size="${ship.size}" direaction="column">
        <img src="../assets/imgs/${ship.id}.png" alt="">
    </div>
    `)
    }
}

function createBoard(board: Board): void {
    const cellsCount:number = board.size * board.size;
    for (let i = 0; i < cellsCount; i++) {
        $dropzone.append(`<div data-index="${i}" class="cell"></div>`);
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
        if (ship.index != -1 && ship.status != ShipStatus.INACTIVE) {
            const index = ship.index;
            const direction = ship.direction;

            let $cell = $('.cell').eq(index);
            if (direction == Direction.ROW) {
                $cell.append(`
                <div id="${ship.id}" class="ship" draggable="true" data-size="${ship.size}" direction="row">
                    <img src="../assets/imgs/${ship.id}.png" alt="">
                </div>
                `)
            } else {
                $cell.append(`
                <div id="${ship.id}" class="ship" draggable="true" data-size="${ship.size}" direction="column">
                    <img src="../assets/imgs/${ship.id}.png" alt="">
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
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import { child, get, getDatabase, ref, set, update } from "firebase/database";
import { Direction, Ship, ShipStatus } from "../models/Ship";

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
const auth = getAuth();

// Get Room Id from URL
const urlParams = new URLSearchParams(window.location.search);
let roomId: string | null = urlParams.get("roomId");
console.log(roomId);

// Sign in
signInAnonymously(auth);

auth.onAuthStateChanged(user => {
    if (user) {
        console.log(user.uid);
    } else {
        console.log("User not found");
    }
})

// Get Room Data

// Get Players Date

// Create Boards

// Creade Ships
const ships: Array<Ship> = [
    new Ship('ship-6-1', '6x1', 6, 71, ShipStatus.PLACED, [1, 1, 1, 1, 1, 1], Direction.ROW),
    new Ship('ship-4-2', '4x1', 4, -1, ShipStatus.INACTIVE, [1, 1, 1, 1], Direction.ROW),
    new Ship('ship-4-1', '4x1', 4, 23, ShipStatus.PLACED, [1, 1, 1, 1], Direction.ROW),
    new Ship('ship-3-2', '3x1', 3, -1, ShipStatus.INACTIVE, [1, 1, 1], Direction.ROW),
    new Ship('ship-3-1', '3x1', 3, -1, ShipStatus.INACTIVE, [1, 1, 1], Direction.ROW),
    new Ship('ship-2-1', '2x1', 2, -1, ShipStatus.INACTIVE, [1, 1], Direction.ROW)
];

// Set values ------------------------------------------------

// set guide pane ships
for (let ship of ships) {
    // break;
    if (ship.status === ShipStatus.INACTIVE) {
        $(".guide-pane .ships").append(`
        <div id="${ship.id}" class="ship" draggable="true" data-size="${ship.size}" direaction="column">
            <img src="../assets/imgs/${ship.id}.png" alt="">
        </div>
    `)
    }

}



const $dropzone = $("#dropzone");
for (let i = 0; i < 100; i++) {
    $dropzone.append(`<div data-index="${i}" class="cell"></div>`);
}
const $cells = $(".cell");

// Drag and Drop ships ----------------------------------------------

let $selectedShip: any = null;

$(".guide-pane, #dropzone").on("dragstart", '.ship', function (e: JQuery.TriggeredEvent) {
    $selectedShip = $(this);
    const ship = ships.find(ship => ship.id === $selectedShip.attr("id"));
    if (!ship) return false;
    const shipSize = ($(this).data("size") as string).split("x");
    const shipLength = parseInt(shipSize[0]);

    $cells.on("dragover", function (e: JQuery.TriggeredEvent) {
        e.preventDefault();
        let index: number = $cells.index(this);
        let startX: number = index % 10;
        const startY: number = Math.floor(index / 10);

        // console.log(isShipCanPlace(index, ship));
        let placingCells: number[] = [];
        for (let i = 0; i < shipLength; i++) {
            let cellGap = ship.direction === Direction.ROW
                ? i
                : (i * 10);
            const currentCellIndex = index + cellGap;
            placingCells.push(currentCellIndex);
        }
        $cells.removeClass("highlight");
        $cells.removeClass("warning");
        if(isShipCanPlace(index, ship)){
            placingCells.map(cellIndex => $cells.eq(cellIndex).addClass("highlight"))
        }else{
            placingCells.map(cellIndex => $cells.eq(cellIndex).addClass("warning"))
        }
        // $cells.removeClass("highlight");
        // $cells.removeClass("warning");

    });
});

$cells.on('drop', function (e) {
    const index = $(this).data("index");
    const ship = ships.find(ship => ship.id ===$selectedShip.attr('id'));
    if(!ship) return;

    // if (!(startX + shipLength > 10 || alredyInShip)) {
    if (isShipCanPlace(index, ship)) {
        e.preventDefault();
        $cells.removeClass("highlight");
        $cells.removeClass("warning");
        $(this).prepend($selectedShip);

        // update ship status
        const ship = ships.find(ship => ship.id === $selectedShip.attr("id"));
        if (ship) {
            ship.index = index;
            ship.status = ShipStatus.PLACED;
            console.log(ship);
        }
        return;
    }
    $cells.removeClass("highlight");
    $cells.removeClass("warning");
});

function isShipCanPlace(index: number, ship: Ship): boolean {
    let startX: number = index % 10;
    const startY: number = Math.floor(index / 10);
    const alredyInShip = ships.find(s => s.index === index && s.id !== ship.id);

    // if ship direction row
    if (ship.direction === Direction.ROW) {
        for (let i = 0; i < ship.length; i++) {
            let currentIndex = index + i;
            if ((startX + ship.length > 10) || ships.find(s => s.index === currentIndex && s.id !== ship.id)) {
                return false;
            }
        }
    } else {
        for (let i = 0; i < ship.length; i++) {
            let currentIndex = index + i * 10;
            if ((startY + ship.length > 10) || ships.find(s => s.index === currentIndex && s.id !== ship.id)) {
                return false;
            }
        }
    }
    return true;
}

// Rotate the placed ship
$cells.on('click', function (): void {
    const index = $(this).data("index");
    const clickedShip = ships.find(ship => ship.index === index);
    if (!clickedShip) return;
    // console.log(index, clickedShip)
    if (isShipCanRotate(clickedShip, ships)) {
        // Rotate ship
        // console.log('ok');
        if (clickedShip.direction === Direction.COLUMN) {
            $cells.eq(clickedShip.index).find('.ship').attr('direction', 'row');
            clickedShip.direction = Direction.ROW;
        } else {
            $cells.eq(clickedShip.index).find('.ship').attr('direction', 'column');
            clickedShip.direction = Direction.COLUMN;
        }
    } else {
        // Warn if cant rotate
        // console.log('not ok');
        $cells.eq(index).addClass('warning');
        setTimeout(() => {
            $cells.eq(index).removeClass('warning');
        }, 1500);
    }
})

function isShipCanRotate(clickedShip: Ship, ships: Array<Ship>): boolean {
    let isCanRotate: boolean = true;
    const index = clickedShip.index;
    // Check if can rotate
    // if ship current direction is row
    if (clickedShip.direction === Direction.ROW) { // check column direction
        for (let i = 1; i < clickedShip.length; i++) {
            let nxtPlace = index + i * 10;
            if (nxtPlace >= 100) return false;
            ships.forEach(ship => {
                if (ship.status !== ShipStatus.INACTIVE || ship.id !== clickedShip.id) {
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
        for (let i = 1; i < ships.length; i++) {
            let nxtPlace = index + i;
            ships.forEach(ship => {
                if (ship.status !== ShipStatus.INACTIVE || ship.id !== clickedShip.id) {
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
    // return;

    // place placed ships to grid
    for (let ship of ships) {
        if (ship.index != -1 && ship.status != ShipStatus.INACTIVE) {
            const index = ship.index;
            const length = ship.length;
            const direction = ship.direction;

            let $cell = $cells.eq(index);
            if (direction == Direction.ROW) {
                $cell.append(`
                <div id="${ship.id}" class="ship" draggable="true" data-size="${ship.size}" direction="row">
                    <img src="../assets/imgs/${ship.id}.png" alt="">
                </div>
                `)
            } else {
                console.log(index, length, direction);
                $cell.append(`
                <div id="${ship.id}" class="ship" draggable="true" data-size="${ship.size}" direction="column">
                    <img src="../assets/imgs/${ship.id}.png" alt="">
                </div>
                `)
            }
        }
    }
}

replaceShipsToDropzone(ships);
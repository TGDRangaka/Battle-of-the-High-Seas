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
        <div id="${ship.id}" class="ship" draggable="true" data-size="${ship.size}">
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

$(".guide-pane").on("dragstart", '.ship', function (e: JQuery.TriggeredEvent) {
    $selectedShip = $(this);
    const shipSize = ($(this).data("size") as string).split("x");
    const shipLength = parseInt(shipSize[0]);

    $cells.on("dragover", function (e: JQuery.TriggeredEvent) {
        e.preventDefault();
        let index: number = $cells.index(this);
        let startX: number = index % 10;
        const startY: number = Math.floor(index / 10);
        console.log(index, startX);

        $cells.removeClass("highlight");
        $cells.removeClass("warning");
        if (startX + shipLength > 10) {
            for (let i = 0; i < shipLength; i++) {
                const currentCellIndex = index + i;
                if ((currentCellIndex % 10) >= startX) {
                    $cells.eq(currentCellIndex).addClass("warning");
                }
            }
        } else {
            for (let i = 0; i < shipLength; i++) {
                const currentCellIndex = index + i;
                if ((currentCellIndex % 10) >= startX) {
                    $cells.eq(currentCellIndex).addClass("highlight");
                }
            }
        }
    });
});

$cells.on('drop', function (e) {
    const shipLength: number = parseInt($selectedShip.data("size").split("x")[0]);
    const index = $(this).data("index");
    const startX = index % 10;

    if (!(startX + shipLength > 10)) {
        e.preventDefault();
        $cells.removeClass("highlight");

        for (let i = 1; i < shipLength; i++) {
            $cells.eq(index + i).remove();
        }
        $(this).css({
            gridColumnStart: startX + 1,
            gridColumnEnd: startX + shipLength + 1
        })
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
    $cells.removeClass("warning");
});

// Rotate the placed ship
$cells.on('click', function (): void {
    const index = $(this).data("index");
    console.log(index)
    const clickedShip = ships.find(ship => ship.index === index);
    if (!clickedShip) return;
    let newShipIndexes: number[] = [];
    let isCanRotate: boolean = true;

    // Check if can rotate
    for (let i = 1; i < clickedShip.length; i++) {
        let nxtPlace = index + i * 10;
        newShipIndexes.push(nxtPlace)
        const tempShip = ships.find(ship => ship.index <= nxtPlace && (ship.index + ship.length) > nxtPlace);

        if (nxtPlace >= 100 || tempShip){
            isCanRotate = false;
            break;
        }
    }
    if (isCanRotate) {
        // Rotate ship
        console.log('ok', newShipIndexes)
    } else {
        // Warn if cant rotate
        console.log('not ok')
        $cells.eq(index).addClass('warning');
        setTimeout(() => {
            $cells.eq(index).removeClass('warning');
        }, 1500);
    }
})

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
                for (let i = 1; i < length; i++) {
                    $cells.eq(index + i).remove();
                }
                $cell.css({
                    gridColumnStart: index % 10 + 1,
                    gridColumnEnd: index % 10 + length + 1
                })

                $cell.append(`
                <div id="${ship.id}" class="ship" draggable="true" data-size="${ship.size}" direction="row">
                    <img src="../assets/imgs/${ship.id}.png" alt="">
                </div>
                `)
            } else {
                console.log(index, length, direction);
                $cell.css({
                    gridRowStart: Math.floor(index / 10) + 1,
                    gridRowEnd: Math.floor(index / 10) + length + 1
                })
            }
        }
    }
}

replaceShipsToDropzone(ships);
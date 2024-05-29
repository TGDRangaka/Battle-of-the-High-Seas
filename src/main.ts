import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInAnonymously, User } from "firebase/auth";
import { child, get, getDatabase, onChildAdded, onDisconnect, onValue, ref, set, update, DataSnapshot } from "firebase/database";
import { Room, RoomStatus, Mode, Difficulty } from "./models/Room";
import { Player } from "./models/Player";
import { Board } from "./models/Board";
import { Direction, Ship, ShipStatus } from "./models/Ship";

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
                const playerName = generateRandomName();
                await set(userRef, { name: playerName });
                console.log('New user, assigned name:', playerName);
            } else {
                // User is returning, fetch their name
                const playerName: string = userSnapshot.val().name;
                console.log('Returning user, name:', playerName);
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

onValue(usersRef, (snapshot) => {
    const users = snapshot.val();
    const numberOfUsers = users ? Object.keys(users).length : 0;
    $('.count').text(numberOfUsers);
    // You can add additional logic to handle the number of users here
});

onChildAdded(usersRef, snapshot => {
    const userData = snapshot.val();
    console.log('New player joined:', userData);
})



let createdRoomId: number = 0;

// Create a room
$("#createRoomBtn").on('click', async function () {
    let isRoomCreated: boolean = false;
    let roomId: number = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;


    while (!isRoomCreated) {
        await get(child(ref(database), 'rooms/' + roomId)).then(async (rooms) => {
            if (!rooms.exists()) {
                // Create room, players, boards

                const ships: Array<Ship> = [
                    new Ship('ship-6-1', '6x1', 6, -1, ShipStatus.PLACED, [1, 1, 1, 1, 1, 1], Direction.ROW),
                    new Ship('ship-4-2', '4x1', 4, -1, ShipStatus.INACTIVE, [1, 1, 1, 1], Direction.ROW),
                    new Ship('ship-4-1', '4x1', 4, -1, ShipStatus.PLACED, [1, 1, 1, 1], Direction.ROW),
                    new Ship('ship-3-2', '3x1', 3, -1, ShipStatus.INACTIVE, [1, 1, 1], Direction.ROW),
                    new Ship('ship-3-1', '3x1', 3, -1, ShipStatus.INACTIVE, [1, 1, 1], Direction.ROW),
                    new Ship('ship-2-1', '2x1', 2, -1, ShipStatus.INACTIVE, [1, 1], Direction.ROW)
                ];
                const room: Room = new Room(
                    roomId,
                    new Player(userId, userSnapshot.val().name, new Board(10), ships),
                    null,
                    RoomStatus.WAITING,
                    Mode.DEFAULT,
                    Difficulty.DEFAULT,
                    userId
                );

                await set(ref(database, 'rooms/' + roomId), room).then(() => {
                    console.log('Room Created', room)
                    isRoomCreated = true;

                    goToRoom(roomId.toString());
                }).catch(err => console.log('Error creating room', err));
            }
        }).catch(err => {
            console.log(err.message);
        }).finally(() => roomId = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000);
    }
});


$("#submitCode").click(() => {
    let roomId: number = parseInt($("#roomIdInput").val() + "");
    console.log(roomId);
    if (!roomId || roomId >= 10000 || roomId <= 999) {
        console.log("Please enter a room ID");
        return;
    }

    get(child(ref(database), 'rooms/' + roomId)).then(room => {
        if (room.exists()) {

            update(ref(database, 'rooms/' + roomId), {
                status: generateRandomName()
            }).then(() => {
                console.log("Room updated successfully!");
                $("#roomIdInput").val("")
                goToRoom(roomId.toString());
            }).catch(err => {
                console.error("Error updating room:", err.message);
            });
        } else {
            console.log("Room doesn't exist");
        }
    }).catch(err => console.log(err));
});

let isPopopOpened: boolean = false;
// Join a room
$("#joinRoomBtn").on('click', function () {
    if (!isPopopOpened) {
        isPopopOpened = true;
        $(".pop-up").show();
    }

});

$(".close-btn").click(() => {
    $(".pop-up").hide();
    isPopopOpened = false;
})

function goToRoom(roomId: string) {
    // update player in the room

    // Direct to game room
    window.location.href = `/Battle-of-the-High-Seas/src/pages/game-view.html?roomId=${roomId}`;
}

// generate a random player name
function generateRandomName(): string {
    const adjectives = ["Silly", "Goofy", "Wobbly", "Clumsy", "Bouncy", "Quirky", "Zany", "Snappy", "Wacky", "Bizarre"];
    const nouns = ["Penguin", "Banana", "Noodle", "Pancake", "Nugget", "Pickle", "Wombat", "Squirrel", "Doodle", "Llama"];

    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

    return `${randomAdjective} ${randomNoun}`;
}
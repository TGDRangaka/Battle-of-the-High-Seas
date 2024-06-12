import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInAnonymously, User } from "firebase/auth";
import { child, get, getDatabase, onDisconnect, onValue, ref, set, update} from "firebase/database";
import { Room, RoomStatus, Mode, Difficulty } from "./models/Room";
import { Player, PlayerState } from "./models/Player";
import { Board } from "./models/Board";
import { Direction, Ship, ShipStatus } from "./models/Ship";
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
const auth = getAuth();

let userId: string;
let userRef: any;
let playerName: string;
const usersRef = ref(database, 'users');


const ships: Array<Ship> = [
    new Ship('ship-6-1', '6x1', 6, -1, ShipStatus.INACTIVE, 6, Direction.ROW),
    // new Ship('ship-4-2', '4x1', 4, -1, ShipStatus.INACTIVE, 4, Direction.ROW),
    new Ship('ship-4-1', '4x1', 4, -1, ShipStatus.INACTIVE, 4, Direction.ROW),
    new Ship('ship-3-2', '3x1', 3, -1, ShipStatus.INACTIVE, 3, Direction.ROW),
    new Ship('ship-3-1', '3x1', 3, -1, ShipStatus.INACTIVE, 3, Direction.ROW),
    new Ship('ship-2-1', '2x1', 2, -1, ShipStatus.INACTIVE, 2, Direction.ROW)
];



// Listen for changes to the list of users
onAuthStateChanged(auth, async (user: User | null) => {
    onValue(usersRef, (snapshot) => {
        if (snapshot.exists()) {
            const users = snapshot.val();
            const numberOfUsers = users ? Object.keys(users).length : 0;
            $('.count').text(numberOfUsers);
        } else {
            $('.count').text(0);
        }
    });
    if (user) {
        userRef = ref(database, 'users/' + user.uid);
        userId = user.uid;

        try {
            const userInfo = getUserInfo(userId);
            // check user in local storage
            if (userInfo) {
                // Returning user, fetch their name
                playerName = userInfo;
                await set(userRef, { name: playerName });
                // console.log('Returning user, name:', playerName);
            } else {
                // New user, assign a name
                playerName = generateRandomName();
                await set(userRef, { name: playerName });
                // console.log('New user, assigned name:', playerName);
                saveUserInfo(userId, playerName);
            }

            // Set up onDisconnect to remove the user when they go offline
            onDisconnect(userRef).remove();

        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    } else {
        // No user is signed in, sign in anonymously
        signInAnonymously(auth).catch((error) => {
            console.error('Error signing in anonymously:', error);
        });
    }
});

// Save user info to localStorage
function saveUserInfo(userId: string, playerName: string) {
    localStorage.setItem(userId, playerName);
}

// Retrieve user info from localStorage
function getUserInfo(userId: string): string | null {
    const userInfoStr = localStorage.getItem(userId);
    return userInfoStr ? userInfoStr : null;
}

// Create a room
$("#createRoomBtn").on('click', async function () {
    let isRoomCreated: boolean = false;
    let roomId: number = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;


    while (!isRoomCreated) {
        await get(child(ref(database), 'rooms/' + roomId)).then(async (rooms) => {
            if (!rooms.exists()) {
                // Create room, players, boards

                const players: Map<string, Player> = new Map();
                players.set(userId, new Player(userId, playerName, new Board(10), ships, PlayerState.NOT_READY))
                const room: Room = new Room(
                    roomId,
                    players,
                    RoomStatus.WAITING,
                    Mode.DEFAULT,
                    Difficulty.DEFAULT,
                    userId
                );

                // Convert the Room object to a serializable object
                const roomData = {
                    ...room,
                    players: mapToObject(room.players)
                };

                await set(ref(database, 'rooms/' + roomId), roomData).then(() => {
                    // console.log('Room Created', roomData);
                    isRoomCreated = true;

                    goToRoom(roomId.toString());
                }).catch(err => console.log('Error creating room', err));
            }
        }).catch(err => {
            console.log(err.message);
        }).finally(() => roomId = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000);
    }
});


$("#submitCode").click(async () => {
    let roomId: number = parseInt($("#roomIdInput").val() + "");
    // console.log(roomId);
    if (!roomId || roomId >= 10000 || roomId <= 999) {
        alert("Please enter a room ID");
        return;
    }

    const snapshot = await get(child(ref(database), 'rooms/' + roomId));
    if (snapshot.exists()) {
        const roomData: Room = snapshot.val();
        const playersObj = roomData.players || {};
        const playersMap = new Map<string, Player>(Object.entries(playersObj));

        // Check the number of players in the room
        if (playersMap.size < 2) {
            // Add the new player to the room

            const newPlayer = new Player(userId, playerName, new Board(10), ships, PlayerState.NOT_READY);

            playersMap.set(newPlayer.id, newPlayer);

            // Convert the updated Map to a plain object
            const updatedRoomData = {
                ...roomData,
                players: mapToObject(playersMap)
            };

            // Save the updated room data back to Firebase
            update(child(ref(database), 'rooms/' + roomId), updatedRoomData)
                .then(() => {
                    // console.log("Player Added & updated room")
                    goToRoom(roomId.toString());
                }).catch(err => console.log("Error adding player to room", err));
        } else {
            alert('Room is already full.');
        }

    } else {
        console.log("Room doesn't exist");
    }
});

// Function to convert Map to an object
function mapToObject(map: Map<string, Player>): { [key: string]: Player } {
    const obj: { [key: string]: Player } = {};
    map.forEach((value, key) => {
        obj[key] = value;
    });
    return obj;
}

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
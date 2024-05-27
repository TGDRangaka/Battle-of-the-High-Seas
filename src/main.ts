import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import { child, get, getDatabase, ref, set, update } from "firebase/database";

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
let playerId: string;
let playerRef: any;

auth.onAuthStateChanged((user) => {
    if (user) {
        // You're logged in
        playerId = user.uid;
        playerRef = ref(database, 'players/' + playerId);

        set(playerRef,{
            name: generateRandomName()
        })
    } else {
        // You're logged out
        console.log("Not logged in");
        // remove player ref from databse
        set(playerRef, null);
    }
})

signInAnonymously(auth)
    .then(() => {
        // Signed in..
        console.log("Signed in");
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);
        // ...
    });


// generate a random player name
function generateRandomName(): string {
    const adjectives = ["Silly", "Goofy", "Wobbly", "Clumsy", "Bouncy", "Quirky", "Zany", "Snappy", "Wacky", "Bizarre"];
    const nouns = ["Penguin", "Banana", "Noodle", "Pancake", "Nugget", "Pickle", "Wombat", "Squirrel", "Doodle", "Llama"];

    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

    return `${randomAdjective} ${randomNoun}`;
}

let createdRoomId: number = 0;

// Create a room
$("#createRoomBtn").on('click', async function () {
    let isRoomCreated: boolean = false;
    let roomId: number = 2978;

    while(!isRoomCreated) {
        await get(child(ref(database), 'rooms/' + roomId)).then(async (rooms) => {
            if (!rooms.exists()){
                await set(ref(database, 'rooms/' + roomId), {
                    roomId: roomId,
                    player1: playerId,
                    player2: null,
                    status: "waiting",
                    winner: null,
                    mode: "default",
                    difficulty: "default",
                    turn: "player1",
                }).then(() => {
                    console.log('Room Created')
                    isRoomCreated = true;

                    goToRoom(roomId.toString());
                }).catch(err => console.log('Error creating room', err));
            }
        }).catch(err => {
            console.log(err.message);
        }).finally(() => roomId = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000);
    }
});


let isPopopOpened: boolean = false;
// Join a room
$("#joinRoomBtn").on('click', function () {
    if (!isPopopOpened) {
        isPopopOpened = true;
        $(".pop-up").show();
    }
    
});

$(".close-btn").click(()=> {
    $(".pop-up").hide();
    isPopopOpened = false;
})

$("#submitCode").click(() => {
    let roomId: number = parseInt($("#roomIdInput").val() + "");
    console.log(roomId);
    if(!roomId || roomId >= 10000 || roomId <= 999){
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

function goToRoom(roomId: string){
    // update player in the room
    update(playerRef, {roomId: roomId, status: "waiting"})

    // Direct to game room
    window.location.href = `/Battle-of-the-High-Seas/src/pages/game-view.html?roomId=${roomId}`;
}
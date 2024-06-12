
export enum MessageType{
    PLAYER_MISS = 'player_miss',
    PLAYER_HIT = 'player_hit',
    PLAYER_SINK = 'player_sink',

    ENEMY_MISS = 'enemy_miss',
    ENEMY_HIT = 'enemy_hit',
    ENEMY_SINK = 'enemy_sink'
}

export function getMessage(messageType: MessageType):string {
    switch (messageType) {
        case MessageType.PLAYER_MISS:
            return getRandomMessageFromArray(playerMissMessages);
        case MessageType.PLAYER_HIT:
            return getRandomMessageFromArray(playerHitMessages);
        case MessageType.PLAYER_SINK:
            return getRandomMessageFromArray(playerSinkMessages);
        case MessageType.ENEMY_MISS:
            return getRandomMessageFromArray(enemyMissMessages);
        case MessageType.ENEMY_HIT:
            return getRandomMessageFromArray(enemyHitMessages);
        case MessageType.ENEMY_SINK:
            return getRandomMessageFromArray(enemySinkMessages);
        default:
            return "";
    }
}

const getRandomMessageFromArray = (array: Array<string>): string =>{
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}


// Player
const playerMissMessages = [
    "You missed! Better luck next time.",
    "Splash! Your shot landed in the water.",
    "No hit! The enemy ship is safe.",
    "Try again! Your shot missed the target.",
    "Oops! That was a miss.",
    "Keep going! You can do better.",
    "The enemy is still afloat, you missed!",
    "Your shot went wide of the mark.",
    "Miss! The enemy dodged your attack.",
    "No luck this time, aim carefully!"
];
const playerHitMessages = [
    "Direct hit! The enemy ship is damaged.",
    "Nice shot! You hit the enemy.",
    "Boom! You scored a hit.",
    "Great aim! The enemy ship took a hit.",
    "Hit confirmed! The enemy is hurting.",
    "Well done! You hit their ship.",
    "Bullseye! The enemy ship is struck.",
    "You're on target! Another hit.",
    "The enemy ship is taking damage, good shot!",
    "Your shot hit its mark!"
];
const playerSinkMessages = [
    "You sank an enemy ship! Well done!",
    "Enemy ship destroyed! Great job!",
    "Fantastic! You sunk their ship.",
    "Boom! Enemy ship has been sunk.",
    "Congratulations! You took down their ship.",
    "Enemy vessel down! You're on fire!",
    "One less enemy ship to worry about!",
    "Great work! The enemy ship is sinking.",
    "You've obliterated their ship!",
    "Victory! An enemy ship is sinking."
];

// Enemy
const enemyMissMessages = [
    "The enemy missed! Your ship is safe.",
    "Splash! The enemy shot landed in the water.",
    "No hit! The enemy failed to strike.",
    "Phew! The enemy shot missed you.",
    "The enemy missed the mark.",
    "You're safe! The enemy's shot went wide.",
    "The enemy shot didn't find its target.",
    "The enemy missed your ship!",
    "Their shot went astray.",
    "The enemy's attack was unsuccessful."
];
const enemyHitMessages = [
    "The enemy hit your ship!",
    "Direct hit by the enemy!",
    "Your ship took a hit!",
    "The enemy scored a hit!",
    "Boom! The enemy hit your ship.",
    "Your ship is damaged!",
    "The enemy shot hit its mark.",
    "Ouch! Your ship was struck.",
    "Your ship is taking damage!",
    "The enemy's attack was successful."
];
const enemySinkMessages = [
    "Oh no! The enemy sank your ship!",
    "Your ship has been destroyed by the enemy.",
    "The enemy took down your ship!",
    "Enemy victory! Your ship is sinking.",
    "Your ship is gone! The enemy sank it.",
    "The enemy obliterated your ship!",
    "You've lost a ship to the enemy.",
    "One of your ships has been sunk!",
    "Disaster! The enemy sank your vessel.",
    "Your ship is sinking!"
];

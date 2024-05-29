import { Player } from "./Player";

export class Room {
    roomId: number;
    player1: Player;
    player2: Player | null;
    status: RoomStatus;
    mode: Mode;
    difficulty: Difficulty;
    turn: string;

    constructor(
        roomId: number,
        player1: Player,
        player2: Player | null,
        status: RoomStatus,
        mode: Mode,
        difficulty: Difficulty,
        turn: string
    ) {
        this.roomId = roomId;
        this.player1 = player1;
        this.player2 = player2;
        this.status = status;
        this.mode = mode;
        this.difficulty = difficulty;
        this.turn = turn;
    }
}

export enum RoomStatus{
    WAITING = 'waiting',
    ONGOING = 'ongoing',
    FINISHED = 'finished'
}

export enum Mode{
    DEFAULT = 'default'
}

export enum Difficulty{
    EASY = 'easy',
    DEFAULT = 'default',
    HARD = 'hard',
}
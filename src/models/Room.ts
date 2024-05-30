import { Player } from "./Player";

export class Room {
    roomId: number;
    players: Map<string, Player>;
    status: RoomStatus;
    mode: Mode;
    difficulty: Difficulty;
    turn: string;

    constructor(
        roomId: number,
        players: Map<string, Player>,
        status: RoomStatus,
        mode: Mode,
        difficulty: Difficulty,
        turn: string
    ) {
        this.roomId = roomId;
        this.players = players
        this.status = status;
        this.mode = mode;
        this.difficulty = difficulty;
        this.turn = turn;
    }
}

export enum RoomStatus{
    WAITING = 'waiting',
    PLAYING = 'playing',
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
import { Board } from "./Board";
import { Ship } from "./Ship";

export class Player{
    id: string;
    name: string;
    board: Board;
    ships: Array<Ship>;
    state: PlayerState;

    constructor(id: string, name: string, board: Board, ships: Array<Ship>, state: PlayerState) {
        this.id = id;
        this.name = name;
        this.board = board;
        this.ships = ships;
        this.state = state;
    }
}

export enum PlayerState {
    NOT_READY = 'not_ready',
    READY = 'ready',
    PLAYING = 'playing'
}
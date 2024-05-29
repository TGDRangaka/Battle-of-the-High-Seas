import { Board } from "./Board";
import { Ship } from "./Ship";

export class Player{
    id: string;
    name: string;
    board: Board;
    ships: Array<Ship>;

    constructor(id: string, name: string, board: Board, ships: Array<Ship>) {
        this.id = id;
        this.name = name;
        this.board = board;
        this.ships = ships;
    }
}
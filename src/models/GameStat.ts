import {Player} from './Player'

export class GameStat{
    isHaveWinner: boolean;
    winner: Player | null;
    selectedCell: number;

    constructor(isHaveWinner: boolean, winner: Player | null, selectedCell: number){
        this.isHaveWinner = isHaveWinner;
        this.winner = winner;
        this.selectedCell = selectedCell;
    }
}
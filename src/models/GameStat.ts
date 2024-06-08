import {Player} from './Player'

export class GameStat{
    isHaveWinner: boolean;
    winner: Player | null;
    selectedCell: number;
    firedShotStatus: ShotStatus;

    constructor(isHaveWinner: boolean, winner: Player | null, selectedCell: number, firedShotStatus: ShotStatus){
        this.isHaveWinner = isHaveWinner;
        this.winner = winner;
        this.selectedCell = selectedCell;
        this.firedShotStatus = firedShotStatus;
    }
}

export enum ShotStatus {
    HIT = 'hit',
    MISS = 'miss',
    DESTROYED = 'destroyed',
    NOT_FIRED = 'not_fired'
}
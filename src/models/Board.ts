export class Board{
    size: number;
    grid: string[][];

    constructor(size: number) {
        this.size = size;
        this.grid = this.createGrid(size);
    }

    private createGrid(size: number): string[][] {
        return Array.from({ length: size }, () => Array(size).fill('EMPTY'));
    }
}
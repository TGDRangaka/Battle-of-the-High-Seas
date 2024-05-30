export class Board {
    size: number;
    grid: Array<Cell>;

    constructor(size: number) {
        this.size = size;
        this.grid = this.createGrid(size);
    }

    private createGrid(size: number): Array<Cell> {
        let count = 0;  // Initialize count here
        return Array.from({ length: size * size }, () => new Cell(count++, 'empty', false));
    }
}

export class Cell {
    index: number;
    inside: string;
    isHit: boolean;

    constructor(index: number, inside: string, isHit: boolean) {
        this.index = index;
        this.inside = inside;
        this.isHit = isHit;
    }
}

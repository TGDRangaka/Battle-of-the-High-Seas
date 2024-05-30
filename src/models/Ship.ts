export class Ship {
    id: string;
    size: string;
    length: number;
    index: number;
    status: ShipStatus;
    health: number;
    direction: Direction;

    constructor(
        id: string,
        size: string,
        length: number,
        index: number,
        status: ShipStatus,
        health: number,
        direction: Direction
    ) {
        this.id = id;
        this.size = size;
        this.length = length;
        this.index = index;
        this.status = status;
        this.health = health;
        this.direction = direction;
    }
}

export enum ShipStatus {
    INACTIVE = 'inactive',
    PLACED = 'placed',
    ACTIVE = 'active',
    DAMAGED = 'damaged',
    DESTROYED = 'destroyed'
}

export enum Direction {
    COLUMN = 'column',
    ROW = 'row',
}
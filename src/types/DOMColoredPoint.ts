
export class DOMColoredPoint extends DOMPoint {

    color: string = pickRandomColor();

    constructor(color?: string, x?: number, y?: number, z?: number, w?: number) {
        super(x,y,z,w);

        if (color == undefined) return;
        this.color = color;
    }
}

export function pickRandomColor() : string {
    const letters = '0123456789ABCDEF';
    let clr = '#';
    for (let i = 0; i < 6; i++) {
        clr += letters[Math.floor(Math.random() * 16)];
    }

    return clr;
}
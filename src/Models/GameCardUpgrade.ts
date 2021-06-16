interface GameCardUpgrade {
    serialNumber: number;
    upgrade: number;
    energyCost: number;
    target: string;
    vanish: boolean;
    innate: boolean;
}

export default GameCardUpgrade;
import Upgrade from "./Upgrade.enum";

interface GameCard {
    characterType: string;
    serialNumber: string;
    name: string;
    type: string;
    energyCost: string;
    image: string;
    spriteLeft: string;
    spriteTop: string;
    spriteWidth: string;
    spriteHeight: string;
    
    scaleToHeight?: number;
    scaleToWidth?: number;
    isUpgradeCard?: boolean;
    upgrade?: Upgrade;
}

export default GameCard;
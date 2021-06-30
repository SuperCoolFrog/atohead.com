import Resistance from "./Resistance";
import Sprite from "./Sprite";

interface Monster {
    id: string;
    name: string;
    job: string;
    jobColor: string;
    resistances: Resistance[];
    headshotSprite: Sprite;
}

export default Monster;
interface TraitDescription {
    title: string;
    description: string;
}

class Trait {
    tier: string;
    descriptions: TraitDescription[];

    constructor(tier: string, traits: string[]) {
        this.tier = tier;
        
        this.descriptions = traits.map((t) => {
            const [title, description] = t.split('||');
            return {
                title,
                description
            } as TraitDescription;
        });
    }
}

export default Trait;
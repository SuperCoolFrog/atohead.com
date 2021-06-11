# Navigation
- Home
- Deck Builder
    - Warrior
    - Scout
    - Mage
    - Healers


# Deck Builder WIP
## Create deck
- [_] Select Character (Warrior, Scout, Mage, Healer)
    - Assign deck_id: deck data stored to this id
- [_] Left Half Shows current Deck
- [_] Right Half Shows All Cards
- [_] Left Clicking Card Switches From One side to another
    - Changed saved to that deck_id
- [_] Ability to select new deck
- [_] Show link of saved deck: something like https://atopro.com/deck/123

## Load Deck
- [_] Paste link in text box
- [_] Gets id from link and loads cards
- [_] Show button that enables editing


# Models

## Card Model
``` Javascript
{
    CharacterType: enum(warrior,mage,scout,healer),
    SerialNumber: number,
    Name: string,
    Type: string,
    Image: string,
    Target: string,
    Description: Markdown(since images are used)
}
```
## Deck Model
``` Javascript
{
    CharacterType: enum(warrior,mage,scout,healer),
    Cards: Card[]
}
```


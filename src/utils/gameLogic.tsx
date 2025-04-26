import { Player } from './common';

export const seat = (): number[] => {
    const seated = [0, 1, 2, 3].sort(() => Math.random() - 0.5);
    return seated;
};

export const dice = (): number => {
    const dice1 = Math.floor(Math.random() * 6) + 1
    const dice2 = Math.floor(Math.random() * 6) + 1
    const dice3 = Math.floor(Math.random() * 6) + 1
    return dice1 + dice2 + dice3;
};

const createDeck = (): string[] => {
    const tiles: string[] = [];

    // 餅、條、萬
    const suits = ['d', 'b', 'c'];
    for (const suit of suits) {
        for (let i = 1; i <= 9; i++) {
            for (let j = 0; j < 4; j++) {
                tiles.push(`${i}${suit}`);
            }
        }
    }

    // 東、南、西、北、中、發、白
    const honors = ['E', 'S', 'W', 'N', 'R', 'G', 'B'];
    for (const honor of honors) {
        for (let j = 0; j < 4; j++) {
            tiles.push(honor);
        }
    }

    // 梅、蘭、菊、竹、春、夏、秋、冬
    const flowers = ['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8'];
    for (const flower of flowers) {
        tiles.push(flower);
    }

    return shuffle(tiles);
};

const shuffle = (deck: string[]): string[] => {
    const shuffled = [...deck];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

const stack = (deck: string[]): string[] => {
    const stacks: string[][] = [];
    for (let i = 0; i < 144; i += 2) {
        stacks.push(deck.slice(i, i + 2));
    }
    console.log('Stacks created:', stacks);
    return stacks.flat();
}

const draw = (drawIndex: number, deck: string[], players: Player[]) => {
    console.log('Drawing tiles for players...');
    const stacks = stack(deck);

    for (let i = 0; i < players.length; i++) {
        for (let j = 0; j < 16; j++) {
            if (stacks[drawIndex].startsWith('f')) {
                players[i].flowers.push(stacks[drawIndex]);
            } else {
                players[i].hand.push(stacks[drawIndex]);
            }
            drawIndex++;
        }
    }
    return { drawIndex, players };
};

export const replace = (hand: string[], deck: string[], drawIndex: number) => {

}

export const dealInitialHands = (players: Player[]) => {
    console.log('Dealing initial hands...');
    const deck = createDeck();
    const diceValue = dice();

    // 拿牌
    const drawResult = draw(0, deck, players);
    const updatedPlayers = drawResult.players;
    let drawIndex = drawResult.drawIndex;

    // 開門
    updatedPlayers[0].hand.push(deck[drawIndex]);
    drawIndex++;

    // 補牌
    let replaceIndex = 143;
    for (let player of updatedPlayers) {
        while (player.hand.length < 16) {
            if (deck[replaceIndex].startsWith('f')) {
                player.flowers.push(deck[replaceIndex]);
            }
            else {
                player.hand.push(deck[replaceIndex]);
            }
            replaceIndex--;
        }
    }

    const remcomputerningDeck = deck.slice(drawIndex);

    return {
        updatedPlayers: updatedPlayers,
        diceValue: diceValue,
        remainingDeck: remcomputerningDeck,
        drawIndex: drawIndex,
        replace
    };
};

export const sortHand = (hand: string[]): string[] => {
    const tileOrder = [
        // 萬
        '1c', '2c', '3c', '4c', '5c', '6c', '7c', '8c', '9c',
        // 條
        '1b', '2b', '3b', '4b', '5b', '6b', '7b', '8b', '9b',
        // 筒
        '1d', '2d', '3d', '4d', '5d', '6d', '7d', '8d', '9d',
        // 字
        'E', 'S', 'W', 'N', 'R', 'G', 'B',
        // Flowers
        'f1', 'f2', 'f3', 'f4',
        // Seasons
        'f5', 'f6', 'f7', 'f8'
    ];

    return hand.sort((a, b) => tileOrder.indexOf(a) - tileOrder.indexOf(b));
};
import React, { useEffect, useState } from 'react';
import { dealInitialHands } from '../../utils/gameLogic';
import Board from '../board/board';
import { Player } from '../../utils/common';


const Game: React.FC = () => {
    const [players, setPlayers] = useState<Player[]>([
        {
            dealer: true,
            position: 0,
            hand: [],
            flowers: [],
        },
        {
            dealer: false,
            position: 1,
            hand: [],
            flowers: [],
        },
        {
            dealer: false,
            position: 2,
            hand: [],
            flowers: [],
        },
        {
            dealer: false,
            position: 3,
            hand: [],
            flowers: [],
        },
    ]);
    const [diceValue, setDiceValue] = useState<number>(0);
    const [remainingDeck, setRemainingDeck] = useState<string[]>([]);
    const [drawIndex, setDrawIndex] = useState<number>(0);
    const [replace, setReplace] = useState<Function>(() => () => { });

    useEffect(() => {
        console.log('Starting new game...');
        const {
            updatedPlayers,
            diceValue,
            remainingDeck,
            drawIndex,
            replace,
        } = dealInitialHands(players);

        setPlayers(updatedPlayers);
        setDiceValue(diceValue);
        setRemainingDeck(remainingDeck);
        setDrawIndex(drawIndex);
        setReplace(() => replace);

    }, [players]);

    return (
        <Board
            player={players[0]}
            computer1={players[1]}
            computer2={players[2]}
            computer3={players[3]}
        />
    );
};

export default Game;
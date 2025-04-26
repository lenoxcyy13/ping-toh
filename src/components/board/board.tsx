import React from 'react';
import Hand from '../hand/hand';
import Ping from '../ping/ping';
import { Player } from '../../utils/common';
import './board.css';

interface BoardProps {
    player: Player;
    computer1: Player;
    computer2: Player;
    computer3: Player;
}

const Board: React.FC<BoardProps> = ({
    player,
    computer1,
    computer2,
    computer3
}) => {
    return (
        <div className="board">
            <div className="row">
                <Hand title="玩家" player={player} />
            </div>

            <div className="row">
                <Hand title="電腦1" player={computer1} />
                <Ping />
                <Hand title="電腦2" player={computer2} />
            </div>

            <div className="row">
                <Hand title="電腦3" player={computer3} />
            </div>
        </div>
    );
};

export default Board;
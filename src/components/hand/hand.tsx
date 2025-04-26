import React from 'react';
import { Player } from '../../utils/common';
import { sortHand } from '../../utils/gameLogic';
import './hand.css';

const tileMapping: Record<string, string> = {
    '1c': '一萬',
    '2c': '二萬',
    '3c': '三萬',
    '4c': '四萬',
    '5c': '五萬',
    '6c': '六萬',
    '7c': '七萬',
    '8c': '八萬',
    '9c': '九萬',
    '1b': '一條',
    '2b': '二條',
    '3b': '三條',
    '4b': '四條',
    '5b': '五條',
    '6b': '六條',
    '7b': '七條',
    '8b': '八條',
    '9b': '九條',
    '1d': '一筒',
    '2d': '二筒',
    '3d': '三筒',
    '4d': '四筒',
    '5d': '五筒',
    '6d': '六筒',
    '7d': '七筒',
    '8d': '八筒',
    '9d': '九筒',
    'E': '東',
    'S': '南',
    'W': '西',
    'N': '北',
    'R': '中',
    'G': '發',
    'B': '白',
    'f1': '梅',
    'f2': '蘭',
    'f3': '菊',
    'f4': '竹',
    'f5': '春',
    'f6': '夏',
    'f7': '秋',
    'f8': '冬',
};

interface HandProps {
    title: string;
    player: Player;
}

const Hand: React.FC<HandProps> = ({ title, player }) => {

    return (
        <div className="player-tile">
            <h3>{title}</h3>
            <div className="tile-row">
                {sortHand(player.flowers).map((tile, index) => (
                    <div key={index} className="tile">
                        {tileMapping[tile] || tile}
                    </div>
                ))}
            </div>
            <div className="tile-row">
                {sortHand(player.hand).map((tile, index) => (
                    <div key={index} className="tile">
                        {tileMapping[tile] || tile}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hand;
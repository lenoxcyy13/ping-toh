import React from "react";
import './ping.css';

const Ping: React.FC = () => {
    const pingToh = () => {
        window.alert("麻將之神已感受到你的怒氣。翻桌!!!!!");
        window.location.reload();
    };
    return (
        <div className="ping">
            <button className="ping-button" onClick={pingToh}>翻桌!</button>
        </div>
    );
}

export default Ping;
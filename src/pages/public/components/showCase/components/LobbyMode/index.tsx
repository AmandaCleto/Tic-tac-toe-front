import React, { PureComponent } from 'react';
import LobbyBoard from './components/LobbyBoard';
import './style.css';

export default class LobbyMode extends PureComponent<{},{}> {
    render() {

        return (
            <div className="lobby_mode">
                <div className="lobby_arrow --previous" />
                <LobbyBoard />
                <div className="lobby_arrow --next" />
            </div>
        );
    }
}
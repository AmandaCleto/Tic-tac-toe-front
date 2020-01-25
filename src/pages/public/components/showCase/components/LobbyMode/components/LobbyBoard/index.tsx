import React, { PureComponent } from 'react';
import './style.css';
import { Hidden } from '@material-ui/core';

export default class LobbyBoard extends PureComponent<{},{}> {
    render() {
        return (
            <div className="lobby_board">
                <Hidden smDown>
                    <div className="board_button" />     
                </Hidden>                         
            </div>
        );
    }
}
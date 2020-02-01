import React, { PureComponent } from 'react';
import LobbyBoard from './components/LobbyBoard';
import './style.css';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';

interface IState {
    title: string;
    background: string;
    board: number; 
}

export default class LobbyMode extends PureComponent<{}, IState> {

    constructor(props:{}) {
        super(props);
        this.state = {
            title: 'VS IA',
            background: '.bgVSIA',
            board: 1 
        }
    }

    render() {

        const { title } = this.state; 
      

        return (
            <div className="lobby_mode">
                <h3>VS IA</h3>

                <div className="lobby_row">
                    <div className="lobby_arrow --previous" />
                    <LobbyBoard />
                    <div className="lobby_arrow --next" />
                </div>

                <Hidden smUp>
                    <Button className="lobby_button" variant="contained" color="primary">
                        Jogar
                    </Button> 
                </Hidden>
            </div>
        );
    }
}
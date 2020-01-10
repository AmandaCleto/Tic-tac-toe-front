import React,{PureComponent} from 'react';
import Grid from '@material-ui/core/Grid';
import { Hidden } from '@material-ui/core';
import './style.css';

export default class ShowCase extends PureComponent<{},{}> {
    render(){
        return (
            <Grid container>
                <Hidden xsDown>
                    <Grid item xs={12} md={4}>
                        <div className="ranking">
                            <div className="rankign_title">
                                Ranking
                            </div>
                        </div>
                    </Grid>
                </Hidden>
                <Grid item xs={12} md={4}>
                    <div className="lobby">
                        <h3 className="lobby_title">VS IA</h3>
                        <div className="lobby_board">
                            
                        </div>
                        <div className="lobby_previous">

                        </div>
                        <div className="lobby_next">

                        </div>
                    </div>
                </Grid>
                <Hidden xsDown>
                    <Grid item xs={12} md={4}>
                        <div className="auth"> 
                            Login
                        </div>
                    </Grid>
                </Hidden>
            </Grid>
        );
    };
};

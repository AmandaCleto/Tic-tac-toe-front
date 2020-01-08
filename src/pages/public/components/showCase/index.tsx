import React,{PureComponent} from 'react';
import Grid from '@material-ui/core/Grid';
import { Hidden } from '@material-ui/core';

export default class ShowCase extends PureComponent<{},{}> {
    render(){
        return (
            <Grid container>
                <Hidden xsDown>
                    <Grid item xs={12} md={4}>
                        <div className="ranking">
                            Ranking
                        </div>
                    </Grid>
                </Hidden>
                <Grid item xs={12} md={4}>
                    <div className="board">
                        Board
                    </div>
                </Grid>
                <Hidden>
                    <Grid item xs={12} md={4}>
                        <div className="login_register">
                            Login
                        </div>
                    </Grid>
                </Hidden>
            </Grid>
        );
    };
};

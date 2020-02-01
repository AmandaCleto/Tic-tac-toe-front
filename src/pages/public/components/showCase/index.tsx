import React,{PureComponent} from 'react'; 
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import LobbyMode from './components/LobbyMode';
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
                        <LobbyMode />
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

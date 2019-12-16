import React,{PureComponent} from 'react';
import Grid from '@material-ui/core/Grid'; 
import Hidden from '@material-ui/core/Hidden';
import {Link} from 'react-router-dom';
import './style.css';
import logo from '../../../../assets/img/ttt.gif';

export default class Login extends PureComponent<{},{}> {
    render(): React.ReactNode{ 
        return( 
        <Grid container>
            <Grid item xs={12} sm={4}> 
                <div className="form">
                    <div className="buttom-sign-up">
                        <h2>Sign In</h2> 
                    </div> 
                    <form className="inside-form">
                        <input name="email" placeholder="E-mail" type="email"/>
                        <input name="password" placeholder="Password" type="password"/> 
                        <div className="checkbox">
                            <input name="checkbox" type="checkbox"/>
                            <label htmlFor="checkbox">Remember me</label>
                        </div>
                        <div className="buttom-sign-in">
                            <input name="buttom" value="Sign-in" type="submit"/> 
                        </div>
                        <span>
                            New here? Create your account <i><Link to="/register">now!</Link></i>
                        </span>
                    </form>    
                </div> 
            </Grid>
            <Hidden xsDown>
                <Grid item xs={12} sm={8}> 
                <div className="form-2">         
                        <img src={logo} alt="tic-tac-toe gif" />
                    </div>
                </Grid>
            </Hidden>
        </Grid> 
        );
    };
};

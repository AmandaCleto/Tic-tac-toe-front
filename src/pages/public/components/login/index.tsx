import React,{PureComponent} from 'react';
import Grid from '@material-ui/core/Grid'; 
import {Link} from 'react-router-dom';
import '../login/style.css';


export default class Login extends PureComponent<{},{}> {
    render(): React.ReactNode{ 
        return( 
        <Grid className='background' container justify='center'>
            <Grid item xs={12} sm={6}> 
                <div className="form">
                    <div className="buttom-sign-up">
                        <h2>Sign In</h2> 
                    </div> 
                    <form className="inside-form">
                        <label htmlFor="email">E-mail</label>
                        <input name="email" type="email"/>
                        <label htmlFor="password">Password</label>
                        <input name="password" type="password"/> 
                    
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
        </Grid> 
        );
    };
};

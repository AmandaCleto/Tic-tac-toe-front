import React,{PureComponent} from 'react';
import Grid from '@material-ui/core/Grid'; 
import {Link} from 'react-router-dom';
import './style.css';
import { login } from '../../../../services/auth';

interface IStates {
    email : string;
    password : string;
} 

export default class Login extends PureComponent<{}, IStates> {
    render(): React.ReactNode {
        return( 
        <Grid className='background' container justify='center'>
            <Grid item xs={12} sm={6}> 
                <div className="form">
                    <div className="buttom-sign-up">
                        <h2>Sign In</h2> 
                    </div> 
                    <form className="inside-form">
                        <label htmlFor="email">E-mail</label>
                        <input name="email" type="email" onChange={(e) => this.setState({email: e.target.value})}/>
                        <label htmlFor="password">Password</label>
                        <input name="password" type="password" onChange={(e) => this.setState({password: e.target.value})}/> 
                    
                        <div className="checkbox">
                            <input name="checkbox" type="checkbox"/>
                            <label htmlFor="checkbox">Remember me</label>
                        </div>
                        <div className="buttom-sign-in">
                            <input name="buttom" value="Sign-in" type="submit" onClick={(e) => login(e, this.state.email, this.state.password)}/> 
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

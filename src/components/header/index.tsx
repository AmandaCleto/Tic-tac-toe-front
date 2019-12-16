import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';
import './style.css';

class Header extends PureComponent { 
    public render(): React.ReactNode {
        return ( 
        <header>
           <h1>Tik Tak Toe - Master</h1> 
           <h2 className="symbol">#</h2>
            <div className="button">
                <Link to='/login' className="login">Login</Link>
                <Link to='/register' className="register">Register</Link>
            </div>
        </header>  
        );       
    }
} 

export default Header;

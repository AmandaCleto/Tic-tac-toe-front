import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import { Hidden } from '@material-ui/core';
 
class Header extends PureComponent { 
    public render(): React.ReactNode {
        return ( 
        <header>
           <h1>Tik Tak Toe - Master</h1> 
            <Hidden smDown>
                <div className="buttons">
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                </div>
            </Hidden>
        </header>  
        );       
    }
} 

export default Header;

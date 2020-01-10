import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import { Hidden } from '@material-ui/core';
 
class Header extends PureComponent { 
    public render(): React.ReactNode {
        return ( 
        <header>
           <h2 className="symbol">#</h2>
           <h1 className="header_title">Tik Tak Toe - Master</h1> 
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

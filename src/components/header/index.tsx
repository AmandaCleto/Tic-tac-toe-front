import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';
import './style.css';
 
class Header extends PureComponent { 
    public render(): React.ReactNode {
        return ( 
        <header>
           <h1>Tik Tak Toe - Master</h1> 
            <div className="button">
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </div>
        </header>  
        );       
    }
} 

export default Header;

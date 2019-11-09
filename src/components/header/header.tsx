import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';
import styles from './style';
import withStyles from 'react-jss';

 
class Header extends PureComponent { 
    public render(): React.ReactNode {
        const classes = styles();
        return ( 
        <header className={classes.header}>
           <h1>Tik Tak Toe - Master</h1> 
            <div className="button">
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </div>
        </header>  
        );       
    }
} 

export default withStyles(styles)(Header);

import React,{PureComponent} from 'react';
import { Link } from 'react-router-dom';

export default class ShowCase extends PureComponent<{},{}> {
    render(){
        return[
            <div>Show case</div>, 
            <Link to='/login'>Login</Link>,
            <Link to='/register'>Register</Link>
        ];
    };
};

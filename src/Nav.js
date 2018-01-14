import React from 'react';
import {NavLink} from 'react-router-dom'
function Nav(props) {
    return (
        <nav>
            <div className="container">
            <ul>
                <div>
                <li><NavLink exact className="logo" activeClassName={null} to={'/'}>React Battle</NavLink></li>
                </div>
                <div>
                    <li><NavLink exact activeClassName="active" to={'/'}>Home</NavLink></li>
                    <li><NavLink activeClassName="active" to={'/battle'}>Battle</NavLink></li>
                    <li><NavLink activeClassName="active" to={'/popular'}>Popular</NavLink></li>
                </div>
            </ul>
            </div>
        </nav>
    )
}

export default Nav;

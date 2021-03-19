import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = ({ auth }) => {
    const authButton = auth ? (
        <li><a href="/api/logout">Logout</a> </li>
    ):(
        <li><a href="/api/auth/google">Login</a> </li>
    );

    return (
        <div>
            <nav className="nav-wrapper">
                <Link to="/" className="brand-logo"> React SSR</Link>
                <ul className="right">
                    <li><Link to="/users">Users</Link></li>
                    <li><Link to="/admin">Admins</Link></li>
                    {authButton}
                </ul>
            </nav>
        </div>
    );
};

function mapStateToProps({ auth }){
    return { auth };
}

export default connect(mapStateToProps)(Header);
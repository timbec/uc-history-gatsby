import React, { Fragment } from 'react'; 
import { Link } from "gatsby";

const mainLinks = (
    <Fragment>
        <li>
            <Link to='/about'>About</Link>
        </li>
        <li>
            <Link to='/memorabilia'>Memorabilia</Link>
        </li>
        <li>
            <Link to='/photographs'>Photographs</Link>
        </li>
        <li>
            <Link to='/places'>Places</Link>
        </li>
        <li>
            <Link to='/send-stuff'>Send Stuff</Link>
        </li>
        <li>
            <Link to='/video'>Video</Link>
        </li>
        <li>
            <Link to='/writing'>Writing</Link>
        </li>
    </Fragment>
);

const NavBar = () => {
    return (
        <nav className="main-navigation">
            <ul>
                {mainLinks}
            </ul>
        </nav>
    )
}

export default NavBar

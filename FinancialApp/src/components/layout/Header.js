import React from 'react';
import {Link} from 'react-router-dom';


const Header = () => {
    return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <Link className="navbar-brand" to="#">Navbar</Link>&nbsp;&nbsp;
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto ">
            <li className="nav-item active">
                <Link className="nav-Link text-light nounderline " to="/">Home <span className="sr-only">(current)</span></Link>&nbsp;&nbsp; &nbsp;&nbsp;
            </li>
            <li className="nav-item ">
                <Link className="nav-Link text-light" to="/Payment">Payment</Link>&nbsp;&nbsp; &nbsp;&nbsp;
            </li>
            <li className="nav-item">
                <Link className="nav-Link text-light" to="/mychart">My-Chart</Link>&nbsp;&nbsp; &nbsp;&nbsp;
            </li>
        </ul>
    </div>
    </nav>
        </>
    )
}

export default Header

import React from 'react';

//stateless functional components
const Navbar = (props) => {
    return ( 
        <nav className="navbar navbar-light bg-dark">
            <a className="navbar-brand text-warning" href="c">{props.tottalCounters}</a> 
        </nav>  
    );
}
export default Navbar;
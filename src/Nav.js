import react from 'react';
import logo from './images/logo.png'

const Nav = () =>{
    return(
        <nav>
            <a href='/'>
                <img src={logo} alt = "logo"/>
            </a>
        </nav>
    );
};

export default Nav;
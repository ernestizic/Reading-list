import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';


const Navbar = () => {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const {isAuthenticated, toggleAuth} = useContext(AuthContext);
    const { books } = useContext(BookContext);

    const theme = isLightTheme ? light : dark;
    return ( 
        <nav style={{background: theme.ui, color: theme.text}}>
            <h1>My Reading List</h1>
            <p>You currently have {books.length} book(s) to get through...</p>
            {/*
            <div onClick={toggleAuth}>
                { isAuthenticated ? ("Log out") : ("Log in") }
            </div>
            */}
        </nav>
     );
}
 
export default Navbar;

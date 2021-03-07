import React, { useState, useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

const BookForm = () => {
    const { addBook } = useContext(BookContext);
    const { isLightTheme, light, dark } = useContext(ThemeContext);

    const theme = isLightTheme ? (light) : (dark);

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState("");


    const handleSubmit =(e)=> {
        e.preventDefault();
        addBook(title, author);
        setTitle("");
        setAuthor("");  
    }

    return ( 
        <form onSubmit={handleSubmit} style={{background: theme.bg}}>
            <input 
                type="text" 
                placeholder="book title"  
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                required
            />

            <input 
                type="text" 
                placeholder="author"  
                value={author}
                onChange={(e)=> setAuthor(e.target.value)}
                required
            />
            <input type="submit" value="Add book" style={{background: theme.ui, color: theme.text}} /> 
        </form>
     );
}
 
export default BookForm;

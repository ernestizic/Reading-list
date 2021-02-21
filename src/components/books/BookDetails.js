import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({book}) => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const {removeBook} = useContext(BookContext);

    const theme = isLightTheme ? (light) : (dark);
    return ( 
        <li onClick={()=> removeBook(book.id)} style={{background: theme.ui}}>
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>
        </li>
     );
}
 
export default BookDetails;
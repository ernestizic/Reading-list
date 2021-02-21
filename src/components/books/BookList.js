import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';
import BookDetails from './BookDetails'

const BookList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const {books} = useContext(BookContext);

    const theme = isLightTheme ? (light) : (dark);

    return books.length ? (
        <div className="book-list" style={{color: theme.text, background: theme.bg}}>
            <ul>
                {books.map(book => {
                    return(
                        <BookDetails key={book.id} book={book} />
                    )
                })}
            </ul>
        </div>
    ) : (
        <div className="empty" style={{color: theme.text, background: theme.bg}}>No books to read. Hello free time :) </div>
    )
}
 
export default BookList;
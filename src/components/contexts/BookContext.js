import React, { createContext, useEffect, useState } from 'react';
import {v4 as uuid} from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([]);


    useEffect(()=> {
        const localData = localStorage.getItem("myBooks");
        if (localData) {
            setBooks(JSON.parse(localData));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('myBooks', JSON.stringify(books));
    });

    //Add a book function
    const addBook =(title, author)=> {
        const newBook = {
            id: uuid(),
            title: title,
            author: author
        }
        setBooks([...books, newBook]);
    }

    //Remove a book function
    const removeBook =(id)=> {
        setBooks([...books.filter(book => book.id !== id)]);
    }

    return ( 
        <BookContext.Provider value={{books: books, addBook: addBook, removeBook: removeBook}}> 
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;
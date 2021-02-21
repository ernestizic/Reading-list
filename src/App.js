import React from 'react';
import BookForm from './components/books/BookForm';
import BookList from './components/books/BookList';
import AuthContextProvider from './components/contexts/AuthContext';
import BookContextProvider from './components/contexts/BookContext';
import ThemeContextProvider from './components/contexts/ThemeContext';
import Navbar from './components/ui/Navbar';
import ThemeToggle from './components/ui/ThemeToggle';
//import axios from 'axios';

function App() {

  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <BookContextProvider>
            <Navbar />
            <BookList />
            <BookForm />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider> 
    </div>
  );
}

export default App;

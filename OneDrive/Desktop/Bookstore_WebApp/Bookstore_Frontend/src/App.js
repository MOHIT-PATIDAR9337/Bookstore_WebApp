import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import React from "react";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import About from "./components/Book/About";
import Home from "./components/Book/Home";
import BookDetail from "./components/Book/BookDetail";
function App() {
  return (
    <React.Fragment>
      <header>
        <Header/>
      </header>
      <main>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/add" element={<AddBook/>} exact/>
        <Route path="/books" element={<Books/>} exact/>
        <Route path="/about" element={<About/>} exact/>
        <Route path="/books/:id" element={<BookDetail/>} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;

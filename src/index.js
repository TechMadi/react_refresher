import React from "react";
import  ReactDOM from 'react-dom/client';

import './index.css'


import {books} from "./books";
import Book from "./Book";


const BookList=()=>{

    const getBook=(id)=>{
        const book=books.find(x=>x.id===id)
        alert(`Good luck : ${book.author}`)
    }
    return (
        <>
            <h1>Best Sellers In Books</h1>
            <section className='bookList'>

                {books.map((book,index)=>{
                    return  <Book key={book.id} {...book}  getBook={getBook} number={index}/>
                })}
            </section>
        </>

    )
}


 const root=ReactDOM.createRoot(document.getElementById('root'));


root.render(<BookList/>);
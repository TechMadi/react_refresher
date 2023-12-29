import React from "react";
import  ReactDOM from 'react-dom/client';

import './index.css'



const books=[
    {
        id:1,
        author :'James Clear',
        title:"Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
        img: './images/book-1.jpg'
    },
    {
        id:2,
        author :' Jordan Moore ',
        title:"Interesting Facts For Curious Minds: 1572 Random But Mind-Blowing Facts About History, Science, Pop Culture And Everything In Between",
        img: 'https://images-na.ssl-images-amazon.com/images/I/71hwUY5ZmxL._AC_UL600_SR600,400_.jpg'
    }
]


const author ='James Clear'
const title="Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones"
const img= './images/book-1.jpg'

const BookList=()=>{

    const getBook=(id)=>{
        const book=books.find(x=>x.id===id)
        console.log(book)
    }
    return <section className='bookList'>

        {books.map((book)=>{
           return  <Book key={book.id} {...book}  getBook={getBook}/>
        })}
    </section>
}


const Book=({id,author,title,img,getBook})=>{
const  displayTitle=()=>{
    console.log(title)
}
    return <article  className='book'>

        <img src={img} alt={title}/>
        <h2>{title}</h2>
        <button onClick={displayTitle}>Display Title</button>
        <button onClick={()=>getBook(id)}>Get Book</button>
        <h4 style={{
            color: '#617d98',
            fontSize: '0.75rem',
            marginTop: '0.5rem',
        }} > {author} </h4>

    </article>
}

 const root=ReactDOM.createRoot(document.getElementById('root'));


root.render(<BookList/>);
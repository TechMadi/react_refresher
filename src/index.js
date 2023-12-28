import React from "react";
import  ReactDOM from 'react-dom/client';

import './index.css'

const firstBook={
    author :'James Clear',
    title:"Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    img: './images/book-1.jpg'
}
const secondBook={
    author :' Jordan Moore ',
    title:"Interesting Facts For Curious Minds: 1572 Random But Mind-Blowing Facts About History, Science, Pop Culture And Everything In Between",
    img: 'https://images-na.ssl-images-amazon.com/images/I/71hwUY5ZmxL._AC_UL600_SR600,400_.jpg'
}

const author ='James Clear'
const title="Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones"
const img= './images/book-1.jpg'

const BookList=()=>{
    return <section className='bookList'>
        <Book author={firstBook.author} title={firstBook.title} img={firstBook.img}/>
        <Book author={secondBook.author} title={secondBook.title} img={secondBook.img}/>
        <Book  author={author} title={title} img={img} />
    </section>
}

const Book=({author,title,img})=>{

    return <article  className='book'>

        <img src={img} alt={title}/>
        <h2>{title}</h2>
        <h4 style={{
            color: '#617d98',
            fontSize: '0.75rem',
            marginTop: '0.5rem',
        }} > {author} </h4>

    </article>
}

 const root=ReactDOM.createRoot(document.getElementById('root'));


root.render(<BookList/>);
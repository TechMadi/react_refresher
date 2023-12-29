import React from "react";

const Book=({id,author,title,img,getBook,number})=>{
    const  truncateText=(text)=>{
        let newText;
        newText = text.length > 50 ? `${text.substring(0, 50)}... ` : text;
       return newText
    }
    return <article  className='book'>

        <img src={img} alt={title}/>
        <h2>{truncateText(title)}</h2>

        <h4 style={{
            color: '#617d98',
            fontSize: '0.75rem',
            marginTop: '0.5rem',
        }} > {author} </h4>
        <span  className='number'># {number+1}</span>
        <button onClick={()=>getBook(id)}>Get Book</button>
    </article>
}


export  default  Book
import React from 'react';
import BookItem from './BookItem';

const Books = () => {

    const books = [
        {
          id:1,
          author:"Robert Kiyosaki",
          title:"Rich dad Poor dad"
        },
        {
          id:2,
          author:"Chethan bhagath",
          title:"Revolution 20 Twenty"
        },
        {
          id:3,
          author:"Napoleon Hill",
          title:"Think and Grow Rich"
        },
        {
          id:4,
          author:"Ankur Warikoo",
          title:"Do Epic Shit"
        }
      ]
    return (
        <div>
            {books.map((book)=>{
                return  <BookItem book={book} />
            })}
       
        </div>
    );

};

export default Books;
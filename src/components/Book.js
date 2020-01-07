import React from 'react';
import './Book.css';

const Book = (props) => {
  
  return (
    <div className='book__single'>
      <div className="book__row">
            <div className="book__title">
              {props.volumeInfo.title}
            </div>
            <div className="book__author">
              {props.volumeInfo.authors ? props.volumeInfo.authors.join(', ') : 'No authors saved'}
            </div>
            <div className="book__image">
              <img src={props.volumeInfo.imageLinks.thumbnail} alt='' />
            </div>
        {props.volumeInfo.description && <div className="book__description">
            {props.volumeInfo.description} 
          </div>}

      </div> 
    </div>
  );
};

export default Book;
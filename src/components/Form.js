import React from 'react';
import './Form.css';

const Form = (props) => {
  return (
    <div className='form'>
      <div className='formSearchWrap'>
        <label htmlFor='formSearch'>Search:</label>
        <input 
          type='text' 
          className='form__search'
          placeholder="Harry Potter"
          id='formSearch'
          onChange={(e) => props.searchInput(e.target.value)}
        />
        <button onClick={props.search}>Search</button>
      </div>
      <div className='selectDropdownWrap'>
        <label htmlFor='printType'>Print Type:</label>
          
          <select 
            id='printType' className='form__select__printType' onChange={(e) => props.printType(e.target.value)}
            >
            <option value='all'>All</option>
            <option value='books'>Books</option>
            <option value='magazines'>Magazines</option>
          </select>
          <label htmlFor='bookType'>Book Type:</label>
          <select 
            className='form__select__bookType'
            id='bookType'
            onChange={(e) => props.bookType(e.target.value)}
          >
            <option value='no filter'>No Filter</option>
            <option value='partial'>partial</option>
            <option value='full'>full</option>
            <option value='free-ebooks'>free e-books</option>
            <option value='paid-ebooks'>paid e-books</option>
            <option value='ebooks'>e-books</option>
          </select>
      </div>
    </div>
  )
}

export default Form;
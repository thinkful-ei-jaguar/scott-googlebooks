import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import BookList from './components/Booklist';


// const books = [
//   {
//   title:"Google",
//   author:"Joe", 
//   image:"https://i.picsum.photos/id/727/200/300.jpg", 
//   description:"No evil"
//   },
//   {
//     title:"Yahoo",
//     author:"Bob", 
//     image:"https://i.picsum.photos/id/237/200/300.jpg",
//     description:"Evil"
//   }
// ];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchInput: '',
      printType: '',
      bookType: ''
    };
  }

  setSearchInput = (value) => {
    this.setState({
      searchInput: value
    });
  }

  setPrintType = (value) => {
    this.setState({
      printType: value
    });
  }

  setBookType = (value) => {
    this.setState({
      bookType: value
    });
  }

  search = () => { //through function expression the fat arrow, binds the method with the class

    const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchInput}&printType=${this.state.printType}&filter=${this.state.bookType}&key=AIzaSyA83oGuCHcEsYawevx1Unak7xWsXQfzDU4`;
    const options = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    };

    fetch(url, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          books: data.items,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  render() {
    return (
      <main className='App'>
        <Header />
        <Form 
          searchInput={this.setSearchInput} 
          search={this.search} 
          bookType={this.setBookType} 
          printType={this.setPrintType}
        />
        <BookList 
          books={this.state.books}/>
      </main>
    );
  }
}

export default App;
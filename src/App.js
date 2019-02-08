import React, { Component } from 'react';
import './App.css';

// import components
import Header from './components/header.js'
import Add from './components/add.js'
import CardList from './components/cardList.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addStatus: false,
      cardList: [
        {
          id: 1,
          text: "joke text is here",
          url: "https://swagyeet.com/"
        },
        {
          id: 2,
          text: "2nd joke text",
          url: "http://not_secure.net/"
        }
      ]
    }
  }

  toggleAdd = () => {
    this.setState({
      addStatus: !this.state.addStatus
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Add 
          addStatus={this.state.addStatus}
          toggleAdd={this.toggleAdd}
        />
        <CardList />

      </div>
    );
  }
}

export default App;

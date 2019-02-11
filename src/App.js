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
      cardList: []
    }
  }

  componentDidMount() {
    this.fetch()
  }

  fetch = () => {
    const url = 'http://silly-dilf.herokuapp.com/';
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(response => {
        this.setState({
          cardList: response
        })
      })
      .catch(error => console.error('Error:', error))
  }

  toggleAdd = () => {
    this.setState({
      addStatus: !this.state.addStatus
    })
  }

  addJoke = () => {
    const joke_input = document.querySelector('#joke_input')
    const url_input = document.querySelector('#url_input')

    const joke_text = joke_input.value
    const url_text = url_input.value

    const sendObject = {
      text: joke_text,
      url: url_text
    }

    const url = 'http://silly-dilf.herokuapp.com/';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(sendObject),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(resJSON => resJSON)
      .catch(error => console.error('Error:', error))

    console.log(sendObject)
  }

  editJoke = (e, id) => {
    const joke_text = e.target.parentNode.parentNode.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[1].value
    const url_text = e.target.parentNode.parentNode.parentNode.parentNode.childNodes[0].childNodes[1].childNodes[1].value

    const sendObject = {
      id: id,
      text: joke_text,
      url: url_text
    }
    const url = 'http://silly-dilf.herokuapp.com/';
    fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(sendObject),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(resJSON => resJSON)
      .catch(error => console.error('Error:', error))
  }

  deleteJoke = (id) => {
    const sendObject = {
      id: id
    }
    const url = 'http://silly-dilf.herokuapp.com/';
    fetch(url, {
      method: 'DELETE',
      body: JSON.stringify(sendObject),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(resJSON => resJSON)
      .catch(error => console.error('Error:', error))
  }

  render() {
    return (
      <div>
        <Header />
        <Add 
          addStatus={this.state.addStatus}
          toggleAdd={this.toggleAdd}
          addJoke={this.addJoke}
        />
        <CardList 
          cardList={this.state.cardList}
          editJoke={this.editJoke}
          deleteJoke={this.deleteJoke}
        />

      </div>
    );
  }
}

export default App;

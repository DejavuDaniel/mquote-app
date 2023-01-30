import QuoteBox from './QuoteBox/QuoteBox';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [{
        quote: "Light in Nature creates the movement of colors.",
        author: 'Robert Delaunay'
      }],
      background:[{
        links: {
          html:''
        }
      }]
    }
  }
  setState(state) {
    window.localStorage.setItem('state', JSON.stringify(state));
    super.setState(state);
  }


  fetchQuote = () => {
    fetch('https://api.api-ninjas.com/v1/quotes', { method: 'GET', headers: { 'X-Api-Key': 'EnIp9gKRTRPuJKDqJBWkcw==ruM5xV2VvKaRWwMi' } })
      .then(response => response.json())
      .then(data => this.setState({ quotes: data }));
    fetch('https://api.unsplash.com/photos/random?&query=success&client_id=Ty5ZV22885Hdw-l-3_Uya5gI5BUvcUgbcf9kZHxQfgI')
    .then(response => response.json())
    .then(img => this.setState({ background: img }));
    console.log(this.state.background.links.html)
  }

  render() {
    return (
      <>
        <QuoteBox quote={this.state.quotes[0].quote} author={this.state.quotes[0].author} fetchQuote={this.fetchQuote}  backImg={this.state.background[0].links.html}/>
      </>
    );
  }
}

export default App;


// JSON.parse(window.localStorage.getItem('state')) || 
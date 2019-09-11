import React from 'react';
import '../style/App.css';
import { getPicOfTheDay } from '../api';
import { makeFetch } from '../utils';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      apodUrl: '',
      apodExplanation: ''
    }
  }
  componentDidMount() {
    makeFetch({
      url: getPicOfTheDay,
      onSuccess: response => this.setState(() => ({ 
        apodUrl: response.url,
        apodExplanation: response.explanation
      }))
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>keenEye</h1>
          <img src={this.state.apodUrl} alt="apod"/>
          <p>{this.state.apodExplanation}</p>
        </header>
        <div className="main">
          <h3>Search </h3>
          <input type="text" />
        </div>
      </div>
    );
  }
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    SplitMe: null
  }
  handleClick = async () => {
    const loadedModuel = await import('./notify')
    this.setState({
      SplitMe: loadedModuel.default
    })
  }
  render() {
    const { SplitMe } = this.state
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={this.handleClick}>Hello React!!</p>
        {SplitMe && <SplitMe />}
      </header>
    </div>
    )
  };
}

export default App;

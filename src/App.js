import React, { Component } from 'react';
import './App.css';
import AppContext, {AppContextProvider} from './AppContext';

class InputField extends Component {

  handleChange(event) {
    this.props.updater(this.props.label, event.target.value);
  }

  render() {
    return (
      <div className="input-field">
        <label htmlFor={this.props.label}>{this.props.label}</label>
        <input id={this.props.label} type="text" value={this.props.value} onChange={this.handleChange.bind(this)}/>
      </div>
    )
  }
  
}
class Person extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {context => {
          return (Object.keys(context.state.person).map((key) => <InputField label={key} value={context.state.person[key]} updater={context.updatePerson} />))
        }}
      </AppContext.Consumer>
    )
  }
}

class App extends Component {
  render() {
    return (
      <AppContextProvider>
        <div className="App">
          <h1>React Context API Prototype</h1>
          <Person />
        </div>
      </AppContextProvider>
    );
  }
}

export default App;

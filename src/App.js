import React, { Component } from "react";
import './styles/App.scss';
import Sidebar from './Sidebar';
import Main from './Main';

class App extends Component {
  constructor() {
      super();
      this.state = {
        collapsed: true,
        toggled: true,
      };
    this.handleToggleSidebar = this.handleToggleSidebar.bind(this);
  }

  handleToggleSidebar = (value) => {
    this.setState({
        toggled: !value,
        collapsed: this.state.toggled
    });
  }

  render() {
    return (
      <div className={`app ${this.state.toggled ? 'toggled' : ''}`}>
        <Sidebar 
          toggled={this.state.toggled}
          collapsed={this.state.collapsed}
          handleToggleSidebar={this.handleToggleSidebar}
        />  
        <Main 
          handleToggleSidebar={this.handleToggleSidebar}
        />
      </div>       
    );
  } this
};

export default App;
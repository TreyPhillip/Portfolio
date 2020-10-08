import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './styles/App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import { FaBars } from 'react-icons/fa';

class App extends Component {
  constructor() {
      super();
      this.state = {
        collapsed: true,
        toggled: false,
      };
    this.handleToggleSidebar = this.handleToggleSidebar.bind(this);
    document.title = 'Trey Phillip | Junior Developer';
  }

  handleToggleSidebar = (value) => {
    this.setState({
        toggled: !value,
        collapsed: this.state.toggled
    });
  }

  handleToggleSidebarMobile = (value) => {
    this.setState({
        toggled: !value,
        collapsed: true
    });
  }

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className={`app ${this.state.toggled ? 'toggled' : ''}`}>        
            <Sidebar
              toggled={this.state.toggled}
              collapsed={this.state.collapsed}
              handleToggleSidebar={this.handleToggleSidebar}
            /> 
            <main>
              <div className="btn-toggle" onClick={() => this.handleToggleSidebarMobile(this.state.toggled)}>
                <FaBars />
              </div>          
              <Switch>     
                  <Route path="/Home" component={Home}/>
                  <Route exact path="/" component={Home} />
                  <Route path="/Projects" component={Projects} />
                  <Route path="/About" component={About} />
              </Switch>
            </main>
        </div>
      </BrowserRouter>
    );
  } this
};

export default App;
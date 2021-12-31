import React, { useState } from "react";
import { Route, HashRouter, Switch } from 'react-router-dom';
import './styles/App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import DiceBot from './components/Projects/ProjectDetail/DiceBot/DiceBot';
import Pathfinder from './components/Projects/ProjectDetail/Pathfinder/Pathfinder';
import Portfolio from './components/Projects/ProjectDetail/Portfolio/Portfolio';
import Services from './components/Services/Services';
import { Helmet } from 'react-helmet';
import { FaBars } from 'react-icons/fa';

export default function App() {
  const [toggled, setToggled] = useState(false);
  const [collapsed, setCollapsed] = useState(true);

  const handleToggleSidebarMobile = (value) => {
    setToggled(!value);
    setCollapsed(toggled);
  }

  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className={`app ${toggled ? 'toggled' : ''}`}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Trey Phillip | Junior Developer</title>
          <link rel="canonical" href="https://treyphillip.github.io" />
          <meta name="description" content="Trey Phillip's Portfolio, a Website that delivers information on him as well as the services he provides, such as Website development or Custom Computer Builds" />
        </Helmet>    
          <Sidebar
            toggled={toggled}
            collapsed={collapsed}
            handleToggleSidebar={handleToggleSidebarMobile}
          /> 
          <main>
            <div className="btn-toggle" onClick={() => handleToggleSidebarMobile(toggled)}>
              <FaBars />
            </div>          
            <Switch>
                <Route path="/Home" component={Home}/>
                <Route exact path="/" component={Home} />
                <Route exact path="/Projects" component={Projects} />
                <Route path="/About" component={About} />
                <Route path="/Contact" component={Contact} />
                <Route path="/Projects/DiceBot" component={DiceBot} />
                <Route path="/Projects/Pathfinder" component={Pathfinder} />
                <Route path="/Projects/Portfolio" component={Portfolio} />
                <Route path="/Contact" component={Contact} />
            </Switch>
          </main>
      </div>
    </HashRouter>
  );
}
import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import DiceBot from './components/Projects/ProjectDetail/DiceBot/DiceBot';
import Pathfinder from './components/Projects/ProjectDetail/Pathfinder/Pathfinder';
import Portfolio from './components/Projects/ProjectDetail/Portfolio/Portfolio';
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
            <Routes>
                <Route path="/Home" element={<Home />}/>
                <Route exact path="/" element={<Home />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Projects/DiceBot" element={<DiceBot />} />
                <Route path="/Projects/Pathfinder" element={<Pathfinder />} />
                <Route path="/Projects/Portfolio" element={<Portfolio />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
          </main>
      </div>
  );
}
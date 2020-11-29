import React, { useState, useEffect } from 'react';
import ProjectList from './ProjectList/ProjectList';
import VisualizerImage1 from '../images/VisualizerImage1.jpg';
import DiceImage1 from '../images/DiceImage1.jpg';
import PortfolioImage1 from '../images/PortfolioImage1.jpg';

export default function Projects() {   
    const DiceDescription = 'Discord bot developed using JavaScript and the Discord.js node module';
    const PathfindingDescription = 'Pathfinding Visualizer in Python using the A* algorithm';
    const PortfolioDescription = 'A website that acts as my portfolio. The website you\'re on right now!';
    
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects([
            {projectid: '1', title: 'Path-finding Visualizer', description: PathfindingDescription, image: VisualizerImage1, github: 'https://github.com/TreyPhillip/PathfindingVisualizer'},
            {projectid: '2', title: 'MrDiceGuy', description: DiceDescription, image: DiceImage1, github: 'https://github.com/TreyPhillip/MrDiceGuy'},
            {projectid: '3', title: 'My Porfolio', description: PortfolioDescription, image: PortfolioImage1, github: 'https://github.com/TreyPhillip/TreyPhillip.github.io'},
        ])
    }, [])
    return (
        <main>
            <header className="head">
                <h1>My Projects</h1>
            </header>
            <div className="projects">
                <ProjectList project={projects} />
            </div>
        </main>                    
    );
};

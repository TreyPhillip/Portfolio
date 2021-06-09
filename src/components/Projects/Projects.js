import React, { useState, useEffect } from 'react';
import ProjectList from './ProjectList/ProjectList';
import BuildList from './BuildList/BuildList';
import VisualizerImage1 from '../images/VisualizerImage1.jpg';
import DiceImage1 from '../images/DiceImage1.jpg';
import PortfolioImage1 from '../images/PortfolioImage1.jpg';


export default function Projects() {   
    const DiceDescription = 'Discord bot developed using JavaScript and the Discord.js node module';
    const PathfindingDescription = 'Pathfinding Visualizer in Python using the A* algorithm';
    const PortfolioDescription = 'A website that acts as my portfolio. The website you\'re on right now!';
    
    const [projects, setProjects] = useState([]);
    const [builds, setBuilds] = useState([]);
    const [swapped, setSwapped] = useState(true);

    const swapper = () => {
        setSwapped(!swapped)
    }

    useEffect(() => {
        setProjects([
            {projectid: '1', title: 'Path-finding Visualizer', description: PathfindingDescription, image: VisualizerImage1, github: 'https://github.com/TreyPhillip/PathfindingVisualizer', url: '/Projects/Pathfinder'},
            {projectid: '2', title: 'MrDiceGuy', description: DiceDescription, image: DiceImage1, github: 'https://github.com/TreyPhillip/MrDiceGuy', url: '/Projects/DiceBot'},
            {projectid: '3', title: 'My Porfolio', description: PortfolioDescription, image: PortfolioImage1, github: 'https://github.com/TreyPhillip/TreyPhillip.github.io', url: '/Projects/Portfolio'},
        ])
        setBuilds([
            {buildid: '1', title: 'My Personal Build', image: "", url: '/Builds/Personal', price: '$1,454.87 CAD', pcpp: ''},
            {buildid: '2', title: 'Mid Range PC', image: "", url: '/Builds/', price: '$1,489.98 CAD', pcpp: ''},
            {buildid: '3', title: 'Budget PC', image: "", url: '/Builds/', price: '$739.31 CAD', pcpp: ''},
        ])
    }, [])
    return (
        <main>
            <header className="head">
                <h1>Stuff I've Done &nbsp;&nbsp;&nbsp;
                    <button 
                        onClick={swapper} 
                        disabled={swapped} 
                        className="swapper">
                        Projects
                    </button>
                    <button 
                        onClick={swapper} 
                        disabled={!swapped}
                        className="swapper">
                        Builds
                    </button>
                </h1>
            </header>
            {swapped ? 
                <div className="projects">
                    <ProjectList project={projects} />
                </div>
            :
                <div className="projects">
                    <BuildList build={builds} />
                </div>
            }
        </main>                    
    );
};

import React, { Component } from 'react';
import ProjectList from './ProjectList/ProjectList';
import VisualizerImage1 from '../images/VisualizerImage1.jpg';
import DiceImage1 from '../images/DiceImage1.jpg';
import PortfolioImage1 from '../images/PortfolioImage1.jpg';

class Projects extends Component {   
    constructor() {
        const DiceDescription = 'Discord bot developed using JavaScript and the Discord.js node module';
        const PathfindingDescription = 'Pathfinding Visualizer in Python using A* algorithm';
        const PortfolioDescription = 'A website that acts as my portfolio. The website you\'re on right now!';
        super();
        this.state = {
            projects: [
                {projectid: '1', title: 'Path-finding Visualizer', description: PathfindingDescription, image: VisualizerImage1, github: 'https://github.com/TreyPhillip/PathfindingVisualizer'},
                {projectid: '2', title: 'MrDiceGuy', description: DiceDescription, image: DiceImage1, github: 'https://github.com/TreyPhillip/MrDiceGuy'},
                {projectid: '3', title: 'My Porfolio', description: PortfolioDescription, image: PortfolioImage1, github: 'https://github.com/TreyPhillip/Portfolio'},
            ]
        };
    }
    
    render() {
        return (
            <div>
                <main>
                    <header className="head">
                        <h1>My Projects</h1>
                    </header>
                </main>
                    <ProjectList project={this.state.projects} />               
            </div>
        );
    };
}

export default Projects;
import React, { Component } from 'react';
import { ProjectList } from './ProjectList/ProjectList';
import VisualizerImage1 from '../images/VisualizerImage1.jpg'

class Projects extends Component {
    constructor() {
        super();
        this.state = {
            projects: [
                {projectid: '1', title: 'pathfindingVisualizer', description: 'pathfinding visualizer' , image: VisualizerImage1, github: 'https://github.com'},
                {projectid: '2', title: 'pathfindingVisualizer2', description: 'pathfinding visualizer', image: VisualizerImage1, github: 'https://github.com'},
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
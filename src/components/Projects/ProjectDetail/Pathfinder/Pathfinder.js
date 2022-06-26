import React from 'react';

export default function PathFinder() {
    return (
        <main>
            <header className="head">
                <h1>What is Pathfinding Visualizer?</h1>
            </header>
            <p className="block">
                This Pathfinding Visualizer allows the user to select a Start node and an End node from a grid. 
                The User can also create walls or obstacles for the pathfinder to navigate around. The application 
                was developed using Python and the Pygame module. 
            </p>
            <header className="head">
                <h1>How do you use it?</h1>
            </header>
            <p className="block">
                To begin using the application, simply download and unzip the file from my <a href="https://github.com/TreyPhillip/PathfindingVisualizer">GitHub</a>. 
                The python file is packaged with a .exe file so you do not need to download anything other than the GitHub zip
                to use it. Navigate to the unzipped Pathfinding Visualizer folder and into dist then PathfindingVisualizer. 
                Finally locate the PathfindingVisualizer.exe file and double click to run. Instructions for use will be 
                along the top of the window.
            </p>
        </main>
    );
}
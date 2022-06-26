import React from 'react';

export default function PathFinder() {
    return (
        <main>
            <header className="head">
                <h1>My Portfolio</h1>
            </header>
            <p className="block">
                I built this portfolio as a small demonstration of my knowledge in Web Design, 
                JavaScript and React.js. Its also used as a platform to display information about 
                the other projects I have worked on
            </p>
            <header className="head">
                <h1>How was it built?</h1>
            </header>
            <p className="block">
                The app is currently just a React.js app hosted on Vercel, but I have 
                plans to add some features that will may require a backend (most likely Node.js).
                Some examples of those featutes include a Blog, comment system and a simple 
                authentication with google or another third party system to make those comments.
            </p>
        </main>
        );
    }
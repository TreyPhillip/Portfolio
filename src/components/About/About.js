import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <main>
                <header className="head">
                    <h1>About Me</h1>
                </header>
                <p className="block">
                    short description block
                </p>
                <header className="head">
                    <h2>Education</h2>
                </header>
                <p className="block">
                    Education info block
                </p>
                <header className="head">
                    <h2>Skills</h2>
                </header>
                <p className="block">
                    skills info block
                </p>
            </main>
        );
    };
}

export default About;
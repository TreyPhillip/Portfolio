import React from 'react';

export default function About() {
    return (
        <main>
            <header className="head">
                <h1>About Me</h1>
            </header>      
            <p className="block">
                I live in Ontario, Canada and I graduated from Conestoga College in 2020. Since graduation, I spent some 
                time learning new technologies, and in 2021 started as a Junior Developer in Test at Ford Motors
            </p>
            <header className="head">
                <h2>Education</h2>
            </header>
            <p className="block">
                My education focused on hands on work with a variety of languages and frameworks. Many of my classes 
                focused on C# to teach the computer science concepts, but I was also instructed on other languages like JavaScript.
                I am self taught in a number of other areas such as React and Python.
            </p>
            <header className="head">
                <h2>Skills</h2>
            </header>
            <p className="block">
                I have experience in a variety of different skills, including Web Development(React.js), System Administration and Soldering
            </p>
        </main>
    );
};
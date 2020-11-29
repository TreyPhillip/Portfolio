import React from 'react';

export default function About() {
    return (
        <main>
            <header className="head">
                <h1>About Me</h1>
            </header>      
            <p className="block">
                I live in Ontario, Canada and I recently graduated from Conestoga College with an Ontario College
                Advanced Diploma in Computer Science & IT. Since my graduation I have spent my time learning new 
                technologies and looking for employment.
            </p>
            <header className="head">
                <h2>Education</h2>
            </header>
            <p className="block">
                My education focused on hands on work with a variety of languages and frameworks.Many of my classes 
                used C# to teach the computer science concepts, but I also had classes on other languages like JavaScript.
                I am self taught in a number of other areas such as React and Python.
            </p>
            <header className="head">
                <h2>Skills</h2>
            </header>
            <p className="block">
                I am most confident in my skills for Web design and utilizing technologies such as React.js and
                Node.js. However, I am also proficient in other fields like Application and Database design. I have
                yet to gain any professional experience in these technologies, but I am confident in my ability to 
                perform regardless
            </p>
        </main>
    );
};
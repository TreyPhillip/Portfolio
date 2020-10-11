import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <main>
                <header className="head">
                    <h1>About Me</h1>
                </header>      
                <p className="block">
                    I live in Ontario, Canada and I recently graduated from Conestoga College
                    with an Ontario College Advanced Diploma in Computer Science & IT. Since 
                    my graduation I have spent my time learning new technologies and enjoying 
                    my hobbies.
                </p>
                <header className="head">
                    <h2>Education</h2>
                </header>
                <p className="block">
                    My education focused on hands on work with a variety of languages and frameworks.
                    Most of my classes focused on C# and the .NET Framework, but I also had classes 
                    on other languages or concepts like JavaScript, Java, Web Design, and Database design.
                </p>
                <header className="head">
                    <h2>Skills</h2>
                </header>
                <p className="block">
                    My strongest skills are in C# and JavaScript. I have 
                    personal experience but no professional experience in 
                    Web Design and Application Design in these languages 
                    and several other like Python, Java, HTML & CSS. I am 
                    also proficient in Databasing languages like SQL and 
                    PostgreSQL.
                </p>
                <header className="head">
                    <h2>Contact Me</h2>
                </header>
                <p className="block">
                    if you would like to get in contact with me, my email 
                    address is treyphillip@live.com. I am currently looking 
                    for long term employment, but I am also interested 
                    in freelance work, so feel free to send me an email.
                </p>
            </main>
        );
    };
}

export default About;
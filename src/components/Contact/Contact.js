import React from 'react';

export default function Contact() {
    const email = <a href={"mailto: treyphillip@live.com"}>treyphillip@live.com</a>;
    const twitter = <a href={"https://twitter.com/RealTreyPhillip"}>Twitter</a>;
    const linkedin = <a href={"https://www.linkedin.com/in/treyphillip/"}>LinkedIn</a>;
    return (
        <main>
            <header className="head">
                <h1>Contact Me</h1>
            </header>
            <p className="block"> 
                I am currently interested in full time or short term/freelance work.
                I do a veriety of different programming work such as Web development or 
                Application Development. I also do work building PCs.
                If you are interested, please send me a message on one of the platforms below.
                <br />
                <br />
                {email}
                <br />
                <br />
                {twitter}
                <br />
                <br />
                {linkedin}
            </p>
        </main>
    );
}
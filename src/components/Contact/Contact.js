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
                Currently I am employed as a contractor, but I am open to offers for when my contract ends in July 2022.
                I am most interested in working in Web or App Debelopment, but I also do work building PCs
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
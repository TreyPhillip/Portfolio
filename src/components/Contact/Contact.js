import React, { Component } from 'react';

class Contact extends Component {
    render() {
        const email = <a href={"mailto: treyphillip@live.com"}>treyphillip@live.com</a>;
        const twitter = <a href={"https://twitter.com/RealTreyPhillip"}>Twitter</a>;
        const linkedin = <a href={"https://www.linkedin.com/in/treyphillip/"}>LinkedIn</a>;
        return (
            <main>
                <header className="head">
                    <h1>Contact Me</h1>
                </header>
                <p className="block"> 
                    I am currently looking for long term employment, but I am also 
                    interested in freelance work, so feel free to send me an email.
                    If you would like to get in contact with me, im available on the 
                    platforms below.
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
}

export default Contact;
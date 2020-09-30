import React, { Component } from 'react';
import { FaBars } from 'react-icons/fa';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: this.props.collapsed,
            toggled: this.props.toggled,
        };
    }

    render() {
        return (
        <main>
            <div className="btn-toggle" onClick={() => this.props.handleToggleSidebar(true)}>
                <FaBars />
            </div>
            <header className="intro">
                <h1>Hi, I'm Trey. A junior developer</h1>
            </header>
            <body>
                <div>
                    <h1>About Me</h1>
                    <p className="about">I am a graduate of the Computer Programmer/Analyst
                        course at program at Consetoga College</p>
                </div>
            </body>
        </main>
        );
    };
}

export default Main;
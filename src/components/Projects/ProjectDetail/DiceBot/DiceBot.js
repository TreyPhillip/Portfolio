import React from 'react';

export default function DiceBot() {
    return (
        <main>
            <header className="head">
                <h1>What is Mr Dice Guy?</h1>
            </header>
            <p className="block">
                Mr Dice Guy is a discord chatbot made with the intention
                of being used for tabletop roleplaying games like Dungeons & Dragons. It was dveloped 
                using JavaScript and the Discord.js node module. 
            </p>
            <header className="head">
                <h1>Commands</h1>
            </header>
            <p className="block">
                Roll single dice
                <pre className="code-snippet">
                    <code>
                            !d20<br />
                            !d6+5
                    </code>
                </pre>
                Roll Multiple Dice
                <pre className="code-snippet">
                    <code>
                            !2d20<br />
                            !4d6-5
                    </code>
                </pre>
                use ++ or -- to add or subract from each dice roll instead of just the total. 
                this only works if you are rolling multiple dice at the same time
                <pre className="code-snippet">
                    <code>
                            !10d6++7<br />
                            !4d12--3
                    </code>
                </pre>
            </p>
        </main>
    );
};
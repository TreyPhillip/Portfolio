import React from 'react';

export default function DiceBot() {
    return (
        <main>
            <header className="head">
                <h1>What is Mr Dice Guy?</h1>
            </header>
            <p className="block">
                Mr Dice Guy is a discord chatbot made with the intention
                of being used for tabletop roleplaying games like Dungeons & Dragons. It was developed 
                using JavaScript and the Discord.js node module. Currently MrDiceGuy is not hosted anywhere, 
                but can be used locally and added to your discord servers through the developer portal
            </p>
            <header className="head">
                <h1>Commands</h1>
            </header>
            <p className="block">
                Roll single dice
                <pre className="code-snippet">
                    <code>
                        !d20<br />
                        # 16<br />
                        details: d6
                    </code>
                </pre>
                Roll Multiple Dice
                <pre className="code-snippet">
                    <code>
                        !2d20<br />
                        # 28<br />
                        details: 2d20<br />
                        12 16
                    </code>
                </pre>
                Use ++ or -- to add or subract from each dice roll instead of just the total. 
                this only works if you are rolling multiple dice at the same time
                <pre className="code-snippet">
                    <code>
                        !10d6++7<br />
                        # 110 <br />
                        details: 10d6++7<br />
                        1(+7) 3(+7) 3(+7) 2(+7) 4(+7) 5(+7) 6(+7) 1(+7) 1(+7) 3(+7)
                    </code>
                </pre>
            </p>
        </main>
    );
};
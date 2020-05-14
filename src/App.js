import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer'
import {render} from "react-dom";
import Setup from "./setup";

let person = {
    name: "Alex",
    Location: {
        city: "Houston", zip: "77354"
    }
};
const html = <h1> Hello, {person.name}</h1>

function App() {
    function handleClick(e) {
        e.preventDefault();
        console.log("logging button click");

    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <p> Hello, World!</p>
                <Setup name="Alex" location={{
                    city: "Houston", zip: "77354"
                }}/>
                {html}
                <Timer/>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <button onClick={log()}>Log</button>

            </header>
        </div>
    );
}

function log() {
    console.log("logging button click from external func");
}

export default App;

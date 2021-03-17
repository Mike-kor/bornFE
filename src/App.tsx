import React from 'react';
import logo from './logo.svg';
import {Counter} from './features/counter/Counter';
import './App.css';
import {Home} from './features/pages/Home';
import {About} from "./features/pages/About";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {Root} from "./features/pages/Root";


function App() {

    return (
        <Router>
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h6 className="App-title">Welcome to React</h6>
                    <nav>
                        <ul>
                            <li><Link to="/">Root</Link></li>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </nav>
                </div>

                <Route exact={true} path="/" component={Root} render={() => <h3>Root</h3>}/>
                <Route path="/home" component={Home} render={() => <h3>home</h3>}/>
                <Route path="/about" component={About} render={() => <h3>소개</h3>}/>
            </div>
        </Router>

    );
}

export default App;

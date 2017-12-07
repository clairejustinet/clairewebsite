import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import './bootstrap/css/bootstrap.css';
import './bootstrap/css/bootstrap-grid.css';
import './bootstrap/css/bootstrap-reboot.css';
import './App.css';
import logo from './images/sun.svg';
import Home from "./home";
import About from "./about";
import Contact from "./contact";
class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div className="main">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Claire Tucker</h1>
                        <h2>Web Developer</h2>
                    </header>
                <div className="content">
                    <Route exact path="/home" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                </div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark-override bg-dark fixed-bottom">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li><NavLink to="/home">Home</NavLink></li>
                                <li><NavLink to="/about">About</NavLink></li>
                                <li><NavLink to="/contact">Contact</NavLink></li>
                            </ul>
                        </div>

                    </div>
                </nav>
                </div>
            </HashRouter>

        );
    }
}
export default Main;
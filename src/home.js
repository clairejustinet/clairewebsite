import React, { Component } from "react";

import logo from './images/sun.svg';
import './App.css';
import './bootstrap/css/bootstrap.css';
import './bootstrap/css/bootstrap-grid.css';
import './bootstrap/css/bootstrap-reboot.css';

class Home extends Component {
    render() {
        return (

            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Claire Tucker</h1>
                    <h2>Web Developer</h2>
                </header>

                <section className="intro-container">
                    <p className="App-intro">
                        Hello! I am a Seattle-based web developer specializing in front-end technologies such as JavaScript/jQuery, HTML, CSS, JSP, XSL and AJAX. I have experience with Java, content management systems, Git and Subversion, agile methodologies, and integration of third party applications. Thanks for visiting!
                    </p>
                </section>

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark-override bg-dark fixed-bottom">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home
                                        <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>

                );
    }
}

export default Home;
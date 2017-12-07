import React, { Component } from "react";
import logo from './images/sun.svg';
import './App.css';
import './bootstrap/css/bootstrap.css';
import './bootstrap/css/bootstrap-grid.css';
import './bootstrap/css/bootstrap-reboot.css';

class App extends Component {
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


            </div>

        );
    }
}

export default App;
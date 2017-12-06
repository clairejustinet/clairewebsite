import React, { Component } from "react";


import logo from './images/sun.svg';
import './App.css';
import './bootstrap/css/bootstrap.css';
import './bootstrap/css/bootstrap-grid.css';
import './bootstrap/css/bootstrap-reboot.css';


class Contact extends Component {
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

                    </p>
                </section>


            </div>
        );
    }
}

export default Contact;
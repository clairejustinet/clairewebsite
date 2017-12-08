import React, { Component } from "react";
import './bootstrap/css/bootstrap.css';
import './bootstrap/css/bootstrap-grid.css';
import './bootstrap/css/bootstrap-reboot.css';
import './App.css';

class Contact extends Component {
    render() {
        return (
            <section className="intro-container">
                <p className="App-intro contact-info">
                    claire.backs@gmail.com<br/>
                    (206) 370-1590<br/>
                    <a href={"https://www.linkedin.com/in/clairejtucker/"}>LinkedIn</a>
                </p>
            </section>
        );
    }
}

export default Contact;
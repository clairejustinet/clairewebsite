import React, { Component } from "react";
import './bootstrap/css/bootstrap.css';
import './bootstrap/css/bootstrap-grid.css';
import './bootstrap/css/bootstrap-reboot.css';
import './App.css';
class Home extends Component {
    render() {
        return (

            <div className="App">


                <section className="intro-container">
                    <p className="App-intro">
                        Hello! I am a Seattle-based web developer specializing in front-end technologies such as JavaScript/jQuery, HTML, CSS, JSP, XSL and AJAX. I have experience with Java, content management systems, Git and Subversion, agile methodologies, and integration of third party applications. Thanks for visiting!
                    </p>
                </section>
            </div>

        );
    }
}

export default Home;
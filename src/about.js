import React, { Component } from "react";
import './bootstrap/css/bootstrap.css';
import './bootstrap/css/bootstrap-grid.css';
import './bootstrap/css/bootstrap-reboot.css';
import './App.css';


class About extends Component {
    render() {

        return (
            <div className="resume">
                <section className="intro-container">
                    <h3>Objective</h3>
                    <p>To​ ​contribute​ ​my​ ​web​ ​application​ ​development​ ​experience,​ ​analytical​ ​skills,​ ​and​ ​creativity to​ ​meaningful​ ​and​ ​useful​ ​web​ ​projects.</p>
                    <h3>Experience</h3>
                    <p className="exp" >Group​ ​Health​ ​(www.ghc.org),​ Seattle,​ ​WA​​<br/>
                        Web​ ​Developer​ ​I,​ ​Web​ ​Developer​ ​II, Web​ ​Developer​ ​III<br/>
                        March​ ​2009​ ​-​ ​September​ ​2016</p>
                    <ul className="hidden">
                        <li>Performed​ ​project​ ​planning,​ ​use​ ​case​ ​definition,​ ​requirements​ ​gathering,​ ​technical analysis,​ ​task​ ​breakdown,​ ​front-end​ ​web​ ​development,​ ​and​ ​documentation​ ​for Group​ ​Health​ ​patient-facing​ ​site.</li>
                        <li>Achieved​ ​significant​ ​financial​ ​savings​ ​for​ ​Group​ ​Health​ ​through​ ​reduction​ ​of customer​ ​service​ ​calls​ ​and​ ​paper​ ​billing​ ​expenses​ ​by​ ​building​ ​front-end​ ​view​ ​for online​ ​bill​ ​payment​ ​project,​ ​using​ ​custom​ ​JavaScript,​ ​jQuery,​ ​and​ ​CSS.​ ​Also developed​ ​Java​ ​code​ ​to​ ​call​ ​REST​ ​services​ ​and​ ​pass​ ​JSON​ ​to​ ​client​ ​as​ ​part​ ​of Spring-based​ ​application.​ ​This​ ​billing​ ​application​ ​processed​ ​over​ ​$50M​ ​in payments​ ​per​ ​year.</li>
                        <li>Crafted​ ​extensive​ ​style​ ​customizations​ ​using​ ​CSS​ ​and​ ​JavaScript​ ​for​ ​patient-facing view​ ​of​ ​Epic​ ​MyChart​ ​(medical​ ​record​ ​system)​ ​to​ ​create​ ​a​ ​seamless​ ​experience when​ ​navigating​ ​between​ ​MyChart​ ​and​ ​in-house​ ​pages.</li>
                        <li>Built​ ​standalone​ ​HTML​ ​pages​ ​and​ ​JSP​ ​pages​ ​for​ ​Java-based​ ​web​ ​applications, using​ ​jQuery​ ​with​ ​plugins​ ​and​ ​utilities​ ​such​ ​as​ ​Modernizr​ ​and​ ​Indie-js.</li>
                        <li>Saved​ ​several​ ​weeks​ ​per​ ​upgrade​ ​cycle​ ​of​ ​developer​ ​FTE​ ​hours​ ​by​ ​identifying alternatives​ ​to​ ​custom​ ​user​ ​interface​ ​solutions​ ​for​ ​MyChart​ ​pages,​ ​and​ ​by​ ​moving MyChart​ ​configuration​ ​files​ ​into​ ​Git​ ​version​ ​control​ ​system.</li>
                        <li>Investigated​ ​modern​ ​JavaScript​ ​frameworks​ ​including​ ​React,​ ​AngularJS,​ ​and Ember.js​ ​in​ ​order​ ​to​ ​help​ ​decide​ ​on​ ​technical​ ​architecture​ ​for​ ​web​ ​projects.</li>
                        <li>Fielded​ ​and​ ​triaged​ ​production​ ​support​ ​tickets​ ​as​ ​first​ ​point​ ​of​ ​contact​ ​during off-hours​ ​on-call​ ​rotation.</li>
                    </ul>
                    <p className="exp">HomeSavvi,​ Seattle,​ ​WA​​<br/>
                        Web​ ​Developer<br/>
                        May​ ​2008​ ​-​ ​March​ ​2009</p>
                    <ul className="hidden">
                        <li>Implemented​ ​front-end​ ​design​ ​specifications​ ​to​ ​ensure​ ​consistent,​ ​intuitive​ ​user experience​ ​across​ ​the​ ​site.</li>
                        <li>Expanded​ ​site​ ​functionality​ ​by​ ​installing,​ ​configuring​ ​and​ ​modifying​ ​Drupal​ ​content management​ ​system​ ​modules.</li>
                    </ul>
                    <p className="exp">University​ ​of​ ​Washington,​ ​Seattle,​ ​WA​​<br/>
                        ​Web​ ​Developer<br/>
                        January​ ​2007​ ​-​ ​June​ ​2008</p>
                    <ul className="hidden">
                        <li>Developed​ ​dynamic,​ ​database-driven​ ​web​ ​pages​ ​in​ ​PHP​ ​with​ ​SQL.</li>
                        <li>Worked​ ​as​ ​part​ ​of​ ​a​ ​select​ ​team​ ​for​ ​the​ ​department​ ​of​ ​Biobehavioral​ ​Nursing​ ​and Health​ ​Systems​ ​to​ ​build​ ​and​ ​optimize​ ​an​ ​electronic​ ​medical​ ​record​ ​system​ ​serving HIV/AIDS​ ​clinics​ ​and​ ​patients​ ​in​ ​Haiti.</li>
                    </ul>
                    <h3>Skills</h3>
                    <p className="exp">Web​ ​development​ ​and​ ​technical​ ​skills:</p>
                    <ul className="hidden">
                        <li>JavaScript​ ​(including​ ​jQuery),​ ​CSS,​ ​XSLT,​ ​HTML5,​ ​responsive​ ​design​ ​concepts​ ​and other​ ​front-end​ ​technologies</li>
                        <li>Java,​ ​JSP,​ ​JNDI,​ ​PHP,​ ​SQL,​ ​object-oriented​ ​programming</li>
                        <li>Understanding​ ​of​ ​web​ ​services​ ​and​ ​database​ ​design​ ​concepts</li>
                        <li>Git​ ​and​ ​Subversion</li>
                        <li>Eclipse​ ​and​ ​Intellij</li>
                        <li>Agile​ ​methodology</li>
                    </ul>
                    <p className="exp">Analytical​ ​and​ ​professional​ ​skills:</p>
                    <ul className="hidden">
                        <li>Identifying​ ​and​ ​defining​ ​business​ ​requirements​ ​and​ ​use​ ​cases​ ​and​ ​translating them​ ​to​ ​technical​ ​requirements</li>
                        <li>Experience​ ​with​ ​all​ ​stages​ ​of​ ​project​ ​and​ ​software​ ​development​ ​life-cycle</li>
                        <li>Project​ ​planning,​ ​identifying​ ​tasks​ ​needed​ ​to​ ​implement​ ​features</li>
                        <li>Developing​ ​relationships​ ​with​ ​vendors​ ​and​ ​other​ ​internal​ ​departments</li>
                        <li>Ability​ ​to​ ​adapt​ ​to​ ​remain​ ​solution-focused​ ​in​ ​the​ ​face​ ​of​ ​changing​ ​requirements</li>
                        <li>Excellent​ ​interpersonal​ ​and​ ​written​ ​communication​ ​skills</li>
                    </ul>
                    <h3>Education and Training</h3>
                    <p>University​ ​of​ ​Washington,​ ​Seattle​ ​​-​ ​Bachelor​ ​of​ ​Science,​ ​​Informatics March​ ​2009
                    </p>

                </section>
            </div>

        );
    }
}

export default About;



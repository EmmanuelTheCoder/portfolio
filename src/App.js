import React from 'react';
import './App.css';
import Navbar from './Navbar';
import emmanuel from './pictures/emmanuel.jpg';

let ReactRotatingText =  require('react-rotating-text');
const App = () =>{
    
    const close = () =>{
        let modal = document.querySelector('.modal-container');
        modal.style.display = "none";
    }
    // const showDisplay = () =>{
    //     let modal = document.querySelector('.modal-container');
    //     modal.style.display = "flex";
    // }

const closeHamburger = () =>{
    document.querySelector('.hamburger-content').style.display = "none";
}
const openHamburger = () =>{
    document.querySelector('.hamburger-content').style.display = "block";
}

    
    return(
        <div className="app">
            <div className="intro">
                    <Navbar />
                    <div className="hamburger" onClick={openHamburger}>
                        <p>__</p>
                        <p>__</p>
                        <p>__</p>
                    </div>
                    <div className="hamburger-content">
                        <p onClick={closeHamburger}>x</p>
                        <p>About</p>
                        <p>Contact</p>
                        <p>projects</p>
                        <p>Resume</p>
                        <p></p>
                    </div>
                
                    <h1>HI, I'm Emmanuel</h1>
                    {/* <h4 className="branded"></h4> */}
                    <ReactRotatingText className="frontend" items={["Firstend developer", "Meticulous, passionate and energetic", "Design driven", "Enthusiastic team player", "Deep creative thinker"]}
                     typingInterval="200" emptyPause= "1500"/>
                    <p className="test"><i className="fas fa-code-merge" /> github</p>
                    <p>twitter</p>
                    <p>email</p>
                    {/* <div className="dot">
                        <p className="dot1">.</p>
                        <p className="dot2">.</p>
                        <p className="dot3">.</p>
                        <p className="dot4">.</p>
                        <p className="dot5">.</p>
                    </div> */}
                    
            </div>
            <div className="modal-container">
                <div className="modal">
                    <div className="close" onClick={close}>
                        +
                    </div>
                </div>
            </div>
            <div className="self-info">
                <p className="info">
                    I am a meticulous frontend developer 
                    with 2+ years experience managing and building frontend products.
                    An enthusiatic team player and deep creative thinker. 
                </p>
                <img src={emmanuel} alt="my pic"/>
            </div>
            <div className="experience">
                <h1>Experience</h1>

                <div className="firstex">
                    <h2>Frontend developer</h2>
                    <p>@TEC - Ilorin</p>
                </div>
                <div className="secondex">
                    <h2>Web manager/frontend developer</h2>
                    <p>@LoyaltyUpdates</p>
                </div>
            </div>
            <div className="my-stack">
                <h1>My stack</h1>
                <p>JavaScript</p>
                <p>React</p>
                <p>HTML5</p>
                <p>CSS3</p>
                <p>Bootstrap</p>
                <p> jQuery </p>
                <p>Liquid</p>

            </div>
            <div className="projects">
                <h1>Recent projects</h1>
                <div className="covering">
                    <div className="firstp">
                        <h2>Covid-19 tracker</h2>
                        <p>HTML CSS JS</p>
                    </div>
                    <div className="secondp">
                        <h2>Quiz App</h2>
                        <p>HTML, CSS, JS </p>
                    </div>
                    <div className="thirdp">
                        <h2>TodoList App</h2>
                        <p>HTML, CSS, JS</p>
                    </div>
                    <div className="fourthp">
                        <h2>Contact Card</h2>
                        <p>React</p>
                    </div>
                    <div className="fifthp">
                        <h2>Weather App</h2>
                        <p>HTML, CSS, JS,API</p>
                    </div>
                    <div className="sixthp">
                        <h2>GPA Calculator</h2>
                        <p>React</p>
                    </div>

                </div>
                <div className="form">
                    <h1>Contact me</h1>
                    <form
                    name="contact me"
                    method="post"
                    netlify
                    data-netlify-honeypot="bot-field"
                    >
                    <label htmlFor="name">Your name</label>
                    <input type="text" name="name"/>
                    <label htmlFor="mail">E-mail</label>
                    <input type="text" name="email" autoCapitalize="off" autoComplete="off"/>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="" cols="30" rows="10">
                    </textarea>
                    <button>Send</button>
                    </form>
                </div>
            </div>
                <footer>
                    <p>Emmanuel Aiyenigba</p>
                    <p>mail me at: loyaltysamuel001@gmail.com</p>
                </footer>
        </div>
    );
}
export default App;
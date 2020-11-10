import React from 'react';
import './App.css';
import Navbar from './Navbar';
import emmanuel from './pictures/emmanuel.jpg';
import github from './pictures/github.png';
import twitter from './pictures/twitter.png';
import javascript from './pictures/javascript.png';
import html from './pictures/html.png';
import bootstrap from './pictures/bootstrap.png';
import browser from './pictures/browser.png';
import react from './pictures/react.png';
import liquid from './pictures/liquid.png';
import css from './pictures/css.png';
import jquery from './pictures/jquery.png';
import styled from './pictures/styled.png';



let ReactRotatingText =  require('react-rotating-text');
const App = () =>{
    
    const close = () =>{
        let modal = document.querySelector('.modal-container');
        modal.style.display = "none";
    }
    const showDisplay = () =>{
        let modal = document.querySelector('.modal-container');
        modal.style.display = "flex";
    }

    const closeHamburger = () =>{
        document.querySelector('.hamburger-content').style.display = "none";
    }
    const openHamburger = () =>{
        document.querySelector('.hamburger-content').style.display = "block";
    }


    
    return(
        <div className="app">
            <div className="intro">
                    <Navbar className="main-navbar"/>
                    <div className="hamburger">
                        <img alt="hambuger" src="https://img.icons8.com/metro/26/000000/menu.png"
                         onClick={openHamburger}
                        />
                        
                    </div>
                    <div className="close-hamburger-content">
                    <div className="hamburger-content">
                        <p onClick={closeHamburger}>x</p>
                        <a href="#intro" onClick={closeHamburger}>About</a>
                        <a href="#contact" onClick={closeHamburger}>Contact</a>
                        <a href="#projects" onClick={closeHamburger}>Projects</a>
                        <a href="https://www.dropbox.com/s/b92z0wv7yorgkd5/resume.pdf?dl=0" onClick={closeHamburger}>Resume</a>
                        <p></p>
                    </div>
                    </div>
                
                    <div className="unmove">
                        <h1 id="intro">HI, I'm Emmanuel</h1>
                        
                        <ReactRotatingText className="frontend" items={["Firstend developer", "Meticulous, passionate and energetic", "Design driven", "Enthusiastic team player", "Deep creative thinker"]}
                        typingInterval="200" emptyPause= "1500"/>
                    </div>
                    <div className="icon-container">
                        <a href="https://github.com/EmmanuelTheCoder" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" className="icon"/> </a>
                        <a href="https://twitter.com/EmmanuelCoder" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" className="icon" /> </a>
                        <a href="mailto:loyaltysamuel001@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope icon"/></a>
                    </div>
                    
                   
                    
                    
            </div>
            <div className="modal-container">
                <div className="modal">
                    <div className="close" onClick={close}>+</div>
                    <div className="my-image">
                        <img src={emmanuel} alt="myself" className="myself"/>
                    </div>
                    <div className="form-div">
                    
                    <form method="post" name="hire" netlify className="hire-form">
                        <input type="hidden" name="form-name" value="hire" />
                        <p>
                            <label>Your Name: <input type="text" name="name"/></label>
                        </p>
                        <p>
                            <label>Your Email: <input type="email" name="email"/></label>
                        </p>
                        <p>
                            <label>About company: <textarea name="message" placeholder="Just a little detail about the company, please." cols="30" rows="10"></textarea></label>
                        </p>
                        <p>
                            <button type="submit">Send</button>
                        </p>
                        </form>
                    
                    
                    </div>
                    
                </div>
            </div>
            <div className="self-info">
                <p className="info">
                    I am a meticulous frontend developer 
                    with 2+ years experience managing and building frontend products.
                    An enthusiatic team player and deep creative thinker.
                    <button className="hire" onClick={showDisplay}>Hire me</button>
                </p>
                
                <img src={emmanuel} alt="my pic"/>
            </div>
            <div className="experience">
                <h1 id="experience">Experience</h1>

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
                <div>
                    <p> 
                        <img src={javascript} alt="javascript"/>
                    </p>
                    <p>JavaScript</p>
                </div>
                <div>
                    <p>
                        <img src={react} alt="react" />
                    </p>
                    <p>React</p>
                </div>

                <div>
                    <p>
                        <img src={html} alt="html"/>
                    </p>
                    <p>HTML5</p>
                </div>
                <div>
                    <p>
                        <img src={css} alt="css"/>
                    </p>
                    <p>CSS3</p>
                </div>
                <div>
                    <p>
                        <img src={bootstrap} alt="bootstrap"/>
                    </p>
                    <p>Bootstrap</p>
                </div>
                <div>
                    <p>
                        <img src={jquery} alt="jquery"/>
                    </p>
                    <p> jQuery </p>
                </div>
                <div>
                    <p>
                        <img src={liquid} alt="liquid"/>
                    </p>
                    <p>Liquid</p>
                </div>

                <div>
                    <p>
                        <img src={styled} alt="styled"/>
                        <p>Styled-Components</p>
                    </p>
                </div>
            </div>
            <div className="projects">
                <h1 id="projects">Some projects</h1>
                <div className="covering">
                
                <div className="firstp">
                        <h2>Film Flix</h2>
                        <div className="project-link">
                          <a href="https://github.com/EmmanuelTheCoder/movie-info" target="_blank" rel="noopener noreferrer"><img src={github} alt="gitub" className="project-github" /></a>
                          < a target="_blank" rel="noopener noreferrer" href="https://github.com/EmmanuelTheCoder/movie-info"><img src={browser} alt="browser" className="project-browser" /></a>
                        </div>
                        <p className="description">Get information about any movie of your choice</p>
                        <p>React, API</p>
                    </div>
                    <div className="firstp">
                        <h2>Quiz App</h2>
                        <div className="project-link">
                          <a href="https://github.com/EmmanuelTheCoder/BibleQuiz_App" target="_blank" rel="noopener noreferrer"><img src={github} alt="gitub" className="project-github" /></a>
                          <a href="https://biblequiz.netlify.app" target="_blank" rel="noopener noreferrer"><img src={browser} alt="browser" className="project-browser" /></a>
                        </div>
                        <p className="description">Test your skills on certain subjects while having fun.</p>
                        <p>HTML, CSS, JS, jQuery </p>
                    </div>
                    <div className="secondp">
                        <h2>TodoList App</h2>
                        <div className="project-link">
                            <a href="https://github.com/EmmanuelTheCoder/TodoList_App" target="_blank" rel="noopener noreferrer"><img src={github} alt="gitub" className="project-github" /></a>
                            <a href="https://todoplan.netlify.app" target="_blank" rel="noopener noreferrer"><img src={browser} alt="browser" className="project-browser" /></a>
                        </div>
                        <p className="description">Plan and organize your daily activities with this TodoList web app. 
                        </p>
                        <p>HTML, CSS, JS</p>
                    </div>
                    <div className="thirdp">
                        <h2>Business Card</h2>
                        <div className="project-link">
                            <a href="https://github.com/EmmanuelTheCoder/Business-card"><img src={github} alt="gitub" className="project-github" /> </a>
                            < a target="_blank" rel="noopener noreferrer"href="https://github.com/EmmanuelTheCoder/Business-card"><img src={browser} alt="browser" className="project-browser" /> </a>
                        </div>
                        <p className="description">Get your business live on the web with this
                         business card.</p>
                        <p>React</p>
                    </div>
                    <div className="fourthp">
                        <h2>Covid-19 tracker</h2>
                        <div className="project-link">
                            <a href="https://github.com/EmmanuelTheCoder/Covid19-live-stat" target="_blank" rel="noopener noreferrer"><img src={github} alt="gitub" className="project-github" /> </a>
                            <a href="https://covid19me.netlify.app" target="_blank" rel="noopener noreferrer"><img src={browser} alt="browser" className="project-browser" /></a>
                        </div>
                        <p className="description">Be updated about the Covid-19 pandemic</p>
                        <p>HTML,CSS, JS, API</p>
                    </div>
                    <div className="fifthp">
                        <h2>Weather App</h2>
                        <div className="project-link">
                            <a href="https://github.com/EmmanuelTheCoder/Weather-app-withReact" target="_blank" rel="noopener noreferrer"><img src={github} alt="gitub" className="project-github" /></a>
                            <a href="https://weatherzone.netlify.app" target="_blank" rel="noopener noreferrer"><img src={browser} alt="browser" className="project-browser" /></a>
                        </div>
                        <p className="description">Check for weather info in any and every city you wish</p>
                        <p>HTML, CSS, JS,API</p>
                    </div>
                    <div className="sixthp">
                        <h2>GPA Calculator</h2>
                        <div className="project-link">
                            <a href="https://github.com/EmmanuelTheCoder/GPA-calculator" target="_blank" rel="noopener noreferrer"><img src={github} alt="gitub" className="project-github" /></a>
                            <a href="https://calculategp.netlify.app" target="_blank" rel="noopener noreferrer"><img src={browser} alt="browser" className="project-browser" /></a>
                        </div>
                        <p className="description">Helps nigerian university students calculate their GPA</p>
                        <p>React</p>
                    </div>

                </div>
                <div className="form">
                    <h1 id="contact">Contact me</h1>
                    {/* <form
                    name="contact"
                    method="post"
                    netlify
                    >
                    <label htmlFor="name">Your name</label>
                    <input type="text" name="name"/>
                    <label htmlFor="mail">E-mail</label>
                    <input type="text" name="email" autoCapitalize="off" autoComplete="off"/>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="" cols="30" rows="10">
                    </textarea>
                    <button type="submit">Send</button>
                    </form> */}

                    <form name="contact" method="post" netlify>
                        <input type="hidden" name="form-name" value="contact" 
                        />
                        <p>
                            <label>Your Name: <input type="text" name="name"/></label>
                        </p>
                        <p>
                            <label>Your Email: <input type="email" name="email"/></label>
                        </p>
                        <p>
                            <label>Message: <textarea name="message" cols="30" rows="10"></textarea></label>
                        </p>
                        <p>
                            <button type="submit">Send</button>
                        </p>
                    </form>
                </div>
            </div>
                <footer>
                    <p>Emmanuel Aiyenigba, 2020.</p>
                    
                </footer>
        </div>
    );
}
export default App;
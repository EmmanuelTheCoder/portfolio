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


    const date =   new Date();
    const getYear = date.getFullYear();
    return(
        <div className="app">
            <header>
            <div className="intro">
                    <Navbar className="main-navbar"/>
                    <div className="hamburger">
                        <img alt="menu" src="https://img.icons8.com/metro/26/000000/menu.png"
                         onClick={openHamburger}
                        />
                        
                    </div>
                    <div className="close-hamburger-content">
                    <div className="hamburger-content">
                        <p onClick={closeHamburger}>x</p>
                        <a href="#intro" onClick={closeHamburger}>About</a>
                        <a href="#contact" onClick={closeHamburger}>Contact</a>
                        <a href="#projects" onClick={closeHamburger}>Projects</a>
                        <a href="https://www.dropbox.com/scl/fi/nhg2grf1p7y7nl99nq98s/Emmanuel-Aiyenigba-s-resume.docx?dl=0&rlkey=27qszpeq5jnwe9j38tn3i4kgi" onClick={closeHamburger}>Resume</a>
                        <p></p>
                    </div>
                    </div>
                
                    <div className="unmove">
                        <h1 id="intro">HI, I'm Emmanuel</h1>
                        
                        <ReactRotatingText className="frontend" items={["Frontend engineer", "Meticulous and energetic", "Design driven", "team player", "creative thinker"]}
                        typingInterval="200" emptyPause= "1500"/>
                    </div>
                    <div className="icon-container">
                        <a href="https://github.com/EmmanuelTheCoder" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" className="icon"/> </a>
                        <a href="https://twitter.com/EmmanuelCoder" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" className="icon" /> </a>
                        <a href="mailto:loyaltysamuel001@gmail.com" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/ios-filled/22/000000/secured-letter--v2.png" alt="mail"/></a>
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
                    I am a meticulous frontend engineer 
                    with 3+ years experience building frontend products.
                    An enthusiatic team player and deep creative thinker.
                    <button className="hire" onClick={showDisplay}>Hire me</button>
                </p>
                
                <img src={emmanuel} alt="my pic"/>
            </div>
            {/* stop header */}

            </header>
            <div className="experience">
                <h1 id="experience">Experience</h1>

                <div className="firstex">
                    <h2>Frontend engineer</h2>
                    <p>@TEC</p>
                    <p className="job-desc">Worked across teams to build the user interface of internal
                        products for the company with JavaScript, converting UI designs into pixel perfect frontend, optimized the
                        rendering of server-side data on the client-side using React hooks and state management with Redux.
                    </p>
                </div>
                <div className="div-job-stack">
                <img src="https://img.icons8.com/color/30/000000/arrow--v1.png" alt="arrow"/>
                        <p>JavaScript</p>
                        <p>React</p>
                        <p>Redux</p>
                        <p>REST APIs</p>
                        

                </div>
                <div className="secondex">
                    <h2>Frontend developer</h2>
                    <p>@LoyaltyUpdates</p>
                    <p className="job-desc">
                        Helped build interactive visual elements for web applications; worked with the backend team to implement server-side logic
                        on the client-side through API integration; optimized web applications for maximum speed and scalability.
                    </p>
                </div>
                <div className="div-job-stack">
                <img src="https://img.icons8.com/color/30/000000/arrow--v1.png" alt="arrow"/>
                        <p>JavaScript</p>
                        <p>React</p>
                        <p>Context</p>
                        <p>REST APIs</p>
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
                    <img src="https://img.icons8.com/color/96/000000/redux.png" alt="redux"/>
                    </p>
                    <p>Redux</p>
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
                        <h2>IP-Address-Finder</h2>
                        <div className="project-link">
                          <a href="https://github.com/EmmanuelTheCoder/ip-address-tracker" target="_blank" rel="noopener noreferrer"><img src={github} alt="gitub" className="project-github" /></a>
                        </div>
                        <p className="description">Search and get the geographical location and internet service provider of any IP address of choice.</p>
                            <hr />
                         
                        <p> React, REST API</p>
                    </div>
                <div className="firstp">
                        <h2>cBay</h2>
                        <div className="project-link">
                          <a href="https://github.com/EmmanuelTheCoder/shop-for-clothes" target="_blank" rel="noopener noreferrer"><img src={github} alt="gitub" className="project-github" /></a>
                        </div>
                        <p className="description">An online store for purchasing quality clothes</p>
                            <hr/>
                         
                        <p> React, Context, Styled-components</p>
                    </div>

                <div className="firstp">
                        <h2>NetliGet</h2>
                        <div className="project-link">
                          <a href="https://github.com/EmmanuelTheCoder/Netliget" target="_blank" rel="noopener noreferrer"><img src={github} alt="gitub" className="project-github" /></a>
                          < a target="_blank" rel="noopener noreferrer" href="https://findnumber.netlify.app/"><img src={browser} alt="browser" className="project-browser" /></a>
                        </div>
                        <p className="description">Find the network provider of any Nigerian phone number</p>
                            <hr/>
                           
                        <p> React</p>
                    </div>
                
                <div className="firstp">
                        <h2>Film Flix</h2>
                        <div className="project-link">
                          <a href="https://github.com/EmmanuelTheCoder/movie-info" target="_blank" rel="noopener noreferrer"><img src={github} alt="gitub" className="project-github" /></a>
                        </div>
                        <p className="description">Get information about any movie of your choice</p>
                        <hr />
                        
                        <p>React, API</p>
                    </div>
                    

                    <div className="firstp">
                        <h2>CoolPexels</h2>
                        <div className="project-link">
                          <a href="https://github.com/emmanuelTheCoder/cool-pexels" target="_blank" rel="noopener noreferrer"><img src={github} alt="gitub" className="project-github" /></a>
                          <a href="https://coolpexels.netlify.app" target="_blank" rel="noopener noreferrer"><img src={browser} alt="browser" className="project-browser" /></a>
                        </div>
                        <p className="description">Get cool photos and videos to download. Built on pexels.com's API</p>
                        <hr />
                       
                        <p>TypeScript, Javascript, React, RESTAPI </p>
                    </div>
                      
                    <div className="secondp">
                        <h2>dayPlanner</h2>
                        <div className="project-link">
                            <a href="https://github.com/EmmanuelTheCoder/TodoList_App" target="_blank" rel="noopener noreferrer"><img src={github} alt="gitub" className="project-github" /></a>
                            <a href="https://todoplan.netlify.app" target="_blank" rel="noopener noreferrer"><img src={browser} alt="browser" className="project-browser" /></a>
                        </div>
                        <p className="description">Plan and organize your daily activities with this TodoList web app. 
                        </p>
                        <hr />
                        
                        <p>HTML, CSS, JS</p>
                    </div>
                    <div className="fifthp">
                        <h2>getWeather</h2>
                        <div className="project-link">
                            <a href="https://github.com/EmmanuelTheCoder/Weather-app-withReact" target="_blank" rel="noopener noreferrer"><img src={github} alt="gitub" className="project-github" /></a>
                            <a href="https://weatherzone.netlify.app" target="_blank" rel="noopener noreferrer"><img src={browser} alt="browser" className="project-browser" /></a>
                        </div>
                        <p className="description">Search and get weather information for any city</p>
                        <hr />
                       
                        <p>HTML, CSS, JS</p>
                    </div>

                </div>
                <div className="form">
                    <h1 id="contact">Contact me</h1>

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
                    <p>Emmanuel Aiyenigba, {getYear}.</p>
                    <p>e-mail: loyaltysamuel001@gmail.com</p>
                </footer>
        </div>
    );
}
export default App;

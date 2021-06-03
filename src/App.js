import React from 'react';
// import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import { Route, Link } from 'react-router-dom'; 
import { HashRouter as BrowserRouter } from 'react-router-dom';
import Home from './Home.js'; 
import About from './About.js'; 
import Resume from './Resume.js';
import './App.css';
import emaillogo from './email-icon.svg'
import linkedinlogo from './linkedin-icon.svg'
import pinterestlogo from './pinterest-icon.svg'

class App extends React.Component {  
  constructor(props) {
      super(props);
      this.state = {
        scroll: "up"
      }
      this.updateScroll = this.updateScroll.bind(this);
  }
  updateScroll(ev) {
    const direc = ev.target.getAttribute("mode");
    console.log(direc);
    if (direc == "up") {window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });}
    else {window.scroll({
      top: 9999, 
      left: 0, 
      behavior: 'smooth'
    });}
  }
  showTip(ev) {
    const tip = ev.currentTarget.querySelector(".mytooltip");
    console.log(tip);
    tip.style.display = "inline-block";
  }

  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="navigation">
          <div className="upperName">
          <Link to="/" className="logo" id="Name" mode="up" onClick={this.updateScroll}>Ayelet Blumovitz</Link>
          </div>
          <div className="NavButtons">
            <Link to="/" className="item" mode="up" onClick={this.updateScroll}>HOME</Link>
            <Link to="/Resume" className="item">RESUME</Link>
            <Link to="/About" className="item">ABOUT</Link>
            <Link className="item" mode="down" onClick={this.updateScroll} >CONTACT</Link>
          </div>
          </div>
          <div className="main">
            <Route exact path="/" component={Home} />
            <Route path="/Resume" component={Resume} />
            <Route path="/About" component={About}/>
            <footer className="contact">
              <div className="icons">
              <p id="sec1">CONTACT ME</p>
              <div class = "mytooltip">
                <a href='mailto:ablumovitz@tulane.edu' target="_blank"> 
                <img src={emaillogo}></img>
                </a>
                <span class = "mytext">EMAIL</span>
              </div>
              <div class = "mytooltip">
                <a href='https://www.linkedin.com/in/ayeletblumovitz/' target="_blank"> 
                <img src={linkedinlogo}></img>
                </a>
                <span class = "mytext">LINKEDIN</span>
              </div>
              <div class = "mytooltip">
                <a href="https://www.pinterest.com/ayeletblumovitz/" target="_blank"> 
                <img src={pinterestlogo}></img>
                </a>
                <span class = "mytext">PINTEREST</span>
              </div>
              </div>
            </footer>
          </div>
        </div>
      </BrowserRouter>
    );
  }

  
}
export default App;

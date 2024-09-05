import React, { Component } from 'react';
import "./Portfolio.scss"
import home_img from "../assets/img/profolio.png"
import Slider from "react-slick";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // your state here
    };
  }

  render() {
    const ofcNames=["mojoreads", "cognizant", "LTIMindtree"]
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <div className='portfolio-main-wrapper'>
        <div className='body-nav-wrapper'>
          <header class="header"><a class="header--logo" href="https://www.free-css.com/free-css-templates"><img src="assets/img/logo.png" alt="website template image" />
            <p>Global</p>
          </a>
            <button class="header--cta cta">Hire Us</button>
            <div class="header--nav-toggle"><span></span></div>
          </header>
          <nav class="l-side-nav">
          <ul class="side-nav">
            <li class="is-active"><span>Home</span></li>
            <li class=""><span>About Me</span></li>
            <li class=""><span>Works</span></li>
            <li class=""><span>Experience</span></li>
            <li class=""><span>Contact</span></li>
          </ul>
        </nav>


        {/* UI for all the experiwences  */}
        <ul class="l-main-content main-content">
          <li class="l-section section">
            <div class="intro">
              <div class="intro--banner">
                <div className='intro--left'>
                <h1>Hi,  Iam<br/>
                  MERN Stack Developer<br/>
                  -Yamini K</h1>
                <button class="cta" onClick={()=>alert("HI")}>Hire Us  <span class="btn-background"></span></button>
                </div>
             
                <img src={home_img} alt="website template image"/>
                </div>
              {/* <div class="intro--options"><a href="https://www.free-css.com/free-css-templates">
                <h3>Metiew &amp; Smith</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
                </a> <a href="https://www.free-css.com/free-css-templates">
                <h3>Fantasy interactive</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
                </a> <a href="https://www.free-css.com/free-css-templates">
                <h3>Paul &amp; shark</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
                </a> </div> */}
            </div>
          </li>
          <li class="l-section section section--is-active">
            <div class="work">
              <h2>Selected work</h2>
              {/* <div class="work--lockup">
                <ul class="slider">
                  <li class="slider--item slider--item-left"><a href="https://www.free-css.com/free-css-templates">
                    <div class="slider--item-image"><img src={home_img} alt="website template image"/></div>
                    <p class="slider--item-title">Mojoreads</p>
                    <p class="slider--item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
                    </a> </li>
                  <li class="slider--item slider--item-center"><a href="https://www.free-css.com/free-css-templates">
                    <div class="slider--item-image"><img src={home_img} alt="website template image"/></div>
                    <p class="slider--item-title">Cognizant</p>
                    <p class="slider--item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
                    </a> </li>
                  <li class="slider--item slider--item-right"><a href="https://www.free-css.com/free-css-templates">
                    <div class="slider--item-image"><img src={home_img} alt="website template image"/></div>
                    <p class="slider--item-title">LTI MINDTREE</p>
                    <p class="slider--item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
                    </a> </li>
                </ul>

                <div class="slider--prev"> </div>
                <div class="slider--next">  </div>
              </div> */}
              <Slider  {...settings}>
              {ofcNames.map(item=>
              <div class="work--lockup">

                    <a href="https://www.free-css.com/free-css-templates">
                    <div class="slider--item-image"><img src={home_img} alt="website template image"/></div>
                    <p class="slider--item-title">{item}</p>
                    <p class="slider--item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
                    </a>  
              </div>)}
              </Slider>
            
            </div>
          </li>
          <li class="l-section section">
            <div class="about">
              <div class="about--banner">
                <h2>We<br/>
                  believe in<br/>
                  passionate<br/>
                  people</h2>
                <a href="https://www.free-css.com/free-css-templates">Career <span></span></a> <img src="assets/img/about-visual.png" alt="website template image"/></div>
              <div class="about--options"><a href="https://www.free-css.com/free-css-templates">
                <h3>Winners</h3>
                </a> <a href="https://www.free-css.com/free-css-templates">
                <h3>Philosophy</h3>
                </a> <a href="https://www.free-css.com/free-css-templates">
                <h3>History</h3>
                </a> </div>
            </div>
          </li>
          <li class="l-section section">
            <div class="contact">
              <div class="contact--lockup">
                <div class="modal">
                  <div class="modal--information">
                    <p>Pawia 5, 31-154 Kraków, Poland</p>
                    <a href="https://www.free-css.com/free-css-templates">name@domain.com</a> <a href="https://www.free-css.com/free-css-templates">+48 12 628 75 60</a></div>
                  <ul class="modal--options">
                    <li><a href="https://www.free-css.com/free-css-templates">Bēhance</a></li>
                    <li><a href="https://www.free-css.com/free-css-templates">dribbble</a></li>
                    <li><a href="https://www.free-css.com/free-css-templates">Contact Us</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li class="l-section section">
            <div class="hire">
              <h2>You want us to do</h2>
       
            </div>
          </li>
        </ul>

        {/* end of the UI the Experience */}

        </div>
      </div>
    );
  }
}

export default Portfolio;
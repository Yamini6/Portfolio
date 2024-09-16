import React, { Component } from 'react';
import "./Portfolio.scss"
import company from "../assets/img/company.png"
import round from "../assets/img/round_final_2.png"
import projectImg from "../assets/img/spotify.jpg"
import projectImg2 from "../assets/img/iptracker3.jpg"
import projectImg3 from "../assets/img/rock_game.png"
import projectUnderline from "../assets/img/project_underline.png"
import skillImg from "../assets/img/skill_img.png"
import linkedIn from "../assets/img/linked_in.png"
import WhatsApp from "../assets/img/whatsapp.png"
import instagram from "../assets/img/github.png"
import Phone from "../assets/img/phone.png"
import Email from "../assets/img/email.png"
import ContactMe from "../assets/img/contactme.png"
import yamini from "../assets/img/meImg2.png"
import navBar from "../assets/img/bars.png"


class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: true,
      isClicked:false
    };
    this.boxRef = React.createRef();
    this.ProjectRef = React.createRef();
    this.SkillRef = React.createRef();
    this.ExperienceRef = React.createRef();
    this.ExperienceRef1 = React.createRef();
    this.ExperienceRef2 = React.createRef();

  }
  handleScroll=(data)=>{
    document.getElementById(data).scrollIntoView({ behavior: 'smooth' });

  }
  componentDidMount(){
    if(window.innerWidth <= 768){
     this.setState({isDesktop: false})
    }
    this.observeElement();
  }
  handleClick=()=>{
    if(!this.state.isDesktop){
      this.setState({isClicked: !this.state.isClicked})
    }
  }
  observeElement() {
    const observer = new IntersectionObserver(entries => {
      console.log("entries:::",entries)
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    });

    if (this.boxRef.current) {
      observer.observe(this.boxRef.current);
    }
    if (this.ProjectRef.current) {
      observer.observe(this.ProjectRef.current);
    }

    if (this.SkillRef.current) {
      observer.observe(this.SkillRef.current);
    }
    
    if (this.ExperienceRef.current) {
      observer.observe(this.ExperienceRef.current);
    }
    if (this.ExperienceRef1.current) {
      observer.observe(this.ExperienceRef1.current);
    }
    if (this.ExperienceRef2.current) {
      observer.observe(this.ExperienceRef2.current);
    }
  }
  render() {
      const {isDesktop,isClicked} = this.state
    return (
      <div className='portfolio-main-wrapper'>
        <div className='nav-bar' onClick={this.handleClick}>
        {!isDesktop && <img className="nav-img" src={navBar}/>}
          {(isDesktop || (!isDesktop && isClicked)) && <ul>
            <li onClick={(e)=>this.handleScroll('HomePage')}> Home</li>
            <li onClick={(e)=>this.handleScroll('About')}>About</li>
            <li onClick={(e)=>this.handleScroll('Experience')}>  Experience </li>
            <li onClick={(e)=>this.handleScroll('project')}>   Projects</li>
            <li onClick={(e)=>this.handleScroll('skill')}>   Skills </li>
            <li onClick={(e)=>this.handleScroll('contactMe')}> ContactMe </li>
          </ul>}
        </div>

      <div className='HomePage' id="HomePage">
        <div className='Homepage-title'>
        <h2> Hello,  </h2> <span className='title-name'> Iam Yamini! </span>
        <p> - A Mern Stack Developer</p>
        </div>
       <div className='hire-me-btn-container'> 
       <button className='hire-me-btn'  onClick={(e)=>this.handleScroll('contactMe')}>Hire me</button>
       <img src={"https://marketplace.canva.com/6HHnM/MAFZYw6HHnM/1/tl/canva-modern-scribble-lines-MAFZYw6HHnM.png"}></img>
       </div>
      </div>
      <div className='About-me-wrapper' id="About" >
        <div className='about-me' ref={this.boxRef}> 
          <div className='about-title-container'>
          <img className='company-img' src={round}/>
          <h1>About me</h1>
          </div>
          <p>
          I am a skilled MERN stack developer with expertise in MongoDB, Express.js, React, and Node.js. I excel in designing and implementing scalable web applications that deliver exceptional user experiences and robust functionality. With a commitment to clean code and a deep understanding of both front-end and back-end technologies, I bring a strategic approach to every project. I stay current with industry trends to ensure that my solutions are innovative and aligned with best practices.
          </p>
        </div>
        <div className='about-me-img'>
         <img src={yamini}></img>
        </div>

      </div>
      <div className='Experience' id="Experience">
        <div className='Experience-title'> Experience </div>
        <div className='Experience-details-container'>

        <div className='Experience-details'>
          <div>
            <img className='company-img' src={company}  ref={this.ExperienceRef}/>
            <p className='company-title'>Mojoreads</p>
            <hr className='border'/>
            <p className='company-post'>Software Engineer</p>
            <span className='company-time'>March 2019 - September 2019</span>
          </div>
        </div>
        <div className='Experience-details'>
          <div>
          <img className='company-img' src={company} ref={this.ExperienceRef1}/>
            <p className='company-title'>Cognizant</p>
            <hr className='border'/>
            <p className='company-post'>Program Analyst</p>
            <span className='company-time'>December 2019 - June 2021</span>
          </div>
        </div>
        <div className='Experience-details'>
          <div>
          <img className='company-img' src={company} ref={this.ExperienceRef2}/>
            <p className='company-title'>LTI Mindtree</p>
            <hr className='border'/>
            <p className='company-post'> Senior Software Engineer</p>
            <span className='company-time'> June 2021 - Present</span>
          </div>
        </div>
        </div>
 
      </div>
      <div className='Projects-container' id="project">
       <div className='project-title-container'>
       <h1 className='project-title'>Projects </h1>
       <img className='underline' src={projectUnderline}  ref={this.ProjectRef}/>
       </div>
       <div className='project-detail-container'>
       <a href="https://master--spotifyclone22.netlify.app/"> <div className='project-detail'>
          <img className='project-img'  src={projectImg}/>
          <p className='project-title'> spotify clone app</p>
           <hr className='border'/>
           <p className='project-explain'>
          It's a Spotify clone that leverages the Spotify API to replicate key features. It uses Spotify's API for authentication, song playback, and fetching song lists. To use the app, you need a Spotify Developer account and your own client ID from the Spotify Developer website..</p>
        </div></a>
       <a href="https://sunny-chaja-eeb173.netlify.app/"> <div className='project-detail'>
          <img className='project-img'  src={projectImg3}/>
          <p className='project-title'> rock-paper-scissors game</p>
           <hr className='border'/>
           <p className='project-explain'>A rock-paper-scissors game built with React provides an interactive web experience where players choose their move, and the app instantly displays the result. React’s efficient state management ensures real-time updates, making the game smooth and engaging to play online.</p>
        </div></a>
        <a href="https://6359599e79e6551360d973eb--serene-lamington-8b4dc4.netlify.app/"><div className='project-detail'>
          <img className='project-img' src={projectImg2}/>
          <p className='project-title'> IP Tracker</p>
           <hr className='border'/>
           <p className='project-explain'>An IP tracker built with React.js lets users input an IP address to instantly get location details like city, region, and country. The app provides a responsive interface with real-time updates, displaying comprehensive data for quick and accurate IP tracking.</p>
        </div></a>
       </div>
      </div>
      <div className='skills-container' id="skill">
        <div className='skills-left-side'>
          <h1 className='title'>Skills</h1>
          <p> Skills I have which make my projects</p>
          <img src={skillImg}  className='underline'  ref={this.SkillRef}/>
        </div>
        <div className='skills-right-side'>
          <div className='sub-skills'>
            <h1>Frontend Skills</h1>
            <p className='skills-name'>HTML5, SCSS, JavaScript, React Js, Redux, Node JS </p>
            <hr className='border'/>
          </div>
          <div className='sub-skills'>
            <h1>Backend Skills</h1>
            <p className='skills-name'> Node JS, Express.js, MongoDB, MySQL, GraphQL</p>
            <hr className='border'/>
          </div>
          <div className='sub-skills'>
            <h1>Testing Skills & Tools </h1>
            <p className='skills-name'>Unit Testing, API Testing, JEST, Postman, JIRA, GitHub </p>
            <hr className='border'/>
          </div>
          <div className='sub-skills'>
            <h1>Softskills </h1>
            <p className='skills-name'>Communication, Problem-Solving, Adaptability, Leadership </p>
          </div>
        </div>
      </div>
      <div className='contact-me-container' id="contactMe">
        <div className='contact-left-side'>
          <div className='title-container'>
            {/* <img src={ContactMe}/> */}
          <h1> Reach out if you want to create impactful web applications together</h1>
          </div>
          <hr className='border'/>
          <span className='contact-desc'> To get in touch, visit me on social media:</span>
          <div className='linkedin-container'>
          <a href={"https://www.linkedin.com/in/yamini-kandrekula-4817ab156heiufhsudycguydssgcdysgcysdgcyusdhyd/"}> <img className='linked' src={linkedIn}/> </a>
         <a href={"tel: 9133018357"}> <img className='linked' src={WhatsApp}/></a> 
         <a href={"https://github.com/Yamini6"}> <img className='linked' src={instagram}/></a> 
         <a
        href="/yamini_kandrekula.pdf"
        download="Yamini_resume"
        target="_blank"
        rel="noreferrer"
      ><p className='linkedin-dl'>@YaminiKandrekula(resume)</p></a>
          </div>
        </div>
        <div className='contact-right-side'>
          <div className='sub-contact'>
            <img src={Phone}/>
            <a href={"tel: 9133018357"}>  <div className='contact-div'>
              <p>PHONE</p>
              <span>
                +91 9133018357
              </span>
            </div></a> 
          </div>
          <div className='sub-contact'>
          <img src={Email}/>
          <a href={"mailto: YaminiKandrekula@gmail.com"}>   <div className='contact-div'>
              <p>EMAIL</p>
              <span>
             YaminiKandrekula@gmail.com
              </span>
            </div></a> 
            </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Portfolio;
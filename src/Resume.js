import React from "react";
import download from './download-icon.svg';

class Resume extends React.Component {  

    render () {
        window.scrollTo(0, 0)
        const indent = {
            fontStyle: 'italic',
        };
        const bold = {
            fontWeight: 600,
        };
        return (
        <div className="Resume">

            <div className = "resumeTop">
            <h1 id="resumeTitle">Resume</h1>
            <a href='./Ayelet-Blumovitz-Resume.pdf' id="resumeDownload" download>
                <img src={download}></img>
            </a>
            </div>

            <div className = "resumeLeft">
            <div className = "Contact">
            <h3 >Contact</h3>
            <p>E-mail: ablumovitz@tulane.edu</p>
            <p>LinkedIn: https://www.linkedin.com/in/ayeletblumovitz/</p>
            <p>Phone: 847-420-5422</p>
            </div>
            <div className = "RelevantCoursework">
            <h3>Relevant Coursework</h3>
            <p>Design and Creative Thinking</p>
            <p>Design and Making Studio</p>
            <p>Design Studio Core II</p>
            <p>Introduction to Architecture</p>
            <p>Visual Communication and Advocacy</p>
            <p>Art History: Renaissance to Present</p>
            <p>Harmony</p>
            <p>Musicianship Lab</p>
            </div>
            <div className = "Skills">
            <h3>Skills</h3>
            <p>Adobe Illustrator</p>
            <p>Adobe InDesign</p>
            <p>Adobe Photoshop</p>
            <p>Adobe After Effects</p>
            <p>Technical Illustration</p>
            </div>
            <div className = "Interests">
            <h3>Interests</h3>
            <p>Journalistic Writing</p>
            <p>Drawing and Painting</p>
            <p>Classical piano and singing</p>
            <p>Yoga</p>
            <p>Cooking</p>
            </div>
            <div className = "Languages">
            <h3>Languages</h3>
            <p>English</p>
            <p>Hebrew</p>
            <p>Italian (beginner)</p>
            </div>
            </div>

            <div className = "resumeRight">
            <div className = "Education">
            <h3>Education</h3>
            <p style={bold}>Tulane University Class of 2023</p>
            <p>Major in Design</p>
            <p>Concentration in Architecture</p>
            <p>Minor in Music</p>
            </div>
            <div className = "Experience">
            <h3>Experience</h3>
            <p style={bold}>Design Construction Concepts 2020</p>
            <p style={indent}>Summer internship</p>
            <p style={bold}>JUF Lewis Summer Intern Program 2020</p>
            <p style={indent}>Eight week professional advancement seminar</p>
            <p style={bold}>American Academy of Gymnastics 2016-2019</p>
            <p style={indent}>Gymnastics coach for children ranging ages 5-12</p>
            <p style={bold}>English Tutor 2017-2019</p>
            <p style={indent}>Assisting high-school students</p>
            <p style={bold}>YMCA Volunteer 2016-2018</p>
            <p style={indent}>Volunteer in after-school care program - KidCare</p>
            </div>
            <div className = "Involvement">
            <h3>Involvement</h3>
            <p style={bold}>Peer Mentor</p>
            <p style={indent}>Teacher’s assistant for first year seminar class</p>
            <p style={indent}>The Architecture of Place</p>
            <p style={bold}>Writer on The Crescent Magazine</p>
            <p style={indent}>Tulane’s culture magazine</p>
            <p style={bold}>Alpha Rho Chi Brother</p>
            <p style={indent}>Professional Architecture fraternity</p>
            <p style={bold}>Wave Leader</p>
            <p style={indent}>Freshman orientation director</p>
            <p style={bold}>Hillel member</p>
            <p style={indent}>Center for Jewish life at Tulane</p>
            <p style={bold}>Member of Phi Mu Sorority</p>
            </div>
            </div>           
        </div>
    )
    }
}
export default Resume;
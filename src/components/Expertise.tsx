import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJava, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Expressjs",
    "Nodejs",
    "SQL",
    "MongoDB",
    "PostgreSQL",
    "Postman"
];

const labelsSecond = [
    "Java",
    "JEE",
    "Git",
    "Jsp",
    "JDBC",
    "Hibernate",
    "Spring MVC",
    "Spring Boot",
    
];

const labelsThird = [
    "Flutter",
    "Dart",
    "FireBase",
    "FCM",
    "Postman",
    "Git",
    "GitHub",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have built a diverse array of web applications from scratch using modern technologies such as MERN. I have a strong proficiency in the SDLC process and frontend + backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faJava} size="3x"/>
                    <h3>Java FullStack Development</h3>
                    <p>I have built several applications using Java and using java frameworks which make thee applications more scalable and user friendly .</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faGooglePlay} size="3x"/>
                    <h3>Flutter App Development</h3>
<p>Expertise in Flutter App development and Firebase integrtion for scalable apps and web applications. Committed to delivering highquality solutions</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
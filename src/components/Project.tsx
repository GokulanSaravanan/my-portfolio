import React from "react";
import prj1 from '../assets/images/prj1.png';
import prj2 from '../assets/images/prj2.jpg';
import prj3 from '../assets/images/prj3.jpg';
import prj4 from '../assets/images/prj4.webp';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/GokulanSaravanan/sharingacademicfeeds" target="_blank" rel="noreferrer"><img src={prj1} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/GokulanSaravanan/sharingacademicfeeds" target="_blank" rel="noreferrer"><h2>Academic Feeds Sharing Website</h2></a>
                <p>TheAcademic Feeds Sharing Website is developed using React Js and Firebase, providing a platform for users to share and discuss academic feeds. It includes features such as user registration, login, and real-time communication. Integrated user-engagement features, including the implementation of modules like Timeline feedback.</p>
            </div>
            <div className="project">
                <a href="https://github.com/GokulanSaravanan/Job-Seeking-Application" target="_blank" rel="noreferrer"><img src={prj4} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/GokulanSaravanan/Job-Seeking-Application" target="_blank" rel="noreferrer"><h2>Jobseeking Application</h2></a>
                <p> The Jobseeking Application is a dynamic Android platform built using the Flutter ,Dart and Firebase technology stack. This project facilitates job seekers in their quest for employment by providing a user-friendly interface for job searching and application submission in android.
                    Utilized Flutter to create a responsive and visually appealing user interface for android users</p>
            </div>
            <div className="project">
                <a href="https://github.com/GokulanSaravanan/Chatappdart" target="_blank" rel="noreferrer"><img src={prj3} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/GokulanSaravanan/Chatappdart" target="_blank" rel="noreferrer"><h2>ChatApp</h2></a>
                <p>Executed an Android application project employing technologies including Flutter, Dart, and Firebase. Ensured a responsive and visually appealing user interface.
                    Implemented authentication and chat features for enhanced user interaction.</p>
            </div>
            <div className="project">
                <a href="https://github.com/GokulanSaravanan/Bookstore-Mern" target="_blank" rel="noreferrer"><img src={prj2} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/GokulanSaravanan/Bookstore-Mern" target="_blank" rel="noreferrer"><h2>Bookstore Website</h2></a>
                <p>Executed an Mern Stack project employing technologies including ReactJs, ExpressJs, NodeJs and MongoDB. Ensured a responsive and visually appealing user interface. Implemented CRUD Operations and Display Feactures of Books for enhanced user interaction.</p>
            </div>
            
            
        </div>
    </div>
    );
}

export default Project;
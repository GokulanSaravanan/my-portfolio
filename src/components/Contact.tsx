import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "../assets/styles/Contact.scss";

// const Cube = () => {
//   return (
//     <mesh rotation={[20, 20, 0]}>
//       <boxGeometry args={[1.5, 1.5, 1.5]} />
//       <meshStandardMaterial color={"#ff4500"} metalness={0.8} roughness={0.3} />
//     </mesh>
//   );
// };


function Contact() {


  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
                    <h1><p className='txt1'>Feel free to reach me @gokulanofficial12@gmail.com</p></h1>
         
        </div>
      </div>
    </div>
  );
}

export default Contact;






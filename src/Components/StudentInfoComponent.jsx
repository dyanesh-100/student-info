import React, { useState } from 'react';
import './StudentInfoComponent.css';
import img from '../assets/Images/img1.jpeg'

const StudentInfoComponent = () => {
  const [isvisible,setIsvisible] = useState(false)
  const togglevisibility = () => {
    setIsvisible(!isvisible)
  }
  
  
    return (
    <div className="container">
      <div className="card">
        <div className="icon">
           
          <img src={img} alt="Eye Icon" />
        </div>
        <p>Name: John Doe</p>
        <p>Registration No: 12345</p>
        <button className="toggle-button" onClick={togglevisibility}>
          {isvisible ? 'Hide Details' : 'Show Details'}
        </button>
        <div className={`additional-content ${isvisible ? 'visible' : 'hidden'}`}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ab nam, vitae quia ratione quae totam quod quo tempore sunt, repellendus at dolor fuga maiores accusantium officiis delectus! Qui, deserunt.</p>
        </div>
    </div>
    </div>
  );
};

export default StudentInfoComponent;

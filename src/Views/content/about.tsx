import React from "react";
import pic1 from '../../Assets/images/profile.png';

function About() {
  return (
    <div>
        <h2>About Me.</h2>
        <img className="profileimg" src={pic1} alt="logo" />
        <p className="selfintroduce">I am a beginner in web developing. I find coding is like playing games since I feel a great sense of satisfaction after I finish every single task.</p>
    </div>
  );
}

export default About;

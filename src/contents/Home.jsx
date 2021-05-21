import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import profilePic from "../img/profile.JPG";
class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <img src={profilePic} className="profilepic" alt={`Mahmudul Hasan Sagar`}/>
        <ReactTypingEffect
          className="typingeffect"
          text={["Hi! welcome to my Portfolio", "I am Sagar", "I am a web developer", "Have a look at what I've got"]}
          speed={100}
          eraseDelay={700}
        />
      </div>
    );
  }
}
export default Home;

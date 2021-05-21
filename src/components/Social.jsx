import React, { Component } from "react";
class Social extends Component {
  render() {
    return (
      <div className="social">
        <a href="https://github.com/mahmudsagar" target="">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.instagram.com/drphilosopher413/" target="">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/sagar.mahmud.90" target="">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.linkedin.com/in/mahmudul-s-6a7133121/" target="">
          <i className="fab fa-linkedin-in"></i>
        </a>
        {/* <a href="https://medium.com/@iam_naafi" target="">
          <i className="fab fa-medium-m"></i>
        </a> */}
      </div>
    );
  }
}
export default Social;

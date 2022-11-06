import React from "react";
import "./mobile.css";
function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div onClick={() => setIsOpen(!isOpen)} className="close-icon">
        <i class="fi-rr-cross-circle"></i>
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#skills">
            <i class="fi-rr-laptop option-icon"></i>Skills
          </a>
        </div>
        <div className="mobile-option">
          <a href="#work">
            {" "}
            <i class="fi-rr-briefcase option-icon"></i>Work
          </a>
        </div>
        <div className="mobile-option">
          <a href="https://jpromano.net/projects">
            <i class="fi-rr-pencil option-icon"></i>Projects
          </a>
        </div>
        <div className="mobile-option">
        <a href="https://oursuperadventures.com" target="_blank">
          <i class="fi-rr-plane option-icon"></i>Travels
        </a>
      </div>
        <div className="mobile-option">
          <a href="https://thedevchronicles.com" target="_blank">
            <i class="fi-rr-book option-icon"></i>Blog
          </a>
        </div>
        <div className="mobile-option">
          <a href="#contact">
            <i class="fi-rr-user option-icon"></i>Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;

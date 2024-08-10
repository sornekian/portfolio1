import { Link, NavLink } from 'react-router-dom';
import { useState } from "react";
import LogoS from '../../assets/images/logo-s.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faPuzzlePiece, faBars, faClose, faFile } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import resume from "../../assets/resume.pdf";
import "./index.scss";

export default function Sidebar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className='nav-bar'>
      <nav className={showNav ? `mobile-show` : ''}>
        <div className="nav-container">
          {/* <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
          </Link> */}
          <div className="nav-items">
            <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" to="/" data-text="Home">
              <FontAwesomeIcon icon={faHome} />
            </NavLink>
            <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="about-link" to="/about" data-text="About">
              <FontAwesomeIcon icon={faUser} />
            </NavLink>
            <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="project-link" to="/projects" data-text="Projects">
              <FontAwesomeIcon icon={faPuzzlePiece} />
            </NavLink>
            <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="contact-link" to="/contact" data-text="Contact">
              <FontAwesomeIcon icon={faEnvelope} />
            </NavLink>
          </div>
          <ul className="socials">
            <li>
              <a target="_blank" rel="noreferrer" href={resume} data-text="Resume">
                <FontAwesomeIcon icon={faFile} className="anchor-icon" />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sarven-ornekian/" data-text="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} className="anchor-icon" />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://github.com/sornekian" data-text="GitHub">
                <FontAwesomeIcon icon={faGithub} className="anchor-icon" />
              </a>
            </li>
          </ul>
          <FontAwesomeIcon onClick={() => setShowNav(true)} icon={faBars} color="#FF7F00" size="3x" className="hamburger-icon" />
          <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faClose} color="#FF7F00" size="3x" className="close-icon" />
        </div>
      </nav>
    </div>
  );
}

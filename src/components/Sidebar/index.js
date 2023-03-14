import { Link, NavLink } from 'react-router-dom';
import { useState } from "react";
import LogoS from '../../assets/images/logo-s.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faPuzzlePiece, faBars, faClose, faFile } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import resume from "../../assets/resume.pdf"
import "./index.scss";


export default function Sidebar() {
  const [showNav, setShowNav] = useState(false);


  return (
    <div className='nav-bar'>
      <Link className='logo' to='/'>
        <img src={LogoS} alt="logo" />
      </Link>
      <nav className={showNav ? `mobile-show` : ''}>
        <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
        <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="project-link" to="/projects">
          <FontAwesomeIcon icon={faPuzzlePiece} />
        </NavLink>
        <NavLink onClick={() => setShowNav(false)} exact="true" activeclassname="active" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
        <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faClose} color="#FF7F00" size="3x" className="close-icon"
        />
      </nav>
      <ul className="socials">
      <li>
              <a target="_blank"
              rel="noreferrer"
              href={resume}
              >
                  <FontAwesomeIcon icon={faFile} color="grey" className="anchor-icon" />
              </a>
          </li>
          <li>
              <a target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/sarven-ornekian/"
              >
                  <FontAwesomeIcon icon={faLinkedin} color="grey" className="anchor-icon" />
              </a>
          </li>
          <li>
              <a target="_blank"
              rel="noreferrer"
              href="https://github.com/sornekian"
              >
                  <FontAwesomeIcon icon={faGithub} color="grey" className="anchor-icon" />
              </a>
          </li>
      </ul>
      <FontAwesomeIcon onClick={() => setShowNav(true)} icon={faBars} color="#FF7F00" size="3x" className="hamburger-icon" />
    </div>
  );
}

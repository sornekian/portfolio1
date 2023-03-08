import "./index.scss";
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
  return (
    <div className='nav-bar'>
      <Link className='logo' to='/'>
        <img src={LogoS} alt="logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="project-link" to="/">
          <FontAwesomeIcon icon={faPuzzlePiece} />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/">
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
      </nav>
      {/* <ul>
          <li>
              <a target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/sarven-ornekian/"
              >
                  <FontAwesomeIcon icon="fa-brands fa-linkedin" color="#c8aa8b" />
              </a>
          </li>
          <li>
              <a target="_blank"
              rel="noreferrer"
              href="https://github.com/sornekian"
              >
                  <FontAwesomeIcon icon="fa-brands fa-square-github" color="#c8aa8b" />
              </a>
          </li>
      </ul> */}
    </div>
  );
}

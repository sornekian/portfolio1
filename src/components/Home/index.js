import { Link } from 'react-router-dom';
import './index.scss'

const Home = () => {
    
    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>My name is Sarven
                    <br />
                    and welcome to my portfolio!
                    <br />
                    </h1>
                    <h2>Software Engineer / Front End Developer</h2>
                    <Link to="/contact" className='flat-button'>Contact Me</Link>
                </div>
            </div>
        </>
    )
}

export default Home
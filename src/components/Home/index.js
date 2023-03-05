import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import AnimatedLetters from '../AnimatedLetters';
import './index.scss'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')


    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                    Hello,
                    <br />
                    my name is                    
                    &nbsp;
                    <span className={`${letterClass} _16`}>Sarven,</span>
                    <br />
                    welcome to my portfolio!
                    </h1>
                    <h2>Software Engineer / Front End Developer</h2>
                    <Link to="/contact" className='flat-button'>Contact Me</Link>
                </div>
            </div>
        </>
    )
}

export default Home
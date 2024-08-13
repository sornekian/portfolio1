import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import selfie from '../../assets/selfie.png'
import './index.scss'

export default function Home() {
  const [letterClass, setLetterClass] = useState('text-animate')

  const phraseArray = [
    'H',
    'e',
    'y',
    ',',
    '',
    'm',
    'y',
    '',
    'n',
    'a',
    'm',
    'e',
    '',
    'i',
    's',
  ]

  const welcomeArray = [
    'w',
    'e',
    'l',
    'c',
    'o',
    'm',
    'e',
    '',
    't',
    'o',
    '',
    'm',
    'y',
    '',
  ]

  const portfolioArray = ['p', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o', '!']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={phraseArray}
              idx={15}
            />
            <br />
            <span className={`${letterClass} _16`}>Sarven,</span>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={welcomeArray}
              idx={22}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={portfolioArray}
              idx={22}
            />
          </h1>
          <h2>Software Engineer / Full Stack Developer</h2>
          <Link to="/contact" className="flat-button">
            Contact Me
          </Link>
        </div>
        <div className="picture-box">
          <img src={selfie} alt="selfie" />
        </div>
      </div>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  )
}

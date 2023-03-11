import React, { useState, useEffect } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';

export default function About() {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          I'm a young, ambitious, American Armenian front-end developer looking
          for a role in an established company with the opportunity to work with
          challenging and diverse projects.
        </p>
        <p>
          I am determined to tackle new and complex challenges of any difficulty.
          I have a keen eye for creative problem solving and look forward to
          expanding my professional experience.
        </p>
        <p>
          I believe it's important to always keep up to date with the latest
          trends and technologies in my field and to always keep an open mind
          to expand my skills and knowledge.
        </p>
      </div>
    </div>
    <Loader type="pacman" />
    </>
  );
}

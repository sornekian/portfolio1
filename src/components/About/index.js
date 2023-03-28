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
          I'm a young, ambitious, full-stack software engineer looking
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
        <p>
          In my free time, I enjoy playing tennis and building computers for gaming. 
          These hobbies not only provide me with a sense of relaxation and enjoyment, 
          but they also allow me to stay active and improve my problem-solving skills. 
          As a software engineer, I have a keen interest in understanding how hardware 
          and software work together, and building computers for gaming has given me 
          a deep appreciation for the intricacies of these systems.
        </p>
      </div>
    </div>
    <Loader type="pacman" />
    </>
  );
}

import React, { useState, useEffect } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import javascript from '../../assets/images/javascript.svg';
import html from '../../assets/images/html5.svg';
import css from '../../assets/images/css3.svg';
import django from '../../assets/images/django.svg';
import express from '../../assets/images/expressjs.svg';
import git from '../../assets/images/git.svg';
import github from '../../assets/images/github.svg';
import mongodb from '../../assets/images/mongodb.svg';
import nodejs from '../../assets/images/nodejs.svg';
import postgresql from '../../assets/images/postgresql.svg';
import python from '../../assets/images/python.svg';
import react from '../../assets/images/react.svg';
import sass from '../../assets/images/sass.svg';
import aws from '../../assets/images/aws.svg';
import heroku from '../../assets/images/heroku.svg';

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

    <div id="tech-grid">
      <div className="tech-grid-item"><img src={javascript} alt="" /></div>
      <div className="tech-grid-item"><img src={html} alt="" /></div>
      <div className="tech-grid-item"><img src={css} alt="" /></div>
      <div className="tech-grid-item"><img src={django} alt="" /></div>
      <div className="tech-grid-item"><img src={express} alt="" /></div>
      <div className="tech-grid-item"><img src={mongodb} alt="" /></div>
      <div className="tech-grid-item"><img src={nodejs} alt="" /></div>
      <div className="tech-grid-item"><img src={python} alt="" /></div>
      <div className="tech-grid-item"><img src={git} alt="" /></div>
      <div className="tech-grid-item"><img src={github} alt="" /></div>
      <div className="tech-grid-item"><img src={react} alt="" /></div>
      <div className="tech-grid-item"><img src={sass} alt="" /></div>
      <div className="tech-grid-item"><img src={postgresql} alt="" /></div>
      <div className="tech-grid-item"><img src={aws} alt="" /></div>
      <div className="tech-grid-item"><img src={heroku} alt="" /></div>
    </div>

    <Loader type="pacman" />
    </>
  );
}

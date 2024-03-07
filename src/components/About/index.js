import React, { useState, useEffect } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import javascript from '../../assets/images/javascript.svg'
import html from '../../assets/images/html5.svg'
import css from '../../assets/images/css3.svg'
import django from '../../assets/images/django.svg'
import express from '../../assets/images/expressjs.svg'
import git from '../../assets/images/git.svg'
import github from '../../assets/images/github.svg'
import mongodb from '../../assets/images/mongodb.svg'
import nodejs from '../../assets/images/nodejs.svg'
import postgresql from '../../assets/images/postgresql.svg'
import python from '../../assets/images/python.svg'
import react from '../../assets/images/react.svg'
import sass from '../../assets/images/sass.svg'
import aws from '../../assets/images/aws.svg'
import heroku from '../../assets/images/heroku.svg'
import docker from '../../assets/images/docker.svg'
import tailwind from '../../assets/images/tailwind.svg'
import typescript from '../../assets/images/typescript.svg'
import mongoose from '../../assets/images/mongoose.svg'
import restapi from '../../assets/images/restapi.svg'

export default function About() {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am an adaptable and hard working Junior Software Engineer, who
            thrives under pressure and has a strong technical background,
            focusing on creating innovative digital solutions. I am highly
            motivated for continuous learning as I am searching for the
            opportunity to grow as a professional developer.
          </p>
          <p>
            In my free time, I enjoy playing tennis and building computers for
            gaming. These hobbies not only provide me with a sense of relaxation
            and enjoyment, but they also allow me to stay active and improve my
            problem-solving skills. As a software engineer, I have a keen
            interest in understanding how hardware and software work together,
            and building computers for gaming has given me a deep appreciation
            for the intricacies of these systems.
          </p>
          <p>
            I believe it's imperative to remain up to date with the latest
            trends and technologies in this field and to always keep an open
            mind in order to expand my skills and knowledge.
          </p>
        </div>
      </div>

      <div id="tech-grid">
        <div className="tech-grid-item">
          <img src={javascript} alt="" />
        </div>
        <div className="tech-grid-item">
          <img src={html} alt="" />
        </div>
        <div className="tech-grid-item">
          <img src={css} alt="" />
        </div>
        <div className="tech-grid-item">
          <img src={django} alt="" />
        </div>
        <div className="tech-grid-item">
          <img src={express} alt="" />
        </div>
        <div className="tech-grid-item">
          <img src={mongodb} alt="" />
        </div>
        <div className="tech-grid-item">
          <img src={nodejs} alt="" />
        </div>
        <div className="tech-grid-item">
          <img src={python} alt="" />
        </div>
        <div className="tech-grid-item">
          <img src={git} alt="" />
        </div>
        <div className="tech-grid-item">
          <img src={github} alt="" />
        </div>
        <div className="tech-grid-item">
          <img src={react} alt="" />
        </div>
        <div className="tech-grid-item">
          <img src={sass} alt="" />
        </div>
        <div className="tech-grid-item">
          <img src={postgresql} alt="" />
        </div>
        <div className="tech-grid-item">
          <img src={aws} alt="" />
        </div>
        <div className="tech-grid-item">
          <img src={heroku} alt="" />
        </div>
        <div className="tech-grid-item">
          <img src={tailwind} alt="" />
        </div>
        <div className="tech-grid-item">
          <img src={typescript} alt="" />
        </div>
        <div className="tech-grid-item">
          <img src={docker} alt="" />
        </div>
        <div className="tech-grid-item">
          <img src={mongoose} alt="" />
        </div>
        <div className="tech-grid-item">
          <img src={restapi} alt="" />
        </div>
      </div>

      <Loader type="ball-clip-rotate-multiple" />
    </>
  )
}

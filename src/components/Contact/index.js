import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_vm0rc5g',
        'template_q0byf79',
        form.current,
        'W7dvulVmLsfbcVBYP'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(true)
        },
        () => {
          alert('Failed to send message, please try again.')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', '', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I appreciate you visiting my website. If you have any questions or
            would like to discuss potential work opportunities, please don't
            hesitate to contact me. Thank you!
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="Submit" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          {/* Sarven Ornekian
          <br />
          Chatsworth, CA
          <br />
          United States
          <br /> */}
        </div>
        <div className="map-wrap">
          <MapContainer center={[34.257274, -118.570976]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[34.257274, -118.570976]}></Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  )
}

export default Contact

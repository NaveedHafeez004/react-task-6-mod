import React from 'react';
import image from './image.png';
import { TypeAnimation } from 'react-type-animation';

function About() {
    return (
        <div id="about-section" className="container text-start px-5 text-center text-dark" style={{ marginTop: "100px", marginBottom: "100px" }}>
            <div className="row">
                <div className="col-md-6 d-flex align-items-center text-start">
                    <div >
                        <TypeAnimation
                            sequence={['Welcome!!\n I am Naveed', 1000, "",]}
                            speed={50}
                            style={{ whiteSpace: 'pre-line', fontSize: '3em', fontWeight: 'bolder'}}
                            repeat={Infinity}
                        /><br /><br /><br />
                        <p>As a 3rd-year Computer Science and Engineering (CSE) undergraduate with a deep passion for web development, I'm dedicated to creating innovative and user-friendly websites and web applications. I thrive on mastering the latest web technologies and frameworks to build dynamic and engaging online experiences. My goal is to contribute to the ever-evolving world of web development and make a positive impact on the digital landscape.</p>
                    </div>
                </div>

                <div className='col-md-2'></div>
                <div className="col-md-4">
                    <img src={image} alt="person image" className="img-round img-fluid border-dark" />
                </div>
            </div>
        </div>
    );
}

export default About;
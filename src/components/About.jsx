import React from 'react';
import "../CSS/App.css";
import Tyu from "../photos/tyu2.jpg"

function About() {
    const url ="https://www.vectorstock.com/royalty-free-vector/people-eating-junk-food-while-watching-tv-vector-33111748";
    return (
        <div className='about'>
            <div className='about-left'>
                <h3>About Us</h3>
                <p>Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit, without needing to wait for the content to be written and approved. It originally comes from a Latin text, but to today's reader, it's seen as gibberish.</p>
                <button className='about-btn'> know Us </button>
            </div>
            <div className='about-right'>
                <img src={Tyu} alt='' />
            </div>
        </div>
    )
}

export default About;
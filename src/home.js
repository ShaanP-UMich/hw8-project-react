import './css/style.css'
import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <div>
                <main className="home-page" id="main">
                    <div className='home-section'>
                        <div className='home-image-container'>
                            <h1 className="title">About</h1>
                            <div id='about' className='home-image-banner'></div>
                        </div>
                        <p className="main-paragraph">A site showcasing beautifully built custom keyboards.</p>
                    </div>

                    <div className='home-section'>
                        <div className='home-image-container'>
                            <h1 className="title">Why</h1>
                            {/* <img src={require('./imgs/about_2.png')} /> */}
                            <div id='why' className='home-image-banner'></div>
                        </div>
                        <p className="main-paragraph">Whether you're an enthusiast or a newbie, anyone can build the perfect
                            keyboard for an afforadable price. Conventional keyboards can cost a lot, which is why we're here
                            to help you make the switch.</p>
                    </div>

                    <div className='home-section'>
                        <div className='home-image-container'>
                            <h1 className="title">How</h1>
                            {/* <img src={require('./imgs/about_2.png')} /> */}
                            <div id='how' className='home-image-banner'></div>
                        </div>
                        <p className="main-paragraph">By following these simple guides, anyone can assembled their
                            very own custom keyboard.</p>
                        <div tabIndex={0} className='embed-video-container'>
                            <iframe tabIndex={0} src="https://www.youtube-nocookie.com/embed/Sm1DVbyeDiI" title="How to build your FIRST custom keyboard! (ON A BUDGET)" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen aria-hidden={true}></iframe>
                            <iframe tabIndex={0} src="https://www.youtube-nocookie.com/embed/deVaUvywGMw" title="How to Build a Mechanical Keyboard WITHOUT Soldering" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen aria-hidden={true}></iframe>
                            <iframe tabIndex={0} src="https://www.youtube-nocookie.com/embed/9P74eCU19d0" title="I Wish I Had Known This Before I Bought My First Custom Mechanical Keyboard | Beginners Guide" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen aria-hidden={true}></iframe>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}
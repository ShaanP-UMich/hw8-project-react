import './css/style.css'
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import SkipLink from './SkipLink.ts';

export default class Home extends Component {
    render() {
        return (
            <div>
                {/* <div class="skip"><Link to="/#main">Skip to Main Content</Link></div> */}

                <main className="home-page" id="main">
                    <div className='home-section'>
                        <h1 className="title">About</h1>
                        <img src={require('./imgs/about_2.png')} />
                        <p className="main-paragraph">A site showcasing beautifully built custom keyboards.</p>
                    </div>
                    <div className='home-section'>
                        <h1 className="title">Why</h1>
                        <img src={require('./imgs/why_1.png')} />
                        <p className="main-paragraph">Whether you're an enthusiast or a newbie, anyone can build the perfect
                            keyboard for an afforadable price. Conventional keyboards can cost a lot, which is why we're here
                            to help you make the switch.</p>
                    </div>
                </main>
            </div>
        );
    }
}
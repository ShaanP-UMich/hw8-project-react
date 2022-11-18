import './css/style.css'
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import SkipLink from './SkipLink.ts';

export default class Home extends Component {
    render() {
        return (
            <div>
                {/* <div class="skip"><Link to="/#main">Skip to Main Content</Link></div> */}

                <main className="container" id="main">
                    <h1 className="title">About</h1>
                    <p className="main-paragraph">A site showcasing beautifully built custom keyboards.</p>
                </main>
            </div>
        );
    }
}
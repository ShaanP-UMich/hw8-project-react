import './css/style.css'
import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <main className="container" id="main">
                <h1 class="title">About</h1>
                <p class="main-paragraph">A site showcasing beautifully built custom keyboards.</p>
            </main>
        );
    }
}
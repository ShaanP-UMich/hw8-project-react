import './css/style.css'
import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <div class="nav_links">
                        <Link class="currentPage" to="">Home</Link>
                        <Link to="components">Components</Link>
                        <Link to="showcase">Showcase</Link>
                    </div>
                </nav>
            </header>
        );
    }
}
import './css/style.css';
import './css/hamburger.css';
import React from 'react';
import { Link, useLocation } from "react-router-dom";
import SkipLink from './skipLink.ts';

function openNav() {
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("myNav").style.display = "unset";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

export default function Header() {
    const curr_pathname = useLocation().pathname;

    let pages = [
        {
            'page_name': 'Home',
            'path': "/",
            'className': ''
        },
        {
            'page_name': 'Components',
            'path': "/components",
            'className': ''
        },
        {
            'page_name': 'Showcase',
            'path': "/showcase",
            'className': ''
        }
    ]

    pages.forEach((page) => {
        if (curr_pathname === page.path) {
            page.className = 'currentPage';
        }
    });

    const page_links = pages.map((page) => (
        <Link key={page.page_name} className={page.className} to={page.path} onClick={closeNav} >{page.page_name}</Link>
    ));

    return (
        <div>
            <div className='skip'>
                <SkipLink className='skip'>
                    <button type='button'>Skip to Main Content</button>
                </SkipLink>
            </div>

            <header>
                <div className="header_content">
                    {/* <p className="site_title">Michigan Keyboards</p> */}
                    <Link className='site_title' to={"/"}>Michigan Keyboards</Link>
                    <span tabIndex={0} id='hamburger-menu-button' onClick={openNav}>&#9776;</span>
                </div>
                <nav>
                    <div className="nav_links">
                        {page_links}
                    </div>

                    <div id="myNav" className="overlay">
                        <span className="closebtn" onClick={closeNav}>&times;</span>
                        <div className="overlay-content">
                            {page_links}
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}
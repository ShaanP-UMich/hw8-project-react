import './css/style.css'
import React from 'react';
import { Link, useLocation } from "react-router-dom";
import SkipLink from './skipLink.ts';

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
        <Link key={page.page_name} className={page.className} to={page.path}>{page.page_name}</Link>
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
                    <p className="site_title">Michigan Keyboards</p>
                </div>
                <nav>
                    <div className="nav_links">
                        {page_links}
                    </div>

                    {/* <p style={{ color: 'white' }}>{curr_pathname}</p> */}
                </nav>
            </header>
        </div>
    );
}
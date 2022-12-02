import './css/style.css'
import React, { Component } from 'react';

export default class Showcase extends Component {
    constructor(props) {
        super(props);

        this.state = {
            builds: []
        };
    }

    componentDidMount() {
        let builds_defs = [
            {
                'img_url': require("./imgs/full_1.png"),
                'img_alt': 'Green and cyan keyboard with a couple yellow-accented keycaps',
                'title': 'KBD75 V3.1 HOT-SWAP KEYBOARD WITH OSA MARRS GREEN PBT DOUBLESHOT KEYCAPS'
            },
            {
                'img_url': require("./imgs/full_2.png"),
                'img_alt': 'Green and cyan keyboard with a couple yellow-accented keycaps',
                'title': 'FULLY ASSEMBLED TOFU65 HOT-SWAP MECHANICAL KEYBOARD WITH EPBT GREY-WHITE DOUBLESHOT KEYCAPS'
            },
            {
                'img_url': require("./imgs/full_3.png"),
                'img_alt': 'Rainbow light keyboard with pure white keycaps',
                'title': 'FULLY ASSEMBLED TOFU65 ACRYLIC SOLDERED MECHANICAL KEYBOARD WITH BOW PBT KEYCAPS'
            },
            {
                'img_url': require("./imgs/full_4.png"),
                'img_alt': 'Bubblegum themed keyboard with off-white and violet keycaps',
                'title': 'KBD75 V3.1 VIOLET PURPLE MECHANICAL KEYBOARD WITH SIMPLE PURPLE DYE-SUB KEYCAPS'
            },
            {
                'img_url': require("./imgs/full_5.png"),
                'img_alt': 'White keyboard with depe blue keycaps',
                'title': 'BLADE65 R2 E-WHITE KEYBOARD WITH PBTFANS KLEIN BLUE'
            },
            {
                'img_url': require("./imgs/full_8.png"),
                'img_alt': 'White keyboard with cement grey keycaps',
                'title': 'BLADE60 DZ60 RGB HOT-SWAP KEYBOARD WITH CEMENT GREY JAPANESE PBT KEYCAPS'
            },
            {
                'img_url': require("./imgs/full_6.png"),
                'img_alt': 'All white keyboard with 2 black accent keys',
                'title': 'TOFU65 HOT-SWAP KEYBOARD WITH PBTFANS BOW KEYCAPS'
            },
            {
                'img_url': require("./imgs/full_7.png"),
                'img_alt': 'All black keyboard with 2 white accent keys',
                'title': 'TOFU65 HOT-SWAP KEYBOARD WITH PBTFANS WOB SIMPLE BASE KEYCAPS'
            },
            {
                'img_url': require("./imgs/full_9.png"),
                'img_alt': 'Black keyboard with cement & dark grey keycaps',
                'title': 'TOFU65 MECHANICAL KEYBOARD WITH CEMENT GREY JAPANESE PBT KEYCAPS'
            },
        ];

        this.setState({
            builds: builds_defs
        });

        this.mapSubsection = this.mapSubsection.bind(this);
    }

    mapSubsection(subsection) {
        let subsection_list = [];

        subsection_list = subsection.map((item) => {
            return (
                <div className="image-group" key={item.title} >
                    <img tabIndex={0} src={item.img_url} alt={item.img_alt} />
                    <p>{item.title}</p>
                </div>
            );
        });

        return subsection_list;
    }

    render() {
        const { builds } = this.state;

        const builds_list = this.mapSubsection(builds);

        return (
            <main className="container" id="main">
                <h1 className="title">Finished Builds</h1>

                <div className="gallery-grid">
                    {builds_list}
                </div>
            </main>
        );
    }
}
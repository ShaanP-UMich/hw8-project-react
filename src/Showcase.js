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
            }
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
                <div className="image-group">
                <img src={item.img_url} alt={item.img_alt} />
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
                    {/* <div className="image-group">
                        <img src={require("./imgs/full_1.png")} alt="HOT-SWAP KEYBOARD WITH OSA MARRS GREEN PBT DOUBLESHOT KEYCAPS" />
                        <p>KBD75 V3.1 HOT-SWAP KEYBOARD WITH OSA MARRS GREEN PBT DOUBLESHOT KEYCAPS</p>
                    </div>
                    <div className="image-group">
                        <img src={require("./imgs/full_2.png")} alt="HOT-SWAP MECHANICAL KEYBOARD WITH EPBT GREY-WHITE DOUBLESHOT KEYCAPS" />
                        <p>TOFU65 HOT-SWAP MECHANICAL KEYBOARD WITH EPBT GREY-WHITE DOUBLESHOT KEYCAPS</p>
                    </div>
                    <div className="image-group">
                        <img src={require("./imgs/full_3.png")} alt="TOFU65 ACRYLIC SOLDERED MECHANICAL KEYBOARD WITH BOW PBT KEYCAPS" />
                        <p>TOFU65 ACRYLIC SOLDERED MECHANICAL KEYBOARD WITH BOW PBT KEYCAPS</p>
                    </div>
                    <div className="image-group">
                        <img src={require("./imgs/full_4.png")} alt="VIOLET PURPLE MECHANICAL KEYBOARD WITH SIMPLE PURPLE DYE-SUB KEYCAPS" />
                        <p>KBD75 V3.1 VIOLET PURPLE MECHANICAL KEYBOARD WITH SIMPLE PURPLE DYE-SUB KEYCAPS</p>
                    </div>
                    <div className="image-group">
                        <img src={require("./imgs/full_5.png")} alt="BLADE65 R2 E-WHITE KEYBOARD WITH PBTFANS KLEIN BLUE" />
                        <p>BLADE65 R2 E-WHITE KEYBOARD WITH PBTFANS KLEIN BLUE</p>
                    </div>
                    <div className="image-group">
                        <img src={require("./imgs/full_6.png")} alt="TOFU65 HOT-SWAP KEYBOARD WITH PBTFANS BOW KEYCAPS" />
                        <p>TOFU65 HOT-SWAP KEYBOARD WITH PBTFANS BOW KEYCAPS</p>
                    </div>
                    <div className="image-group">
                        <img src={require("./imgs/full_7.png")} alt="TOFU65 HOT-SWAP KEYBOARD WITH PBTFANS WOB SIMPLE BASE KEYCAPS" />
                        <p>TOFU65 HOT-SWAP KEYBOARD WITH PBTFANS WOB SIMPLE BASE KEYCAPS</p>
                    </div>
                    <div className="image-group">
                        <img src={require("./imgs/full_8.png")}
                            alt="BLADE60 DZ60 RGB HOT-SWAP KEYBOARD WITH CEMENT GREY JAPANESE PBT KEYCAPS" />
                        <p>BLADE60 DZ60 RGB HOT-SWAP KEYBOARD WITH CEMENT GREY JAPANESE PBT KEYCAPS</p>
                    </div>
                    <div className="image-group">
                        <img src={require("./imgs/full_9.png")} alt="TOFU65 MECHANICAL KEYBOARD WITH CEMENT GREY JAPANESE PBT KEYCAPS" />
                        <p>TOFU65 MECHANICAL KEYBOARD WITH CEMENT GREY JAPANESE PBT KEYCAPS</p>
                    </div> */}
                </div>
            </main>
        );
    }
}
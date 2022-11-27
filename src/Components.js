import './css/style.css'
import React, { Component } from 'react';
import case_1 from './imgs/case_1.png'
import case_2 from './imgs/case_2.png'

export default class Components extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cases: [],
            keycaps: [],
            plates: []
        };
    }

    componentDidMount() {
        const { cases, keycaps, plates } = this.state;

        cases = [
            {
                'img_url': "TODO"
            }
        ]
    }

    render() {
        return (
            <main className="container" id="main">
                <h1 className="title">Cases</h1>
                <div className="gallery">
                    <div className="image-group">
                        <img src={case_1} alt="White keyboard case with black outline" />
                        <div className="image-group-text">
                            <p>D84 V2 GASKET MOUNT 75%</p>
                            <div className="image-group-text-extra">
                                <p><strong>Specs</strong></p>
                                <ul>
                                    <li>Structure: Gasket Mount</li>
                                    <li>Case: D84 V2 top aluminum case and bottom aluminum/ acrylic case</li>
                                    <li>Typing Angle: 7°</li>
                                    <li>Weight bar: Aluminum material, weight bar color matches up with upper case</li>
                                    <li>Designer: KBDfans Wei</li>
                                    <li>Friendly Reminds: Only case included in this product, no PCB and other items</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="image-group">
                        <img src={case_2} alt="Wooden keyboard case with rounded sides" />
                        <div className="image-group-text">
                            <p>65% WOODEN CASE AND WRIST</p>
                            <div className="image-group-text-extra">
                                <p><strong>Specs</strong></p>
                                <ul>
                                    <li>Material: Wood</li>
                                    <li>Structure: Tray mount</li>
                                </ul>
                                <p><strong>Notes</strong></p>
                                <ul>
                                    <li>The case and wrist are made of organic wood, it is a normal phenomenon if there exists a
                                        little gouge, little stripe, or slight color difference</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="image-group">
                        <img src="imgs/case_3.png" alt="Creamy white keyboard case" />
                        <div className="image-group-text">
                            <p>KBD75 V3.1 ALUMINUM CASE</p>
                            <div className="image-group-text-extra">
                                <p><strong>Specs</strong></p>
                                <ul>
                                    <li>Structure: Top-mount</li>
                                    <li>Material: Aluminum material</li>
                                    <li>Layout: 75% layout</li>
                                    <li>Weight: around 1.35 kg</li>
                                    <li>Typing angle: 7°</li>
                                    <li>Friendly Reminds: Only a keyboard case, no other components</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <h1 className="title">Keycaps</h1>
                <div className="gallery">
                    <div className="image-group">
                        <img src="imgs/keycaps_1.png" alt="Clean, white Japanese compatible keycaps" />
                        <div className="image-group-text">
                            <p>R3 EPBT X GOK KURO/SHIRO PBT</p>
                            <div className="image-group-text-extra">
                                <p><strong>Specs</strong></p>
                                <ul>
                                    <li>Material: PBT material</li>
                                    <li>Profile: Cherry Profile</li>
                                    <li>Production Method: Dye-sub and Reverse Dye-sub</li>
                                    <li>Manufacture: ePBT</li>
                                    <li>Compatible with Cherry MX switch and clone</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="image-group">
                        <img src="imgs/keycaps_2.png" />
                        <p>PBTFANS CARPENTER</p>
                    </div>
                    <div className="image-group">
                        <img src="imgs/keycaps_3.png" />
                        <p>PBTFANS KABUKI-CHO 歌舞伎町</p>
                    </div>
                </div>

                <h1 className="title">Plates</h1>
                <div className="gallery">
                    <div className="image-group">
                        <img src="imgs/plate_1.png" />
                        <p>65% ALUMINUM</p>
                    </div>
                    <div className="image-group">
                        <img src="imgs/plate_2.png" />
                        <p>60% PC MATERIAL PLATE</p>
                    </div>
                    <div className="image-group">
                        <img src="imgs/plate_3.png" />
                        <p>D84 V2 PLATE（INCLUDING GASKET)</p>
                    </div>
                </div>
            </main>
        );
    }
}
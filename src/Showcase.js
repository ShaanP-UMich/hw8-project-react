import './css/style.css'
import React, { Component } from 'react';

export default class Showcase extends Component {
    render() {


        return (
            <main class="container" id="main">
                <h1 class="title">Finished Builds</h1>

                <div class="gallery-grid">
                    <div class="image-group">
                        <img src="imgs/full_1.png" alt="HOT-SWAP KEYBOARD WITH OSA MARRS GREEN PBT DOUBLESHOT KEYCAPS" />
                        <p>KBD75 V3.1 HOT-SWAP KEYBOARD WITH OSA MARRS GREEN PBT DOUBLESHOT KEYCAPS</p>
                    </div>
                    <div class="image-group">
                        <img src="imgs/full_2.png" alt="HOT-SWAP MECHANICAL KEYBOARD WITH EPBT GREY-WHITE DOUBLESHOT KEYCAPS" />
                        <p>TOFU65 HOT-SWAP MECHANICAL KEYBOARD WITH EPBT GREY-WHITE DOUBLESHOT KEYCAPS</p>
                    </div>
                    <div class="image-group">
                        <img src="imgs/full_3.png" alt="TOFU65 ACRYLIC SOLDERED MECHANICAL KEYBOARD WITH BOW PBT KEYCAPS" />
                        <p>TOFU65 ACRYLIC SOLDERED MECHANICAL KEYBOARD WITH BOW PBT KEYCAPS</p>
                    </div>
                    <div class="image-group">
                        <img src="imgs/full_4.png" alt="VIOLET PURPLE MECHANICAL KEYBOARD WITH SIMPLE PURPLE DYE-SUB KEYCAPS" />
                        <p>KBD75 V3.1 VIOLET PURPLE MECHANICAL KEYBOARD WITH SIMPLE PURPLE DYE-SUB KEYCAPS</p>
                    </div>
                    <div class="image-group">
                        <img src="imgs/full_5.png" alt="BLADE65 R2 E-WHITE KEYBOARD WITH PBTFANS KLEIN BLUE" />
                        <p>BLADE65 R2 E-WHITE KEYBOARD WITH PBTFANS KLEIN BLUE</p>
                    </div>
                    <div class="image-group">
                        <img src="imgs/full_6.png" alt="TOFU65 HOT-SWAP KEYBOARD WITH PBTFANS BOW KEYCAPS" />
                        <p>TOFU65 HOT-SWAP KEYBOARD WITH PBTFANS BOW KEYCAPS</p>
                    </div>
                    <div class="image-group">
                        <img src="imgs/full_7.png" alt="TOFU65 HOT-SWAP KEYBOARD WITH PBTFANS WOB SIMPLE BASE KEYCAPS" />
                        <p>TOFU65 HOT-SWAP KEYBOARD WITH PBTFANS WOB SIMPLE BASE KEYCAPS</p>
                    </div>
                    <div class="image-group">
                        <img src="imgs/full_8.png"
                            alt="BLADE60 DZ60 RGB HOT-SWAP KEYBOARD WITH CEMENT GREY JAPANESE PBT KEYCAPS" />
                        <p>BLADE60 DZ60 RGB HOT-SWAP KEYBOARD WITH CEMENT GREY JAPANESE PBT KEYCAPS</p>
                    </div>
                    <div class="image-group">
                        <img src="imgs/full_9.png" alt="TOFU65 MECHANICAL KEYBOARD WITH CEMENT GREY JAPANESE PBT KEYCAPS" />
                        <p>TOFU65 MECHANICAL KEYBOARD WITH CEMENT GREY JAPANESE PBT KEYCAPS</p>
                    </div>
                </div>
            </main>
        );
    }
}
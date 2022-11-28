import './css/style.css'
import React, { Component } from 'react';

export default function ExtraInfo(props) {

    const { title, bullets } = props;

    // let bullets_list = bullets.map((bullet) => (
    //     <li>{bullet}</li>
    // ));

    // console.log(bullets);

    let bullets_list = bullets.forEach((bullet) => {
        return <li>{bullet}</li>
    });

    console.log(bullets_list);

    return (
        <div className="image-group-text-extra">
            <p><strong>{title}</strong></p>
            <ul>
                {bullets_list}
                {/* <li>Structure: Gasket Mount</li>
                <li>Case: D84 V2 top aluminum case and bottom aluminum/ acrylic case</li>
                <li>Typing Angle: 7°</li>
                <li>Weight bar: Aluminum material, weight bar color matches up with upper case</li>
                <li>Designer: KBDfans Wei</li>
                <li>Friendly Reminds: Only case included in this product, no PCB and other items</li> */}
            </ul>
        </div>
    );
}
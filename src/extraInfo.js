import './css/style.css'
import React from 'react';

export default function ExtraInfo(props) {

    const { title, bullets } = props;

    // let bullets_list = bullets.map((bullet) => (
    //     <li>{bullet}</li>
    // ));

    // console.log(bullets);

    let bullets_list = [];

    bullets.forEach((bullet) => {
        bullets_list.push(<li key={bullet}>{bullet}</li>);
    });

    // console.log(bullets_list);

    return (
        <div className="image-group-text-extra">
            <p><strong>{title}</strong></p>
            <ul>
                {bullets_list}
            </ul>
        </div>
    );
}
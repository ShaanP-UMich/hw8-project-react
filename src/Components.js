import './css/style.css'
import React, { Component } from 'react';
import ExtraInfo from './ExtraInfo';
// import case_1 from './imgs/case_1.png'
// import case_2 from './imgs/case_2.png'

export default class Components extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cases: [],
            keycaps: [],
            plates: []
        };

        this.mapSubsection = this.mapSubsection.bind(this);
    }

    componentDidMount() {
        let case_defs = [
            {
                'img_url': require('./imgs/case_1.png'),
                'img_alt': 'White keyboard case with black outline',
                'title': 'D84 V2 GASKET MOUNT 75%',
                'extra_info': [
                    {
                        'title': "Specs",
                        'bullets': [
                            'Structure: Gasket Mount',
                            'Case: D84 V2 top aluminum case and bottom aluminum/ acrylic case',
                            'Typing Angle: 7°',
                            'Weight bar: Aluminum material, weight bar color matches up with upper case',
                            'Designer: KBDfans Wei',
                            'Friendly Reminds: Only case included in this product, no PCB and other items'
                        ]
                    }
                ]
            },
            {
                'img_url': require('./imgs/case_2.png'),
                'img_alt': 'Wooden keyboard case with rounded sides',
                'title': '65% WOODEN CASE AND WRIST',
                'extra_info': [
                    {
                        'title': "Specs",
                        'bullets': [
                            'Material: Wood',
                            'Structure: Tray mount'
                        ]
                    },
                    {
                        'title': "Notes",
                        'bullets': [
                            'The case and wrist are made of organic wood, it is a normal phenomenon if there exists a little gouge, little stripe, or slight color difference'
                        ]
                    }
                ]
            },
            {
                'img_url': require('./imgs/case_3.png'),
                'img_alt': 'Creamy white keyboard case',
                'title': 'KBD75 V3.1 ALUMINUM CASE',
                'extra_info': [
                    {
                        'title': "Specs",
                        'bullets': [
                            'Structure: Top-mount',
                            'Material: Aluminum material',
                            'Layout: 75% layout',
                            'Weight: around 1.35 kg',
                            'Typing angle: 7°',
                            'Friendly Reminds: Only a keyboard case, no other components'
                        ]
                    }
                ]
            }
        ]

        let keycaps_defs = [
            {
                'img_url': require('./imgs/case_1.png'),
                'img_alt': 'White keyboard case with black outline',
                'title': 'D84 V2 GASKET MOUNT 75%',
                'extra_info': [
                    {
                        'title': "Specs",
                        'bullets': [
                            'Structure: Gasket Mount',
                            'Case: D84 V2 top aluminum case and bottom aluminum/ acrylic case',
                            'Typing Angle: 7°',
                            'Weight bar: Aluminum material, weight bar color matches up with upper case',
                            'Designer: KBDfans Wei',
                            'Friendly Reminds: Only case included in this product, no PCB and other items'
                        ]
                    }
                ]
            },
        ]

        this.setState({
            cases: case_defs,
            keycaps: keycaps_defs
        });
    }

    mapSubsection(subsection = []) {
        let subsection_list = [];

        subsection_list = subsection.map((item) => {
            const extra_info = item.extra_info;
            // console.log(extra_info);
            let extra_info_html = [];

            extra_info_html = extra_info.map((info) => (
                <ExtraInfo key={info.title} title={info.title} bullets={info.bullets} />
            ));

            return (
                <div className="image-group" key={item['title']}>
                    <img src={item['img_url']} alt={item['img_alt']} />
                    <div className="image-group-text">
                        <p>{item.title}</p>
                        {extra_info_html}
                    </div>
                </div>
            );
        });

        return subsection_list;
    }

    render() {
        const { cases, keycaps, plates } = this.state;

        const cases_list = this.mapSubsection(cases);
        const keycaps_list = this.mapSubsection(keycaps);

        return (
            <main className="container" id="main">
                <h1 className="title">Cases</h1>
                <div className="gallery">
                    {cases_list}
                </div>

                <h1 className="title">Keycaps</h1>
                <div className="gallery">
                    {keycaps_list}
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
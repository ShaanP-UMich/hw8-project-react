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
        ];

        let keycaps_defs = [
            {
                'img_url': require('./imgs/keycaps_1.png'),
                'img_alt': 'Clean, white Japanese compatible keycaps',
                'title': 'R3 EPBT X GOK KURO/SHIRO PBT',
                'extra_info': [
                    {
                        'title': "Specs",
                        'bullets': [
                            'Material: PBT material',
                            'Profile: Cherry Profile',
                            'Production Method: Dye-sub and Reverse Dye-sub',
                            'Manufacture: ePBT',
                            'Compatible with Cherry MX switch and clone',
                        ]
                    }
                ]
            },
            {
                'img_url': require('./imgs/keycaps_2.png'),
                'img_alt': 'Minimalist off-white and grey keycaps',
                'title': 'PBTFANS CARPENTER',
                'extra_info': [
                    {
                        'title': "Specs",
                        'bullets': [
                            'Material: PBT material',
                            'Production Method: Doubleshot',
                            'Profile: Cherry Profile',
                            'Manufacturer: PBTfans',
                            'Packaging: ABS keycaps tray with designed tray cover',
                            'Friendly Reminds: Only keycaps included, no keyboard',
                            'Compatibility: Cherry MX switches and MX-style clones'
                        ]
                    }
                ]
            },
            {
                'img_url': require('./imgs/keycaps_3.png'),
                'img_alt': 'Purple and Blue keycaps with some red-accented keycaps',
                'title': 'PBTFANS KABUKI-CHO 歌舞伎町',
                'extra_info': [
                    {
                        'title': "Specs",
                        'bullets': [
                            'Material: PBT material',
                            'Profile: Cherry profile',
                            'Production Method: Doubleshot/Tripleshot for JP Sub-Legends',
                            'Manufacturer: PBTfans',
                            'Packaging: ABS keycaps tray with designed tray cover',
                            'Friendly Reminds: Only keycaps included, no keyboard',
                            'Compatibility: Cherry MX switches and MX-style clones',
                            'Designer: oay'
                        ]
                    }
                ]
            },
        ];

        let plates_defs = [
            {
                'img_url': require('./imgs/plate_1.png'),
                'img_alt': '65% Aluminum keyboard plate',
                'title': '65% ALUMINUM PLATE',
                'extra_info': [
                    {
                        'title': "Specs",
                        'bullets': [
                            'Material: CNC Aluminum; Brass; Polycarbonate; Carbon Fiber',
                            '1.5MM thickness',
                            '65% layout',
                            'Compatible with DZ65RGB V3 Hot-swap PCB, KBD67 V2 Solder PCB, Tofu65 case, etc',
                        ]
                    }
                ]
            },
            {
                'img_url': require('./imgs/plate_2.png'),
                'img_alt': 'Polycarbonate, semi see-through keyboard plate',
                'title': '60% PC MATERIAL PLATE',
                'extra_info': [
                    {
                        'title': "Specs",
                        'bullets': [
                            'PC material',
                            'The thickness of 1.5 mm',
                            'Compatible with gh60, dz60, etc',
                            'Only 2.25U Left Shift (Plate B) would fit with DZ60RGB V2 and DZ60RGB ANSI PCB',
                        ]
                    }
                ]
            },
            {
                'img_url': require('./imgs/plate_3.png'),
                'img_alt': 'Brass keyboard plate with gaskets on the sides',
                'title': 'D84 V2 PLATE（INCLUDING GASKET)',
                'extra_info': [
                    {
                        'title': "Includes",
                        'bullets': [
                            'D84 V2 plate',
                            'Gasket',
                        ]
                    }
                ]
            },
        ];

        this.setState({
            cases: case_defs,
            keycaps: keycaps_defs,
            plates: plates_defs
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
        const plates_list = this.mapSubsection(plates);

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
                    {plates_list}
                </div>
            </main>
        );
    }
}
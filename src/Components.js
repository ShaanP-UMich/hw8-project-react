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
            }
        ]

        this.setState({
            cases: case_defs
        });
    }

    render() {
        // if (this.state.cases.length === 0)
        //     return;

        const { cases } = this.state;


        // console.log(this.state.cases);
        // console.log(this.state.cases[0]['img_url']);
        // let case_1 = this.state.cases[0]['img_url'];
        // let case_2 = this.state.cases[1]['img_url'];

        const cases_list = cases.map((item) => {
            const extra_info = item.extra_info;
            // console.log(extra_info);
            let extra_info_html = [];

            extra_info_html = extra_info.map((info) => (
                <ExtraInfo key={info.title} title={info.title} bullets={info.bullets} />
            ));

            // console.log(extra_info_html);


            return (
                <div className="image-group">
                    <img src={item['img_url']} alt={item['img_alt']} />
                    <div className="image-group-text">
                        <p>{item.title}</p>
                        {extra_info_html}
                        {/* <div className="image-group-text-extra">
                            <p><strong>Specs</strong></p>
                            <ul>
                                <li>Structure: Gasket Mount</li>
                                <li>Case: D84 V2 top aluminum case and bottom aluminum/ acrylic case</li>
                                <li>Typing Angle: 7°</li>
                                <li>Weight bar: Aluminum material, weight bar color matches up with upper case</li>
                                <li>Designer: KBDfans Wei</li>
                                <li>Friendly Reminds: Only case included in this product, no PCB and other items</li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            );
            // <Link key={page.page_name} className={page.className} to={page.path}>{page.page_name}</Link>
        });

        return (
            <main className="container" id="main">
                <h1 className="title">Cases</h1>
                <div className="gallery">
                    {cases_list}
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
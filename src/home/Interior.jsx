import React, { Component, Fragment } from "react";
import Scrollspy from 'react-scrollspy';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp, FiX, FiMenu } from "react-icons/fi";
// import CounterOne from "../elements/counters/CounterTwo";
// import Testimonial from "../elements/Testimonial";
import FooterTwo from "../component/footer/FooterTwo";
import Helmet from "../component/common/Helmet";
// import TeamOne from "../blocks/team/TeamOne";
import Slider from "react-slick";
import { slickDot } from "../page-demo/script";
import ContactTwo from "../elements/contact/ContactTwo";
import { FiHeadphones, FiMail, FiMapPin } from "react-icons/fi";
import ServiceList from '../elements/service/ServiceList'
import TypingAnimation from "../elements/common/TypingAnimation";
// import { Parallax } from "react-parallax";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
// import Header from "../component/header/Header";
import { Parallax } from "react-parallax";

import { portfolioSlick2 } from "../../../page-demo/script";

import './interiorStyles.css';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import AOS from 'aos';
import 'aos/dist/aos.css';
import NewContactForm from "../elements/contact/NewContactForm";
// import NewStaffComp from "./NewStaffComp";
import { testimonialActivation } from "../page-demo/script";
import Portfolio from "../component/HomeLayout/homeOne/Portfolio";
import PortFolio2 from "../component/HomeLayout/homeOne/PortFolio2";
import StockAndMerch from "./StockandMerch";
import NonTubeSlider from "../component/HomeLayout/homeOne/NonTubeSlider";
import Catalog2 from "./Catalog";
import StockAndMerch2 from "./StockAndMerch2";
import CarouselMerchTubes from "./CarouselMerchTubes";
import MerchCarousel from "./MerchCarousel";
import Footer from "../component/footer/Footer";
import MiniContactInfo from "./miniContactInfo";

import LazyLoad from 'react-lazyload';



// AOS.init();

// const image1 = '/assets/images/bg/ATXBanner.jpg';
// const image1 = '/assets/images/bg/AmandaTube2.png';
// const image1 = '/assets/images/bg/riverTube2.0.png';


// const getAnimationClass = (index) => {
//     if (index === 0) {
//         return "fade-left"; // First item
//     } else if (index === 1) {
//         return "fade-up"; // Second item
//     } else if (index === 2) {
//         return "fade-right"; // Third item
//     } else {
//         return "fade-up"; // Rest of the items
//     }
// };

// // /elements/service/ServiceList.jsx

// const textToType = "Hello, I'm a typing animation!";

// const customStyle = {
//     fontFamily: 'Brice-Black', color: '#ef5474', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)'
//     // Add any other CSS properties as needed
// };



// const SlideList = [
//     {
//         textPosition: 'text-center',
//         category: '',
//         title: 'ATX Float',
//         description: 'Dive into success with our water sports wholesale company, where quality meets adventure for businesses seeking top-notch products.',
//         buttonText: 'Shop Now!',
//         // buttonLink: '/contact'
//         buttonLink: 'portfolio'
//     }
// ]

// const backgroundStyle = {

//     // backgroundImage: `url('IMG_6288.png')`,
//     backgroundImage: `url('/assets/images/bg/ATXBanner.jpg')`,
//     //   backgroundPosition: 'center 70%',
//     //   backgroundSize: 'cover', // Choose the desired option
//     backgroundPosition: 'right top',
//     backgroundSize: 'cover',
//     // height: '600px',


//     // trydo/build/assets/images/bg/ATXBanner.jpg

// };

// const amandaBkGround = {
//     backgroundImage: `url('/assets/images/bg/AJS_4086-Edit_02.jpg')`
// }

// const backgroundlightYellow = {
//     backgroundColor: '#fbff68'
// }

// const backGroundBrown = {
//     backgroundColor: '#f3edd1'
// }
const clients = [
    {
        title: 'Zach Martin',
        category: 'ATX Float',
        images: '/assets/images/client/ZachMartin.png',
        testimonial: ''
    },
    {
        title: 'Idaliz Gonzalez',
        category: 'Synecron',
        images: '/assets/images/client/Idaliz5.png',
        testimonial: ''
    },
    {
        title: 'William Hasting',
        category: 'Angel Aerial',
        images: '/assets/images/client/WillHasting.png',
        testimonial: ''
    },
]

const contactAreaStyle = {
    padding: '50px', // 30px padding on top and bottom, 0px padding on left and right
    backgroundColor: '#f3edd1',
    borderRadius: '10px'


}

const footerBackground = {
    backgroundColor: '#44494e',
    padding: '60px'
}
const customImage = '/assets/images/bg/CustomTubeBanner.png'

const customTubes2 = [
    '/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_444.png',
    `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Andy's.png`,
    '/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Bahnbrecker.png',
    '/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Blind-Lemon.png',
    `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Chimy's-2.png`,
    `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Chimy's.png`,
    '/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Corner-Tubes.png',
    `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Don's-Blue.png`,
    `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Don's-Green.png`,
    `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Don's-Pink.png`,
    `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Ducky's.png`,
    `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Float-Fest.png`,
    `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Float-In.png`,
    '/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Happy-Hollow.png',
    `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Independence-Brewing.png`,
    `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Indian-Head.png`,
    `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Landa-Falls.png`,
    `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Landa-River-Trips.png`,
    `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Lazy-LL.png`,
    `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Lions.png`,
    `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Meckel's.png`,
    `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Plainfield.png`,
    `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Rockin'-R.png`,
    `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Shot-Gun.png`,
    `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Son's.png`,
    `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Whitewater-Deep-Eddy-2.png`,
    `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Whitewater-Deep-Eddy.png`,
    `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Willies.png`,
    `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tubes_Son's-Blue-River.png`,
    `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tubes_Texas-Tubes-Rudy's.png`,
    `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-Waterpark-Tube_Aquatica.png`,
    `/assets/images/CUSTOM_TUBE_PHOTOS/River-Floater-Tube_ATX-Float-Blue.png`,
    `/assets/images/CUSTOM_TUBE_PHOTOS/River-Floater-Tube_ATX-Float-Camo-Blue.png`,
    `/assets/images/CUSTOM_TUBE_PHOTOS/River-Floater-Tube_ATX-Float-Camo-Green.png`,
    `/assets/images/CUSTOM_TUBE_PHOTOS/River-Floater-Tube_ATX-Float-Camo-Pink.png`,
    `/assets/images/CUSTOM_TUBE_PHOTOS/River-Floater-Tube_ATX-Float-Orange.png`,
    `/assets/images/CUSTOM_TUBE_PHOTOS/River-Floater-Tube_ATX-Float-Pink.png`,
    `/assets/images/CUSTOM_TUBE_PHOTOS/River-Tube_ATX-Float-Blue.png`,
    `/assets/images/CUSTOM_TUBE_PHOTOS/River-Tube_ATX-Float-Coral.png`,
    `/assets/images/CUSTOM_TUBE_PHOTOS/River-Tube_ATX-Float-Orange.png`,
    `/assets/images/CUSTOM_TUBE_PHOTOS/River-Tube_ATX-Float-STTB.png`,
    `/assets/images/CUSTOM_TUBE_PHOTOS/River-Tube_ATX-Float-STTO.png`,
    '/assets/images/CUSTOM_TUBE_PHOTOS/Custom-Waterpark-Tube_Aquatica.png',
    '/assets/images/CUSTOM_TUBE_PHOTOS/Custom-Waterpark-Tube_Beach-Park-Double-Baby.png',
    '/assets/images/CUSTOM_TUBE_PHOTOS/Custom-Waterpark-Tube_Beach-Park-Double.png',
    '/assets/images/CUSTOM_TUBE_PHOTOS/Custom-Waterpark-Tube_Beach-Park.png',
    '/assets/images/CUSTOM_TUBE_PHOTOS/Custom-Waterpark-Tube_Six-Flags-Double.png',
    '/assets/images/CUSTOM_TUBE_PHOTOS/Waterpark-Tube-Double JR-Clear_ATX-Float-DC42-S.png',
  ];
  



const awesomeGear = [
    {
      bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Bevie_Sling/Bevie_Sling_Assorted.png',
    },
    {
      bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Cool_Jug/Cool_Jug_Assorted.png',
    },
    {
      bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Drawstring_Bags/Drawstring_Bag_Assorted.png',
    },

    {
      bigImage: 'assets/images/NewImages10.23.2023/Merchandise/Dry_Bag_15L_Holographic/Dry_Bag_15L_Holographic.png',
    },
    {
      bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Dry_Bag_PVC_15L_Solid/Dry_Bag_PVC_15L_Solid_Assortment.png',
    },
    {
      bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Dry_Bag_10L_Nylon_Solid/Dry_Bag_Nylon_10L_Assorted_Solid.png',
    },
    {
      bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Dry_Bag_PVC_15L_Translucent/Dry_Bag_PVC_15L_Translucent_Assortment.png',
    },
    {
      bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Float_Pouch_Camo/Float_Pouch_Camo_Assortment.png',
    },
    {
      bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Float_Pouch_Holographic/Float_Pouch_Holographic_Assortment.png',
    },
    {
      bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Float_Pouch_Solid/Float_Pouch_Solid_Assortment.png',
    },
    {
      bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Goggles_Adult/Goggles_Adult_Blue-Blue_Metalic.png',
    },
    {
      bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Goggles_Kids/Goggles_Kids_Package.png',
    },
    {
      bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Sunglass_Floaters/Sunglass_Floaters_Assorted.png',
    },
    {
      bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Float_Pouch_USA/Float_Pouch_USA_Package.png',
    },
    // {
    //   bigImage: '/assets/images/NewImages10.23.2023/Racer_Mats/Racer_Mats_01.jpg',
    // },
  ];
  

const PortfolioList = [
    {
        image: 'image-1',
        category: 'Trump',
        title: ' Getting tickets to the big show'
    },
    {
        image: 'image-2',
        category: 'Development',
        title: ' Getting tickets to the big show'
    },
    {
        image: 'image-3',
        category: 'Development',
        title: ' Getting tickets to the big show'
    },
    {
        image: 'image-4',
        category: 'Development',
        title: ' Getting tickets to the big show'
    },
    {
        image: 'image-3',
        category: 'Development',
        title: ' Getting tickets to the big show'
    },
    {
        image: 'image-4',
        category: 'Development',
        title: ' Getting tickets to the big show'
    }
]
// const backgroundStyleService = {
//     backgroundColor: 'rgb(196 225 245)',
//     backgroundSize: 'cover', // You can adjust this property
// };

// // Carousel for Interior design portfolio. Morgan

// const PortfolioList2 = [
//     {
//         image: 'image-1',
//         category: 'Trump2',
//         title: ' Getting tickets to the big show'
//     },
//     {
//         image: 'image-2',
//         category: 'Development',
//         title: ' Getting tickets to the big show'
//     },
//     {
//         image: 'image-3',
//         category: 'Development',
//         title: ' Getting tickets to the big show'
//     },
//     {
//         image: 'image-4',
//         category: 'Development',
//         title: ' Getting tickets to the big show'
//     },
//     {
//         image: 'image-5',
//         category: 'Development',
//         title: ' Getting tickets to the big show'
//     },
//     // {
//     //     image: 'image-4',
//     //     category: 'Development',
//     //     title: ' Getting tickets to the big show'
//     // },
//     // {
//     //     image: 'image-4',
//     //     category: 'Development',
//     //     title: ' Getting tickets to the big show'
//     // }
// ]


// const ServiceListOne = [
//     {
//         icon: "icon-01.png",
//         title: 'Shipping Anywhere',
//         description: 'Enjoy superb shipping on all your orders.'
//     },
//     {
//         icon: "icon-02.png",
//         title: 'Top Notch Support',
//         description: 'Reach out to us, We are at your service.'
//     },
//     {
//         icon: "icon-03.png",
//         title: 'Custom Designs',
//         description: 'We offer custom designs on most of our products.'
//     },
//     // <span> Shipping Anywhere </span>
//     // <span> Top Notch Support </span>
//     // <span> Custom Designs </span>
// ]

const list = [
    {
        url: '/assets/images/NewImages10.23.2023/TUBES/Tubes_Single_Translucent_Blue_STB48/Tubes_Single_Translucent_Blue_STB48_Front.png',
        image: 'image-2',
        category: 'Waterpark Tubes',
        title: 'Get tubes for your waterpark here!',
        link: '/portfolio#parkTubes'
    },
    {
        url: '/assets/images/NewImages10.23.2023/TUBES/Tubes_Single_Blue_STTO/Tubes_Single Blue_STTB_Front.png',
        image: 'image-1',
        category: 'River Tubes',
        title: 'Get your custom made river tubes here!!',
        link: '/portfolio#riverTubes'
    },

    {
        url: '/assets/images/NewImages10.23.2023/Merchandise/Float_Pouch_Solid/Float_Pouch_Solid_Assortment.png',
        image: 'image-3',
        category: 'Merchandise',
        title: 'Every adventure needs extra gear. Click here',
        link: '/merchandise'
    },

]



class InteriorLanding extends Component {

    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        this.stickyHeader = this.stickyHeader.bind(this);
        this.state = {
            scrolled: false, // Initialize the scroll state
            selectedSummary: null,
        };

        //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function () {
            console.log('All assets are loaded');
        });
        window.addEventListener('scroll', this.handleScroll);
    }
    handleSummaryClick = (summary) => {
        this.setState({ selectedSummary: summary });
    };

    handleScroll = () => {
        if (window.scrollY > 0) {
            this.setState({ scrolled: true });
        } else {
            this.setState({ scrolled: false });
        }
    };

    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }
    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open')
    }
    stickyHeader() { }
    render() {

        window.addEventListener('scroll', function () {
            var value = window.scrollY;
            if (value > 50) {
                document.querySelector('.header--fixed').classList.add('sticky')
            } else {
                document.querySelector('.header--fixed').classList.remove('sticky')
            }
        });

        var elements = document.querySelectorAll('.has-droupdown > a');
        for (var i in elements) {
            if (elements.hasOwnProperty(i)) {
                elements[i].onclick = function () {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }

        return (
<LazyLoad height={200} offset={100}>
            <Fragment style={{backgroundColor: 'black'}}>

                <PageHelmet pageTitle='ATX Float' />

                {/* <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" /> */}
                {/* Start Breadcrump Area */}
                <LazyLoad height={200} offset={100}>
                <Breadcrumb title={'ATX Float'} />
                </LazyLoad>
                <Helmet pageTitle="Interior Design" />

                {/* Start Header Area  */}
                {/* <header className="header-area formobile-menu header--fixed default-color"> */}
                {/* Start Header Area  */}
                {/* <header className="header-area formobile-menu header--fixed default-color"> */}
                <header
                    // className={`header-area formobile-menu header--fixed default-color ${this.state.scrolled ? 'header-right-visible' : ''
                    //     }`}
                    className="header-area formobile-menu header--fixed default-color header-right-visible"
                    style={{ backgroundColor: '#343c44', paddingTop: '5px', paddingBottom: '5px'}}

                >
                    <div className="header-wrapper" id="header-wrapper" style={{padding: '0px' }}>
                        {/* {this.state.scrolled && ( */}
                            <>
                                <div className="header-left" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                                    <div className="logo" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                                        <a href="/" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>

                                            <img style={{ maxWidth: '200px', maxHeight: '30px' }} className="logo-1" src="/assets/images/logo/ATX_Logo_6dcef0.png" alt="Logo Images" />
                                            <img style={{ maxWidth: '200px', maxHeight: '20px' }} className="logo-2" src="/assets/images/logo/ATX_Logo_6dcef0.png" alt="Logo Images" />
                                            {/* <img className="logo-1" src="/assets/images/logo/logo-light.png" alt="Logo Images"/>
                                    <img className="logo-2" src="/assets/images/logo/logo-all-dark.png" alt="Logo Images"/> */}
                                        </a>
                                    </div>
                                </div>

                                <div className="header-right">
                                    <nav className="mainmenunav d-lg-block">
                                        <Scrollspy className="mainmenu" style={{ fontFamily: 'Brice-Light' }} items={['home', 'service', 'getstart', 'about', 'team', 'testimonial', 'portfolio']} currentClassName="is-current" offset={-200}>
                                            <li className="dropdown">
                                                <a href="/portfolio" style={{ fontFamily: 'Brice-Light',  }}>Stock Tubes</a>
                                                <ul className="dropdown-menu">
                                                <li><a href="/portfolio#parkTubes" style={{ color: 'black'}}>Waterpark Tubes</a></li>
                                                    <li><a href="/portfolio#riverTubes" style={{ color: 'black'}}>River Tubes</a></li>
                                                    
                                                    {/* <li><a href="/portfolio#awesomeGear" style={{ color: 'black'}}>Awesome Gear</a></li>
                                                    <li><a href="/productdisplays" style={{ color: 'black'}}>Displays</a></li> */}
                                                    
                                                </ul>
                                            </li><br/>
                                            <li><a href="/merchandise">Merchandise</a></li>
                                            <li><a href="/customrivertubes">Custom Gallery</a></li>
                                            {/* <li className="dropdown">
                                                <a href="/portfolio" style={{ fontFamily: 'Brice-Light',  }}>Custom Galler</a>
                                                <ul className="dropdown-menu disappearCustom">
                                                    <li><a href="/customrivertubes" style={{ color: 'black'}}>River Tubes</a></li>
                                                    <li><a href="/customparktubes" style={{ color: 'black'}}>Park Tubes</a></li>
                                                    
                                                </ul>
                                            </li> */}
                                            {/* <li><a href="#catalog">Catalog</a></li> */}
                                            {/* <li><a href="#service">Service</a></li>
                                    <li><a href="#getstart">Get Start</a></li>
                                    <li><a href="#about">About</a></li> */}
                                            <li><a href="/about">About</a></li>
                                            {/* <li><a href="#testimonial">Testimonial</a></li> */}
                                            {/* <li><a href="#team">Team</a></li> */}
                                            <li><a href="/contact">Contact</a></li>
                                            {/* <li><a href="/portfolio" style={{ fontFamily: 'Brice-Black'}}>Catalog</a></li> 

                                    
                                    <ul className="dropdown-menu">
                                        <li><a href="/portfolio#riverTubes">River Tubes</a></li>
                                        <li><a href="/portfolio#parkTubes">Park Tubes</a></li>
                                        <li><a href="/portfolio#awesomeGear">Awesome Gear</a></li>
                                    </ul> */}

                                        </Scrollspy>
                                    </nav>
                                    {/* <div className="header-btn">
                                        <a className="rn-btn" href="/portfolio">
                                            <span style={{ fontFamily: 'Brice-Black' }} data-aos="fade-down" data-aos-duration="750">Shop Now</span>
                                        </a>
                                    </div> */}
                                    {/* Start Humberger Menu  */}
                                    <div className="humberger-menu d-block d-lg-none pl--20">
                                        <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                                    </div>
                                    {/* End Humberger Menu  */}
                                    <div className="close-menu d-block d-lg-none">
                                        <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                                    </div>
                                </div>
                            </>
                            {/*  )} */}
                    </div>
                </header>
                {/* End Header Area  */}
                {/* <Catalog2 list={list} ClassFromParent = 'col-lg-4 col-md-6 col-12' imageHeight='500px'/>  */}
                
            <LazyLoad height={200} offset={100}>
                <StockAndMerch2 list={list} ClassFromParent = 'col-lg-4 col-md-6 col-12'/>
            </LazyLoad>
 {/* <Catalog2 list={list} ClassFromParent = 'col-lg-4 col-md-6 col-12'/> */}
 


           
             
                {/* End Portfolio Area */}




                {/* Start Service Area  */}

                {/* End Service Area  */}

                {/* Start Call To Action Area  */}
                {/*  style={amandaBkGround} */}
                {/* <div style={amandaBkGround} className="call-to-action-wrapper call-to-action bg_image bg_image-36 text-white-wrapper ptb--180 ptb_lg--80 ptb_md--80 ptb_sm--80" id="getstart" >
                    
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-4"></div>
                            <div className="col-lg-8">
                                <div className="inner text-right" style={{ paddingBottom: '40px' }}>
                                    <span>Shop Around</span>
                                    <h2>Take a look at <br/>our catalog</h2>
                                    <a className="rn-button-style--2 mt-d-70 mt_sm--30 mt_md--30" href="/portfolio"><span>Shop</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* End Call To Action Area  */}


                {/* Start CounterUp Area */}
                {/* <div className="rn-counterup-area pt--80 pt_sm--50 pt_md--50 pb--120 bg_color--1">
                    <div className="container">
                        <CounterOne />
                    </div>
                </div> */}
                {/* End CounterUp Area */}
                {/* id="service" */}
                <div className="fix">
                    <div className="service-area creative-service-wrapper bg_color--5 tubeHeaderSec" style={{ paddingTop: '10px', backgroundColor: '#f3edd1', paddingBottom:'0px' }} >
                        <div className="container">
                            {/* <div className="row">
                                <div className="col-lg-12"> */}
                                    {/* <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                                    <h2 className="title" style={{ color: '#ef5474', fontFamily: 'Brice-Black', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',}}>My Awesome Service</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                </div> */}
                                    {/* <div className="feature-area" style={{ textAlign: 'center' }}>
                                        <span style={{ color: '#ef5474', fontFamily: 'Brice-Black', fontSize: '45px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }} data-aos="fade-up" data-aos-duration="750">Wholesale Custom Gear</span>
                                        <h3 className="title mt--20 fontWeight500 lineheight--1-8" style={{ color: 'black', fontFamily: 'Brice-Light' }}>ATX Float is a team of product developers & designers, graphic artists, sales managers, and distribution personnel. The product design and management team office in Austin Texas, and warehousing and distribution is based in New Braunfels Texas.</h3>
                                    </div> */}
                                {/* </div>
                            </div> */}
                            <div className="row">
                                <div className="col-lg-12">
                                <a href="/customrivertubes">
                                            {/* <Parallax bgImage={customImage} strength={800} style={{ padding: '50px 20px', borderRadius: '25px'}}> */}
                                            <div className="section-title text-center service-style--3 mb--30 tubeHeaderSec" style={{borderRadius: '25px'}}>
                                                {/* <h2 style={{fontSize:'5rem', fontFamily: 'Brice-Black', color: '#ef5474', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }} data-aos="fade-up" data-aos-duration="750" className="title">Custom River Tubes</h2> */}
                                                {/* <p style={{color:'white', fontFamily: 'Brice-Light'}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p> */}
                                                <div className="animated-text" style={{ animation: 'fontSizeAnimation 2s infinite alternate' }}>
                                                {/* <p style={{color:'grey', fontFamily: 'Brice-Light', fontSize:'2.5rem', paddingTop:'20px'}}>Click Here for....</p>  */}
                                             
                                                <h2 className="title customTube" data-aos="fade-up" data-aos-duration="750" id="customTube">Custom Tubes</h2>
   </div>

                                            </div>
                                        {/* </Parallax> */}
                                        </a>
                                    {/* <ServiceList item="6" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" /> */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            {/* <Portfolio/> */}
            
            {/* <PortFolio2 customTubes={customTubes} dots={false} linkTo='/customrivertubes'/> */}

            {/* <NonTubeSlider customTubes={customTubes} dots={false} linkTo='/customrivertubes' /> */}
            {/* <CarouselMerchTubes imageList={customTubes2} direction="right" /> */}
            <LazyLoad height={200} offset={100}>
            <CarouselMerchTubes/>
            </LazyLoad>


  
            


            <div className="fix">
                    <div className="service-area creative-service-wrapper bg_color--5" style={{ paddingTop: '10px', backgroundColor: '#f3edd1', paddingBottom:'0px' }} >
                        <div className="container merchclass">
                            <div className="row">
                                <div className="col-lg-12">
                                    {/* <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                                    <h2 className="title" style={{ color: '#ef5474', fontFamily: 'Brice-Black', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',}}>My Awesome Service</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                </div> */}
                                    {/* <div className="feature-area" style={{ textAlign: 'center' }}>
                                        <span style={{ color: '#ef5474', fontFamily: 'Brice-Black', fontSize: '45px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }} data-aos="fade-up" data-aos-duration="750">Wholesale Custom Gear</span>
                                        <h3 className="title mt--20 fontWeight500 lineheight--1-8" style={{ color: 'black', fontFamily: 'Brice-Light' }}>ATX Float is a team of product developers & designers, graphic artists, sales managers, and distribution personnel. The product design and management team office in Austin Texas, and warehousing and distribution is based in New Braunfels Texas.</h3>
                                    </div> */}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                <a href="/customrivertubes">
                                            {/* <Parallax bgImage={customImage} strength={800} style={{ padding: '50px 20px', borderRadius: '25px'}}> */}
                                            <div className="section-title text-center service-style--3 mb--30" style={{borderRadius: '25px', marginBottom: '0px'}}>
                                                {/* <h2 style={{fontSize:'5rem', fontFamily: 'Brice-Black', color: '#ef5474', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }} data-aos="fade-up" data-aos-duration="750" className="title">Custom River Tubes</h2> */}
                                                {/* <p style={{color:'white', fontFamily: 'Brice-Light'}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p> */}
                                                <div className="animated-text" style={{ animation: 'fontSizeAnimation 2s infinite alternate' }}>
                                                {/* <p style={{color:'grey', fontFamily: 'Brice-Light', fontSize:'2.5rem', paddingTop:'20px'}}>Click Here for....</p>  */}
                                             
                                                    <h2 style={{color: '#ef5474', fontFamily: 'Brice-Black', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }} data-aos="fade-up" data-aos-duration="750" className="merchandise">Merchandise</h2>
                                                </div>

                                            </div>
                                        {/* </Parallax> */}
                                        </a>
                                    {/* <ServiceList item="6" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" /> */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            {/* <Portfolio/> */}
            
            {/* <PortFolio2 customTubes={awesomeGear} dots={false} linkTo='/merchandise'/> */}

            {/* <NonTubeSlider customTubes={awesomeGear} dots={false} linkTo='/merchandise'/> */}
            <LazyLoad height={200} offset={100}>
            <MerchCarousel/>
            </LazyLoad>
  
                {/* End Portfolio Area */}

                {/* Start Content Box  */}

                {/* <div className="rn-team-wrapper pb--120 bg_color--1" id="team" style={{backgroundColor: '#f3edd1', paddingTop: '70px'}}>
                <Parallax bgImage={image1} strength={1000} style={{padding: '30px'}}>
                    <div className="rn-team-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-left mb--30">
                                        <h2 style={{ color: '#EF5474', fontFamily: 'Brice-Black', textAlign: 'center', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }} data-aos="fade-up" data-aos-duration="750">Meet Our Designers</h2>
     </div>
                                    
                                </div>
                            </div>
                            <TeamOne column="col-lg-3 col-md-6 col-sm-6 col-12" teamStyle="team-style--bottom" item="3" />
                        </div>
                    </div>
                    </Parallax>
                </div> */}
                <div id="contact" style={contactAreaStyle} >
                    <ContactTwo />
                    {/* <NewContactForm/> */}
                </div>


                {/* End Content Box  */}
                {/* Start Finding Us Area  */}
                <div className="rn-finding-us-area rn-finding-us bg_color--1" style={{  backgroundColor: '#f3edd1' }}>
                    <div className="inner">
                        <div className="content-wrapper" style={{paddingBottom: '20px',}}>
                            <div className="content" data-aos="fade-left" data-aos-duration="1000" style={{padding: '0px'}}>
                                {/* <TypingAnimation elementType="h4"
                                    typingSpeed={50} style={{ fontFamily: 'Brice-Black', color: '#54eeef' }} className="theme-gradient" text="Find what you need to take your venue to the next level!!!" />
                                <p>Go one step ahead with Every Order! ATX Float is your gateway to a world of water fun, delivering quality products to venues and providers nationwide. Dive into Success with Us!"</p> */}
                                {/* <div className="catalogLinks" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom:'10px' }}>
    <a style={{ fontFamily: 'Brice-Black', color: '#ef5474' }} className="rn-btn btn-white" href="/portfolio">
        Stock Catalog
    </a>
    <br />
    <a style={{ fontFamily: 'Brice-Black', color: '#ef5474', marginTop: '5px' }} className="rn-btn btn-white" href="/portfolio">
        Custom River Tubes
    </a>
    <br />
    <a style={{ fontFamily: 'Brice-Black', color: '#ef5474', marginTop: '5px' }} className="rn-btn btn-white" href="/customparktubes">
        Custom Tubes
    </a>
</div> */}

                            </div>
                        </div>
                        <div className="thumbnail">
            {/* <div className="image">
                <img className="backgroundInterior" src="/assets/images/NewImages10.23.2023/AJS_4290.jpg" alt="Finding Images" />
            </div> */}
        </div>
                    </div>
                </div>
                {/* End Finding Us Area  */}
                {/* Start Team Area  */}
                {/* <div className="rn-team-wrapper pb--120 bg_color--1" id="team" style={{backgroundColor: '#f3edd1', paddingTop: '70px'}}>
                <Parallax bgImage={image1} strength={800} style={{padding: '70px',}}>
                    <div className="rn-team-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title text-left mb--30">
                                        <h2 style={{ color: '#EF5474', fontFamily: 'Brice-Black', textAlign: 'center', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }} data-aos="fade-up" data-aos-duration="750">Meet Our Staff</h2>
                                        <p style={{color: 'white', fontFamily: 'Brice-Light'}}>ATX Float's mission to enhance the lives of individuals by providing a unique and rejuvenating escape makes it truly exceptional. With a strong commitment to customer satisfaction, it offers a serene and transformative experience to its clients. The company's dedication to promoting relaxation, well-being, and mindfulness through cutting-edge technology and luxurious facilities sets it apart in the industry.</p>
                                    </div>
                                    
                                </div>
                            </div>
                            <TeamOne column="col-lg-3 col-md-6 col-sm-6 col-12" teamStyle="team-style--bottom" item="3" />
                        </div>
                    </div>
                    </Parallax>
                </div> */}



                {/* End Team Area  */}
                {/* <ContactTwo /> */}

                {/* Start Testimonial Area */}
                {/* <div className="rn-testimonial-area bg_color--5 ptb--120" id="testimonial" >
                    <div className="container">
                        <Testimonial />
                    </div>
                </div> */}
                {/* End Testimonial Area */}



                {/* Start Contact Top Area  */}
                <div className="rn-contact-top-area ptb--120 bg_color--5" style={footerBackground}>
                    <div className="container">

                        <div className="row">
                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50" data-aos="fade-left" data-aos-duration="750">
                                <div className="rn-address" style={{ backgroundColor: '#f3edd1' }}>
                                    <div className="icon" style={{ color: '#EF5474' }}>
                                        <FiHeadphones />
                                    </div>
                                    {/* <div className="inner">
                                        <h4 style={{ fontFamily: 'Brice-Black', fontSize: '30px', color: '#EF5474', }} className="title">Info</h4>
                                        <p><a style={{ fontFamily: 'Brice-Light' }} href="tel:+1-512-210-5959">Call</a></p>
                                        <p><a style={{ fontFamily: 'Brice-Light' }} href="mailto:team@atxfloat.com" rel="noopener noreferrer" target="_blank">Email</a></p><br />
                                        <p><a href="tel:+856 325 652 984">+856 325 652 984</a></p>
                                    </div> */}
                                <div className="inner sameHeight" style={{color: 'white',}}>
                                <h4 style={{ fontFamily: 'Brice-Black', fontSize: '30px', color: '#EF5474', }} className="title">Info</h4>
                                        
                                    <MiniContactInfo/>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Address  */}

                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50" data-aos="fade-right" data-aos-duration="750">
                                <div className="rn-address" style={{ backgroundColor: '#f3edd1' }}>
                                    <div className="icon" style={{ color: '#EF5474' }}>
                                        <FiMapPin />
                                    </div>
                                    <div className="inner sameHeight">
                                        <h4 style={{ fontFamily: 'Brice-Black', fontSize: '30px', color: '#EF5474', }} className="title">Office</h4>


                                        <p style={{ fontFamily: 'Brice-Light' }}>411 W Monroe St<br /> Austin, TX 78704</p><br/>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Address  */}

                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50" data-aos="fade-right" data-aos-duration="750">
                                <div className="rn-address" style={{ backgroundColor: '#f3edd1' }}>
                                    <div className="icon" style={{ color: '#EF5474' }}>
                                        <FiMapPin />
                                    </div>
                                    <div className="inner sameHeight">
                                        <h4 style={{ fontFamily: 'Brice-Black', fontSize: '30px', color: '#EF5474', }} className="title">Warehouse</h4>


                                        <p style={{ fontFamily: 'Brice-Light' }}>395 County Rd 202, #5B<br />Kyle, TX 78640</p><br/>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Address  */}

                        </div>
                    </div>
                </div>
                {/* End Contact Top Area  */}


                {/* Start Footer Style  */}
                <FooterTwo />
                {/* <Footer/> */}
                {/* End Footer Style  */}

                {/* Start Back To Top */}
                <div className="backto-top" >
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp style={{ color: '#EF5474' }} />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
            </Fragment>
            </LazyLoad>
        )
    }
}

export default InteriorLanding;
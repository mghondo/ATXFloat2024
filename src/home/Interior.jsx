import React, { Component, Fragment } from "react";
import Scrollspy from 'react-scrollspy';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp, FiX, FiMenu } from "react-icons/fi";
import FooterTwo from "../component/footer/FooterTwo";
import Helmet from "../component/common/Helmet";
import ContactTwo from "../elements/contact/ContactTwo";
import { FiHeadphones, FiMail, FiMapPin } from "react-icons/fi";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import './interiorStyles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import StockAndMerch2 from "./StockAndMerch2";
import CarouselMerchTubes from "./CarouselMerchTubes";
import MerchCarousel from "./MerchCarousel";
import MiniContactInfo from "./miniContactInfo";
import LazyLoad from 'react-lazyload';
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
const list = [
    {
        url: '/assets/images/NewImages10.23.2023/TUBES/Tubes_Single_Translucent_Blue_STB48/Tubes_Single_Translucent_Blue_STB48_Front.mini.png',
        image: 'image-2',
        category: 'Waterpark Tubes',
        title: 'Get tubes for your waterpark here!',
        link: '/portfolio#parkTubes'
    },
    {
        url: '/assets/images/NewImages10.23.2023/TUBES/Tubes_Single_Blue_STTO/Tubes_Single Blue_STTB_Front.mini.png',
        image: 'image-1',
        category: 'River Tubes',
        title: 'Get your custom made river tubes here!!',
        link: '/portfolio#riverTubes'
    },
    {
        // url: '/assets/images/NewImages10.23.2023/Merchandise/Float_Pouch_Solid/Float_Pouch_Solid_Assortment.png',
        url: '/assets/images/Merch.mini/Float_Pouch_Solid_Assortment.png',
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
               {/* <LazyLoad height={200} offset={100}> */}
                <Breadcrumb title={'ATX Float'} />
                {/* </LazyLoad> */}
                <Helmet pageTitle="Interior Design" />
               <header
                   className="header-area formobile-menu header--fixed default-color header-right-visible"
                    style={{ backgroundColor: '#343c44', paddingTop: '5px', paddingBottom: '5px'}}
                >
                    <div className="header-wrapper" id="header-wrapper" style={{padding: '0px' }}>
                            <>
                                <div className="header-left" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                                    <div className="logo" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                                        <a href="/" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>

                                            <img style={{ maxWidth: '200px', maxHeight: '30px' }} className="logo-1" src="/assets/images/logo/ATX_Logo_6dcef0.png" alt="Logo Images" />
                                            <img style={{ maxWidth: '200px', maxHeight: '20px' }} className="logo-2" src="/assets/images/logo/ATX_Logo_6dcef0.png" alt="Logo Images" />
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
                                                </ul>
                                            </li><br/>
                                            <li><a href="/merchandise">Merchandise</a></li>
                                            <li><a href="/customrivertubes">Custom Gallery</a></li>
                                            <li><a href="/about">About</a></li>
                                            <li><a href="/contact">Contact</a></li>


                                        </Scrollspy>
                                    </nav>
                                    <div className="humberger-menu d-block d-lg-none pl--20">
                                        <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                                    </div>

                                    <div className="close-menu d-block d-lg-none">
                                        <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                                    </div>
                                </div>
                            </>
                            {/*  )} */}
                    </div>
                </header>
            <LazyLoad height={200} offset={100}>
                <StockAndMerch2 list={list} ClassFromParent = 'col-lg-4 col-md-6 col-12'/>
            </LazyLoad>
            {/* <LazyLoad height={200} offset={100}> */}

        
            <CarouselMerchTubes/>
            {/* </LazyLoad> */}
            <div className="fix">
                    <div className="service-area creative-service-wrapper bg_color--5" style={{ paddingTop: '10px', backgroundColor: '#f3edd1', paddingBottom:'0px' }} >
                        <div className="container merchclass">
                            <div className="row">
                                <div className="col-lg-12">
                                <a href="/customrivertubes">
                                <div className="section-title text-center service-style--3 mb--30" style={{borderRadius: '25px', marginBottom: '0px'}}>
                                <div className="animated-text" style={{ animation: 'fontSizeAnimation 2s infinite alternate' }}>
                                    <h2 style={{color: '#ef5474', fontFamily: 'Brice-Black', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }} data-aos="fade-up" data-aos-duration="750" className="merchandise">Merchandise</h2>
                                </div>
                                </div>
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           <LazyLoad height={200} offset={100}>
            <MerchCarousel/>
            </LazyLoad>
                <div id="contact" style={contactAreaStyle} >
                    <ContactTwo />
                </div>
                <div className="rn-finding-us-area rn-finding-us bg_color--1" style={{  backgroundColor: '#f3edd1' }}>
                    <div className="inner">
                        <div className="content-wrapper" style={{paddingBottom: '20px',}}>
                            <div className="content" data-aos="fade-left" data-aos-duration="1000" style={{padding: '0px'}}>
                            </div>
                        </div>
                        <div className="thumbnail">
        </div>
                    </div>
                </div>
                <div className="rn-contact-top-area ptb--120 bg_color--5" style={footerBackground}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50" data-aos="fade-left" data-aos-duration="750">
                                <div className="rn-address" style={{ backgroundColor: '#f3edd1' }}>
                                    <div className="icon" style={{ color: '#EF5474' }}>
                                        <FiHeadphones />
                                    </div>
                                <div className="inner sameHeight" style={{color: 'white',}}>
                                <h4 style={{ fontFamily: 'Brice-Black', fontSize: '30px', color: '#EF5474', }} className="title">Info</h4>                                        
                                    <MiniContactInfo/>
                                    </div>
                                </div>
                            </div>
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


                        </div>
                    </div>
                </div>

                <FooterTwo />

                <div className="backto-top" >
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp style={{ color: '#EF5474' }} />
                    </ScrollToTop>
                </div>
            </Fragment>

            </LazyLoad>

        )
    }
}

export default InteriorLanding;
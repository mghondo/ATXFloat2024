

import React, { Component } from "react";
import PageHelmet from "../../component/common/Helmet";
// import ModalVideo from 'react-modal-video';
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
// import ProgressOne from "../../blocks/progressbar/ProgressOne";
// import GalleryRiver from "../../blocks/GalleryRiver";
import GalleryFromParent from "../../blocks/GalleryfromParent";
import './product.css';
import GalleryFromParent2 from "../../blocks/GalleryfromParent2";


import AOS from 'aos';
import 'aos/dist/aos.css';
import RandomGear from "./RandomGear";
import CustomGalleryFromParent from "../../blocks/CustomGalleryfromParent";

const photos = [
    {
        image: '02',
        bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Goggles_Adult/Goggles_Adult_Black-Blue_Metalic.jpg',
        category: 'Black - Blue Metallic',
        title: '',
        css: {},
    },
    {
        image: '02',
        bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Goggles_Adult/Goggles_Adult_Blue-Blue_Metalic.jpg',
        category: 'Blue - Blue Metallic',
        title: '',
        css: {},
    },

    {
        image: '02',
        bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Goggles_Adult/Goggles_Adult_White-Pearl_Metalic.jpg',
        category: 'White - Pearl Metallic',
        title: '',
        css: {},
    },
    {
        image: '02',
        bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Goggles_Adult/Goggles_Adult_White-Red_Metalic.jpg',
        category: 'White - Red Metallic',
        title: '',
        css: {},
    },
    {
        image: '02',
        bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Goggles_Adult/Goggles_Adult_Package.jpg',
        category: 'Package with ATX Logo',
        title: '',
        css: {},
    },
    {
        image: '02',
        bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Goggles_Adult/Goggles_Adult_Accessories.jpg',
        category: 'Accessories',
        title: '',
        css: {},
    },




    // Add more photo objects as needed
];


AOS.init();

// const images = [
//     {
//         productTitle: 'Product 1',
//         imageUrl: 'trydo/public/assets/images/NewImages10.23.2023/Merchandise/Dry_Bag_15L_Holographic/Dry_Bag_15L_Holographic_Strap.jpg',
//         imageDesc: 'Description for Product 1',
//     },
//     {
//         productTitle: 'Product 2',
//         imageUrl: '/assets/images/ATX_Float_Wholesale_files/blind_lemon_Web-1.png',
//         imageDesc: 'Description for Product 2',
//     },
//     {
//         productTitle: 'Product 1',
//         imageUrl: '/assets/images/ATX_Float_Wholesale_files/photo-19-scaled-thumbnail-optimized_0013_lazyll1.png',
//         imageDesc: 'Description for Product 1',
//     },
//     {
//         productTitle: 'Product 2',
//         imageUrl: '/assets/images/ATX_Float_Wholesale_files/Rudys_Web-1.png',
//         imageDesc: 'Description for Product 2',
//     },
//     {
//         productTitle: 'Product 1',
//         imageUrl: '/assets/images/ATX_Float_Wholesale_files/photo-19-scaled-thumbnail-optimized_0007_sons1.png',
//         imageDesc: 'Description for Product 1',
//     },
//     {
//         productTitle: 'Product 2',
//         imageUrl: '/assets/images/ATX_Float_Wholesale_files/landa_Web-1.png',
//         imageDesc: 'Description for Product 2',
//     },
//     // Add more image objects as needed
// ];

const SocialShare = [
    { Social: <FaFacebookF />, link: 'https://www.facebook.com/atxfloat/' },
    // {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/'},
    { Social: <FaInstagram />, link: 'https://www.instagram.com/atx.float/' },
    // {Social: <FaTwitter /> , link: 'https://twitter.com/'},
]

class GogglesAdult extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal() {
        this.setState({ isOpen: true })
    }
    render() {
        return (
            <React.Fragment>
                <PageHelmet pageTitle='Portfolio Details' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                {/* Start Breadcrump Area */}
                {/* <div className="rn-page-title-area pt--120 pb--190 bg_image" data-black-overlay="2" style={{ backgroundImage: `url(/assets/images/NewImages10.23.2023/Merchandise/Goggles_Adult/Goggles_Adult_Blue-Blue_Metalic.jpg)`, backgroundPosition: 'center 55%', }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 style={{ fontFamily: 'Brice-Black', }} className="title theme-gradient" data-aos="fade-down" data-aos-duration="750">Quick Clip Goggles</h2>
                                    <p style={{ fontFamily: 'Brice-Light', color: 'white' }} data-aos="fade-up" data-aos-duration="750">Adult Assortment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* End Breadcrump Area */}



                {/* Start Portfolio Details */}
                <div className="rn-portfolio-details ptb--120 bg_color--1 classIWant" style={{ backgroundColor: '#f3edd1', paddingTop: '50px', paddingBottom: '20px' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="portfolio-details">
                                    <div className="inner">
                                        {/* <h2
        style={{
            color: '#ef5474',
            fontFamily: 'Brice-Black',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
            textAlign: 'center',
            fontSize: '30px'
        }}
        data-aos="fade-up"
        data-aos-duration="750"
        className="subtitle"
    >
        Thick Neoprene Can Cooler
    </h2> */}
                                        <h2  style={{ fontFamily: 'Brice-Black', textAlign: 'center', color:'#ef5474', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', fontSize: '2rem'}} className="title theme-gra dient" data-aos="fade-down" data-aos-duration="750">Quick Clip Goggles</h2>
                                    {/* <p style={{ fontFamily: 'Brice-Light', color: 'white' }} data-aos="fade-up" data-aos-duration="750">Adult Assortment</p>
                               */}
                                        <h2
                                            style={{
                                                color: 'black',
                                                fontFamily: 'Brice-Light',

                                                textAlign: 'center',
                                                fontSize: '1.5rem',
                                                paddingTop: '10px',
                                                paddingBottom: '10px',
                                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)'
                                            }}
                                            data-aos="fade-up"
                                            data-aos-duration="750"
                                            className="subtitle"
                                        >
                                            Quick Clipping Eye Wear
                                        </h2>
                                        <h2
                                            style={{
                                                color: 'black',
                                                fontFamily: 'Brice-Light',

                                                textAlign: 'center',
                                                fontSize: '1.5rem',
                                                paddingTop: '15px',
                                                paddingBottom: '15px'
                                            }}
                                            data-aos="fade-up"
                                            data-aos-duration="750"
                                            className="subtitle"
                                        >
                                            Adult Assortment
                                        </h2>
                                        <div className="subtitle" style={{ borderBottom: '1px solid #e2e0e0' }}>
                                            {/* <GalleryFromParent2 photos={photos} /> */}
                                            <CustomGalleryFromParent photos={photos} maxHeight="5rem" maxWidth="5rem"/>


                                        </div>
 </div>

                                    {/* Product SKU Area */}
                                    <div className="inner" >
                                        <div className="portfolio-view-list d-flex flex-wrap justify-content-center align-items-center" style={{ paddingTop: '30px' }}>
                                            <div className="port-view">
                                                <h4 style={{ color: 'black', fontFamily: 'Brice-Light' }}>SKU: ATX-GOGA</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="inner" >
                                        <div className="portfolio-view-list d-flex flex-wrap justify-content-center align-items-center" style={{ paddingTop: '30px' }}>
                                            {/* <div className="port-view">
        <div className="text-center" style={{display: 'block', marginBottom: '30px'}}>
            <img src="/assets/images/barCodes/solidDryBag.jpg" alt="" />
        </div>
    </div> */}
                                            <div className="port-view">
                                                <h4 style={{ color: 'black', fontFamily: 'Brice-Light', textAlign: 'center', fontSize: '1rem' }}>
                                                    ASSORTED PACKING
                                                    - 5pcs White/Red Metalic - 5pcs Black/Blue Metalic
                                                    - 5pcs Blue/Blue Metalic
                                                    - 5pcs White/Pearl Metalic
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="portfolio-view-list d-flex flex-wrap justify-content-center align-items-center" style={{ paddingTop: '10px' }}>

                                            <div className="port-view">
                                                <h4 style={{ color: 'black', fontFamily: 'Brice-Light', fontSize: '1rem' }}>
                                                    FOB New Braunfels TX
                                                </h4>
                                            </div>

                                        </div>
                                        {/* <div className="port-view">
        <div className="text-center" style={{display: 'block', marginBottom: '30px'}}>
            <h4 style={{ color: 'black', fontFamily: 'Brice-Light', fontSize: '1rem' }}>
            *Floor displays available.
            </h4>
            </div>
    </div>  */}
                                        {/* <div className="row">
                                        <div className="col-lg-6">        */}

                                        {/* </div> */}
                                        {/* <div className="col-lg-6">  */}
                                        {/* <h2 style={{ color: '#ef5474', fontFamily: 'Brice-Black', textAlign:'center', fontSize: '55px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)'}} data-aos="fade-up" data-aos-duration="750">$39.99</h2> */}
                                        {/* </div>
        </div> */}
                                        <br />
                                        <a href="/contact" target="_blank" style={{ display: 'flex', justifyContent: 'center' }}>
                                            <button
                                                style={{
                                                    color: "#EF5474",
                                                    textDecoration: 'none', // Optional: Remove underline
                                                }}
                                                className="rn-button-style--2 btn-solid"
                                            >
                                                Contact for Purchase
                                            </button>
                                        </a>

                                        <div className="portfolio-view-list d-flex flex-wrap" style={{ paddingTop: '30px', justifyContent: 'center' }}>
                                            <div className="port-view">
                                                <h4 style={{ color: 'black', fontFamily: 'Brice-Light' }} data-aos="fade-up">White/Red Metallic</h4>
                                            </div>
                                            <div className="port-view">
                                                <h4 style={{ color: 'black', fontFamily: 'Brice-Light' }} data-aos="fade-up">Black/Blue Metallic</h4>
                                            </div>
                                            <div className="port-view">
                                                <h4 style={{ color: 'black', fontFamily: 'Brice-Light', textAlign: 'left' }} data-aos="fade-up">Blue/Blue Metallic</h4>
                                            </div>

                                            <div className="port-view">
                                                <h4 style={{ color: 'black', fontFamily: 'Brice-Light', textAlign: 'left' }} data-aos="fade-left">White/Pearl Metallic</h4>
                                            </div>

                                        </div>

                                        <p
                                            style={{
                                                color: 'black',
                                                fontFamily: 'Brice-Light',
                                                textAlign: 'center',
                                                paddingTop: '20px'
                                            }}
                                        >
                                            Professional grade swim goggles with quick release clip. Adjustable strap in kids and adult size. UV protection and Anti-fog coating. Packaged in high-end clear hanging case.</p>
                                   
                                        <div className="portfolio-share-link mt--20 pb--70 pb_sm--40" style={{ justifyContent: 'center', display: 'flex', paddingBottom: '20px' }}>
                                            <ul className="social-share rn-lg-size d-flex justify-content-center liststyle mt--15">
                                                {SocialShare.map((val, i) => (
                                                    <li key={i}><a href={`${val.link}`} rel="noopener noreferrer" target="_blank" style={{ borderColor: 'grey', color: 'grey', fontFamily: 'Brice-Light' }}>{val.Social}</a></li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* <div className="portfolio-share-link mt--20 pb--70 pb_sm--40">
                                            <ProgressOne/>
                                        </div> */}

                                    </div>


                                    {/* <div className="portfolio-thumb-inner">
                                        <div className="thumb position-relative mb--30" data-aos="fade-in">
                                            <img src="/assets/images/portfolio/portfolio-big-03.jpg" alt="Portfolio Images"/>
                                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} />
                                            <button className="video-popup position-top-center" onClick={this.openModal}><span className="play-icon"></span></button>
                                        </div>
                                        
                                        <div className="thumb mb--30" data-aos="fade-in">
                                            <img src="/assets/images/portfolio/portfolio-big-02.jpg" alt="Portfolio Images"/>
                                        </div>

                                        <div className="thumb" data-aos="fade-in">
                                            <img src="/assets/images/portfolio/portfolio-big-01.jpg" alt="Portfolio Images"/>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Portfolio Details */}
                {/* <GalleryRiver/> */}


                {/* Start Related Work */}
                <div className="portfolio-related-work pb--120 bg_color--1" style={{ backgroundColor: '#f3edd1' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <h3 style={{ color: '#ef5474', fontFamily: 'Brice-Black', fontSize: '32', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>Related Work</h3>
                                    <h2 style={{ color: '#00f2ff', fontFamily: 'Brice-Light', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>More Cool Stuff</h2>
                                </div>
                            </div>
                        </div>
                        <RandomGear/>

                    </div>
                </div>
                {/* End Related Work */}


                {/* Start Back To Top */}
                <div className="backto-top" >
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp style={{ color: '#EF5474' }} />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}

                <Footer />


            </React.Fragment>
        )
    }
}
export default GogglesAdult;

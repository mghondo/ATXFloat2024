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
        bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Bevie_Sling/AJS_4128-Edit_2.jpg',
        category: '',
        title: '',
        css: {},
    },
    {
        image: '02',
        bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Bevie_Sling/AJS_4043-Edit_02.jpg',
        category: '',
        title: '',
        css: {},
    },
    {
        image: '02',
        bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Bevie_Sling/5-27-23_Asialena_Guadalupe_Float.jpg',
        category: 'Bevie in Action',
        title: '',
        css: {},
    },
    {
        image: '02',
        bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Bevie_Sling/Bevie Sling_Assorted3.jpg',
        category: 'Green, Blue, Pink, and Orange',
        title: '',
        css: {},
    },

    {
        image: '02',
        bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Bevie_Sling/Bevie_Sling_Assorted.jpg',
        category: 'Green, Blue, Pink, and Orange',
        title: '',
        css: {},
    },
    {
        image: '02',
        bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Bevie_Sling/Bevie_Sling_Assorted2.png',
        category: 'Blue',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Bevie_Sling/Bevie Sling_Blue_2.jpg',
        category: 'Blue',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Bevie_Sling/Bevie Sling_Blue.jpg',
        category: 'Blue',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Bevie_Sling/Bevie Sling_Green.jpg',
        category: 'Green',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Bevie_Sling/Bevie Sling_Green_2.jpg',
        category: 'Green',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Bevie_Sling/Bevie Sling_Orange.jpg',
        category: 'Orange',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Bevie_Sling/Bevie Sling_Orange_2.jpg',
        category: 'Orange',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Bevie_Sling/Bevie Sling_Pink.jpg',
        category: 'Pink',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Bevie_Sling/Bevie Sling_Pink_02.jpg',
        category: 'Pink',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: '/assets/images/NewImages10.23.2023/Lifestyle Photos/AJS_4290.jpg',
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    // Add more photo objects as needed
];


AOS.init();

// const images = [
//     {
//         productTitle: 'Product 1',
//         imageUrl: '/assets/images/ATX_Float_Wholesale_files/Buckees2_Web-1.png',
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

class BevieSling extends Component {
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
                {/* <div className="rn-page-title-area pt--120 pb--190 bg_image" data-black-overlay="3" style={{ backgroundImage: `url(/assets/images/NewImages10.23.2023/Merchandise/Bevie_Sling/Bevie_Sling_Assorted2.png)` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 style={{ fontFamily: 'Brice-Black', }} className="title theme-gradient" data-aos="fade-down" data-aos-duration="750">Bevie Sling</h2>
                                    <p style={{ fontFamily: 'Brice-Light', color: 'white' }} data-aos="fade-up" data-aos-duration="750">Thick Neoprene Can Cooler</p>
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

<h2  style={{ fontFamily: 'Brice-Black', textAlign: 'center', color:'#ef5474', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', fontSize: '2rem'}} className="title theme-gra dient" data-aos="fade-down" data-aos-duration="750">Bevie Sling</h2>
                                   
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
                                            Thick Neoprene Can Cooler
                                        </h2>
                                        <div className="subtitle" style={{ borderBottom: '1px solid #e2e0e0' }}>
                                            {/* <GalleryFromParent2 photos={photos} /> */}
                                            <CustomGalleryFromParent photos={photos} maxWidth="3.5rem" maxHeight="3.5rem" itemsPerPage='7' twopag='false' />

                                        </div>

                                    </div>

                                    {/* Product SKU Area */}
                                    <div className="inner" >
                                        <div className="portfolio-view-list d-flex flex-wrap justify-content-center align-items-center" style={{ paddingTop: '30px' }}>
                                            <div className="port-view">
                                                <h4 style={{ color: 'black', fontFamily: 'Brice-Light' }}>SKU: ATX-BS03</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="inner" >
                                        <div className="portfolio-view-list d-flex flex-wrap justify-content-center align-items-center" style={{ paddingTop: '30px' }}>
                                            <div className="port-view">
                                                <div className="text-center" style={{ display: 'block', marginBottom: '30px' }}>
                                                    <img src="/assets/images/barCodes/bevieSling.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="port-view">
                                                <h4 style={{ color: 'black', fontFamily: 'Brice-Light', textAlign: 'center', fontSize: '1rem' }}>
                                                    Master Carton: 240pcs Inner Poly Bag: 20pcs (5 Green, 5 Blue, 5 Orange, 5 Pink)
                                                </h4>
                                            </div>
                                            <div className="port-view">
                                                <h4 style={{ color: 'black', fontFamily: 'Brice-Light', fontSize: '1rem' }}>
                                                    FOB New Braunfels TX
                                                </h4>
                                            </div>
                                        </div>
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
                                                <h4 data-aos="fade-right" style={{ color: 'black', fontFamily: 'Brice-Light' }}>Blue</h4>
                                            </div>

                                            <div className="port-view">
                                                <h4 data-aos="fade-up" style={{ color: 'black', fontFamily: 'Brice-Light' }}>Orange</h4>
                                            </div>

                                            <div className="port-view">
                                                <h4 data-aos="fade-down" style={{ color: 'black', fontFamily: 'Brice-Light' }}>Green</h4>
                                            </div>

                                            <div className="port-view">
                                                <h4 data-aos="fade-left" style={{ color: 'black', fontFamily: 'Brice-Light' }}>Pink</h4>
                                            </div>
                                        </div>

                                        <p
                                            style={{
                                                color: 'black',
                                                fontFamily: 'Brice-Light',
                                                textAlign: 'center',
                                            }}
                                        >
                                            Thick Neoprene Can Cooler Comfortable Neoprene Lanyard holds drinks upright and hands free during outdoor activities. Keep beverages ice-cold in the thick 5mm Neoprene cooler.
                                        </p>
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
export default BevieSling;

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
        bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Float_Pouch_USA/Float_Pouch_USA_Package.jpg',
        category: 'USA Package',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Float_Pouch_USA/Float_Pouch_USA.jpg',
        category: 'USA',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: '/assets/images/NewImages10.23.2023/Lifestyle Photos/AJS_4064-Edit.jpg',
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: '/assets/images/NewImages10.23.2023/Lifestyle Photos/AJS_4103-Edit_03.jpg',
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: '/assets/images/NewImages10.23.2023/Lifestyle Photos/AJS_4113-Edit.jpg',
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

class USColorWay extends Component {
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
                {/* <div className="rn-page-title-area pt--120 pb--190 bg_image" data-black-overlay="3" style={{ backgroundImage: `url(/assets/images/NewImages10.23.2023/Merchandise/Float_Pouch_USA/Float_Pouch_USA_Package.jpg)`, backgroundPosition: 'center 50%'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 style={{ fontFamily: 'Brice-Black', }} className="title theme-gradient" data-aos="fade-down" data-aos-duration="750">Float Pouch</h2>
                                    <p style={{ fontFamily: 'Brice-Light', color: 'white' }} data-aos="fade-up" data-aos-duration="750">USA Colorway</p>
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
                            {/* <div>
      <img
        src="/assets/images/NewImages10.23.2023/Merchandise/Float_Pouch_USA/Float_Pouch_USA_Package.jpg"  
        alt="Description of the image"
        style={{
            width: '00px',
            borderRadius: '10px',
            backgroundImage: `url(/assets/images/NewImages10.23.2023/Merchandise/Float_Pouch_USA/Float_Pouch_USA_Package.jpg)`
          }}
      />
    </div> */}
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

<h2  style={{ fontFamily: 'Brice-Black', textAlign: 'center', color:'#ef5474', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', fontSize: '2rem'}} className="title theme-gra dient" data-aos="fade-down" data-aos-duration="750">Float Pouch</h2>
    <h2
                                            style={{
                                                color: 'black',
                                                fontFamily: 'Brice-Light',
                                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
                                                textAlign: 'center',
                                                fontSize: '1.5rem',
                                                padding: '10px 0'
                                            }}
                                            data-aos="fade-up"
                                            data-aos-duration="750"
                                            className="subtitle"
                                        >
                                            Waterproof Phone Case
                                        </h2>
                                        <h2
                                            style={{
                                                color: 'black',
                                                fontFamily: 'Brice-Light',

                                                textAlign: 'center',
                                                fontSize: '1.5rem',
                                                paddingTop: '10px',
                                                paddingBottom: '10px'
                                            }}
                                            data-aos="fade-up"
                                            data-aos-duration="750"
                                            className="subtitle"
                                        >
                                            USA Colorway
                                        </h2>
                                        <div className="subtitle" style={{ borderBottom: '1px solid #e2e0e0' }}>
                                        <CustomGalleryFromParent photos={photos} maxHeight="5rem" maxWidth="5rem" itemsPerPage='12' twopag='false'/>

                                        </div>
                                        

                                    </div>

                                    {/* Product SKU Area */}
                                    <div className="inner" >
                                        <div className="portfolio-view-list d-flex flex-wrap justify-content-center align-items-center" style={{ paddingTop: '30px' }}>
                                            <div className="port-view">
                                                <h4 style={{ color: 'black', fontFamily: 'Brice-Light' }}>SKU: ATX-FP05USA</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="inner" >
                                        <div className="portfolio-view-list d-flex flex-wrap justify-content-center align-items-center" style={{ paddingTop: '10px' }}>
                                            <div className="port-view">
                                                <div className="text-center" style={{ display: 'block', marginBottom: '10px' }}>
                                                    <img src="/assets/images/barCodes/USAFloatPouch.jpg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="portfolio-view-list d-flex flex-wrap justify-content-center align-items-center" style={{ paddingTop: '10px' }}>

                                            <div className="port-view">
                                                <h4 style={{ color: 'black', fontFamily: 'Brice-Light', textAlign: 'center', fontSize: '1rem' }}>
                                                    Master Carton: 180pcs Inner Carton: 30pcs</h4>
                                            </div>
                                        </div>
                                        <div className="portfolio-view-list d-flex flex-wrap justify-content-center align-items-center" style={{ paddingTop: '10px' }}>

                                            <div className="port-view">
                                                <h4 style={{ color: 'black', fontFamily: 'Brice-Light', fontSize: '1rem' }}>
                                                    FOB New Braunfels TX
                                                </h4>
                                            </div>
                                        </div>

                                        <div className="portfolio-view-list d-flex flex-wrap justify-content-center align-items-center" style={{ paddingTop: '10px' }}>

                                            <div className="port-view">
                                                <div className="text-center" style={{ display: 'block', marginBottom: '10px' }}>
                                                    <h4 style={{ color: 'black', fontFamily: 'Brice-Light', fontSize: '1rem' }}>
                                                        *Floor and Counter displays available.
                                                    </h4>
                                                </div>
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

                                        {/* Color Section */}

                                        <p className='summaryP'
                                            style={{
                                                color: 'black',
                                                fontFamily: 'Brice-Light',
                                                textAlign: 'center',
                                                paddingTop: '20px'
                                            }}
                                        >
                                            Best seller and time tested waterproof IPX8 phone pouch with a patriotic spin. Foam pillow insert keeps the pouch afloat with a special back pocket for cash and cards. Includes lanyard with safety breakaway.
                                            <br /><br />Full phone functionality with touchscreen friendly waterproof film. Play your music with Bluetooth and take crystal clear photos or videos while on the water. Phone rests comfortably with the fabric neck lanyard and will float if accidently dropped in the water.
                                            Keep money or cards safe and dry in the back pouch pocket.
                                            Universal: Fits all phone sizes.</p>

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
                
                {/* <div className="inner" style={{ paddingBottom: '60px', backgroundColor: '#f3edd1' }}>
                    <a href="/contact" target="_blank" style={{ display: 'flex', justifyContent: 'center' }}>
                        <button
                            style={{
                                color: "#EF5474",
                                fontSize: '30px',
                                textDecoration: 'none', // Optional: Remove underline
                            }}
                            className="rn-button-style--2 btn-solid"
                        >
                            Contact for Purchase
                        </button>
                    </a>
                </div> */}

                

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
export default USColorWay;

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PageHelmet from "../../../component/common/Helmet";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Header from "../../../component/header/Header";
import Footer from "../../../component/footer/Footer";
import RandomGear from "../../productComps/RandomGear";
import './merch.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FooterTwo from "../../../component/footer/FooterTwo";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import CustomGalleryFromParent from "../../../blocks/CustomGalleryfromParent";

const photos = [

  {
    image: '02',
    bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Float_Pouch_USA/Float_Pouch_USA.png',
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
];

AOS.init();

const SocialShare = [
  { Social: <FaFacebookF />, link: 'https://www.facebook.com/atxfloat/' },
  { Social: <FaInstagram />, link: 'https://www.instagram.com/atx.float/' },
];

// ... (imports remain the same)

class USColorWay2 extends Component {
    constructor() {
      super();
      this.state = {
        isOpen: false,
      };
      this.openModal = this.openModal.bind(this);
    }
  
    openModal() {
      this.setState({ isOpen: true });
    }
  
    render() {
        const { customTubes, linkTo = '/' } = this.props;

      const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
      };
  
      return (
        <React.Fragment>
          <PageHelmet pageTitle='Portfolio Details'/>
          <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
          <div className="rn-about-area ptb--120 bg_color--1" style={{ backgroundColor: '#f3edd1'}}>
            <h2 className="title" data-aos="fade-down" data-aos-duration="750">Float Pouch</h2>
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
            
            <div className="rn-about-wrapper">
              <div className="container">
                <div className="row row--35 align-items-center">
                  <div className="col-lg-5 col-md-6 col-sm-12 mt_md--40 mt_sm--40">
                    <div className="thumbnail">
                      <img style={{boxShadow: 'none'}} className="w-100 slider-image" src="/assets/images/NewImages10.23.2023/Merchandise/Float_Pouch_USA/Float_Pouch_USA_Package.png" alt="About Images"/>
                    </div>
                    <CustomGalleryFromParent photos={photos} maxHeight="5rem" maxWidth="5rem" itemsPerPage='7' twopag='false'/>

                  </div>
                  <div className="col-lg-7 col-md-6 col-sm-12">
                    <div className="about-inner inner">
                      <div className="section-title">
                      <h2 className="subtitle" data-aos="fade-up" data-aos-duration="750">Waterproof Phone Case</h2>
                        {/* <h2 className="subtitle" data-aos="fade-up" data-aos-duration="750">Waterproof Phone Case</h2> */}
                      </div>
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
                                        <img style={{maxHeight: '100px'}} src="/assets/images/barCodes/USAFloatPouch.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <p style={{fontFamily:'Brice-Light'}} className="description">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p> */}
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


{/* 
                      <div className="row mt--30">


                      </div> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Lower Section if needed */}

              {/* <div className="container lowerLevel">
                <div className="row row--35 align-items-center">
                <div className="col-lg-12 col-md-12 col-sm-12 mt_md--40 mt_sm--40">
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
                </div>
              </div>
              </div> */}

{/* End lower section. */}
            </div>
          </div>
          <div className="section-title text-center">
                                    {/* <h3 style={{ color: '#ef5474', fontFamily: 'Brice-Black', fontSize: '32', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>Related Work</h3> */}
                                    <h2 style={{ color: '#00f2ff', fontFamily: 'Brice-Light', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>More Cool Stuff</h2>
          </div>
          <RandomGear/>
          <Footer />
        </React.Fragment>
      );
    }
  }
  
  
  // ... (PrevArrow, NextArrow components remain the same)

  

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FiChevronLeft />
    </div>
  );
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FiChevronRight />
    </div>
  );
};

export default USColorWay2;

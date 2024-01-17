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
      bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Dry_Bag_10L_Nylon_Camo/Dry_Bag_Nylon_10L_Assorted_Camo.png',
      category: '',
      title: '',
      css: {},
  },
  {
      image: '02',
      bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Dry_Bag_10L_Nylon_Camo/Dry Bag_Nylon 10L_Blue Camo.png',
      category: 'Blue',
      title: '',
      css: {},
  },
  {
      image: '02',
      bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Dry_Bag_10L_Nylon_Camo/Dry Bag_Nylon 10L_Green Camo.png',
      category: 'Orange',
      title: '',
      css: {},
  },

  {
      image: '02',
      bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Dry_Bag_10L_Nylon_Camo/Dry Bag_Nylon 10L_Orange Camo.png',
      category: 'Pink',
      title: '',
      css: {},
  },

  {
      image: '02',
      bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Dry_Bag_10L_Nylon_Camo/Dry Bag_Nylon 10L_Pink Camo.png',
      category: 'Green',
      title: '',
      css: {}, // Define the CSS properties as an object
  },
  {
    image: '02',
    bigImage: '/assets/images/NewImages10.23.2023/Lifestyle Photos/AJS_4290.jpg',
    category: '',
    title: '',
    css: {},
},


  // Add more photo objects as needed
];

const SocialShare = [
    { Social: <FaFacebookF />, link: 'https://www.facebook.com/atxfloat/' },
    { Social: <FaInstagram />, link: 'https://www.instagram.com/atx.float/' },
  ];
  

class DryCamo2 extends Component {
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
              <h2 className="title productTitle" data-aos="fade-down" data-aos-duration="750">Float Pouch</h2>
              <h2
  style={{
  // color: 'black',
  // fontFamily: 'Brice-Light',
  
  // textAlign: 'center',
  // fontSize: '1.5rem',
  // paddingTop: '10px',
  // paddingBottom: '10px'
  }}
  data-aos="fade-up"
  data-aos-duration="750"
  className="subtitle"
  >
  Dry Bag Camo Nylon
  </h2>
              
              <div className="rn-about-wrapper">
                <div className="container">
                  <div className="row row--35 align-items-center">
                    <div className="col-lg-5 col-md-6 col-sm-12 mt_md--40 mt_sm--40">
                      <div className="thumbnail">
                        <img style={{boxShadow: 'none'}} className="bigPhoto slider-image" src="/assets/images/NewImages10.23.2023/Merchandise/Dry_Bag_10L_Nylon_Camo/Dry_Bag_Nylon_10L_Assorted_Camo.png" alt="About Images"/>
                      </div>
                      <CustomGalleryFromParent photos={photos} maxHeight="5rem" maxWidth="5rem" itemsPerPage='7' twopag='false'/>
  
                    </div>
                    <div className="col-lg-7 col-md-6 col-sm-12">
                      <div className="about-inner inner">
                        <div className="section-title">
                        <h2 className="subtitle" data-aos="fade-up" data-aos-duration="750">Double-wall with special insulation keeps beverages ice-cold.</h2>
                          {/* <h2 className="subtitle" data-aos="fade-up" data-aos-duration="750">Waterproof Phone Case</h2> */}
                        </div>
                          <div className="inner" >
                              <div className="portfolio-view-list d-flex flex-wrap justify-content-center align-items-center noMargin" style={{ paddingTop: '30px' }}>
                                  <div className="port-view">
                                      <h4 className="noMargin" style={{ color: 'black', fontFamily: 'Brice-Light' }}>SKU: ATX-DB10LC</h4>
                                  </div>
                              </div>
                          </div>
                          <div className="inner" >
                              <div className="portfolio-view-list d-flex flex-wrap justify-content-center align-items-center" style={{ paddingTop: '10px' }}>
                                  <div className="port-view">
                                      <div className="text-center" style={{ display: 'block', marginBottom: '10px' }}>
                                          <img style={{maxHeight: '100px'}} src="/assets/images/barCodes/DryCamo2.png" alt="" />
                                      </div>
                                  </div>
                              </div>
                          </div>
                          {/* <p style={{fontFamily:'Brice-Light'}} className="description">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p> */}
                          <div className="portfolio-view-list d-flex flex-wrap justify-content-center align-items-center" style={{ paddingTop: '10px' }}>
  
                              <div className="port-view">
                                  <h4 className="noMargin" style={{ color: 'black', fontFamily: 'Brice-Light', textAlign: 'center', fontSize: '1rem' }}>
                                  Assorted Packaging: Master Carton: 240pcs Inner Carton: 40pcs (10 Blue, 10 Orange, 10 Pink, 10 Green)</h4>
                              </div>
                              </div>
                              <div className="portfolio-view-list d-flex flex-wrap justify-content-center align-items-center noMargin">
  
                              <div className="port-view noMargin">
                                  <h4 style={{ color: 'black', fontFamily: 'Brice-Light', fontSize: '1rem' }}>
                                      FOB New Braunfels TX
                                  </h4>
                              </div>

                              </div>
                              <div className="port-view noMargin">
                                  <div className="text-center noMargin" style={{ display: 'block' }}>
                                      <h4 style={{ color: 'black', fontFamily: 'Brice-Light', fontSize: '1rem' }}>
                                          *Floor displays available.
                                      </h4>
                                  </div>
                              </div>
                              <p
                                style={{
                                    color: 'black',
                                    fontFamily: 'Brice-Light',
                                    textAlign: 'center',
                                }}
                            >
                                Lightweight and strong Ripstop Nylon with Waterproof UV coating on inside and smooth Silicon outer coating. Roll- top clipped closure. These dry bags float if dropped in the water and are perfect for keeping belongings 100% dry.</p>
                    
                            

  
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
  




export default DryCamo2;
import React from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import Slider from "react-slick";
// import PortfolioList from "../elements/portfolio/PortfolioList";
import { slickDot } from "../page-demo/script";
// import { Link } from "react-router-dom";
import PortfolioListNew from "../elements/portfolio/PortfolioListNew";
import { Parallax } from "react-parallax";
import { useHistory } from 'react-router-dom'; 
import './PortfolioCSS.css';

// const image1 = '/assets/images/bg/riverTube2.0.png';
// const image2 = '/assets/images/bg/riverTube2.0.png'
const image3 = '/assets/images/logo/ATX_Float_Logo 2/Banner-Logo.jpg'
const customImage = '/assets/images/bg/CustomTubeBanner.png'
const productDisplay = '/assets/images/bg/productDisplay.png'

const CustomGalleryPage = () => {
    const history = useHistory();
    const handleParallaxClick = () => {
        // Navigate to the home page or the desired route
        history.push('/');
      };
    return (
        <>
            <div style={{ backgroundColor: '#f3edd1' }}>
                <PageHelmet pageTitle='Counters' />

                {/* Start Header Area  */}
                <Header headertransparent="header--transparent" colorblack="color--black" />
                {/* End Header Area  */}

                {/* Start Breadcrump Area */}
                {/* <Breadcrumb title={'Custom Galleries'} backgroundUrl='none'/> */}

                <h2 style={{ textAlign: "center", fontFamily: 'Brice-Black', paddingTop: '150px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', color: '#ef5474'}} data-aos="fade-down" data-aos-duration="750" className="title">Custom Galleries</h2>

                {/* End Breadcrump Area */}

                {/* Start Page Wrapper  */}
                <main className="page-wrapper">
                    

                <div className="row creative-service" style={{padding: '70px'}}>
                                <div className="col-lg-6">
                                <a href="/customrivertubes">
                                <div className="view-more-btn mt--60 text-center">
                                            {/* <a className="rn-button-style--2 btn-solid" href="/portfolio"><span>View More Project</span></a> */}
                                            <a href="/customrivertubes">
                                            <Parallax  onClick={handleParallaxClick} bgImage={customImage} strength={800} style={{padding: '70px', borderRadius: '25px'}}>
                                            <div className="section-title text-center service-style--3 mb--30">
                                                {/* <h2 style={{fontSize:'5rem', fontFamily: 'Brice-Black', color: '#ef5474', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }} data-aos="fade-up" data-aos-duration="750" className="title">Custom River Tubes</h2> */}
                                                {/* <p style={{color:'white', fontFamily: 'Brice-Light'}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p> */}
                                                <div className="animated-text" style={{ animation: 'fontSizeAnimation 2s infinite alternate' }}>
                                                <p style={{color:'white', fontFamily: 'Brice-Light', fontSize:'2.5rem'}}>Click Here for....</p> 
                                                    <h2 style={{fontSize:'5rem', fontFamily: 'Brice-Black', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }} data-aos="fade-up" data-aos-duration="750" id='customTube' className="title customTube">Custom River Tubes</h2>
                                                </div>
                                                {/* <div className="portfolio-button">
                                                    <a style={{ fontFamily: 'Brice-Black' }} className="rn-btn">See More!</a>
                                                </div> */}
                                            </div>
                                        </Parallax>
                                        </a>
                                        </div>
                                        </a>
                                    {/* <ServiceList item="6" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" /> */}
                                </div>
                                <div className="col-lg-6">
                                <a href="/customparktubes">
                                <div className="view-more-btn mt--60 text-center">
                                            {/* <a className="rn-button-style--2 btn-solid" href="/portfolio"><span>View More Project</span></a> */}
                                            <a href="/customparktubes">
                                            <Parallax  onClick={handleParallaxClick} bgImage={customImage} strength={800} style={{padding: '70px', borderRadius: '25px'}}>
                                            <div className="section-title text-center service-style--3 mb--30">
                                                {/* <h2 style={{fontSize:'5rem', fontFamily: 'Brice-Black', color: '#ef5474', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }} data-aos="fade-up" data-aos-duration="750" className="title">Custom River Tubes</h2> */}
                                                {/* <p style={{color:'white', fontFamily: 'Brice-Light'}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p> */}
                                                <div className="animated-text" style={{ animation: 'fontSizeAnimation 2s infinite alternate' }}>
                                                <p style={{color:'white', fontFamily: 'Brice-Light', fontSize:'2.5rem'}}>Click Here for....</p> 
                                                    <h2 style={{fontSize:'5rem', fontFamily: 'Brice-Black', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }} data-aos="fade-up" data-aos-duration="750" id='customTube' className="title customTube">Custom Park Tubes</h2>
                                                </div>
                                                {/* <div className="portfolio-button">
                                                    <a style={{ fontFamily: 'Brice-Black' }} className="rn-btn">See More!</a>
                                                </div> */}
                                            </div>
                                        </Parallax>
                                        </a>
                                        </div>
                                        </a>
    </div>
                            </div>


                </main>
                {/* End Page Wrapper  */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp style={{ color: '#EF5474' }} />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}

                {/* Start Footer Area  */}
                <Footer />
                {/* End Footer Area  */}
            </div>
        </>

    )
}

export default CustomGalleryPage;
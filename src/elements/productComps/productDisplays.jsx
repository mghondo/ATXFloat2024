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
import GalleryForDisplays from "../../blocks/GalleryForDisplays";
import GalleryForDisplays2 from "../../blocks/GalleryForDisplays2";


AOS.init();

const SocialShare = [
    { Social: <FaFacebookF />, link: 'https://www.facebook.com/atxfloat/' },
    // {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/'},
    { Social: <FaInstagram />, link: 'https://www.instagram.com/atx.float/' },
    // {Social: <FaTwitter /> , link: 'https://twitter.com/'},
]

const floorDisplayPouch = [
    {
        image: '02',
        bigImage: '/assets/images/NewImages10.23.2023/Product_Displays/Counter_Display_Float_Pouch.png',
        category: '',
        title: '',
        css: {},
    },
]

const floorStands =[
    {
        image: '02',
        bigImage: '/assets/images/NewImages10.23.2023/Product_Displays/Floor_Stand_Multi-Product_Angle.png',
        category: '',
        title: '',
        css: {},
    },
    {
        image: '02',
        bigImage: '/assets/images/NewImages10.23.2023/Product_Displays/Floor_Stand_Float_Pouch.png',
        category: '',
        title: '',
        css: {},
    },
    {
        image: '02',
        bigImage: '/assets/images/NewImages10.23.2023/Product_Displays/Floor_Stand_Multi-Product.png',
        category: '',
        title: '',
        css: {},
    },
]

const sunglassStands =[ 
    {
        image: '02',
        bigImage: '/assets/images/NewImages10.23.2023/Product_Displays/Counter_Display_Sunglass_Floaters.png',
        category: '',
        title: '',
        css: {},
    }, 
]

class ProductDisplays extends Component {
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

            <div className="rn-portfolio-details ptb--120 bg_color--1 classIWant" style={{ backgroundColor: '#f3edd1', paddingTop: '50px', paddingBottom: '20px' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="portfolio-details">
                                    <div className="inner">
                                    <h2 style={{ fontFamily: 'Brice-Black', textAlign: 'center', color:'#ef5474', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',}} className="title" data-aos="fade-down" data-aos-duration="750">Product Displays</h2>
                                    <h2
                                            style={{
                                                color: '#00f3ff',
                                                fontFamily: 'Brice-Black',

                                                textAlign: 'center',
                                                fontSize: '2rem',
                                                paddingTop: '10px',
                                                paddingBottom: '10px',
                                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)'
                                            }}
                                            data-aos="fade-up"
                                            data-aos-duration="750"
                                            className="subtitle"
                                        >
                                            Float Pouch Counter Display
                                        </h2>
                                    <GalleryForDisplays photos={floorDisplayPouch}/>

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
                                            Free with your purchase of 2 inner cartons - $40 Value
                                        </h2>
                                        {/* ($40.00 VALUE)
FREE WITH YOUR PURCHASE
OF 2 INNER CARTONS (60 FLOAT POUCHES)
(*Please pay shipping separately)
• Made from plastic with quick/easy assembly.
• 13" (Tall) x 11" (Wide) x 7" (Deep)
• Holds up to 14 Float Pouches
• Carton (Shipping): 19” x 13.5” x 1.5” (3.8 lbs) */}

<ul                                             style={{
                                                color: 'black',
                                                fontFamily: 'Brice-Light',
                                                fontSize:'20px',
                                                paddingTop: '20px'
                                            }}>
    <li>Made from plastic with quick/easy assembly.</li>
    <li>13" (Tall) x 11" (Wide) x 7" (Deep)</li>
    <li>Holds up to 14 Float Pouches</li>
    <li>Carton (Shipping): 19” x 13.5” x 1.5” (3.8 lbs)</li>

</ul>
<p
                                            style={{
                                                color: 'black',
                                                fontFamily: 'Brice-Light',
                                                textAlign: 'center',
                                                paddingTop: '20px'
                                            }}
                                        >
                                            (*Please pay shipping separately)</p>
                            
                            {/* Next Product */}
                                            <h2
                                            style={{
                                                color: '#00f3ff',
                                                fontFamily: 'Brice-Black',

                                                textAlign: 'center',
                                                fontSize: '2rem',
                                                paddingTop: '10px',
                                                paddingBottom: '10px',
                                                marginBottom: '30px',
                                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)'
                                            }}
                                            data-aos="fade-up"
                                            data-aos-duration="750"
                                            className="subtitle"
                                        >
                                            Multi-Product Floor Display
                                        </h2>
                                        {/* <GalleryForDisplays photos={floorStands} imageWidth="15rem" imageHeight="15rem"/> */}
                                        <GalleryForDisplays2 photos={floorStands} />
                                        <h2
                                            style={{
                                                color: 'black',
                                                fontFamily: 'Brice-Light',

                                                textAlign: 'center',
                                                fontSize: '1.5rem',
                                                paddingTop: '15px',
                                                paddingBottom: '15px'
                                            }}
                                            // data-aos="fade-up"
                                            // data-aos-duration="750"
                                            className="subtitle"
                                        >
                                            Free with your purchase of 1 master carton of float pouches or combined
PRODUCT ORDER TOTALING $910.00 - $120 Value
                                        </h2>
<ul                                             style={{
    color: 'black',
    fontFamily: 'Brice-Light',
    fontSize:'20px',
    paddingTop: '20px'
}}>
    <li>Displays combination of Float Pouches, Sunglass Floaters, Dry Bags, and Bevie Slings.
Or displays Float Pouches on all hooks.</li>
    <li>Made from plastic with quick/easy assembly.</li>
    <li>66" (Tall) x 24.5" (Wide) x 16" (Deep)</li>
    <li>Carton (Shipping): 72” x 25” x 2.5” (24.6 lbs)</li>

</ul>
<p
                                            style={{
                                                color: 'black',
                                                fontFamily: 'Brice-Light',
                                                textAlign: 'center',
                                                paddingTop: '20px'
                                            }}
                                        >
                                            (*Please pay shipping separately)</p>

{/* next product  */}

<h2
                                            style={{
                                                color: '#00f3ff',
                                                fontFamily: 'Brice-Black',

                                                textAlign: 'center',
                                                fontSize: '2rem',
                                                paddingTop: '10px',
                                                paddingBottom: '10px',
                                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)'
                                            }}
                                            data-aos="fade-up"
                                            data-aos-duration="750"
                                            className="subtitle"
                                        >
                                            Sunglass Floaters Counter Display
                                        </h2>
                                        <GalleryForDisplays photos={sunglassStands} imageWidth="25rem" imageHeight="25rem"/>
                                        
                                        <h2
                                            style={{
                                                color: 'black',
                                                fontFamily: 'Brice-Light',

                                                textAlign: 'center',
                                                fontSize: '1.5rem',
                                                paddingTop: '15px',
                                                paddingBottom: '15px'
                                            }}
                                            // data-aos="fade-up"
                                            // data-aos-duration="750"
                                            className="subtitle"
                                        >Free with your purchase of 2 inner cartons (100 Sunglass Floaters)- $40 Value
                                        </h2>
                                        <ul                                             style={{
    color: 'black',
    fontFamily: 'Brice-Light',
    fontSize:'20px',
    paddingTop: '20px'
}}>
    <li>Made from plastic with quick/easy assembly.</li>
    <li>20" (Tall) x 14" (Wide) x 9" (Deep)</li>
    <li>Holds up to 50 Sunglass Floaters</li>
    <li>Carton (Shipping): 28” x 15” x 2.5” (4.8 lbs)</li>

</ul>

                                        <p
                                            style={{
                                                color: 'black',
                                                fontFamily: 'Brice-Light',
                                                textAlign: 'center',
                                                paddingTop: '20px'
                                            }}
                                        >
                                            (*Please pay shipping separately)</p>

                                            <div className="inner" style={{ paddingBottom: '60px', backgroundColor: '#f3edd1' }}>
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
                </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>


                {/* Start Related Work */}
                <div className="portfolio-related-work pb--120 bg_color--1" style={{ backgroundColor: '#f3edd1' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    {/* <h3 style={{ color: '#ef5474', fontFamily: 'Brice-Black', fontSize: '32', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>Related Work</h3> */}
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

export default ProductDisplays;
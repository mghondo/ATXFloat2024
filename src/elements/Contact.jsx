import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import { FiHeadphones , FiMail , FiMapPin } from "react-icons/fi";
import GoogleMapReact from 'google-map-react';
import ContactTwo from "../elements/contact/ContactTwo";
import BrandTwo from "../elements/BrandTwo";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import Breadcrumb from "./common/Breadcrumb";
// import Breadcrumb2_0 from "./common/BreadCrumb2.0";
// import Scrollspy from "react-scrollspy";
// import { FiMenu, FiX } from "react-icons/fi";
import { Helmet } from "react-helmet";
import MiniContactInfo from "../home/miniContactInfo";

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import MiniContactFooter from "../home/miniContactFooter";

AOS.init();

const footerBackground = {
    backgroundColor: '#44494e',
    padding: '60px'
}

const AnyReactComponent = ({ text }) => <div>{text}</div>;
// const footerBackground ={
//     backgroundColor: '#44494e'
//  }

class Contact extends Component{
    static defaultProps = {
        center: {
            lat: 30.2672, // Austin, TX latitude
            lng: -97.7431, // Austin, TX longitude
        },
        zoom: 9
    };

    

    render(){
        return(

            <React.Fragment>
                <PageHelmet pageTitle='Contact' />

                {/* End Header Area  */}
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />

                 {/* Start Breadcrump Area bg_image--17 */}
                 {/* trydo/public/assets/images/logo/ATX_Float_Logo 2/ATX-Float-Logo.jpg */}
                 {/* <div className="rn-page-title-area pt--120 pb--190 bg_image "   style={{
    backgroundImage: `url('/assets/images/logo/ATX_Float_Logo%202/ATX-Float-Logo.jpg')`,
  }}  data-black-overlay="6">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="rn-page-title text-center pt--100">
                                    <h2 className="title theme-gradient" style={{ fontFamily: 'Brice-Black'}}>Contact Us!!</h2>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                            {/* <Breadcrumb2_0
        title="Contact Us"
        parent=""
        backgroundImage="/assets/images/blog/ZachandJay.jpg"
        dataBlackOverlay={4}
      /> */}
       <Breadcrumb title={'Contact'}   />

       <Helmet pageTitle="Interior Design" />

                      {/* Start Contact Page Area  */}
                <div className="rn-contact-page ptb--120 bg_color--1" style={{backgroundColor: '#f3edd1', paddingTop: '100px', paddingBottom:'50px'}}>
                    <ContactTwo data-aos="fade-left" data-aos-duration="1000" />
                </div>
                {/* End Contact Page Area  */}
                {/* End Breadcrump Area */}



         



                <div className="rn-contact-top-area ptb--120 bg_color--5" style={{backgroundColor: '#f3edd1', padding: '50px'}}>
                    <div className="container">
                       
                        <div className="row">
                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-left" data-aos-duration="750">
                                <div className="rn-address">
                                    <div className="icon" style={{ color: '#EF5474'}}>
                                        <FiHeadphones />
                                    </div>
                                    <div className="inner" style={{height:'150px'}}>
                                        <h4 style={{ fontFamily: 'Brice-Black', fontSize: '30px',  color: '#EF5474', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)'}} className="title">Phone</h4>
                                        {/* <MiniContactInfo/>   */}
                                        {/* <MiniContactFooter/> */}
                                    <div className='footerContact' >
                                    <img  style={{transform: 'scale(1.3)'}}src="/assets/images/contactWhite.png" alt="" />
                                    </div>
                                    {/* <div className='footerContact' >
<p className='footerContact' ><a className='footerContact' href="tel:+1-512-210-5959">512-210-5959</a></p>
         <p className='footerContact' ><a className='footerContact' href="mailto:team@atxfloat.com" rel="noopener noreferrer" target="_blank">team@atxfloat.com</a></p><br />
       </div> */}
                                        {/* <p><a href="tel:+856 325 652 984">+856 325 652 984</a></p> */}
                                    </div>
                                </div>
                            </div>
                            {/* End Single Address  */}

                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--50" data-aos="fade-up" data-aos-duration="750">
                                <div className="rn-address">
                                    <div className="icon" style={{ color: '#EF5474'}}>
                                        <FiMail />
                                    </div>
                                    <div className="inner" style={{height:'150px'}}>
                                    <h4 style={{ fontFamily: 'Brice-Black', fontSize: '30px', color: '#EF5474', }} className="title">Office</h4>
                                    <p style={{ fontFamily: 'Brice-Light' }}>411 W Monroe St<br /> Austin, TX 78704</p><br/>      {/* <p><a href="mailto:example@gmail.com">example@gmail.com</a></p> */}
                                    </div>
                                </div>
                            </div>
                            {/* End Single Address  */}

                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50" data-aos='fade-right'  data-aos-duration="750">
                                <div className="rn-address" >
                                    <div className="icon" style={{ color: '#EF5474'}}>
                                        <FiMapPin />
                                    </div>
                                    <div className="inner" style={{height:'150px'}}>
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


   



                {/* Start Contact Map  */}
                {/* <div className="rn-contact-map-area position-relative" style={{ backgroundColor: '#f3edd1', paddingTop: '40px', display: 'none' }}>
                    
  <div style={{ height: '500px', width: '50%'}}>
    <GoogleMapReact
      defaultCenter={this.props.center}
      defaultZoom={this.props.zoom}

    >
      <AnyReactComponent
        lat={30.2672} // Austin, TX latitude
        lng={-97.7431} // Austin, TX longitude
        text="Austin, TX"
      />
    </GoogleMapReact>
  </div>
</div> */}

                {/* End Contact Map  */}
                

                {/* Start Brand Area */}
                <div className="rn-brand-area  bg_color--5" style={{backgroundColor: '#f3edd1'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <BrandTwo />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Brand Area */}

                {/* Start Back To Top */}
                <div className="backto-top">
                <ScrollToTop showUnder={160}>
                        <FiChevronUp style={{ color: '#EF5474'}}/>
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
            <div className="footerDiv" style={{marginTop: '15px'}}>
                <Footer />
            </div>
            </React.Fragment>
      
        )
    }
}
export default Contact
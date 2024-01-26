import React, { useState } from 'react';
import ImageGallery from './ImageGallery';
import PageHelmet from '../../component/common/Helmet';
import Header from '../../component/header/Header';
import Footer from '../../component/footer/Footer';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from 'react-icons/fi';
import PropTypes from 'prop-types';
import './CustomTubes.css';
import CustomTubeInfoModal from './CustomTubeInfoModal'; // Import the old modal component
import ModalTwo from './ModalTwo'; // Import the new modal component
import ModalDiagram from './ModalDiagram';


const photos = [
    {
        image: '02',
        bigImage: '/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_444.png',
        smallImage: '/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_444.2.png',
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Andy's.png`,
        smallImage: `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Andy's.2.png`,
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: '/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Bahnbrecker.png',
        smallImage: '/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Bahnbrecker.2.png',
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: '/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Blind-Lemon.png',
        smallImage: '/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Blind-Lemon.2.png',
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Chimy's-2.png`,
        smallImage: `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Chimy's-2.2.png`,
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Chimy's.png`,
        smallImage: `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Chimy's.2.png`,
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: '/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Corner-Tubes.png',
        smallImage: '/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Corner-Tubes.2.png',
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Don's-Blue.png`,
        smallImage: `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Don's-Blue.png`,
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Don's-Green.png`,
        smallImage: `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Don's-Green.2.png`,
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Don's-Pink.png`,
        smallImage: `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Don's-Pink.2.png`,
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Ducky's.png`,
        smallImage: `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Ducky's.2.png`,
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Float-Fest.png`,
        smallImage: `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Float-Fest.2.png`,
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Float-In.png`,
        smallImage: `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Float-In.2.png`,
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: '/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Happy-Hollow.png',
        smallImage: `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Happy-Hollow.2.png`,
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Independence-Brewing.png`,
        smallImage: `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Independence-Brewing.2.png`,
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Indian-Head.png`,
        smallImage: `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Indian-Head.2.png`,
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Landa-Falls.png`,
        smallImage: `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Landa-Falls.2.png`,
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Landa-River-Trips.png`,
        smallImage: `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Landa-River-Trips.2.png`,
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Lazy-LL.png`,
        smallImage: `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Lazy-LL.2.png`,
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Lions.png`,
        smallImage: `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Lions.2.png`,
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Meckel's.png`,
        smallImage: `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Meckel's.2.png`,
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Plainfield.png`,
        smallImage: '/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Plainfield.2.png',
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Rockin'-R.png`,
        smallImage: `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Rockin'-R.2.png`,
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Shot-Gun.png`,
        smallImage: `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Shot-Gun.2.png`,
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Son's.png`,
        smallImage: `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Son's.2.png`,
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Whitewater-Deep-Eddy-2.png`,
        smallImage: `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Whitewater-Deep-Eddy-2.2.png`,
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Whitewater-Deep-Eddy.png`,
        smallImage: '/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Whitewater-Deep-Eddy.2.png',
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Willies.png`,
        smallImage: '/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Willies.2.png',
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tubes_Son's-Blue-River.png`,
        smallImage: `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tubes_Son's-Blue-River.2.png`,
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tubes_Texas-Tubes-Rudy's.png`,
        smallImage: `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tubes_Texas-Tubes-Rudy's.2.png`,
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: `/assets/images/CUSTOM_TUBE_PHOTOS/River-Floater-Tube_ATX-Float-Blue.png`,
        smallImage: '/assets/images/CUSTOM_TUBE_PHOTOS.mini/River-Floater-Tube_ATX-Float-Blue.2.png',
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: `/assets/images/CUSTOM_TUBE_PHOTOS/River-Floater-Tube_ATX-Float-Camo-Blue.png`,
        smallImage: `/assets/images/CUSTOM_TUBE_PHOTOS.mini/River-Floater-Tube_ATX-Float-Camo-Blue.2.png`,
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: `/assets/images/CUSTOM_TUBE_PHOTOS/River-Floater-Tube_ATX-Float-Camo-Green.png`,
        smallImage: `/assets/images/CUSTOM_TUBE_PHOTOS.mini/River-Floater-Tube_ATX-Float-Camo-Green.2.png`,
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: `/assets/images/CUSTOM_TUBE_PHOTOS/River-Floater-Tube_ATX-Float-Camo-Pink.png`,
        smallImage: `/assets/images/CUSTOM_TUBE_PHOTOS.mini/River-Floater-Tube_ATX-Float-Camo-Pink.2.png`,
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: `/assets/images/CUSTOM_TUBE_PHOTOS/River-Floater-Tube_ATX-Float-Orange.png`,
        smallImage: `/assets/images/CUSTOM_TUBE_PHOTOS.mini/River-Floater-Tube_ATX-Float-Orange.2.png`,
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: `/assets/images/CUSTOM_TUBE_PHOTOS/River-Floater-Tube_ATX-Float-Pink.png`,
        smallImage: `/assets/images/CUSTOM_TUBE_PHOTOS.mini/River-Floater-Tube_ATX-Float-Pink.2.png`,
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: `/assets/images/CUSTOM_TUBE_PHOTOS/River-Tube_ATX-Float-Blue.png`,
        smallImage: '/assets/images/CUSTOM_TUBE_PHOTOS.mini/River-Tube_ATX-Float-Blue.2.png',
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: `/assets/images/CUSTOM_TUBE_PHOTOS/River-Tube_ATX-Float-Coral.png`,
        smallImage: '/assets/images/CUSTOM_TUBE_PHOTOS.mini/River-Tube_ATX-Float-Coral.2.png',
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: `/assets/images/CUSTOM_TUBE_PHOTOS/River-Tube_ATX-Float-Orange.png`,
        smallImage: '/assets/images/CUSTOM_TUBE_PHOTOS.mini/River-Tube_ATX-Float-Orange.2.png',
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: `/assets/images/CUSTOM_TUBE_PHOTOS/River-Tube_ATX-Float-STTB.png`,
        smallImage: '/assets/images/CUSTOM_TUBE_PHOTOS.mini/River-Tube_ATX-Float-STTB.2.png',
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: `/assets/images/CUSTOM_TUBE_PHOTOS/River-Tube_ATX-Float-STTO.png`,
        smallImage: '/assets/images/CUSTOM_TUBE_PHOTOS.mini/River-Tube_ATX-Float-STTO.2 .png',
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: '/assets/images/CUSTOM_TUBE_PHOTOS/Custom-Waterpark-Tube_Aquatica.png',
        smallImage: '/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-Waterpark-Tube_Aquatica.2.png',
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: '/assets/images/CUSTOM_TUBE_PHOTOS/Custom-Waterpark-Tube_Beach-Park-Double-Baby.png',
        smallImage: '/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-Waterpark-Tube_Beach-Park-Double-Baby.2.png',
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: '/assets/images/CUSTOM_TUBE_PHOTOS/Custom-Waterpark-Tube_Beach-Park-Double.png',
        smallImage: '/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-Waterpark-Tube_Beach-Park-Double.2.png',
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: '/assets/images/CUSTOM_TUBE_PHOTOS/Custom-Waterpark-Tube_Beach-Park.png',
        smallImage: '/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-Waterpark-Tube_Beach-Park.2..png',
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: '/assets/images/CUSTOM_TUBE_PHOTOS/Custom-Waterpark-Tube_Six-Flags-Double.png',
        smallImage: '/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-Waterpark-Tube_Six-Flags-Double.2.png',
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: '/assets/images/CUSTOM_TUBE_PHOTOS/Waterpark-Tube-Double JR-Clear_ATX-Float-DC42-S.png',
        smallImage: '/assets/images/CUSTOM_TUBE_PHOTOS.mini/Waterpark-Tube-Double JR-Clear_ATX-Float-DC42-S.2.png',
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: '/assets/images/CUSTOM_TUBE_PHOTOS/Waterpark-Tube-Double-Clear_ATX-Float-DC48.png',
        smallImage: '/assets/images/CUSTOM_TUBE_PHOTOS.mini/Waterpark-Tube-Double-Clear_ATX-Float-DC48.2.png',
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: '/assets/images/CUSTOM_TUBE_PHOTOS/Waterpark-Tube-Single_ATX-Float-STB48.png',
        smallImage: '/assets/images/CUSTOM_TUBE_PHOTOS.mini/Waterpark-Tube-Single_ATX-Float-STB48.2.png.png',
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: '/assets/images/CUSTOM_TUBE_PHOTOS/Waterpark-Tube-Single-Clear_ATX-Float-SC31.png',
        smallImage: '/assets/images/CUSTOM_TUBE_PHOTOS.mini/Waterpark-Tube-Single-Clear_ATX-Float-SC31.2.png',
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },
    {
        image: '02',
        bigImage: '/assets/images/CUSTOM_TUBE_PHOTOS/Waterpark-Tube-Single-Clear_ATX-Float-SC38.png',
        smallImage: '/assets/images/CUSTOM_TUBE_PHOTOS.mini/Waterpark-Tube-Single-Clear_ATX-Float-SC38.2.png',
        category: '',
        title: '',
        css: {}, // Define the CSS properties as an object
    },


    // Add more photo objects as needed
];


const CustomTubes2 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDiagramModalOpen, setIsDiagramModalOpen] = useState(false);
  
    const openModal = () => {
      console.log('Opening modal');
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      console.log('Closing modal');
      setIsModalOpen(false);
    };
  
    const openDiagramModal = () => {
      console.log('Opening diagram modal');
      setIsDiagramModalOpen(true);
    };
  
    const closeDiagramModal = () => {
      console.log('Closing diagram modal');
      setIsDiagramModalOpen(false);
    };
  
    return (
      <React.Fragment>
        <PageHelmet pageTitle='Portfolio Details' />
        <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
  
        <div className="custom-tubes-header">
          <h2
            style={{
              fontFamily: 'Brice-Black',
              color: '#ef5474',
              textAlign: 'center',
              fontSize: '2.5rem',
              paddingTop: '10px',
              paddingBottom: '10px'
            }}
            data-aos="fade-up"
            data-aos-duration="750"
            className="subtitle"
          >
            Custom Tubes
          </h2>
          <button
            onClick={openModal}
            style={{
              color: 'black',
              fontSize: '1.5rem',
              border: '1px solid black',
              padding: '10px',
              cursor: 'pointer',
              outline: 'none',
              transition: 'color 0.3s',
            }}
            onMouseOver={(e) => (e.target.style.color = '#2bfff6')}
            onMouseOut={(e) => (e.target.style.color = 'black')}
          >
            Custom Tube Information
          </button><br/><br/>
          <button
            onClick={openDiagramModal}
            style={{
              color: 'black',
              fontSize: '1.5rem',
              border: '1px solid black',
              padding: '10px',
              cursor: 'pointer',
              outline: 'none',
              transition: 'color 0.3s',
            }}
            onMouseOver={(e) => (e.target.style.color = '#2bfff6')}
            onMouseOut={(e) => (e.target.style.color = 'black')}
          >
            Custom Tube Options
          </button>
        </div>
  
        <div className="custom-tubes-container">
          <ImageGallery photos={photos} />
        </div>
  
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp style={{ color: '#EF5474' }} />
          </ScrollToTop>
        </div>
  
        <Footer />
  
        {/* Modal component */}
        <ModalTwo isOpen={isModalOpen} onRequestClose={closeModal} />
        {/* {isDiagramModalOpen && <ModalDiagram onRequestClose={closeDiagramModal} />} */}
        <ModalDiagram isOpen={isDiagramModalOpen} onRequestClose={closeDiagramModal} />
      </React.Fragment>
    );
  };
  
  export default CustomTubes2;
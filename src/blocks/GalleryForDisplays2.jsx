import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './GalleryForDisplays2'; // Replace with the correct path to your CSS file


AOS.init();

class GalleryForDisplays2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: 0,
      isOpen: false,
    };
  }

  render() {
    const { tab1, isOpen } = this.state;
    const { photos, imageWidth, imageHeight } = this.props;

    return (
      <div style={{ backgroundColor: '#f3edd1' }}>
        <main className="page-wrapper">
          {/* Start Portfolio Area */}
          <div
            className="rn-portfolio-area  bg_color--1 line-separator productImg"
            style={{ backgroundColor: '#f3edd1', paddingTop: '0px' }}
          >
            <div className="container">
              <ul className="brand-style-2">
                {photos.map((value, index) => (
                  <li key={index} style={{padding: '0px 0px', margin: '5px 0px'}}>
                    {isOpen && (
                      <Lightbox
                        mainSrc={photos[tab1].bigImage}
                        nextSrc={photos[(tab1 + 1) % photos.length].bigImage}
                        prevSrc={photos[(tab1 + photos.length - 1) % photos.length].bigImage}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                          this.setState({
                            tab1: (tab1 + photos.length - 1) % photos.length,
                          })
                        }
                        onMoveNextRequest={() =>
                          this.setState({
                            tab1: (tab1 + 1) % photos.length,
                          })
                        }
                      />
                    )}
                    <a href="#portfolio-details" onClick={() => this.setState({ isOpen: true, tab1: index })}>
                    <img
                      src={value.bigImage}
                      style={{opacity: 1, maxHeight: '15rem'}}
                      className="portfolio-image2" 
                      id='portfolio-image2'// Apply the CSS class here
                      alt="Portfolio Images"
                    />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* End Portfolio Area */}
        </main>
      </div>
    );
  }
}

export default GalleryForDisplays2;

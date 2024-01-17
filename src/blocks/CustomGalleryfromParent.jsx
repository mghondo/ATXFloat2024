import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './GalleryRiver.css';

AOS.init();

class CustomGalleryFromParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: 0,
      isOpen: false,
      currentPage: 1,
      itemsPerPage: props.itemsPerPage || 9, // Set default to 9 if not provided by parent
    };
  }

  render() {
    const { tab1, isOpen, currentPage, itemsPerPage } = this.state;
    const { photos, maxWidth, maxHeight, twopag } = this.props;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = photos.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => {
      this.setState({ currentPage: pageNumber });
    };

    const showPagination = Math.ceil(photos.length / itemsPerPage) > 1;

    return (
      <div style={{ backgroundColor: '#f3edd1' }}>
        <main className="page-wrapper">
          {/* Start Portfolio Area */}
          <div
            className="rn-portfolio-area bg_color--1 line-separator productImg"
            style={{ backgroundColor: '#f3edd1', paddingTop: '0px' }}
          >
            <div className="container">
              
              {twopag !== false && showPagination && (
                <div className='inner' style={{ textAlign: 'center'}}>
                  <h3 style={{textAlign: 'center', color: 'black', marginBottom: '0px', fontFamily: 'Brice-Light', paddingTop: '20px'}}>Select Page</h3>
                  {Array.from({ length: Math.ceil(photos.length / itemsPerPage) }).map((_, index) => (
                    <button style={{fontSize:'2rem', color: '#ef5474', alignSelf: 'center', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)'}} key={index + 1} onClick={() => paginate(index + 1)}>
                      {index + 1}
                    </button>
                  ))}
                </div>
              )}
              <ul className="brand-style-2" style={{ margin: '5px 0px', }}>
                {currentItems.map((value, index) => (
                  <li key={index} style={{ padding: '0px 0px', margin: '5px 0px', flexBasis: '5%'}}>
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
                    <a
                      href="#portfolio-details"
                      onClick={() => this.setState({ isOpen: true, tab1: index + indexOfFirstItem })}
                      style={{ margin: '10px' }}
                    >
                      <img
                        src={value.bigImage}
                        className='imageInterior'
                        alt="Portfolio Images"
                      />
                    </a>
                  </li>
                ))}
              </ul>
              {/* Pagination */}
              {!twopag && showPagination && (
                <div className='inner' style={{padding: '20px 20px', textAlign: 'center'}}>
                  {Array.from({ length: Math.ceil(photos.length / itemsPerPage) }).map((_, index) => (
                    <button style={{fontSize:'2rem', color: '#ef5474', alignSelf: 'center', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)'}} key={index + 1} onClick={() => paginate(index + 1)}>
                      {index + 1}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          {/* End Portfolio Area */}
        </main>
      </div>
    );
  }
}

export default CustomGalleryFromParent;

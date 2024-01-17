import React, { Component } from "react";
import Slider from "react-slick";
import { portfolioSlick2 } from "../../../page-demo/script";
import { Link } from "react-router-dom";
import './NonTubeSlider.css';

class NonTubeSlider extends Component {
  render() {
    const { customTubes, linkTo = '/' } = this.props;

    // Customize the slick settings
    const customSlickSettings = {
      ...portfolioSlick2,
      dots: 'false',
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    const NextArrow = (props) => (
        <div {...props}>
          <div className="custom-arrow next-arrow">{'>'}</div>
        </div>
      );
      
      const PrevArrow = (props) => (
        <div {...props}>
          <div className="custom-arrow prev-arrow">{'<'}</div>
        </div>
      );
      

    return (
      <React.Fragment>
        <div className="portfolio-wrapper" style={{ backgroundColor: '#f3edd1' }}>
          <div className="portfolio-slick-activation mt_sm--40" style={{ backgroundColor: '#f3edd1', marginTop: '0', paddingTop: '20px' }}>
            <Slider {...customSlickSettings}>
              {customTubes.map((value, index) => (
                <div key={index} className="image-container">
                  <Link to={linkTo}>
                    <img
                      src={value.bigImage}
                      alt={`custom-tube-${index}`}
                      className="image-zoom"
                    />
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
          <br /> 
          {/* Arrows container */}
        </div>
        {/* <div className="portfolio-arrows-container" style={{ }}></div> */}
      </React.Fragment>
    );
  }
}

export default NonTubeSlider;

import React, { Component } from "react";
import Slider from "react-slick";
import { portfolioSlick2 } from "../../../page-demo/script";
import { Link } from "react-router-dom";
import './PortFolio2.css';

class PortFolio2 extends Component {
  shuffleArray = (array) => {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  render() {
    const { customTubes, linkTo = '/' } = this.props;

    // Shuffle the customTubes array
    const shuffledTubes = this.shuffleArray([...customTubes]);

    // Customize the slick settings
    const customSlickSettings = {
      ...portfolioSlick2,
      dots: 'false',
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1
    };

    return (
      <React.Fragment>
        <div className="portfolio-wrapper" style={{ backgroundColor: '#f3edd1' }}>
          <div className="portfolio-slick-activation mt_sm--40" style={{ backgroundColor: '#f3edd1', marginTop: '0', paddingTop: '20px' }}>
            <Slider {...customSlickSettings}>
              {shuffledTubes.map((value, index) => (
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
          <br/>
          {/* Arrows container */}
          
        </div>
        <div className="portfolio-arrows-container" style={{ }}></div>
      </React.Fragment>
    );
  }
}

export default PortFolio2;

import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./StockAndMerch2.css"; // Import the CSS file

const StockAndMerch2 = ({ list, ChangeFromParent, }) => {
  return (
    <div className="portfolio-area pt--90 pb--140 bg_color--1" style={{ backgroundColor: '#f3edd1', paddingBottom: '40px', paddingTop: '0' }}>
      <div className="rn-slick-dot">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" data-aos='fade-up' data-aos-duration="750">
              <div className={`section-title text-center service-style--3 mb--30`}></div>

              <div className="slick-space-gutter--15 slickdot--20">
                <div className="row" style={{ backgroundColor: '#f3edd1', }}>
                  {list.map((value, i) => (
                    <div key={i} className='col-lg-4 col-md-6 mainThreeTubes' style={{ cursor: 'pointer'}} onClick={() => window.location.href = value.link}>
                        {/* <div key={i} className='col-lg-4 col-md-6 col-12 mainThreeTubes' style={{ cursor: 'pointer'}} onClick={() => window.location.href = value.link}> */}
                      <div className="blog blog-style--1" style={{ backgroundColor: '#f3edd1', borderRadius: '20px', height: '100%' }}>
                        <div className="thumbnail" style={{ backgroundColor: '#f3edd1', height: '100%', position: 'relative', overflow: 'hidden', borderRadius: '20px' }}>
                          <img
                            className="StockandMerchImg"
                            style={{
                              width: '100%',
                              height: '100%',
                              
                              backgroundColor: '#f3edd1',
                              boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
                              borderRadius: '20px'
                            }}
                            src={value.url}
                            alt="Blog Images"
                          />
                        </div>

                        <div className="content">
                          <p className="blogtype stockMerchClass" style={{ color: '#EF5474', fontSize: '2.0rem', textAlign: 'center',  }}>{value.category}</p>
                          <div className="blog-btn" >
                            <span className="rn-btn text-white"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockAndMerch2;

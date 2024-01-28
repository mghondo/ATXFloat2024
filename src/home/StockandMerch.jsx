// StockAndMerch.js

import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";


const StockAndMerch = () => {
  const list = [
    {
        image2: '/assets/images/NewImages10.23.2023/TUBES/Tubes_Single_Clear_JR_SC38/Tubes_Single_Clear_JR_SC38_Front.jpg',
        category: 'Waterpark Tubes',
        url: '/portfolio#parkTubes'
    },
    {
      image2: '/assets/images/NewImages10.23.2023/TUBES/Tubes_Single_Blue_STTB/Tubes_Single_Blue_STTB_Front.jpg',
      category: 'River Tubes',
      url: '/portfolio#riverTubes'
    },
    {
      image2: '/assets/images/NewImages10.23.2023/Merchandise/Float_Pouch_Solid/Float_Pouch_Solid_Assortment.jpg',
      category: 'Merchandise',
      url: '/portfolio#awesomeGear'
    },
  ];

  return (
    <div className="portfolio-area pt--90 pb--140 bg_color--1" style={{ backgroundColor: '#f3edd1', paddingBottom: '40px' }}>
      <div className="rn-slick-dot">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" data-aos='fade-up' data-aos-duration="750">
              <div className={`section-title text-center service-style--3 mb--30`}>
                {/* <h2 style={{ fontFamily: 'Brice-Black', color: '#ef5474', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }} className="title">Park Tubes, River Tubes and More!!!</h2> */}
              </div>

              <div className="slick-space-gutter--15 slickdot--20">
                <div className="row" style={{backgroundColor:'#f3edd1', paddingTop:'10px'}}>
                  {list.map((value, i) => (
                    <div className="col-lg-4 col-md-6 col-12 stockmerchthumb" key={i}>
                      <div className="blog blog-style--1" style={{backgroundColor:'#f3edd1', borderRadius: '20px'}}>
                        <div className="thumbnail" style={{backgroundColor:'#f3edd1'}}>
                          <Link to={value.url}>
                            <img className="w-100" style={{height: '350px', backgroundColor:'none'}} src={`${value.image2}`} alt="Blog Images"/>
                          </Link>
                        </div>
                        <div className="content">
                          <p className="blogtype" style={{color: '#EF5474', fontSize:'2.0rem', paddingBottom:'50px', fontFamily: 'Brice-Black', textAlign: 'center', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)'}}>{value.category}</p>
                          <div className="blog-btn">
                            {/* <a className="rn-btn text-white" href="/blog-details">Read More</a> */}
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

export default StockAndMerch;
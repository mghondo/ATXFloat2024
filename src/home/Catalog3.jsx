import React from "react";
import { Link } from "react-router-dom";
import "./Catalog3.css"; // Import the CSS file



const Catalog3 = ({ list, ChangeFromParent }) => {
  return (
    <div className="portfolio-area pt--90 pb--140 bg_color--1" style={{ backgroundColor: '#f3edd1', paddingBottom: '20px', paddingTop: '0' }}>
      {/* ... other code ... */}
      <div className="row" style={{ backgroundColor: '#f3edd1', paddingTop: '0px' }}>
        {list.map((value, i) => (
          // <div key={i} className='col-lg-4 col-md-6 col-12' style={{ cursor: 'pointer', marginTop:'20px' }} onClick={() => window.location.href = value.link}>
          <div
  key={i}
  className='col-lg-4 col-md-6 col-12'
  // className='col-lg-3 col-md-6 col-12'
  style={{ cursor: 'pointer', marginTop:'20px' }}
  onClick={() => window.location.href = '/drycamo2'}
>
            <div className="blog blog-style--1" style={{ backgroundColor: '#f3edd1', borderRadius: '20px', height: '100%' }}>
              <div className="thumbnail" style={{ backgroundColor: '#f3edd1', height: '100%' }}>
                {/* <img className="w-100" src={value.url} alt="Blog Images" /> */}
                <img className="merchImage" src={value.url} alt="Blog Images" />
                {/* w-100 */}
              </div>
              <div className="content">
                <p className="blogtype" style={{ color: '#EF5474', fontSize: '2.0rem', paddingBottom: '0px', textAlign: 'center',  }}>{value.category}</p>
                {/* textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' */}
                <div className="blog-btn">
                  {/* <span className="rn-btn text-white">Read More</span> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* ... other code ... */}
    </div>
  );
};

export default Catalog3;

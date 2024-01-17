// ModalTwo.js
import React from 'react';
import PropTypes from 'prop-types';
import './ModalTwo.css';

const ModalTwo = ({ isOpen, onRequestClose }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      {/* <button className="open-button" onClick={onRequestClose}>
        Close Modal
      </button> */}
      <div className="modal-container">
        <div className='inner-container'>
        {/* <button className="close-button" onClick={onRequestClose}>
          Close
        </button> */}
        {/* <span className="close-icon" onClick={onRequestClose}>
          &#x2715;
        </span> */}
        <button
  style={{
    color: '#EF5474',
    textAlign: 'center',
    border: '1px solid black',
    padding: '8px 16px',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    fontFamily: 'Brice-Black',
    fontSize: '1.5rem',
    outline: 'none',
    float: 'right',
    transition: 'color 0.3s',
  }}
  className="custom-close-button"
  onClick={onRequestClose}
  onMouseOver={(e) => (e.target.style.color = '#7afff4')} // Change color on hover
  onMouseOut={(e) => (e.target.style.color = '#EF5474')} // Restore color on mouse out
>
  X
</button>
        <h3 style={{color: '#EF5474', textAlign:'center', fontFamily:'Brice-Black'}}>Custom Tube Info</h3>
        <div className="modal-two-content" style={{ backgroundColor: '#f3edd1', width: '100%' }}>
          <p className="summaryP">
            These tubes are made of a heavy-duty, UV-resistant, 25-gauge Vinyl (PVC) material formulated to withstand
            long exposure in the sun, rock, sticks, and rough river conditions. With a 50-inch (deflated) outer diameter,
            22-inch center diameter and the ergo’ backrest, these are the perfect size and height on the water to rest
            easy and comfortably for a long ride. Each tube comes with a large cup holder, 2 handles, mesh bottom, and a
            commercial Boston Air Valve for quick and easy inflation/deflation. Seams double welded to ensure no air
            leakage.
          </p>
          <ul style={{color:'black', fontFamily: 'Brice-Light'}}>
            <li>Custom 2-color imprint design (prices can vary for each additional color)</li>
            <li>Custom material color</li>
            <li>Logo imprint on retail box</li>
          </ul>
          <button
  style={{
    color: '#EF5474',
    textAlign: 'center',
    border: '1px solid black',
    padding: '8px 16px',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    fontFamily: 'Brice-Black',
    fontSize: '1.5rem',
    outline: 'none',
    transition: 'color 0.3s',
  }}
  className="custom-close-button"
  onClick={onRequestClose}
  onMouseOver={(e) => (e.target.style.color = '#7afff4')} // Change color on hover
  onMouseOut={(e) => (e.target.style.color = '#EF5474')} // Restore color on mouse out
>
  Close
</button>

        </div>
      </div>
      </div>
    </div>
  );
};

ModalTwo.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default ModalTwo;

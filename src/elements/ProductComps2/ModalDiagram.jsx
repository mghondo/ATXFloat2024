// ModalTwo.js
import React from 'react';
import PropTypes from 'prop-types';
import './ModalTwo.css';

const ModalDiagram = ({ isOpen, onRequestClose }) => {
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
        <h3 style={{color: '#EF5474', textAlign:'center', fontFamily:'Brice-Black'}}>Custom Tube Options</h3>
        <div className="modal-two-content" style={{ backgroundColor: '#f3edd1', width: '100%' }}>
            <img className='customOptions' src="/assets/images/CUSTOM_TUBE_PHOTOS/CustomTubeDiagram.png" alt="" />
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

ModalDiagram.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default ModalDiagram;


// CustomTubeInfoModal.js
import React from 'react';
import Modal from 'react-modal';
import './CustomTubeInfoModal.css'; // Import the CSS file

const CustomTubeInfoModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onRequestClose()}
      contentLabel="Custom Tube Info Modal"
      style={{
        overlay: {
          backgroundColor: '#f3edd1',
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          padding: '40px',
          backgroundColor: '#f3edd1',
        },
      }}
    >
      <a onClick={() => onRequestClose()} >
        <button className="close-btn" style={{ color: 'black', marginBottom: '20px', position: 'absolute', right: '20px' }}>
          X
        </button>
      </a>
      <h3
        style={{
          fontFamily: 'Brice-Black',
          color: '#ef5474',
          textAlign: 'center',
          fontSize: '2.5rem',
          paddingTop: '10px',
          paddingBottom: '10px',
        }}
        data-aos="fade-up"
        data-aos-duration="750"
        className="subtitle"
      >
        Custom Tube Info
      </h3>
      <div className="modal-content" style={{backgroundColor: '#f3edd1', }}>
        <p className="summaryP" style={{color: 'black', fontFamily:'Brice-Light'}}>
          These tubes are made of a heavy-duty, UV-resistant, 25-gauge Vinyl (PVC) material formulated to withstand long
          exposure in the sun, rock, sticks, and rough river conditions. With a 50-inch (deflated) outer diameter, 22-inch
          center diameter and the ergo’ backrest, these are the perfect size and height on the water to rest easy and
          comfortably for a long ride. Each tube comes with a large cup holder, 2 handles, mesh bottom, and a commercial
          Boston Air Valve for quick and easy inflation/deflation. Seams double welded to ensure no air leakage.
        </p>
        <ul style={{color: 'black', fontFamily:'Brice-Light'}}>
          <li>Custom 2-color imprint design (prices can vary for each additional color)</li>
          <li>Custom material color</li>
          <li>Logo imprint on retail box</li>
        </ul>
      </div>
    </Modal>
  );
};

export default CustomTubeInfoModal;
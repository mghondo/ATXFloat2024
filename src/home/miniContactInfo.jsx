import React, { useEffect } from 'react';
import './miniContactInfo.css'

const MiniContactInfo = () => {
  useEffect(() => {
    // Function to dynamically insert contact information
    const insertContactInfo = () => {
      const container = document.getElementById('contact-container');

      if (container) {
        container.innerHTML = `
        <div className:'infoContact' >
        <img src="/assets/images/contactinfo.png" alt="" />
        </div>
        `;
      }
    };

    // Call the function to insert contact information
    insertContactInfo();
  }, []);

  return (
    <div id="contact-container" >
      {/* Placeholder for contact information */}
    </div>
  );
};

export default MiniContactInfo;

{/* <div className:'footerContact' >
<p className:'footerContact' ><a className:'footerContact' href="tel:+1-512-210-5959">512-210-5959</a></p>
         <p className:'footerContact' ><a className:'footerContact' href="mailto:team@atxfloat.com" rel="noopener noreferrer" target="_blank">team@atxfloat.com</a></p><br />
       </div> */}

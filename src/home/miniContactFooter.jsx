import React, { useEffect } from 'react';
import './miniContactInfo.css'

const MiniContactFooter = () => {
  useEffect(() => {
    // Function to dynamically insert contact information
    const insertContactInfo2 = () => {
      const container = document.getElementById('contact-container');

      if (container) {
        container.innerHTML = `
        <div className:'footerContact' >
        <img src="/assets/images/contactFooter.png" alt="" />
   </div> 
        `;
      }
    };

    // Call the function to insert contact information
    insertContactInfo2();
  }, []);

  return (
    <div id="contact-container" >
                <div className='footerContact' >
        <img src="/assets/images/contactFooter.png" alt="" />
   </div> 
      {/* Placeholder for contact information */}
    </div>
  );
};

export default MiniContactFooter;

{/* <div className:'footerContact' >
<p className:'footerContact' ><a className:'footerContact' href="tel:+1-512-210-5959">512-210-5959</a></p>
         <p className:'footerContact' ><a className:'footerContact' href="mailto:team@atxfloat.com" rel="noopener noreferrer" target="_blank">team@atxfloat.com</a></p><br />
       </div> */}

       

// src/App.js
import React, { useEffect, useState } from 'react';
import './MerchCarousel.css';

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const awesomeGear = [

    '/assets/images/NewImages10.23.2023/Merchandise/Bevie_Sling/Bevie_Sling_Assorted.png',
    '/assets/images/NewImages10.23.2023/Merchandise/Cool_Jug/Cool_Jug_Assorted.png',
    '/assets/images/NewImages10.23.2023/Merchandise/Drawstring_Bags/Drawstring_Bag_Assorted.png',
    'assets/images/NewImages10.23.2023/Merchandise/Dry_Bag_15L_Holographic/Dry_Bag_15L_Holographic.png',
    '/assets/images/NewImages10.23.2023/Merchandise/Dry_Bag_PVC_15L_Solid/Dry_Bag_PVC_15L_Solid_Assortment.png',
    '/assets/images/NewImages10.23.2023/Merchandise/Dry_Bag_10L_Nylon_Solid/Dry_Bag_Nylon_10L_Assorted_Solid.png',
    '/assets/images/NewImages10.23.2023/Merchandise/Dry_Bag_10L_Nylon_Camo/Dry_Bag_Nylon_10L_Assorted_Camo.png',
    '/assets/images/NewImages10.23.2023/Merchandise/Dry_Bag_PVC_15L_Translucent/Dry_Bag_PVC_15L_Translucent_Assortment.png',
    '/assets/images/NewImages10.23.2023/Merchandise/Float_Pouch_Camo/Float_Pouch_Camo_Assortment.png',
    '/assets/images/NewImages10.23.2023/Merchandise/Float_Pouch_Holographic/Float_Pouch_Holographic_Assortment.png',
    // '/assets/images/NewImages10.23.2023/Merchandise/Float_Pouch_Solid/Float_Pouch_Solid_Assortment.png',
    '/assets/images/NewImages10.23.2023/Merchandise/Goggles_Adult/Goggles_Adult_Blue-Blue_Metalic.png',
    '/assets/images/NewImages10.23.2023/Merchandise/Goggles_Kids/Goggles_Kids_Package.png',
    '/assets/images/NewImages10.23.2023/Merchandise/Sunglass_Floaters/Sunglass_Floaters_Assorted.png',
    '/assets/images/NewImages10.23.2023/Merchandise/Float_Pouch_USA/Float_Pouch_USA_Package.png',

  ];
  
  const awesomeGear2 = [
    '/assets/images/Merch.mini/Bevie_Sling_Assorted.png',
    '/assets/images/Merch.mini/Cool_Jug_Assorted.png',
    '/assets/images/Merch.mini/Drawstring_Bag_Assorted.png',
    '/assets/images/Merch.mini/Dry_Bag_15L_Holographic.png',
    '/assets/images/Merch.mini/Dry_Bag_Nylon_10L_Assorted_Camo.png',
    '/assets/images/Merch.mini/Dry_Bag_Nylon_10L_Assorted_Solid.png',
    '/assets/images/Merch.mini/Dry_Bag_PVC_15L_Solid_Assortment.png',
    '/assets/images/Merch.mini/Dry_Bag_PVC_15L_Translucent_Assortment.png',
    '/assets/images/Merch.mini/Float_Pouch_Camo_Assortment.png',
    '/assets/images/Merch.mini/Float_Pouch_Holographic_Assortment.png',
    // '/assets/images/Merch.mini/Float_Pouch_Solid_Assortment.png',
    '/assets/images/Merch.mini/Float_Pouch_USA_Package.png',
  ];

  const awesomeGear3 = [
    `/assets/images/Merch.200.mini/Bevie_Sling_Assorted.200.png`,
    `/assets/images/Merch.200.mini/Cool_Jug_Assorted.200.png`,
    `/assets/images/Merch.200.mini/Drawstring_Bag_Assorted.200.png`,
    `/assets/images/Merch.200.mini/Dry_Bag_15L_Holographic.200.png`,
    `/assets/images/Merch.200.mini/Dry_Bag_Nylon_10L_Assorted_Camo.200.png`,
    `/assets/images/Merch.200.mini/Dry_Bag_Nylon_10L_Assorted_Solid.200.png`,
    `/assets/images/Merch.200.mini/Dry_Bag_PVC_15L_Solid_Assortment.200.png`,
    `/assets/images/Merch.200.mini/Dry_Bag_PVC_15L_Translucent_Assortment.200.png`,
    `/assets/images/Merch.200.mini/Float_Pouch_Camo_Assortment.200.png`,
    `/assets/images/Merch.200.mini/Float_Pouch_Holographic_Assortment.200.png`,
    `/assets/images/Merch.200.mini/Float_Pouch_Solid_Assortment.200.png`,
    `/assets/images/Merch.200.mini/Float_Pouch_USA_Package.200.png`,
  ]

  
const App = () => {
  const [gearArray, setGearArray] = useState(awesomeGear2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 475) {
        setGearArray(awesomeGear3);
      } else {
        setGearArray(awesomeGear2);
      }

      // Shuffle the array when the screen size changes
      shuffleArray(gearArray);
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [gearArray, awesomeGear2, awesomeGear3]);

  const trackWidth = `${gearArray.length * 300}px`; // Assuming each image has a width of 300px

  return (
    <div className="slider2">
      <div className="slide-track2" style={{ width: trackWidth }}>
        {gearArray.map((imageUrl, index) => (
          <div className="slide2" key={index}>
            <a href="/merchandise">
              <img
                src={imageUrl}
                alt={`Awesome Gear Image ${index + 1}`}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
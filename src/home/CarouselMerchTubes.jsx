import React from 'react';
import { FixedSizeList as List } from 'react-window';
import './CarouselMerchTubes.css';

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const customTubes3 = [
  '/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_444.2.png',
  `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Andy's.2.png`,
  '/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Bahnbrecker.2.png',
  '/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Blind-Lemon.2.png',
  `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Chimy's-2.2.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Chimy's.2.png`,
  '/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Corner-Tubes.2.png',
  // `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Don's-Blue.2.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Don's-Green.2.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Don's-Pink.2.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Ducky's.2.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Float-Fest.2.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Float-In.2.png`,
  '/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Happy-Hollow.2.png',
  `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Independence-Brewing.2.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Indian-Head.2.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Landa-Falls.2.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Landa-River-Trips.2.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Lazy-LL.2.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Lions.2.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Meckel's.2.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Plainfield.2.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Rockin'-R.2.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Shot-Gun.2.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Son's.2.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Whitewater-Deep-Eddy-2.2.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Whitewater-Deep-Eddy.2.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tube_Willies.2.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tubes_Son's-Blue-River.2.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-River-Tubes_Texas-Tubes-Rudy's.2.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-Waterpark-Tube_Aquatica.2.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS.mini/River-Floater-Tube_ATX-Float-Blue.2.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS.mini/River-Floater-Tube_ATX-Float-Camo-Blue.2.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS.mini/River-Floater-Tube_ATX-Float-Camo-Green.2.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS.mini/River-Floater-Tube_ATX-Float-Camo-Pink.2.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS.mini/River-Floater-Tube_ATX-Float-Orange.2.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS.mini/River-Floater-Tube_ATX-Float-Pink.2.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS.mini/River-Tube_ATX-Float-Blue.2.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS.mini/River-Tube_ATX-Float-Coral.2.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS.mini/River-Tube_ATX-Float-Orange.2.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS.mini/River-Tube_ATX-Float-STTB.2.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS.mini/River-Tube_ATX-Float-STTO.2.png`,
  '/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-Waterpark-Tube_Aquatica.2.png',
  // '/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-Waterpark-Tube_Beach-Park-Double-Baby.2.png',
  // '/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-Waterpark-Tube_Beach-Park-Double.2.png',
  '/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-Waterpark-Tube_Beach-Park.2.png',
  // '/assets/images/CUSTOM_TUBE_PHOTOS.mini/Custom-Waterpark-Tube_Six-Flags-Double.2.png',
  // '/assets/images/CUSTOM_TUBE_PHOTOS.mini/Waterpark-Tube-Double JR-Clear_ATX-Float-DC42-S.2.png',
];

const customTubes2 = [
  '/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_444.png',
  `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Andy's.png`,
  '/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Bahnbrecker.png',
  '/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Blind-Lemon.png',
  `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Chimy's-2.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Chimy's.png`,
  '/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Corner-Tubes.png',
  `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Don's-Blue.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Don's-Green.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Don's-Pink.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Ducky's.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Float-Fest.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Float-In.png`,
  '/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Happy-Hollow.png',
  `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Independence-Brewing.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Indian-Head.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Landa-Falls.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Landa-River-Trips.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Lazy-LL.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Lions.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Meckel's.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Plainfield.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Rockin'-R.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Shot-Gun.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Son's.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Whitewater-Deep-Eddy-2.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Whitewater-Deep-Eddy.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tube_Willies.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tubes_Son's-Blue-River.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-River-Tubes_Texas-Tubes-Rudy's.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS/Custom-Waterpark-Tube_Aquatica.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS/River-Floater-Tube_ATX-Float-Blue.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS/River-Floater-Tube_ATX-Float-Camo-Blue.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS/River-Floater-Tube_ATX-Float-Camo-Green.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS/River-Floater-Tube_ATX-Float-Camo-Pink.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS/River-Floater-Tube_ATX-Float-Orange.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS/River-Floater-Tube_ATX-Float-Pink.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS/River-Tube_ATX-Float-Blue.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS/River-Tube_ATX-Float-Coral.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS/River-Tube_ATX-Float-Orange.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS/River-Tube_ATX-Float-STTB.png`,
  `/assets/images/CUSTOM_TUBE_PHOTOS/River-Tube_ATX-Float-STTO.png`,
  '/assets/images/CUSTOM_TUBE_PHOTOS/Custom-Waterpark-Tube_Aquatica.png',
  // '/assets/images/CUSTOM_TUBE_PHOTOS/Custom-Waterpark-Tube_Beach-Park-Double-Baby.png',
  // '/assets/images/CUSTOM_TUBE_PHOTOS/Custom-Waterpark-Tube_Beach-Park-Double.png',
  '/assets/images/CUSTOM_TUBE_PHOTOS/Custom-Waterpark-Tube_Beach-Park.png',
  // '/assets/images/CUSTOM_TUBE_PHOTOS/Custom-Waterpark-Tube_Six-Flags-Double.png',
  // '/assets/images/CUSTOM_TUBE_PHOTOS/Waterpark-Tube-Double JR-Clear_ATX-Float-DC42-S.png',
];
// shuffleArray(customTubes2);
shuffleArray(customTubes3);

const CarouselMerchTubes = () => {
  const trackWidth2 = `${customTubes3.length * 300}px`; // Assuming each image has a width of 300px

  return (
    <div className="slider">
      <div className="slide-track" style={{ width: trackWidth2 }}>
        {customTubes3.map((imageUrl2, index) => (
          <div className="slide" key={index}>
            <a href="/customrivertubes">
              <img
                style={{ boxShadow: 'none'}}
                className=''
                src={imageUrl2}
                // width="300"
                alt={`Custom Tube ${index + 1}`}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselMerchTubes;
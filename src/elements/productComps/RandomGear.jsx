import React, { Component, useState, useEffect } from "react";

import './RandomGear.css';




const awesomeGear = [
    {
      productName: 'Bevie Sling',
      productSummary: 'Thick Neoprene Can Cooler',
      image: '/assets/images/NewImages10.23.2023/Merchandise/Bevie_Sling/Bevie_Sling_Assorted.png',
      link: '/beviesling',
    },
    {
      productName: 'Cool Jug',
      productSummary: '1/2 Gallon',
      image: '/assets/images/NewImages10.23.2023/Merchandise/Cool_Jug/Cool_Jug_Assorted.png',
      link: '/cooljug',
    },
    {
      productName: 'Draw String Bags',
      productSummary: '210 D Rip-Stop Polyester With Zipper Pocket',
      image: '/assets/images/NewImages10.23.2023/Merchandise/Drawstring_Bags/Drawstring_Bag_Assorted.png',
      link: '/drawstringbags',
    },
    {
      productName: 'Dry Bag Camo Nylon',
      productSummary: '10 Litre',
      image: '/assets/images/NewImages10.23.2023/Merchandise/Dry_Bag_10L_Nylon_Camo/Dry_Bag_Nylon_10L_Assorted_Camo.png',
      link: '/drybagcamonylon',
    },
    {
      productName: 'Dry Bag Holographic',
      productSummary: '15 Litre',
      image: 'assets/images/NewImages10.23.2023/Merchandise/Dry_Bag_15L_Holographic/Dry_Bag_15L_Holographic.png',
      link: '/drybagholographic15',
    },
    {
      productName: 'Dry Bag Solid Nylon',
      productSummary: '15 Litre',
      image: '/assets/images/NewImages10.23.2023/Merchandise/Dry_Bag_PVC_15L_Solid/Dry_Bag_PVC_15L_Solid_Assortment.png',
      link: '/drybagsolidnylon15',
    },
    {
      productName: 'Dry Bag Solid Nylon',
      productSummary: '10 Litre',
      image: '/assets/images/NewImages10.23.2023/Merchandise/Dry_Bag_10L_Nylon_Solid/Dry_Bag_Nylon_10L_Assorted_Solid.png',
      link: '/drybagsolidnylon',
    },
    {
      productName: 'Dry Bag Translucent',
      productSummary: '15 Litre',
      image: '/assets/images/NewImages10.23.2023/Merchandise/Dry_Bag_PVC_15L_Translucent/Dry_Bag_PVC_15L_Translucent_Assortment.png',
      link: '/drybagtrasnlucent15',
    },
    {
      productName: 'Float Pouch',
      productSummary: 'Camo Assortment',
      image: '/assets/images/NewImages10.23.2023/Merchandise/Float_Pouch_Camo/Float_Pouch_Camo_Assortment.png',
      link: '/floatpouchcamo',
    },
    {
      productName: 'Float Pouch',
      productSummary: 'Holographic Assortment',
      image: '/assets/images/NewImages10.23.2023/Merchandise/Float_Pouch_Holographic/Float_Pouch_Holographic_Assortment.png',
      link: '/floatpouchholo',
    },
    {
      productName: 'Float Pouch',
      productSummary: 'Solid Color Assortment',
      image: '/assets/images/NewImages10.23.2023/Merchandise/Float_Pouch_Solid/Float_Pouch_Solid_Assortment.png',
      link: '/floatpouchsolid',
    },
    {
      productName: 'Quick Clip Goggles',
      productSummary: 'Adult Assortment',
      image: '/assets/images/NewImages10.23.2023/Merchandise/Goggles_Adult/Goggles_Adult_Blue-Blue_Metalic.png',
      link: '/gogglesAdult',
    },
    {
      productName: 'Quick Clip Goggles',
      productSummary: 'Kids Assortment',
      image: '/assets/images/NewImages10.23.2023/Merchandise/Goggles_Kids/Goggles_Kids_Package.png',
      link: '/gogglesKids',
    },
    {
      productName: 'Sunglasses Floater',
      productSummary: 'Perfect for watersports and outdoor adventures',
      image: '/assets/images/NewImages10.23.2023/Merchandise/Sunglass_Floaters/Sunglass_Floaters_Assorted.png',
      link: '/sunglassesfloater',
    },
    {
      productName: 'Float Pouch',
      productSummary: 'USA Colorway',
      image: '/assets/images/NewImages10.23.2023/Merchandise/Float_Pouch_USA/Float_Pouch_USA_Package.png',
      link: '/uscolorway',
    },
  ];
  
// ... (other imports and awesomeGear array)
const RandomGear = () => {
  const [randomItems, setRandomItems] = useState([]);

  useEffect(() => {
    const getRandomItems = () => {
      const randomIndices = [];
      while (randomIndices.length < 2) {
        const randomIndex = Math.floor(Math.random() * awesomeGear.length);
        if (!randomIndices.includes(randomIndex)) {
          randomIndices.push(randomIndex);
        }
      }

      const selectedItems = randomIndices.map((index) => awesomeGear[index]);
      setRandomItems(selectedItems);
    };

    getRandomItems();
  }, []);

  return (
    <div className="row mt--10">
      {randomItems.map((item, index) => (
        <div className="col-lg-6 col-md-6 col-12" key={index}>
          <div className="related-work text-center mt--30">
            <div className="thumb">
              {/* <a href={item.link}> */}
              <a href="drycamo2">
                <img src={item.image} alt={item.productName} />
              </a>
            </div>
            <div className="inner">
              <h4>
                <a href={item.link}>{item.productName}</a>
              </h4>
              <span className="category">{item.productSummary}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RandomGear;
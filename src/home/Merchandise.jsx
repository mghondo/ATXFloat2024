import React from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
import Slider from "react-slick";
// import PortfolioList from "../elements/portfolio/PortfolioList";
// import { Link } from "react-router-dom";
import PortfolioListNew from "../elements/portfolio/PortfolioListNew";
import { Parallax } from "react-parallax";
import { useHistory } from 'react-router-dom'; 
import './Merchandise.css';
import StockAndMerch from "../home/StockandMerch";
import Catalog2 from "../home/Catalog";
import PortFolio2 from "../component/HomeLayout/homeOne/PortFolio2";
import NonTubeSlider from "../component/HomeLayout/homeOne/NonTubeSlider";
import Catalog3 from "./Catalog3";


// const image1 = '/assets/images/bg/riverTube2.0.png';
// const image2 = '/assets/images/bg/riverTube2.0.png'
const image3 = '/assets/images/logo/ATX_Float_Logo 2/Banner-Logo.jpg'
const customImage = '/assets/images/bg/CustomTubeBanner.png'
const productDisplay = '/assets/images/bg/productDisplay.png'


const portfolioItems = [
    {
        image: 'image-1',
        category: 'Development',
        title: 'Getting tickets to the big showlaksdfklasdjflkasdjfklsadfjlkasdjfklasdjflkasdfjlkasdjfklasdjdasklfjklsadjfkldsa',
        url: `/assets/images/portfolio/portfolio-6.jpg`,
        addittionalStyles: '',
        link: ''
        // trydo/public/assets/images/portfolio/portfolio-6.jpg

    },
    {
        image: 'image-2',
        category: 'Development 4sho',
        title: 'Getting tickets to the big show',
        url: '/assets/images/about/about-3.png',
        addittionalStyles: '',
        link: ''


    },
    {
        image: 'test',
        category: 'Development 4sho',
        title: 'Getting tickets to the big show',
        url: '/assets/images/portfolio/interior/atx_float_tubes_0012_atx_float_tubes.png_0009_Vector-Smart-Object-1.png',
        addittionalStyles: { backgroundSize: '90%' },
        link: ''

    },
    {
        image: 'test',
        category: 'Development Archer',
        title: 'Getting tickets to the big show',
        url: '/assets/images/ATX_Float_Wholesale_files/1400x1400-1.png',
        addittionalStyles: { backgroundSize: '150%' },
        link: ''
    },
    {
        image: 'test',
        category: 'Development 4sho',
        title: 'Getting tickets to the big show',
        url: '/assets/images/portfolio/portfolio-static-02.jpg',
        addittionalStyles: '',
        link: ''
    }

    // ... add more portfolio items as needed
];

// const list = [
//     {
//         image: 'image-1',
//         category: 'River Tubes',
//         title: 'Get your custom made river tubes here!!',
//         url: '#riverTubes'
//     },
//     {
//         image: 'image-2',
//         category: 'Park Tubes',
//         title: 'Get tubes for your water park here!',
//         url: '#parkTubes'
//     },
//     {
//         image: 'image-3',
//         category: 'Awesome Gear',
//         title: 'Every adventure needs extra gear. Click here',
//         url: '#awesomeGear'
//     },

// ]
const list2 = [
    {
        category: 'River Stock Tubes',
        title: '48 in. Deflated',
        url: '/assets/images/NewImages10.23.2023/TUBES/Tubes_Single_Blue_STTB/Tubes_Single_Blue_STTB_Front.jpg',
        link: '/riverstock',
        addittionalStyles: '',
    },
    {
        category: 'River Cooler Tubes',
        title: '48” x 36“ Inflated',
        url: '/assets/images/NewImages10.23.2023/TUBES/Tubes_Cooler_CTTO/Tubes_Cooler_CTTO_Side.jpg',
        link: '/rivercooler',
        addittionalStyles: '',
    },
    {
        category: 'River Floater',
        title: 'Camo Collection',
        url: '/assets/images/NewImages10.23.2023/TUBES/Camo/1400x1400-1.png',
        link: '/rivercamo',
        addittionalStyles: '',
    },
]

const list3 = [
    {
        category: 'Park Single Adult',
        title: 'Single Clear 48”',
        url: '/assets/images/NewImages10.23.2023/TUBES/Tubes_Single_Clear_SC31/Tubes_Single_Clear_SC31_Front.jpg',
        link: '/parksingle',
        addittionalStyles: '',
    },
    {
        category: 'Park Single Child',
        title: 'Single Clear JR 42”',
        url: '/assets/images/NewImages10.23.2023/TUBES/Tubes_Single_Clear_JR_SC38/Tubes_Single_Clear_JR_SC38_Front.jpg',
        link: '/parksinglejr',
        addittionalStyles: '',
    },
    {
        category: 'Park Double Adult',
        title: 'Double Clear 48”',
        url: '/assets/images/NewImages10.23.2023/TUBES/Tubes_Double_Clear_DC48/Tubes_Double_Clear_DC48_Front.jpg',
        link: '/doubleadult',
        addittionalStyles: '',
    },
    {
        category: 'Park Double Child',
        title: ' Double Clear JR 42”',
        url: '/assets/images/NewImages10.23.2023/TUBES/Tubes_Double_Clear_JR_DC42-S/Tubes_Double_Clear_JR_DC42-S_Front.jpg',
        link: '/doublejr',
        addittionalStyles: '',
    },
]


// const list = [
//     {
//         image2: '/assets/images/NewImages10.23.2023/TUBES/Tubes_Single_Blue_STTB/Tubes_Single_Blue_STTB_Front.jpg',
//         image: 'image-1',
//         category: 'River Tubes',
//         title: 'Get your custom made river tubes here!!',
//         url: '#riverTubes'
//     },
//     {
//         image2: '/assets/images/NewImages10.23.2023/TUBES/Tubes_Single_Clear_JR_SC38/Tubes_Single_Clear_JR_SC38_Front.jpg',
//         image: 'image-2',
//         category: 'Park Tubes',
//         title: 'Get tubes for your water park here!',
//         url: '#parkTubes'
//     },
//     {
//         image2: '/assets/images/NewImages10.23.2023/Merchandise/Bevie_Sling/Bevie_Sling_Assorted2.png',
//         image: 'image-3',
//         category: 'Awesome Gear',
//         title: 'Every adventure needs extra gear. Click here',
//         url: '#awesomeGear'
//     },

// ]
// const PortfolioList2 = [
//     {
//         image: 'image-1',
//         category: 'Development',
//         title: ' Getting tickets to the big show'
//     },
//     {
//         image: 'image-2',
//         category: 'Development',
//         title: ' Getting tickets to the big show'
//     },
//     {
//         image: 'image-3',
//         category: 'Development',
//         title: ' Getting tickets to the big show'
//     },
//     {
//         image: 'image-4',
//         category: 'Development',
//         title: ' Getting tickets to the big show'
//     },
//     {
//         image: 'image-3',
//         category: 'Development',
//         title: ' Getting tickets to the big show'
//     },
//     {
//         image: 'image-5',
//         category: 'Development',
//         title: ' Getting tickets to the big show'
//     }
// ]

// const amandaBkGround = {
//     backgroundImage: `url('/assets/images/bg/AJS_4086-Edit_02.jpg')`
// }

// const backgroundlightYellow = {
//     backgroundColor: '#fbff68'
// }

const productDisplays = [
    {
    bigImage: '/assets/images/NewImages10.23.2023/Product_Displays/Counter_Display_Float_Pouch.png',
    },
    {
    bigImage: '/assets/images/NewImages10.23.2023/Product_Displays/Counter_Display_Sunglass_Floaters.png',
    },
    {
    bigImage: '/assets/images/NewImages10.23.2023/Product_Displays/Floor_Stand_Float_Pouch.png',
    },
    {
    bigImage: '/assets/images/NewImages10.23.2023/Product_Displays/Floor_Stand_Multi-Product_Angle.png',
    },
    {
    bigImage: '/assets/images/NewImages10.23.2023/Product_Displays/Floor_Stand_Multi-Product.png',
    },
];
const awesomeGear = [
    {
        category: 'Bevie Sling',
        title: 'Thick Neoprene Can Cooler',
        url: '/assets/images/NewImages10.23.2023/Merchandise/Bevie_Sling/Bevie_Sling_Assorted.png',
        link: '/beviesling',
        addittionalStyles: '',
    },
    {
        category: 'Cool Jug',
        title: '1/2 Gallon',
        url: '/assets/images/NewImages10.23.2023/Merchandise/Cool_Jug/Cool_Jug_Assorted.png',
        link: '/cooljug',
        addittionalStyles: '',
    },
    {
        category: 'Draw String Bags',
        title: '210 D Rip-Stop Polyester With Zipper Pocket',
        url: '/assets/images/NewImages10.23.2023/Merchandise/Drawstring_Bags/Drawstring_Bag_Assorted.png',
        link: '/drawstringbags',
        addittionalStyles: '',
    },
    {
        category: 'Dry Bag Camo Nylon',
        title: '10 Litre',
        // url: '/assets/images/NewImages10.23.2023/AJS_4290.jpg',
        url: '/assets/images/NewImages10.23.2023/Merchandise/Dry_Bag_10L_Nylon_Camo/Dry_Bag_Nylon_10L_Assorted_Camo.png',
        link: '/drybagcamonylon',
        addittionalStyles: '',
    },
    {
        category: 'Dry Bag Holographic',
        title: '15 Litre',
        url: 'assets/images/NewImages10.23.2023/Merchandise/Dry_Bag_15L_Holographic/Dry_Bag_15L_Holographic.png',
        link: '/drybagholographic15',
        addittionalStyles: '',
    },
    {
        category: 'Dry Bag Solid Nylon',
        title: '15 Litre',
        url: '/assets/images/NewImages10.23.2023/Merchandise/Dry_Bag_PVC_15L_Solid/Dry_Bag_PVC_15L_Solid_Assortment.png',
        link: '/drybagsolidnylon15',
        addittionalStyles: '',
    },
    {
        category: 'Dry Bag Solid Nylon',
        title: '10 Litre',
        url: '/assets/images/NewImages10.23.2023/Merchandise/Dry_Bag_10L_Nylon_Solid/Dry_Bag_Nylon_10L_Assorted_Solid.png',
        link: '/drybagsolidnylon',
        addittionalStyles: '',
    },
    {
        category: 'Dry Bag Translucent',
        title: '15 Litre',
        url: '/assets/images/NewImages10.23.2023/Merchandise/Dry_Bag_PVC_15L_Translucent/Dry_Bag_PVC_15L_Translucent_Assortment.png',
        link: '/drybagtrasnlucent15',
        addittionalStyles: '',
    },
    {
        category: 'Float Pouch Camo',
        title: 'Camo Assortment',
        url: '/assets/images/NewImages10.23.2023/Merchandise/Float_Pouch_Camo/Float_Pouch_Camo_Assortment.png',
        link: '/floatpouchcamo',
        addittionalStyles: '',
    },
    {
        category: 'Float Pouch Holographic',
        title: 'Holographic Assortment',
        url: '/assets/images/NewImages10.23.2023/Merchandise/Float_Pouch_Holographic/Float_Pouch_Holographic_Assortment.png',
        link: '/floatpouchholo',
        addittionalStyles: '',

    },
    {
        category: 'Float Pouch Solid',
        title: 'Solid Color Assortment',
        url: '/assets/images/NewImages10.23.2023/Merchandise/Float_Pouch_Solid/Float_Pouch_Solid_Assortment.png',
        link: '/floatpouchsolid',
        addittionalStyles: '',
    },
    {
        category: 'Quick Clip Goggles Adult',
        title: 'Adult Assortment',
        url: '/assets/images/NewImages10.23.2023/Merchandise/Goggles_Adult/Goggles_Adult_Blue-Blue_Metalic.png',
        link: '/gogglesAdult',
        addittionalStyles: '',
    },
    {
        category: 'Quick Clip Goggles Kids',
        title: 'Kids Assortment',
        url: '/assets/images/NewImages10.23.2023/Merchandise/Goggles_Kids/Goggles_Kids_Package.png',
        link: '/gogglesKids',
        addittionalStyles: '',
    },
    {
        category: 'Sunglasses Floater',
        title: 'Perfect for watersports and outdoor adventures',
        url: '/assets/images/NewImages10.23.2023/Merchandise/Sunglass_Floaters/Sunglass_Floaters_Assorted.png',
        link: '/sunglassesfloater',
        addittionalStyles: '',

    },
    {
        category: 'Float Pouch USA',
        title: 'USA Colorway',
        url: '/assets/images/NewImages10.23.2023/Merchandise/Float_Pouch_USA/Float_Pouch_USA_Package.png',
        link: '/uscolorway',
        addittionalStyles: '',
    },

  ];

const backGroundBrown = {
    backgroundColor: '#f3edd1',
    padding: '20px'
}

// const contactAreaStyle = {
//     padding: '75px 0', // 30px padding on top and bottom, 0px padding on left and right
//     backgroundColor: '#fbff68',

// }
// const headerStyle = {
//     backgroundImage: `url('/assets/images/IMG_6288.png')`,
// };


const Merchandise = () => {
    const history = useHistory();
    const handleParallaxClick = () => {
        // Navigate to the home page or the desired route
        history.push('/');
      };
    return (
        <>
        {/* <PortFolio2 */}
            <div style={{ backgroundColor: '#f3edd1' }}>
                <PageHelmet pageTitle='Counters' />

                {/* Start Header Area  */}
                <Header headertransparent="header--transparent" colorblack="color--black" />
                {/* End Header Area  */}

                {/* Start Breadcrump Area */}
                <Breadcrumb title={'Mechandise'} />
                {/* End Breadcrump Area */}

                {/* Start Page Wrapper  */}
                <main className="page-wrapper">


  

                   

                    <div className="portfolio-area ptb--120 bg_color--5" id="awesomeGear" style={backGroundBrown}>
                        <div className="portfolio-sacousel-inner">
                            <div className="container">

                                <div className="row">
<Catalog3 list={awesomeGear}/>   

</div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="view-more-btn mt--60 text-center">
                                            {/* <a className="rn-button-style--2 btn-solid" href="/portfolio"><span>View More Project</span></a> */}
                                          <a href="/productdisplays">
                                          <h2 style={{color: '#00f3ff', fontSize:'5rem', fontFamily: 'Brice-Black', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }} data-aos="fade-up" data-aos-duration="750" className="title customTube">Product Displays</h2>
                                               

                                        </a>
                                       
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Portfolio Area */}

                    {/* <PortFolio2 customTubes={productDisplays} dots={false} linkTo='/productdisplays'/> */}

                    <NonTubeSlider customTubes={productDisplays} dots={false} linkTo='/productdisplays'/>
                    {/* <PortFolio2 customTubes={productDisplays} dots={false} linkTo='/merchandise'/> */}
               



                </main>
                {/* End Page Wrapper  */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp style={{ color: '#EF5474' }} />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}

                {/* Start Footer Area  */}
                <Footer />
                {/* End Footer Area  */}
            </div>
        </>

    )
}

export default Merchandise;
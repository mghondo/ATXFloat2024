import React from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";
// import { Link } from "react-router-dom";
import PortfolioListNew from "../elements/portfolio/PortfolioListNew";
import { Parallax } from "react-parallax";
import { useHistory } from 'react-router-dom'; 
import './PortfolioCSS.css';
import StockAndMerch from "../home/StockandMerch";
import Catalog2 from "../home/Catalog";
import PortFolio2 from "../component/HomeLayout/homeOne/PortFolio2";
import StockAndMerch2 from "../home/StockAndMerch2";
import LazyLoad from 'react-lazyload';

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
        category: 'Blue Stock Tubes',
        title: '48 in. Deflated',
        url: '/assets/images/NewImages10.23.2023/TUBES/Tubes_Single_Blue_STTB/Tubes_Single_Blue_STTB_Front.png',
        // url: '/assets/images/NewImages10.23.2023/TUBES/Tubes_Single_Blue_STTB/Tubes_Single_Blue_STTB_Front.png',
        link: '/riverstock',
        addittionalStyles: '',
    },
    {
        category: 'Yellow Stock Tubes',
        title: '48 in. Deflated',
        url: '/assets/images/NewImages10.23.2023/TUBES/Tubes_Single_Blue_STTO/Tubes_Single Blue_STTB_Front.png',
        link: '/riverstock',
        addittionalStyles: '',
    },
    {
        category: 'River Cooler Tubes',
        title: '48” x 36“ Inflated',
        url: '/assets/images/NewImages10.23.2023/TUBES/Tubes_Cooler_CTTO/Tubes_Cooler_CTTO_Side.png',
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
        url: '/assets/images/NewImages10.23.2023/TUBES/Tubes_Single_Translucent_Blue_STB48/Tubes_Single_Translucent_Blue_STB48_Back.png',
        // url: '/assets/images/NewImages10.23.2023/TUBES/Tubes_Single_Clear_SC31/Tubes_Single_Clear_SC31_Side.png',
        // url: '/assets/images/NewImages10.23.2023/TUBES/Tubes_Single_Clear_SC31/Tubes_Single_Clear_SC31_Front.png',
        link: '/parksingle',
        addittionalStyles: '',
    },
    {
        category: 'Park Single Child',
        title: 'Single Clear JR 42”',
        url: '/assets/images/NewImages10.23.2023/TUBES/Tubes_Single_Clear_JR_SC38/Tubes_Single_Clear_JR_SC38_Front.png',
        link: '/parksinglejr',
        addittionalStyles: '',
    },
    {
        category: 'Park Double Adult',
        title: 'Double Clear 48”',
        url: '/assets/images/NewImages10.23.2023/TUBES/Tubes_Double_Clear_DC48/Tubes_Double_Clear_DC48_Front.png',
        link: '/doubleadult',
        addittionalStyles: '',
    },
    {
        category: 'Park Double Child',
        title: ' Double Clear JR 42”',
        url: '/assets/images/NewImages10.23.2023/TUBES/Tubes_Double_Clear_JR_DC42-S/Tubes_Double_Clear_JR_DC42-S_Front.png',
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


const awesomeGear = [
    {
      bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Bevie_Sling/Bevie_Sling_Assorted.png',
    },
    {
      bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Cool_Jug/Cool_Jug_Assorted.png',
    },
    {
      bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Drawstring_Bags/Drawstring_Bag_Assorted.png',
    },

    {
      bigImage: 'assets/images/NewImages10.23.2023/Merchandise/Dry_Bag_15L_Holographic/Dry_Bag_15L_Holographic.png',
    },
    {
      bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Dry_Bag_PVC_15L_Solid/Dry_Bag_PVC_15L_Solid_Assortment.png',
    },
    {
      bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Dry_Bag_10L_Nylon_Solid/Dry_Bag_Nylon_10L_Assorted_Solid.png',
    },
    {
      bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Dry_Bag_PVC_15L_Translucent/Dry_Bag_PVC_15L_Translucent_Assortment.png',
    },
    {
      bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Float_Pouch_Camo/Float_Pouch_Camo_Assortment.png',
    },
    {
      bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Float_Pouch_Holographic/Float_Pouch_Holographic_Assortment.png',
    },
    {
      bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Float_Pouch_Solid/Float_Pouch_Solid_Assortment.png',
    },
    {
      bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Goggles_Adult/Goggles_Adult_Blue-Blue_Metalic.png',
    },
    {
      bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Goggles_Kids/Goggles_Kids_Package.png',
    },
    {
      bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Sunglass_Floaters/Sunglass_Floaters_Assorted.png',
    },
    {
      bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Dry_Bag_10L_Nylon_Camo/Dry_Bag_Nylon_10L_Assorted_Camo.png',
    },
    {
      bigImage: '/assets/images/NewImages10.23.2023/Merchandise/Float_Pouch_USA/Float_Pouch_USA_Package.png',
    },
    // {
    //   bigImage: '/assets/images/NewImages10.23.2023/Racer_Mats/Racer_Mats_01.jpg',
    // },
  ];
const backGroundBrown = {
    backgroundColor: '#f3edd1',
    paddingTop: '10px',
    marginTop: '25px'
}

// const contactAreaStyle = {
//     padding: '75px 0', // 30px padding on top and bottom, 0px padding on left and right
//     backgroundColor: '#fbff68',

// }
// const headerStyle = {
//     backgroundImage: `url('/assets/images/IMG_6288.png')`,
// };


const Portfolio = () => {
    const history = useHistory();
    const handleParallaxClick = () => {
        // Navigate to the home page or the desired route
        history.push('/');
      };
    return (
        <>
            <div style={{ backgroundColor: '#f3edd1' }}>
                <PageHelmet pageTitle='Counters' />

                {/* Start Header Area  */}
                <Header headertransparent="header--transparent" colorblack="color--black" />
                {/* End Header Area  */}

                <LazyLoad height={200} offset={100}>
                {/* Start Breadcrump Area */}
                <Breadcrumb title={'ATX Float keeps waterpark and rivers tubes stocked in central Texas. Ready to ship anytime.'} />
                {/* End Breadcrump Area */}
                </LazyLoad>

                {/* Start Page Wrapper  */}
                <main className="page-wrapper">

                {/* <StockAndMerch/> */}

                <div className="portfolio-area ptb--120 bg_color--5" id="parkTubes" style={backGroundBrown}>
                        <div className="portfolio-sacousel-inner">
                            <div className="container" >
                                <div className="row">
                                    <div className="col-lg-12" 
                                    // style={{paddingTop:'100px'}}
                                    >
                                    <h2 style={{ fontFamily: 'Brice-Black', color: '#ef5474', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', textAlign: "center" }} data-aos="fade-up" data-aos-duration="750" className="waterPark catHeader">Waterpark Tubes</h2>
                                             

                                    </div>
                                </div>
                                <div className="row">
                                <div className="col-lg-12">
                                <LazyLoad height={200} offset={100}>
                                <Catalog2 list={list3} />    
                                </LazyLoad>
                                {/* <StockAndMerch2 list={list3} ClassFromParent = 'col-lg-6 col-md-6 col-12'/> */}
                                     </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* End Portfolio Area */}


                    {/* Start Portfolio Area */}
                    <div className="portfolio-area ptb--120 bg_color--5" id='riverTubes' style={backGroundBrown}>
                        <div className="portfolio-sacousel-inner">
                            <div className="container">
                                <div className="row" >
                                    <div className="col-lg-12" style={{paddingTop:'0px'}}>
                                    <h2 style={{ textAlign:'center', fontFamily: 'Brice-Black', color: '#ef5474', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }} data-aos="fade-up" data-aos-duration="750" className="waterPark catHeader">River Tubes</h2>
                                              

                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-12">
                                    <LazyLoad height={200} offset={100}>
                                    <Catalog2 list={list2} /> 
                                    </LazyLoad>
                                    {/* <StockAndMerch2 list={list2} ClassFromParent = 'col-lg-6 col-md-6 col-12'/> */}
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Portfolio Area */}

                   

                    <div className="portfolio-area ptb--120 bg_color--5" id="awesomeGear" style={backGroundBrown}>
                        <div className="portfolio-sacousel-inner">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                    <h2
                                                className="title merch waterPark catHeader"
                                                data-aos="fade-up"
                                                data-aos-duration="750"
                                                style={{textAlign: 'center'}}
                                            >
                                                Merchandise
                                            </h2> 
                                    </div>
                                </div>
                                <div className="row">
                               
                                
</div>
<LazyLoad height={200} offset={100}>
       <PortFolio2 customTubes={awesomeGear} dots={false} linkTo='/merchandise'/>
       </LazyLoad>


                            </div>
                        </div>
                    </div>
                    {/* End Portfolio Area */}






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

export default Portfolio;
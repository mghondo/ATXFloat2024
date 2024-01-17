import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { FiX , FiMenu } from "react-icons/fi";
import './header.css';



// const headerStyle = {
//     backgroundImage: `url('/assets/images/IMG_6288.png')`,
//     position: 'top'
//     // backgroundImage: `url('/assets/images/bg/ATXBanner.jpg')`,
//   };


  class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolled: false,
        };
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.scrollY > 0) {
            this.setState({ scrolled: true });
        } else {
            this.setState({ scrolled: false });
        }
    }

    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open');
    }

    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open');
    }
    render() {
        const { logo } = this.props;
        const headerClass = 'header-area formobile-menu header--transparent scrolled';
        const fixedClass = 'fixed-menu';
    
        let logoUrl = <img src="/assets/images/logo/ATX_Logo_6dcef0.png" style={{ maxWidth: '300px', maxHeight: '40px' }} alt="Digital Agency" />;
    
        return (
            <header className={`${headerClass} ${fixedClass}`} style={{ padding: '5px'}}>
                <div className="header-wrapper" id="header-wrapper">
                    <div className="header-left">
                        <div className="logo">
                            <a href="/">
                                {logoUrl}
                            </a>
                        </div>
                    </div>
                    <div className="header-right">
                        <nav className="mainmenunav d-lg-block" style={{ fontFamily: 'Brice-Light' }}>
                            <ul className="mainmenu">
                                <li><Link to="/portfolio">Stock Tubes</Link>
                                    <ul className="submenu">
                                        <li><a href="/portfolio#parkTubes">Waterpark Tubes</a></li>
                                        <li><a href="/portfolio#riverTubes">River Tubes</a></li>    
                                    </ul>
                                </li>
                                <li><a href="/merchandise">Mechandise</a></li>
                                <li><Link to="/customrivertubes">Custom Gallery</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </nav>
                        <div className="header-btn"></div>
                        <div className="humberger-menu d-block d-lg-none pl--20">
                            <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                        </div>
                        <div className="close-menu d-block d-lg-none">
                            <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
    
    
}
export default Header;
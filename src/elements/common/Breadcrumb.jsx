import React, { Component } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './breadcrumb.css';

// AOS.init();

// debounce.js

const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

// export default debounce;


class Breadcrumb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenWidth: window.innerWidth,
    };
  }

  debounceResize = debounce(() => {
    this.updateScreenWidth();
  }, 300);

  componentDidMount() {
    window.addEventListener("resize", this.debounceResize);
    AOS.init();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.debounceResize);
  }

  updateScreenWidth = () => {
    this.setState({ screenWidth: window.innerWidth });
  };


  render() {
    const { title, backgroundImage } = this.props;
    const { screenWidth } = this.state;
    const backgroundUrl = backgroundImage || '/assets/images/bg/ATXFLOAT3.jpg';

    return (
      <React.Fragment>
    <div
    // 
      id="morganbreadcrumb"
      className={`
      breadcrumb-area 
      rn-bg-color 
      ptb--120 
      bg_image 
      ${screenWidth <= 991 ? 'mobile-breadcrumb' : ''}`}
      data-black-overlay="1"
    >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-inner">
                  <h2
                    className={`myTitle ${screenWidth <= 567 && title === 'ATX Float keeps waterpark and rivers tubes stocked in central Texas. Ready to ship anytime.' ? 'mobile-font-size' : ''}`}
                    data-aos="fade-down"
                    // data-aos-duration="750"
                  >
                    {title}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Breadcrumb;

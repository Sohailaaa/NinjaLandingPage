import React from "react";
import Link from "next/link";


import ImageSlider from "./ImageSlider";
const MainBanner = () => {
  const slides = [
    { url: "/images/ChatbotNinja.png", title: "chatbot" },
    { url: "/images/2.png", title: "boat" },
    { url: "/images/3.png", title: "forest" },
    
  ];
  const containerStyles = {
    position:'relative',
    margin: "0 auto",
    display: 'inline-block',
  };
  return (
    <div className="mainCon" >
      <div className="childMain" style={containerStyles}>
        <ImageSlider slides={slides} />
        <div className="banner-text">
          

              

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1200"
            data-aos-once="true"
          >
            
          </div>

          <div
            className="banner-btn" style={{marginTop:'40px',paddingLeft:'17%'}}
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1200"
            data-aos-once="true"
          >
            <Link href="/contact" >
              <a className="default-btn"style={{position: 'absolute',
    top: '50%', 
     
    transform: 'translate( -40%,-455%)',}}>Get Started</a>
            </Link>

        
          </div>
        </div>
      </div>
    </div>
  );
};


export default MainBanner;

import React, { useEffect } from "react";
import "./effect.css";
import AOS from "aos";
import "aos/dist/aos.css";

const ImageEffect = () => {
  const handleMouseEnter = (event) => {
    event.target.classList.remove("zoom-in", "original-color");
  };

  const handleMouseLeave = (event) => {
    event.target.classList.add("zoom-in", "original-color");
  };

  useEffect(() => {
    AOS.init({
      duration: 400,
    });
  }, []);

  const renderImageContainer = (src, alt, aosProps) => (
    <div className="outer">
      <div
        data-aos={aosProps.animation}
        data-aos-delay={aosProps.delay}
        data-aos-duration={aosProps.duration}
        data-aos-easing={aosProps.easing}
        className="image-container"
        style={{ position: "relative", overflow:"hidden"}}
      >
        
        <img
          src={src}
          alt={alt}
          className="image-effect"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          //style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        
        <h3
          data-aos="flip-up"
          style={{
            position: "absolute",
            //zIndex :3,
            top:"5%",
            left:"10%",
            margin: "10px",
            color: "#fff",
          }}
        >
          ---About---
        </h3>
      </div>
    </div>
  );

  return (
    <>
      {renderImageContainer("pic5.avif", "Your Image Alt Text", {
        animation: "fade-left",
        delay: "200",
        duration: "800",
        easing: "ease-in-out",
      })}

      <div className="m">
        {renderImageContainer("pic3.jpg", "Your Image Alt Text", {
          animation: "fade-right",
          delay: "200",
          duration: "800",
          easing: "ease-in-out",
        })}

        {renderImageContainer("pic4.avif", "Your Image Alt Text", {
          animation: "fade-left",
          delay: "200",
          duration: "800",
          easing: "ease-in-out",
        })}
      </div>

      {renderImageContainer("COLORFUL-NIGHT.jpg", "Your Image Alt Text", {
        animation: "fade-left",
        delay: "200",
        duration: "800",
        easing: "ease-in-out",
      })}
    </>
  );
};

export default ImageEffect;

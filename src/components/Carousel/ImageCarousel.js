import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import image1 from "../../images/cro1.avif"
import image2 from "../../images/cro2.avif"
import image3 from "../../images/cro3.avif"

const ImageCarousel = () => {
    return (
        <Carousel 
            autoPlay 
            infiniteLoop 
            showThumbs={false} 
            showStatus={false} 
            className="mb-8"
        >
            <div>
                <img src={image1} alt="First Slide" className="object-cover  h-[600px]"/>
                <p className="legend">Luxury Apartments</p>
            </div>
            <div>
                <img src={image2} alt="Second Slide" className="object-cover  h-[600px]"/>
                <p className="legend">Cozy Cottages</p>
            </div>
            <div>
                <img src={image3} alt="Third Slide" className="object-cover  h-[600px]"/>
                <p className="legend">Beachside Villas</p>
            </div>
        </Carousel>
    );
};

export default ImageCarousel;

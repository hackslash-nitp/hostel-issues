import React from "react";

import img1 from '../carouselImages/image1.jpg';
import img2 from '../carouselImages/image2.jpg';

function Carousel() {
    return (
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block mx-auto" alt="image1" />
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className ="d-block mx-auto" alt="image2" />
                    </div>
                 </div>
            </div>
    );
}

export default Carousel;
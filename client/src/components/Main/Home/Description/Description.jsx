import React from "react";
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const Description = () => {
  return (
    <Carousel>
                <article>
                    <img src="./public/img/bg1.jpg" />
                    <p className="legend">Legend 1</p>
                </article>
                <article>
                    <img src="./public/img/bg2.jpg" />
                    <p className="legend">Legend 2</p>
                </article>
                <article>
                    <img src="./public/img/bg3.jpg" />
                    <p className="legend">Legend 3</p>
                </article>
            </Carousel>
        );
};

export default Description;

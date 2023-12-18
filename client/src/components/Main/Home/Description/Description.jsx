import React from "react";
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const Description = () => {
  return (
    <Carousel>
                <article>
                    <img src="./img/bg1.png" />
                    {/* <p className="legend">Legend 1</p> */}
                </article>
                <article>
                    <img src="./img/bg2.png" />
                    {/* <p className="legend">Legend 2</p> */}
                </article>
                <article>
                    <img src="./img/bg3.png" />
                    {/* <p className="legend">Legend 3</p> */}
                </article>
            </Carousel>
        );
};

export default Description;

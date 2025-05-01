import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/images/banner/banner-1.png"
          alt="Imagem 1"
          style={{ height: '80vh', objectFit: 'cover' }}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/images/banner/banner-2.png"
          alt="Imagem 2"
          style={{ height: '80vh', objectFit: 'cover' }}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/images/banner/banner-3.png"
          alt="Imagem 3"
          style={{ height: '80vh', objectFit: 'cover' }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;

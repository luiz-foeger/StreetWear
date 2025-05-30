import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dsmx8c5ug/image/upload/v1747064973/banner-3_t22pah.png"
          alt="Imagem 1"
          style={{ height: '80vh', objectFit: 'cover' }}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dsmx8c5ug/image/upload/v1747064976/banner-2_nexjo1.png"
          alt="Imagem 2"
          style={{ height: '80vh', objectFit: 'cover' }}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dsmx8c5ug/image/upload/v1747064977/banner-1_mwoc3x.png"
          alt="Imagem 3"
          style={{ height: '80vh', objectFit: 'cover' }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;

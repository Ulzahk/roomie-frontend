import React from 'react';
import { Link } from '@reach/router';
import CarouselItem from '../CarouselItem';
import ImagesList from '../ImagesList';
import { Section, CarouselWrapper, BtnLeftWrapper, BtnRightWrapper, Button, BtnImg, Image } from './styles';
import btnLeft from '../../assets/static/left.svg';
import btnRight from '../../assets/static/right.svg';
import placeImage from '../../assets/static/2.jpg';
import placeImage2 from '../../assets/static/3.jpg';

const Carousel = () => {
  return (
    <Section>
      <CarouselWrapper>
        <BtnLeftWrapper>
          <Button>
            <BtnImg src={btnLeft} />
          </Button>
        </BtnLeftWrapper>
        <CarouselItem image={placeImage} />
        <CarouselItem image={placeImage} />
        <CarouselItem image={placeImage} />
        <CarouselItem image={placeImage} />
        <CarouselItem image={placeImage} />
        <BtnRightWrapper>
          <Button>
            <BtnImg src={btnRight} />
          </Button>
        </BtnRightWrapper>
      </CarouselWrapper>
      <ImagesList>
        <Link to={placeImage2}>
          <Image src={placeImage} />
        </Link>
        <Link to={placeImage2}>
          <Image src={placeImage} />
        </Link>
        <Link to={placeImage2}>
          <Image src={placeImage} />
        </Link>
        <Link to={placeImage2}>
          <Image src={placeImage} />
        </Link>
        <Link to={placeImage2}>
          <Image src={placeImage} />
        </Link>
      </ImagesList>
    </Section>
  );
};

export default Carousel;
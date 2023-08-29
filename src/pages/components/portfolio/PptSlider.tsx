import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styled from "styled-components";
import { PptCard } from "./PptCard";
import { Container } from "@chakra-ui/react";

const MainSlider = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container boxShadow="md" w="100%" maxW="500px" p="0" mx="auto">
      <StyledSlider {...settings}>
        {[1, 2, 3, 4, 5].map((_i: number) => (
          <PptCard key={_i} />
        ))}
      </StyledSlider>
    </Container>
  );
};

const StyledSlider = styled(Slider)`
  width: 100%;
  max-width: 600px;
  min-width: 250px;

  .slick-prev {
    z-index: 1;
    left: 30px;
  }

  .slick-next {
    right: 40px;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 30px;
    opacity: 0.5;
    color: white;
  }

  .slick-dots {
    display: flex;
    justify-content: center;
    bottom: 30px;
    color: white;

    li button:before {
      color: white;
    }

    li.slick-active button:before {
      color: white;
    }

    @media screen and (max-width: 850px) {
      .slick-prev,
      .slick-next {
        display: none;
      }
    }
  }
`;

export default MainSlider;

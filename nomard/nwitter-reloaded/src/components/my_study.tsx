// ImageSlider.tsx

import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1s ease-in-out;

  &.visible {
    opacity: 1;
  }
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const CheckMark = styled.div`
  font-size: 24px;
  color: green;
`;

const CrossMark = styled.div`
  font-size: 24px;
  color: red;
`;

const images = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
];

export default function ImageSlider() {
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ImageContainer>
      {images.map((image, index) => (
        <React.Fragment key={index}>
          <Image
            src={image}
            alt={`Image ${index + 1}`}
            style={{ opacity: index === visibleIndex ? 1 : 0 }}
          />
        </React.Fragment>
      ))}
      <Overlay>
        {Array.from({ length: images.length }).map((_, index) => (
          index === visibleIndex ? (
            <CheckMark key={index}>✔</CheckMark>
          ) : (
            <CrossMark key={index}>❌</CrossMark>
          )
        ))}
      </Overlay>
    </ImageContainer>
  );
}

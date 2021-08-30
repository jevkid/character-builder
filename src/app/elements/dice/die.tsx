import React from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';

const containerWidth = 200;
const containerHeight = containerWidth;

const faceWidth = containerWidth * 0.5;
const faceHeight = faceWidth * 0.86;

const transitionDuration = '0.5s';

const angle = '53deg';
const ringAngle = '-11deg';
const opacity = 0.75;
const color = `rgba(81, 66, 96, ${opacity})`;
const translateZ = faceWidth * 0.335;
const translateY = -faceHeight * 0.15;
const translateRingZ = faceWidth * 0.75;
const translateRingY = faceHeight * 0.78 + translateY;
const translateLowerZ = translateZ;
const translateLowerY = faceHeight * 0.78 + translateRingY;

interface DiceFaceProps {
  faceNum: number;
  rotateXVar?: string;
  rotateYVar?: string;
  rotateZVar?: string;
  rotateXFace?: string;
  rotateYFace?: string;
  rotateZFace?: string;
  translateYFace?: string;
  translateZFace?: string;
}

const StyledDiceContainer = styled.div`
  margin: auto auto;
  position: relative;
  width: ${containerWidth}px;
  height: ${containerHeight}px;
  perspective: 1500px;
`;

const StyledDice = styled(motion.div)<DiceFaceProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform ${transitionDuration} ease-out;
  cursor: pointer;

  ${({ faceNum, rotateXVar, rotateYVar }) =>
    faceNum >= 1 &&
    faceNum <= 5 &&
    `
    &[data-face="${faceNum}"] {
      transform: rotateX(${rotateXVar}) rotateY(${rotateYVar});
    }
    `}
  ${({ faceNum, rotateXVar, rotateYVar }) =>
    faceNum >= 6 &&
    faceNum <= 10 &&
    `
    &[data-face="${faceNum}"] {
      transform: rotateX(${rotateXVar}) rotateZ(180deg) rotateY(${rotateYVar});
    }
    `}

  ${({ faceNum, rotateXVar, rotateYVar }) =>
    faceNum >= 11 &&
    faceNum <= 15 &&
    `
    &[data-face="${faceNum}"] {
      transform: rotateX(${rotateXVar}) rotateY(${rotateYVar});
    }
    `}

  ${({ faceNum, rotateXVar, rotateYVar }) =>
    faceNum >= 16 &&
    faceNum <= 20 &&
    `
    &[data-face="${faceNum}"] {
      transform: rotateX(${rotateXVar}) rotateY(${rotateYVar});
    }
    `}
`;

const StyledDiceFace = styled.figure<DiceFaceProps>`
  position: absolute;
  left: 50%;
  top: 0;
  margin: 0 -${faceWidth * 0.5}px;
  border-left: ${faceWidth * 0.5}px solid transparent;
  border-right: ${faceWidth * 0.5}px solid transparent;
  border-bottom: ${faceHeight}px solid ${color};
  width: 0px;
  height: 0px;
  transform-style: preserve-3d;
  backface-visibility: hidden;

  counter-increment: steps 1;
  font-family: 'Tenali Ramakrishna';
  ${({ faceNum, rotateYFace, translateZFace, translateYFace, rotateXFace }) =>
    faceNum >= 1 &&
    faceNum <= 5 &&
    `
      &:nth-child(${faceNum}) {
        transform: rotateY(${rotateYFace}) translateZ(${translateZFace}) translateY(${translateYFace}) rotateX(${rotateXFace});
      }
    `}

  ${({
    faceNum,
    rotateYFace,
    translateZFace,
    translateYFace,
    rotateXFace,
    rotateZFace,
  }) =>
    faceNum >= 6 &&
    faceNum <= 10 &&
    `
      &:nth-child(${faceNum}) {
        transform: rotateY(${rotateYFace}) translateZ(${translateZFace}) translateY(${translateYFace}) rotateZ(${rotateZFace}) rotateX(${rotateXFace});
      }
    `}

  ${({ faceNum, rotateYFace, translateZFace, translateYFace, rotateXFace }) =>
    faceNum >= 11 &&
    faceNum <= 15 &&
    `
      &:nth-child(${faceNum}) {
        transform: rotateY(${rotateYFace}) translateZ(${translateZFace}) translateY(${translateYFace}) rotateX(${rotateXFace});
      }
    `}

  ${({
    faceNum,
    rotateYFace,
    translateZFace,
    translateYFace,
    rotateXFace,
    rotateZFace,
  }) =>
    faceNum >= 16 &&
    faceNum <= 20 &&
    `
      &:nth-child(${faceNum}) {
        transform: rotateY(${rotateYFace}) translateZ(${translateZFace}) translateY(${translateYFace}) rotateZ(${rotateZFace}) rotateX(${rotateXFace});
      }
    `}

  &:before {
    content: counter(steps);
    position: absolute;
    top: ${faceHeight * 0.25}px;
    left: -${faceWidth}px;
    color: #fffff;
    text-shadow: 1px 1px 3px #00000;
    font-size: ${faceHeight * 0.5}px;
    text-align: center;
    line-height: ${faceHeight * 0.9}px;
    width: ${faceWidth * 2}px;
    height: ${faceHeight}px;
  }
`;

export const D20: React.FC = () => {
  const controls = useAnimation();
  const [currentFace, setCurrentFace] = React.useState(16);
  const dieFaces = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const activeNum = 16;
  const numSides = 20;
  const initialSide = 1;
  const animationDuration = 3000;
  let timeoutId: ReturnType<typeof setTimeout>;
  let rotateXVar;
  let rotateYVar;
  let rotateZVar;
  let angleMultiplier;

  const randomFace = () => {
    const face = Math.floor(Math.random() * numSides) + initialSide;
    setCurrentFace(face === currentFace ? randomFace() : face);
    console.log(face);
    return face;
  };

  const rollTo = (face: number) => {
    clearTimeout(timeoutId);
    setCurrentFace(face);
  };

  const randomise = () => {
    handleDieClick();
    clearTimeout(timeoutId);

    timeoutId = setTimeout(function () {
      handleDieClick();

      rollTo(randomFace());
    }, animationDuration);

    return false;
  };

  const handleDieClick = () => {
    controls.start({
      scale: [1, 1.2, 2, 1],
      rotateX: [0, 120, 240, 360, 480],
      rotateY: [0, 240, 480, 720, 960],
      rotateZ: [0, 0, 0, 0],
      translateX: [40, 40],
      translateY: [-40, -40],
      transition: {
        duration: 1,
        ease: 'easeInOut',
        times: [0.1, 0.3, 0.5, 0.7, 0.9, 0.1],
      },
    });
  };

  if (activeNum >= 1 && activeNum <= 5) {
    angleMultiplier = activeNum - 1;
    rotateXVar = '-53deg';
    rotateYVar = `${72 * angleMultiplier}deg`;
  }
  if (activeNum >= 6 && activeNum <= 10) {
    angleMultiplier = activeNum - 6;
    rotateXVar = '11deg';
    rotateYVar = `${-72 * angleMultiplier}deg`;
    rotateZVar = '180deg';
  }

  if (activeNum >= 11 && activeNum <= 15) {
    angleMultiplier = activeNum - 8;
    rotateXVar = '191deg';
    rotateYVar = `${-72 * angleMultiplier - -36}deg`;
  }

  if (activeNum >= 16 && activeNum <= 20) {
    angleMultiplier = activeNum - 15;
    rotateXVar = '127deg';
    rotateYVar = `${-72 * angleMultiplier}deg`;
  }

  return (
    <StyledDiceContainer>
      <StyledDice
        faceNum={activeNum}
        rotateXVar={rotateXVar}
        rotateYVar={rotateYVar}
        rotateZVar={rotateZVar}
        animate={controls}
        data-face={currentFace}
        onClick={() => randomise()}
      >
        {dieFaces.map((i) => {
          let angleFaceMultiplier;
          let rotateXFace;
          let rotateYFace;
          let rotateZFace;
          let translateZFace;
          let translateYFace;
          if (i >= 1 && i <= 5) {
            angleFaceMultiplier = i - 1;
            rotateXFace = angle;
            rotateYFace = `${-72 * angleFaceMultiplier}deg`;
            translateYFace = `${translateY}px`;
            translateZFace = `${translateZ}px`;
          }
          if (i >= 6 && i <= 10) {
            angleFaceMultiplier = i - 11;
            rotateYFace = `${-72 * angleFaceMultiplier}deg`;
            translateZFace = `${translateRingZ}px`;
            translateYFace = `${translateRingY}px`;
            rotateZFace = '180deg';
            rotateXFace = `${ringAngle}`;
          }
          if (i >= 11 && i <= 15) {
            angleFaceMultiplier = i - 8;
            translateZFace = `${translateRingZ}px`;
            translateYFace = `${translateRingY}px`;
            rotateXFace = `${ringAngle}`;
            rotateYFace = `${72 * angleFaceMultiplier + 36}deg`;
          }
          if (i >= 16 && i <= 20) {
            angleFaceMultiplier = i - 18;
            rotateYFace = `${72 * angleFaceMultiplier + 36}deg`;
            translateZFace = `${translateLowerZ}px`;
            translateYFace = `${translateLowerY}px`;
            rotateZFace = '180deg';
            rotateXFace = angle;
          }
          return (
            <StyledDiceFace
              key={i}
              faceNum={i}
              rotateXFace={rotateXFace}
              rotateYFace={rotateYFace}
              rotateZFace={rotateZFace}
              translateYFace={translateYFace}
              translateZFace={translateZFace}
            />
          );
        })}
      </StyledDice>
    </StyledDiceContainer>
  );
};

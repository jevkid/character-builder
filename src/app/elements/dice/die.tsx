import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const containerWidth = 200;
const containerHeight = containerWidth;

const faceWidth = containerWidth * 0.5;
const faceHeight = faceWidth * 0.86;

const transitionDuration = '0.5s';
const animationDuration = '3s';

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
  rolling?: boolean;
  transformProps?: string;
}

const StyledDiceContainer = styled.div`
  margin: auto auto;
  position: relative;
  width: ${containerWidth}px;
  height: ${containerHeight}px;
  perspective: 1500px;
`;

const roll = keyframes`
  10% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) }
  30% { transform: rotateX(120deg) rotateY(240deg) rotateZ(0deg) translateX(40px) translateY(40px) }
  50% { transform: rotateX(240deg) rotateY(480deg) rotateZ(0deg) translateX(-40px) translateY(-40px) }
  70% { transform: rotateX(360deg) rotateY(720deg) rotateZ(0deg) }
  90% { transform: rotateX(480deg) rotateY(960deg) rotateZ(0deg) }
`;

const animation = () =>
  css`
    ${roll} ${animationDuration} linear;
  `;

const StyledDice = styled.button<DiceFaceProps>`
  background: transparent;
  border: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform ${transitionDuration} ease-out;
  cursor: pointer;
  transform: rotateX(-53deg);

  &.rolling {
    animation: ${animation};
  }

  ${({ faceNum, transformProps }) =>
    faceNum &&
    `
      transform: ${transformProps};
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
  ${({ faceNum, transformProps }) =>
    `
      &:nth-child(${faceNum}) {
        transform: ${transformProps};
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
  const [currentFace, setCurrentFace] = React.useState(16);
  const dieFaces = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const numSides = 20;
  const initialSide = 1;
  const animationDuration = 3000;
  let rotateXVar;
  let rotateYVar;
  let angleMultiplier;
  let transformProps = '';

  const randomFace = () => {
    const face = Math.floor(Math.random() * numSides) + initialSide;
    setCurrentFace(face === currentFace ? randomFace() : face);
    return face;
  };

  const rollTo = (face: number) => {
    console.log(face);
    setCurrentFace(face);
  };

  const handleDiceRoll = () => {
    const dice = document.getElementById('dice');
    if (document && dice) {
      dice.classList.add('rolling');
      const timer = setTimeout(() => {
        rollTo(randomFace());
      }, animationDuration);
      return () => clearTimeout(timer);
    }
  };

  if (currentFace >= 1 && currentFace <= 5) {
    angleMultiplier = currentFace - 1;
    rotateXVar = '-53deg';
    rotateYVar = `${72 * angleMultiplier}deg`;
    transformProps = `rotateX(${rotateXVar}) rotateY(${rotateYVar});`;
  }

  if (currentFace >= 6 && currentFace <= 10) {
    angleMultiplier = currentFace - 6;
    rotateXVar = '11deg';
    rotateYVar = `${72 * angleMultiplier}deg`;
    transformProps = `rotateX(${rotateXVar}) rotateZ(180deg) rotateY(${rotateYVar});`;
  }

  if (currentFace >= 11 && currentFace <= 15) {
    angleMultiplier = currentFace - 8;
    rotateXVar = '11deg';
    const sideAngle = 72;
    const sideAngleVar = 72 / 2;
    rotateYVar = `${-sideAngle * angleMultiplier - sideAngleVar}deg`;
    transformProps = `rotateX(${rotateXVar}) rotateY(${rotateYVar});`;
  }

  if (currentFace >= 16 && currentFace <= 20) {
    angleMultiplier = currentFace - 15;
    rotateXVar = '127deg';
    rotateYVar = `${-72 * angleMultiplier}deg`;
    transformProps = `rotateX(${rotateXVar}) rotateY(${rotateYVar});`;
  }

  return (
    <StyledDiceContainer>
      <StyledDice
        id="dice"
        faceNum={currentFace}
        transformProps={transformProps}
        onClick={() => handleDiceRoll()}
      >
        {dieFaces.map((i) => {
          let angleFaceMultiplier;
          let rotateXFace;
          let rotateYFace;
          let rotateZFace;
          let translateZFace;
          let translateYFace;
          let transformFaceProps;
          if (i >= 1 && i <= 5) {
            angleFaceMultiplier = i - 1;
            rotateXFace = angle;
            rotateYFace = `${-72 * angleFaceMultiplier}deg`;
            translateYFace = `${translateY}px`;
            translateZFace = `${translateZ}px`;
            transformFaceProps = `rotateY(${rotateYFace}) translateZ(${translateZFace}) translateY(${translateYFace}) rotateX(${rotateXFace})`;
          }
          if (i >= 6 && i <= 10) {
            angleFaceMultiplier = i - 11;
            rotateYFace = `${-72 * angleFaceMultiplier}deg`;
            translateZFace = `${translateRingZ}px`;
            translateYFace = `${translateRingY}px`;
            rotateZFace = '180deg';
            rotateXFace = `${ringAngle}`;
            transformFaceProps = `rotateY(${rotateYFace}) translateZ(${translateZFace}) translateY(${translateYFace}) rotateZ(${rotateZFace}) rotateX(${rotateXFace})`;
          }
          if (i >= 11 && i <= 15) {
            angleFaceMultiplier = i - 8;
            translateZFace = `${translateRingZ}px`;
            translateYFace = `${translateRingY}px`;
            rotateXFace = `${ringAngle}`;
            rotateYFace = `${72 * angleFaceMultiplier + 36}deg`;
            transformFaceProps = `rotateY(${rotateYFace}) translateZ(${translateZFace}) translateY(${translateYFace}) rotateX(${rotateXFace})`;
          }
          if (i >= 16 && i <= 20) {
            angleFaceMultiplier = i - 18;
            rotateYFace = `${72 * angleFaceMultiplier + 36}deg`;
            translateZFace = `${translateLowerZ}px`;
            translateYFace = `${translateLowerY}px`;
            rotateZFace = '180deg';
            rotateXFace = angle;
            transformFaceProps = `rotateY(${rotateYFace}) translateZ(${translateZFace}) translateY(${translateYFace}) rotateZ(${rotateZFace}) rotateX(${rotateXFace})`;
          }
          return (
            <StyledDiceFace
              key={i}
              faceNum={i}
              transformProps={transformFaceProps}
            />
          );
        })}
      </StyledDice>
    </StyledDiceContainer>
  );
};

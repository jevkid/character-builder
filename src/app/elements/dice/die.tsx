import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { getRandomInt } from '../../../helpers/randomise';

const containerWidth = 165;
const containerHeight = containerWidth;
const faceWidth = containerWidth * 0.5;
const faceHeight = faceWidth * 0.86;
const opacity = 0.75;
const color = `rgba(81, 66, 96, ${opacity})`;

const transitionDuration = '0.5s';
const animationDuration = '3s';

const angle = 53;
const ringAngle = -11;
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
  30% { transform: rotateX(120deg) rotateY(240deg) rotateZ(0deg) }
  50% { transform: rotateX(240deg) rotateY(480deg) rotateZ(0deg) }
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
  const [currentFace, setCurrentFace] = React.useState(1);
  const animationDuration = 2000;
  let transformProps = '';

  const randomFace = () => {
    const face = getRandomInt(20, 1);
    setCurrentFace(face === currentFace ? randomFace() : face);
    return face;
  };

  const handleDiceRoll = () => {
    const dice = document.getElementById('dice');
    if (document && dice) {
      dice.classList.add('rolling');
      const timer = setTimeout(() => {
        setCurrentFace(randomFace());
      }, animationDuration);
      return () => clearTimeout(timer);
    }
  };

  if (currentFace >= 1 && currentFace <= 5) {
    const angleMultiplier = currentFace - 1;
    transformProps = `rotateX(-53deg) rotateY(${72 * angleMultiplier}deg);`;
  }

  if (currentFace >= 6 && currentFace <= 10) {
    const angleMultiplier = currentFace - 6;
    transformProps = `rotateX(11deg) rotateZ(180deg) rotateY(${
      72 * angleMultiplier
    }deg);`;
  }

  if (currentFace >= 11 && currentFace <= 15) {
    const angleMultiplier = currentFace - 8;
    const sideAngle = 72;
    const sideAngleVar = 72 / 2;
    transformProps = `rotateX(11deg) rotateY(${
      -sideAngle * angleMultiplier - sideAngleVar
    }deg);`;
  }

  if (currentFace >= 16 && currentFace <= 20) {
    const angleMultiplier = currentFace - 15;
    transformProps = `rotateX(127deg) rotateY(${-72 * angleMultiplier}deg);`;
  }

  return (
    <StyledDiceContainer>
      <StyledDice
        id="dice"
        faceNum={currentFace}
        transformProps={transformProps}
        onClick={() => handleDiceRoll()}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => {
          let transformFaceProps;
          if (i >= 1 && i <= 5) {
            const angleFaceMultiplier = i - 1;
            transformFaceProps = `rotateY(${
              -72 * angleFaceMultiplier
            }deg) translateZ(${translateZ}px) translateY(${translateY}px) rotateX(${angle}deg)`;
          }
          if (i >= 6 && i <= 10) {
            const angleFaceMultiplier = i - 11;
            transformFaceProps = `rotateY(${
              -72 * angleFaceMultiplier
            }deg) translateZ(${translateRingZ}px) translateY(${translateRingY}px) rotateZ(180deg) rotateX(${ringAngle}deg)`;
          }
          if (i >= 11 && i <= 15) {
            const angleFaceMultiplier = i - 8;
            transformFaceProps = `rotateY(${
              72 * angleFaceMultiplier + 36
            }deg) translateZ(${translateRingZ}px) translateY(${translateRingY}px) rotateX(${ringAngle}deg)`;
          }
          if (i >= 16 && i <= 20) {
            const angleFaceMultiplier = i - 18;
            transformFaceProps = `rotateY(${
              72 * angleFaceMultiplier + 36
            }deg) translateZ(${translateLowerZ}px) translateY(${translateLowerY}px) rotateZ(180deg) rotateX(${angle}deg)`;
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

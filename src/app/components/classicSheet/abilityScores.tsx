import * as React from 'react';
import styled from 'styled-components';
import { useGetCharacterData } from '../../../store/selectors/characterBuilder';
import { BackdropAttribute } from '../svgs/backdropAttribute';
import { Attribute } from '../svgs/attribute';

// Ability Score Styles
const StyledAttributeContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 750px;
  justify-content: center;
`;

const StyledBackdropAttribute = styled(BackdropAttribute)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const StyledAttribute = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 4px 0;
`;

const StyledAttributeTitle = styled.h5`
  position: absolute;
  z-index: 200;
  top: 8px;
  font-size: 12px;
`;

const StyledAttributeText = styled.p`
  position: absolute;
  z-index: 200;
  bottom: 40px;
  font-size: 24px;
`;

const StyledAttributeSVG = styled(Attribute)`
  position: relative;
  z-index: 100;
  padding: 4px 0;
`;

export const AbilityScores: React.FC = () => {
  const characterData = useGetCharacterData();
  const abilityScores = characterData?.abilityScores;
  return (
    <StyledAttributeContainer>
      <StyledBackdropAttribute height={750} width={100} />
      <StyledAttribute>
        <StyledAttributeTitle>Strength</StyledAttributeTitle>
        <StyledAttributeText>{abilityScores?.strength}</StyledAttributeText>
        <StyledAttributeSVG width={100} height={100} />
      </StyledAttribute>
      <StyledAttribute>
        <StyledAttributeTitle>Dexterity</StyledAttributeTitle>
        <StyledAttributeText>{abilityScores?.dexterity}</StyledAttributeText>
        <StyledAttributeSVG width={100} height={100} />
      </StyledAttribute>
      <StyledAttribute>
        <StyledAttributeTitle>Constitution</StyledAttributeTitle>
        <StyledAttributeText>{abilityScores?.constitution}</StyledAttributeText>
        <StyledAttributeSVG width={100} height={100} />
      </StyledAttribute>
      <StyledAttribute>
        <StyledAttributeTitle>Intelligence</StyledAttributeTitle>
        <StyledAttributeText>{abilityScores?.intelligence}</StyledAttributeText>
        <StyledAttributeSVG width={100} height={100} />
      </StyledAttribute>
      <StyledAttribute>
        <StyledAttributeTitle>Wisdom</StyledAttributeTitle>
        <StyledAttributeText>{abilityScores?.wisdom}</StyledAttributeText>
        <StyledAttributeSVG width={100} height={100} />
      </StyledAttribute>
      <StyledAttribute>
        <StyledAttributeTitle>Charisma</StyledAttributeTitle>
        <StyledAttributeText>{abilityScores?.charisma}</StyledAttributeText>
        <StyledAttributeSVG width={100} height={100} />
      </StyledAttribute>
    </StyledAttributeContainer>
  );
};

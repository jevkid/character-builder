import * as React from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../../store';
import { useGetCharacterData } from '../../../store/selectors/characterBuilder';
import { characterBuilderActions } from '../../../store/slices/characterBuilder';
import { Header } from '../svgs/header';
import { Inspiration } from '../svgs/inspiration';
import { BackdropHeaderLarge } from '../svgs/backdropHeaderLarge';
import { AbilityScores } from './abilityScores';
import { ProficiencyBonus } from '../svgs/proficiencyBonus';
import { SavingThrows } from '../svgs/savingThrows';
import { Skills } from '../svgs/skills';

// General styles
const StyledBackgroundSheet = styled.div`
  display: flex;
  flex-direction: column;
  width: 750px;
  height: 950px;
  background-color: #ffffff;
  padding: 12px;
  @media only screen and (max-width: 700px) {
    width: 500px;
  }
  @media only screen and (min-width: 426px) and (max-width: 700px) {
    width: 325px;
  }
`;

const StyledCol = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const StyledRow = styled.div`
  display: flex;
`;

// Header styles
const StyledHeader = styled.div`
  display: flex;
  position: relative;
`;

const StyledHeaderSVG = styled(Header)`
  z-index: 100;
  position: relative;
  @media only screen and (max-width: 700px) {
    width: 400px;
  }
`;

const StyledBackdropHeaderLarge = styled(BackdropHeaderLarge)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  @media only screen and (max-width: 700px) {
    width: 400px;
  }
`;

const StyledNameContainer = styled.div`
  display: flex;
  width: 280px;
  position: absolute;
  z-index: 200;
  top: 55px;
  left: 30px;
`;

const StyledName = styled.h3`
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  font-size: 26px;
  margin-top: -1px;
  &.longName {
    font-size: 18px;
    line-height: 18px;
    margin: 1px;
  }
`;

export interface CharacterSheetProps {
  isSuccessPage?: boolean;
}

export const PaperSheet: React.FC<CharacterSheetProps> = (props) => {
  const characterData = useGetCharacterData();
  const dispatch = useAppDispatch();
  const details = characterData?.details;

  React.useEffect(() => {
    if (!characterData) {
      dispatch(characterBuilderActions.getCharacter());
    }
    console.log(characterData);
  }, [characterData]);

  React.useEffect(() => {
    const nameContainer = document.getElementById('character-name');
    if (nameContainer) {
      const nameHeight = nameContainer.offsetHeight;
      if (nameHeight > 40) {
        nameContainer.classList.add('longName');
      }
    }
  }, []);

  return (
    <StyledBackgroundSheet>
      <StyledHeader>
        <StyledBackdropHeaderLarge width={750} height={150} />
        <StyledHeaderSVG width={750} height={125} />
        <StyledNameContainer>
          <StyledName id="character-name">{details?.name}</StyledName>
        </StyledNameContainer>
      </StyledHeader>
      {/* Ability scores, inspiration, proficiency bonus, saving throws, skills, passive wisdom (perception), othe rproficiencies and languages */}
      <StyledCol>
        <StyledRow>
          <AbilityScores />
          <StyledCol>
            <Inspiration width={200} height={50} />
            <ProficiencyBonus width={200} height={60} />
            <SavingThrows width={200} height={175} />
            <Skills width={200} height={450} />
          </StyledCol>
        </StyledRow>
        <StyledCol></StyledCol>
      </StyledCol>
      {/* Armour class, initiative, speed, current hit points, temporary hit points, hit dice, death saves, attacks and spellcasting, equipment */}
      <StyledCol></StyledCol>
      {/* personality traits, ideals, bonds, flaws, features and traits */}
      <StyledCol></StyledCol>
    </StyledBackgroundSheet>
  );
};

import * as React from 'react';
import { useFormikContext } from 'formik';
import styled from 'styled-components';
import { FormInputs, GenericComponentProps } from '../../types';
import {
  StyledNumberInput,
  StyledFieldContainer,
  StyledLabel,
  StyledContainer,
  StyledStepsHeader,
  StyledStepsSubheader,
  StyledTextButton,
  StyledStepContainer,
  StyledButtonContainer,
  StyledStepButton,
} from '../styles';
import { getRandomInt } from '../../helpers/randomise';

export const MIN_SCORE = 5;
export const MAX_SCORE = 18;

const StyledScoresContainer = styled.div`
  display: flex;
  margin-top: 32px;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const AbilityScores: React.FC<GenericComponentProps> = (props) => {
  const { values, setFieldValue } = useFormikContext<FormInputs>();
  const { handleStepForward, handleStepBack } = props;
  const strength = values.abilityScores?.strength;
  const dexterity = values.abilityScores?.dexterity;
  const constitution = values.abilityScores?.constitution;
  const intelligence = values.abilityScores?.intelligence;
  const wisdom = values.abilityScores?.wisdom;
  const charisma = values.abilityScores?.charisma;

  const handleRandomScores = () => {
    const randomStrength = getRandomInt(MAX_SCORE, MIN_SCORE);
    setFieldValue('abilityScores.strength', randomStrength);

    const randomDexterity = getRandomInt(MAX_SCORE, MIN_SCORE);
    setFieldValue('abilityScores.dexterity', randomDexterity);

    const randomConstitution = getRandomInt(MAX_SCORE, MIN_SCORE);
    setFieldValue('abilityScores.constitution', randomConstitution);

    const randomIntelligence = getRandomInt(MAX_SCORE, MIN_SCORE);
    setFieldValue('abilityScores.intelligence', randomIntelligence);

    const randomWisdom = getRandomInt(MAX_SCORE, MIN_SCORE);
    setFieldValue('abilityScores.wisdom', randomWisdom);

    const randomCharisma = getRandomInt(MAX_SCORE, MIN_SCORE);
    setFieldValue('abilityScores.charisma', randomCharisma);
  };

  return (
    <StyledStepContainer>
      <StyledContainer>
        <StyledStepsHeader>Step Three: Ability Scores</StyledStepsHeader>
        <StyledStepsSubheader>
          Enter your ability scores,{' '}
          <StyledTextButton type="button" onClick={() => handleRandomScores()}>
            randomise
          </StyledTextButton>
          , or{' '}
          <StyledTextButton type="button" onClick={() => handleRandomScores()}>
            roll for them
          </StyledTextButton>
          .
        </StyledStepsSubheader>
        <StyledScoresContainer>
          <StyledFieldContainer>
            <StyledLabel>Strength</StyledLabel>
            <StyledNumberInput
              value={strength}
              type="number"
              name="abilityScores.strength"
            />
          </StyledFieldContainer>

          <StyledFieldContainer>
            <StyledLabel>Dexterity</StyledLabel>
            <StyledNumberInput
              value={dexterity}
              type="number"
              name="abilityScores.dexterity"
            />
          </StyledFieldContainer>

          <StyledFieldContainer>
            <StyledLabel>Constitution</StyledLabel>
            <StyledNumberInput
              value={constitution}
              type="number"
              name="abilityScores.constitution"
            />
          </StyledFieldContainer>

          <StyledFieldContainer>
            <StyledLabel>Intelligence</StyledLabel>
            <StyledNumberInput
              value={intelligence}
              type="number"
              name="abilityScores.intelligence"
            />
          </StyledFieldContainer>

          <StyledFieldContainer>
            <StyledLabel>Wisdom</StyledLabel>
            <StyledNumberInput
              value={wisdom}
              type="number"
              name="abilityScores.wisdom"
            />
          </StyledFieldContainer>
          <StyledFieldContainer>
            <StyledLabel>Charisma</StyledLabel>
            <StyledNumberInput
              value={charisma}
              type="number"
              name="abilityScores.charisma"
            />
          </StyledFieldContainer>
        </StyledScoresContainer>
        <StyledButtonContainer>
          <StyledStepButton type="button" onClick={handleStepBack}>
            &#8592; Previous: Class
          </StyledStepButton>
          <StyledStepButton
            type="button"
            onClick={handleStepForward}
            disabled={
              !strength ||
              !charisma ||
              !intelligence ||
              !wisdom ||
              !dexterity ||
              !constitution
            }
          >
            Next: Background &#8594;
          </StyledStepButton>
        </StyledButtonContainer>
      </StyledContainer>
    </StyledStepContainer>
  );
};

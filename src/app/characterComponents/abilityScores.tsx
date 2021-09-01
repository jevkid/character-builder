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
  const { values } = useFormikContext<FormInputs>();
  const strength = values.abilityScores?.strength;
  const dexterity = values.abilityScores?.dexterity;
  const constitution = values.abilityScores?.constitution;
  const intelligence = values.abilityScores?.intelligence;
  const wisdom = values.abilityScores?.wisdom;
  const charisma = values.abilityScores?.charisma;

  const handleRandomScores = () => {
    const randomStrength = getRandomInt(MAX_SCORE, MIN_SCORE);
    props.setFieldValue('abilityScores.strength', randomStrength);

    const randomDexterity = getRandomInt(MAX_SCORE, MIN_SCORE);
    props.setFieldValue('abilityScores.dexterity', randomDexterity);

    const randomConstitution = getRandomInt(MAX_SCORE, MIN_SCORE);
    props.setFieldValue('abilityScores.constitution', randomConstitution);

    const randomIntelligence = getRandomInt(MAX_SCORE, MIN_SCORE);
    props.setFieldValue('abilityScores.intelligence', randomIntelligence);

    const randomWisdom = getRandomInt(MAX_SCORE, MIN_SCORE);
    props.setFieldValue('abilityScores.wisdom', randomWisdom);

    const randomCharisma = getRandomInt(MAX_SCORE, MIN_SCORE);
    props.setFieldValue('abilityScores.charisma', randomCharisma);
  };

  return (
    <StyledStepContainer>
      <StyledContainer>
        <StyledStepsHeader>Step Three: Ability Scores</StyledStepsHeader>
        <StyledStepsSubheader>
          Enter your ability scores,{' '}
          <StyledTextButton onClick={() => handleRandomScores()}>
            randomise
          </StyledTextButton>
          , or{' '}
          <StyledTextButton onClick={() => handleRandomScores()}>
            roll for them
          </StyledTextButton>
          .
        </StyledStepsSubheader>
        <StyledScoresContainer>
          <StyledFieldContainer>
            <StyledLabel>Strength</StyledLabel>
            <StyledNumberInput
              defaultValue={strength}
              type="number"
              component="input"
              name="abilityScores.strength"
            />
          </StyledFieldContainer>

          <StyledFieldContainer>
            <StyledLabel>Dexterity</StyledLabel>
            <StyledNumberInput
              defaultValue={dexterity}
              component="input"
              type="number"
              name="abilityScores.dexterity"
            />
          </StyledFieldContainer>

          <StyledFieldContainer>
            <StyledLabel>Constitution</StyledLabel>
            <StyledNumberInput
              defaultValue={constitution}
              type="number"
              component="input"
              name="abilityScores.constitution"
            />
          </StyledFieldContainer>

          <StyledFieldContainer>
            <StyledLabel>Intelligence</StyledLabel>
            <StyledNumberInput
              defaultValue={intelligence}
              type="number"
              component="input"
              name="abilityScores.intelligence"
            />
          </StyledFieldContainer>

          <StyledFieldContainer>
            <StyledLabel>Wisdom</StyledLabel>
            <StyledNumberInput
              defaultValue={wisdom}
              type="number"
              component="input"
              name="abilityScores.wisdom"
            />
          </StyledFieldContainer>
          <StyledFieldContainer>
            <StyledLabel>Charisma</StyledLabel>
            <StyledNumberInput
              defaultValue={charisma}
              type="number"
              component="input"
              name="abilityScores.charisma"
            />
          </StyledFieldContainer>
        </StyledScoresContainer>
        <StyledButtonContainer>
          <StyledStepButton onClick={props.handleStepBack}>
            &#8592; Previous: Class
          </StyledStepButton>
          <StyledStepButton
            onClick={props.handleStepForward}
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

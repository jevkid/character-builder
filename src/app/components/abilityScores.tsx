import * as React from 'react';
import styled from 'styled-components';
import { DeepMap, FieldError, UseFormRegister } from 'react-hook-form';
import { FormInputs } from '../../types';
import {
  APP_BORDER_RADIUS,
  StyledContainer,
  StyledStepsHeader,
  StyledStepsSubheader,
  StyledRandomiseButton,
  StyledStepContainer,
  StyledButtonContainer,
  StyledStepButton,
} from '../styles';
import { getRandomInt } from '../../helpers/randomise';

interface AbilityScoresProps {
  register: UseFormRegister<FormInputs>;
  errors: DeepMap<FormInputs, FieldError>;
  handleStepForward: () => void;
  handleStepBack: () => void;
}

export const MIN_SCORE = 5;
export const MAX_SCORE = 18;

const StyledScoresContainer = styled.div`
  display: flex;
  margin-top: 32px;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const StyledInput = styled.input`
  width: 40px;
  height: 25px;
  border-radius: ${APP_BORDER_RADIUS};
  border: 1px solid threedface;
`;

const StyledLabel = styled.label`
  padding: 0 12px;
`;

const StyledFieldContainer = styled.fieldset`
  display: flex;
  align-items: center;
  margin: 0 8px;
  border-style: solid;
  border-radius: ${APP_BORDER_RADIUS};
  @media only screen and (max-width: 480px) {
    margin: 8px 0;
    justify-content: space-between;
    max-width: 185px;
  }
`;

export const AbilityScores: React.FC<AbilityScoresProps> = (props) => {
  const [strength, setStrength] = React.useState<number | undefined>(undefined);
  const [dexterity, setDexterity] = React.useState<number | undefined>(
    undefined
  );
  const [constitution, setConstitution] = React.useState<number | undefined>(
    undefined
  );
  const [intelligence, setIntelligence] = React.useState<number | undefined>(
    undefined
  );
  const [wisdom, setWisdom] = React.useState<number | undefined>(undefined);
  const [charisma, setCharisma] = React.useState<number | undefined>(undefined);

  const handleRandomScores = () => {
    setStrength(getRandomInt(MAX_SCORE, MIN_SCORE));
    setDexterity(getRandomInt(MAX_SCORE, MIN_SCORE));
    setConstitution(getRandomInt(MAX_SCORE, MIN_SCORE));
    setIntelligence(getRandomInt(MAX_SCORE, MIN_SCORE));
    setWisdom(getRandomInt(MAX_SCORE, MIN_SCORE));
    setCharisma(getRandomInt(MAX_SCORE, MIN_SCORE));
  };

  const handleScoreUpdate = (score: string, fieldName: string) => {
    const scoreAsNumber = parseInt(score, 10);
    switch (fieldName) {
      case 'strength':
        return setStrength(scoreAsNumber);
      case 'dexterity':
        return setDexterity(scoreAsNumber);
      case 'constitution':
        return setConstitution(scoreAsNumber);
      case 'intelligence':
        return setIntelligence(scoreAsNumber);
      case 'wisdom':
        return setWisdom(scoreAsNumber);
      case 'charisma':
        return setCharisma(scoreAsNumber);
      default:
        return false;
    }
  };

  return (
    <StyledStepContainer>
      <StyledContainer>
        <StyledStepsHeader>Step Three: Ability Scores</StyledStepsHeader>
        <StyledStepsSubheader>
          Enter your ability scores or{' '}
          <StyledRandomiseButton onClick={() => handleRandomScores()}>
            randomise
          </StyledRandomiseButton>{' '}
          them.
        </StyledStepsSubheader>
        <StyledScoresContainer>
          <StyledFieldContainer>
            <StyledLabel>Strength</StyledLabel>
            <StyledInput
              value={strength}
              {...props.register('abilityScores.strength')}
              onChange={(e) => {
                handleScoreUpdate(e.target.value, 'strength');
              }}
            />
            {props.errors.abilityScores?.strength && (
              <span>This field is required</span>
            )}
          </StyledFieldContainer>

          <StyledFieldContainer>
            <StyledLabel>Dexterity</StyledLabel>
            <StyledInput
              value={dexterity}
              {...props.register('abilityScores.dexterity')}
              onChange={(e) => {
                handleScoreUpdate(e.target.value, 'dexterity');
              }}
            />
            {props.errors.abilityScores?.dexterity && (
              <span>This field is required</span>
            )}
          </StyledFieldContainer>

          <StyledFieldContainer>
            <StyledLabel>Constitution</StyledLabel>
            <StyledInput
              value={constitution}
              {...props.register('abilityScores.constitution')}
              onChange={(e) => {
                handleScoreUpdate(e.target.value, 'constitution');
              }}
            />
            {props.errors.abilityScores?.constitution && (
              <span>This field is required</span>
            )}
          </StyledFieldContainer>

          <StyledFieldContainer>
            <StyledLabel>Intelligence</StyledLabel>
            <StyledInput
              value={intelligence}
              {...props.register('abilityScores.intelligence')}
              onChange={(e) => {
                handleScoreUpdate(e.target.value, 'intelligence');
              }}
            />
            {props.errors.abilityScores?.intelligence && (
              <span>This field is required</span>
            )}
          </StyledFieldContainer>

          <StyledFieldContainer>
            <StyledLabel>Wisdom</StyledLabel>
            <StyledInput
              value={wisdom}
              {...props.register('abilityScores.wisdom')}
              onChange={(e) => {
                handleScoreUpdate(e.target.value, 'wisdom');
              }}
            />
            {props.errors.abilityScores?.wisdom && (
              <span>This field is required</span>
            )}
          </StyledFieldContainer>

          <StyledFieldContainer>
            <StyledLabel>Charisma</StyledLabel>
            <StyledInput
              value={charisma}
              {...props.register('abilityScores.charisma')}
              onChange={(e) => {
                handleScoreUpdate(e.target.value, 'charisma');
              }}
            />
            {props.errors.abilityScores?.charisma && (
              <span>This field is required</span>
            )}
          </StyledFieldContainer>
        </StyledScoresContainer>
        <StyledButtonContainer>
          <StyledStepButton onClick={props.handleStepBack}>
            &#8592; Previous: Class
          </StyledStepButton>
          <StyledStepButton onClick={props.handleStepForward}>
            Next: Background &#8594;
          </StyledStepButton>
        </StyledButtonContainer>
      </StyledContainer>
    </StyledStepContainer>
  );
};
import * as React from 'react';
import styled from 'styled-components';
import { GenericComponentProps } from '../../types';
import {
  StyledInput,
  StyledFieldContainer,
  StyledLabel,
  StyledContainer,
  StyledStepsHeader,
  StyledStepsSubheader,
  StyledRandomiseButton,
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
    const randomStrength = getRandomInt(MAX_SCORE, MIN_SCORE);
    setStrength(randomStrength);
    props.setFieldValue('abilityScores.strength', randomStrength);

    const randomDexterity = getRandomInt(MAX_SCORE, MIN_SCORE);
    setDexterity(randomDexterity);
    props.setFieldValue('abilityScores.dexterity', randomDexterity);

    const randomConstitution = getRandomInt(MAX_SCORE, MIN_SCORE);
    setConstitution(randomConstitution);
    props.setFieldValue('abilityScores.constitution', randomConstitution);

    const randomIntelligence = getRandomInt(MAX_SCORE, MIN_SCORE);
    setIntelligence(randomIntelligence);
    props.setFieldValue('abilityScores.intelligence', randomIntelligence);

    const randomWisdom = getRandomInt(MAX_SCORE, MIN_SCORE);
    setWisdom(randomWisdom);
    props.setFieldValue('abilityScores.wisdom', randomWisdom);

    const randomCharisma = getRandomInt(MAX_SCORE, MIN_SCORE);
    setCharisma(randomCharisma);
    props.setFieldValue('abilityScores.charisma', randomCharisma);
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
              defaultValue={strength}
              type="number"
              {...props.register('abilityScores.strength')}
              onChange={(e) => {
                handleScoreUpdate(e.target.value, 'strength');
              }}
            />
            {props.errors.abilityScores?.strength && (
              <span>Please select a</span>
            )}
          </StyledFieldContainer>

          <StyledFieldContainer>
            <StyledLabel>Dexterity</StyledLabel>
            <StyledInput
              defaultValue={dexterity}
              type="number"
              {...props.register('abilityScores.dexterity')}
              onChange={(e) => {
                handleScoreUpdate(e.target.value, 'dexterity');
              }}
            />
            {props.errors.abilityScores?.dexterity && (
              <span>Please select a</span>
            )}
          </StyledFieldContainer>

          <StyledFieldContainer>
            <StyledLabel>Constitution</StyledLabel>
            <StyledInput
              defaultValue={constitution}
              type="number"
              {...props.register('abilityScores.constitution')}
              onChange={(e) => {
                handleScoreUpdate(e.target.value, 'constitution');
              }}
            />
            {props.errors.abilityScores?.constitution && (
              <span>Please select a</span>
            )}
          </StyledFieldContainer>

          <StyledFieldContainer>
            <StyledLabel>Intelligence</StyledLabel>
            <StyledInput
              defaultValue={intelligence}
              type="number"
              {...props.register('abilityScores.intelligence')}
              onChange={(e) => {
                handleScoreUpdate(e.target.value, 'intelligence');
              }}
            />
            {props.errors.abilityScores?.intelligence && (
              <span>Please select a</span>
            )}
          </StyledFieldContainer>

          <StyledFieldContainer>
            <StyledLabel>Wisdom</StyledLabel>
            <StyledInput
              defaultValue={wisdom}
              type="number"
              {...props.register('abilityScores.wisdom')}
              onChange={(e) => {
                handleScoreUpdate(e.target.value, 'wisdom');
              }}
            />
            {props.errors.abilityScores?.wisdom && <span>Please select a</span>}
          </StyledFieldContainer>

          <StyledFieldContainer>
            <StyledLabel>Charisma</StyledLabel>
            <StyledInput
              defaultValue={charisma}
              type="number"
              {...props.register('abilityScores.charisma')}
              onChange={(e) => {
                handleScoreUpdate(e.target.value, 'charisma');
              }}
            />
            {props.errors.abilityScores?.charisma && (
              <span>Please select a</span>
            )}
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

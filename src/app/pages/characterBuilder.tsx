import * as React from 'react';
import { Formik, Form } from 'formik';
import styled from 'styled-components';
import { TEXT_COLOR_PRIMARY, TEXT_COLOR_SECONDARY } from '../styles';
import { Race } from '../components/race';
import { Class } from '../components/class';
import { ClassEnum, FormInputs, RaceEnum } from '../../types';
import { AbilityScores } from '../components/abilityScores';
import { Background } from '../components/background';

const StyledCharacterBuilderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  color: ${TEXT_COLOR_PRIMARY};
  margin-top: 32px;
`;

const StyledCharacterBuilderTitle = styled.h1`
  text-align: center;
`;

const StyledCharacterBuilderTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StyledStepsContainer = styled.div`
  margin-top: 32px;
`;

const StyledRandomiseButton = styled.a`
  font-size: inherit;
  color: ${TEXT_COLOR_SECONDARY};
  &:hover {
    cursor: pointer;
    color: ${TEXT_COLOR_PRIMARY};
  }
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const StyledP = styled.p`
  margin: 12px 0;
`;

const StyledSelectedOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const initialValues: FormInputs = {
  race: '',
  subRace: '',
  class: '',
  subClass: '',
};

export const CharacterBuilder: React.FC = () => {
  const [stepNum, setStepNum] = React.useState(1);
  return (
    <StyledCharacterBuilderContainer>
      <StyledCharacterBuilderTitleContainer>
        <StyledCharacterBuilderTitle>
          Character builder
        </StyledCharacterBuilderTitle>
        <StyledP>
          Build your character step by step or completely{' '}
          <StyledRandomiseButton>randomise</StyledRandomiseButton>.
        </StyledP>
      </StyledCharacterBuilderTitleContainer>
      <Formik
        initialValues={initialValues}
        onSubmit={(values: FormInputs) => console.log(values)}
      >
        {({ setFieldValue, values, errors }) => (
          <>
            <StyledSelectedOptions>
              {values.race !== '' && (
                <span>
                  <strong>Race</strong>: {RaceEnum[values.race]}
                </span>
              )}
              {values.class !== '' && (
                <span>
                  | <strong>Class</strong>: {ClassEnum[values.class]}
                </span>
              )}
            </StyledSelectedOptions>
            <StyledSelectedOptions>
              {values.abilityScores?.strength && (
                <span>
                  <strong>STR</strong>: {values.abilityScores.strength}
                </span>
              )}
              {values.abilityScores?.dexterity && (
                <span>
                  <strong>DEX</strong>: {values.abilityScores.dexterity}
                </span>
              )}
              {values.abilityScores?.constitution && (
                <span>
                  <strong>CON</strong>: {values.abilityScores.constitution}
                </span>
              )}
              {values.abilityScores?.intelligence && (
                <span>
                  <strong>INT</strong>: {values.abilityScores.intelligence}
                </span>
              )}
              {values.abilityScores?.wisdom && (
                <span>
                  <strong>WIS</strong>: {values.abilityScores.wisdom}
                </span>
              )}
              {values.abilityScores?.charisma && (
                <span>
                  <strong>CHA</strong>: {values.abilityScores.charisma}
                </span>
              )}
            </StyledSelectedOptions>
            <StyledStepsContainer>
              <StyledForm>
                {stepNum === 1 && (
                  <Race
                    handleStepForward={() => setStepNum(stepNum + 1)}
                    handleStepBack={() => setStepNum(stepNum - 1)}
                    setFieldValue={setFieldValue}
                  />
                )}
                {stepNum === 2 && (
                  <Class
                    handleStepForward={() => setStepNum(stepNum + 1)}
                    handleStepBack={() => setStepNum(stepNum - 1)}
                    setFieldValue={setFieldValue}
                  />
                )}
                {stepNum === 3 && (
                  <AbilityScores
                    handleStepForward={() => setStepNum(stepNum + 1)}
                    handleStepBack={() => setStepNum(stepNum - 1)}
                    setFieldValue={setFieldValue}
                  />
                )}
                {stepNum === 4 && (
                  <Background
                    handleStepForward={() => setStepNum(stepNum + 1)}
                    handleStepBack={() => setStepNum(stepNum - 1)}
                    setFieldValue={setFieldValue}
                  />
                )}
              </StyledForm>
            </StyledStepsContainer>
          </>
        )}
      </Formik>
    </StyledCharacterBuilderContainer>
  );
};

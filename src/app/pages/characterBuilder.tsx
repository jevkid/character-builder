import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';
import { TEXT_COLOR_PRIMARY, TEXT_COLOR_SECONDARY } from '../styles';
import { Race } from '../components/race';
import { Class } from '../components/class';
import {
  AbilityOptions,
  ClassEnum,
  Classes,
  FormInputs,
  RaceEnum,
  Races,
} from '../../types';
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
  margin-bottom: 32px;
`;

const StyledStepsContainer = styled.div``;

const StyledRandomiseButton = styled.a`
  font-size: inherit;
  color: ${TEXT_COLOR_SECONDARY};
  &:hover {
    cursor: pointer;
    color: ${TEXT_COLOR_PRIMARY};
  }
`;

const StyledForm = styled.form`
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

export const CharacterBuilder: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm<FormInputs>({
    defaultValues: {
      race: '',
      class: '',
    },
  });
  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);
  const selectedRace = getValues('race') as Races;
  const selectedClass = getValues('class') as Classes;
  const selectedAbilities = getValues('abilityScores') as AbilityOptions;
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
        <StyledSelectedOptions>
          {selectedRace !== '' && (
            <span>
              <strong>Race</strong>: {RaceEnum[selectedRace]}
            </span>
          )}
          {selectedClass !== '' && (
            <span>
              | <strong>Class</strong>: {ClassEnum[selectedClass]}
            </span>
          )}
        </StyledSelectedOptions>
        <StyledSelectedOptions>
          {selectedAbilities?.strength && (
            <span>
              <strong>STR</strong>: {selectedAbilities.strength}
            </span>
          )}
          {selectedAbilities?.dexterity && (
            <span>
              <strong>DEX</strong>: {selectedAbilities.dexterity}
            </span>
          )}
          {selectedAbilities?.constitution && (
            <span>
              <strong>CON</strong>: {selectedAbilities.constitution}
            </span>
          )}
          {selectedAbilities?.intelligence && (
            <span>
              <strong>INT</strong>: {selectedAbilities.intelligence}
            </span>
          )}
          {selectedAbilities?.wisdom && (
            <span>
              <strong>WIS</strong>: {selectedAbilities.wisdom}
            </span>
          )}
          {selectedAbilities?.charisma && (
            <span>
              <strong>CHA</strong>: {selectedAbilities.charisma}
            </span>
          )}
        </StyledSelectedOptions>
      </StyledCharacterBuilderTitleContainer>
      <StyledStepsContainer>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          {stepNum === 1 && (
            <Race
              register={register}
              errors={errors}
              handleStepForward={() => setStepNum(stepNum + 1)}
              handleStepBack={() => setStepNum(stepNum - 1)}
              setFieldValue={setValue}
              getFieldValue={getValues}
            />
          )}
          {stepNum === 2 && (
            <Class
              register={register}
              errors={errors}
              handleStepForward={() => setStepNum(stepNum + 1)}
              handleStepBack={() => setStepNum(stepNum - 1)}
              setFieldValue={setValue}
              getFieldValue={getValues}
            />
          )}
          {stepNum === 3 && (
            <AbilityScores
              register={register}
              errors={errors}
              handleStepForward={() => setStepNum(stepNum + 1)}
              handleStepBack={() => setStepNum(stepNum - 1)}
              setFieldValue={setValue}
              getFieldValue={getValues}
            />
          )}
          {stepNum === 4 && (
            <Background
              register={register}
              errors={errors}
              handleStepForward={() => setStepNum(stepNum + 1)}
              handleStepBack={() => setStepNum(stepNum - 1)}
              setFieldValue={setValue}
              getFieldValue={getValues}
            />
          )}
        </StyledForm>
      </StyledStepsContainer>
    </StyledCharacterBuilderContainer>
  );
};

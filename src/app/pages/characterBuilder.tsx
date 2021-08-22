import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';
import { TEXT_COLOR_PRIMARY, TEXT_COLOR_SECONDARY } from '../styles';
import { Race } from '../components/race';
import { Class } from '../components/class';
import { ClassEnum, Classes, RaceEnum, Races } from '../../types';

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

interface FormInputs {
  race: string;
  subRace: string;
  class: string;
  subClass: string;
}

export const CharacterBuilder: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormInputs>({
    defaultValues: {
      race: '',
      class: '',
    },
  });
  const selectedRace = getValues('race') as Races;
  const selectedClass = getValues('class') as Classes;
  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);
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
          {selectedRace !== '' && `Race: ${RaceEnum[selectedRace]}`}{' '}
          {selectedClass !== '' && `| Class: ${ClassEnum[selectedClass]}`}
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
            />
          )}
          {stepNum === 2 && (
            <Class
              register={register}
              errors={errors}
              handleStepForward={() => setStepNum(stepNum + 1)}
              handleStepBack={() => setStepNum(stepNum - 1)}
            />
          )}
          {/* Set ability scores */}
          {/* Select a background */}
        </StyledForm>
      </StyledStepsContainer>
    </StyledCharacterBuilderContainer>
  );
};

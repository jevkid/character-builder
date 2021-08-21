import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';
import { TEXT_COLOR_PRIMARY, TEXT_COLOR_SECONDARY } from '../styles';
import { Race } from '../components/race';
import { Class } from '../components/class';

const StyledCharacterBuilderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${TEXT_COLOR_PRIMARY};
`;

const StyledCharacterBuilderTitle = styled.h1`
  text-align: center;
`;

const StyledCharacterBuilderTitleContainer = styled.div`
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
  align-items: center;
`;

const StyledP = styled.p`
  margin: 12px 0;
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
  } = useForm<FormInputs>({
    defaultValues: {
      race: '',
      subRace: '',
      class: '',
      subClass: '',
    },
  });
  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);

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
      <StyledStepsContainer>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Race register={register} errors={errors} />
          <Class register={register} errors={errors} />
          {/* Set ability scores */}
          {/* Select a background */}
        </StyledForm>
      </StyledStepsContainer>
    </StyledCharacterBuilderContainer>
  );
};

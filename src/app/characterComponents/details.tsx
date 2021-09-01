import * as React from 'react';
import { nameByRace } from 'fantasy-name-generator';
import { useFormikContext } from 'formik';
import styled from 'styled-components';
import { FormInputs, GenericComponentProps } from '../../types';
import {
  StyledInput,
  StyledFieldContainer,
  StyledContainer,
  StyledStepContainer,
  StyledButtonContainer,
  StyledStepButton,
  StyledStepsHeader,
  StyledStepsSubheader,
  StyledTextButton,
  StyledSelect,
} from '../styles';

const StyledFieldColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Details: React.FC<GenericComponentProps> = (props) => {
  const { values } = useFormikContext<FormInputs>();
  const selectedName = values.details?.name;
  const selectedAge = values.details?.age;
  const selectedGender = values.details?.gender;
  const handleGenerator = () => {
    // Possible race options for generator: demon, dragon, drow, dwarf, elf, gnome, goblin, half-demon, halfling, high elf, human, ogre, orc
    switch (values.race) {
      case 'elf' || 'half-elf':
        return props.setFieldValue('details.name', nameByRace('elf'));
      case 'dragonborn':
        return props.setFieldValue('details.name', nameByRace('dragon'));
      case 'dwarf':
        return props.setFieldValue('details.name', nameByRace('dwarf'));
      case 'gnome':
        return props.setFieldValue('details.name', nameByRace('gnome'));
      case 'half-orc':
        return props.setFieldValue('details.name', nameByRace('orc'));
      case 'halfling':
        return props.setFieldValue('details.name', nameByRace('halfling'));
      case 'human':
        return props.setFieldValue('details.name', nameByRace('human'));
      case 'tiefling':
        return props.setFieldValue('details.name', nameByRace('half-demon'));
      default:
        return props.setFieldValue('details.name', nameByRace('elf'));
    }
  };

  const handleGender = (value: string) => {
    props.setFieldValue('details.gender', value);
  };

  return (
    <StyledStepContainer>
      <StyledContainer>
        <StyledStepsHeader>Final step: Details</StyledStepsHeader>
        <StyledFieldColumn>
          <StyledFieldContainer hideBorder>
            <StyledStepsSubheader>Name:</StyledStepsSubheader>
            <StyledInput name="details.name" value={selectedName} />
          </StyledFieldContainer>
          <p>
            (you can enter a name or{' '}
            <StyledTextButton role="button" onClick={() => handleGenerator()}>
              generate
            </StyledTextButton>{' '}
            one)
          </p>

          <StyledFieldContainer hideBorder>
            <StyledStepsSubheader>Age:</StyledStepsSubheader>
            <StyledInput name="details.age" value={selectedAge} />
          </StyledFieldContainer>

          <StyledFieldContainer hideBorder>
            <StyledStepsSubheader>Gender</StyledStepsSubheader>
            <StyledSelect
              as="select"
              value={selectedGender}
              name="details.gender"
              onChange={(e: any) => {
                handleGender(e.target.value);
              }}
            >
              <option value="male">Male</option>
              <option value="Female">Female</option>
              <option value="nonbinary">Nonbinary</option>
              <option value="None">None</option>
              <option value="other">Other</option>
            </StyledSelect>
            {values.details?.gender === 'other' && (
              <StyledInput name="details.gender" />
            )}
          </StyledFieldContainer>
        </StyledFieldColumn>
        <StyledButtonContainer>
          <StyledStepButton onClick={props.handleStepBack}>
            &#8592; Previous: Background
          </StyledStepButton>
          <StyledStepButton type="submit">Submit</StyledStepButton>
        </StyledButtonContainer>
      </StyledContainer>
    </StyledStepContainer>
  );
};

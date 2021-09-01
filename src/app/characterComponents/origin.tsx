import * as React from 'react';
import { useFormikContext } from 'formik';
import styled from 'styled-components';
import { StyledStepsSubheader, StyledSection } from '../styles';
import {
  FormInputs,
  SimpleComponentProps,
  AlignmentEnum,
  BackgroundEnum,
} from '../../types';
import { useBackgroundGeneral } from '../../store/selectors/common';
import { RadioGroup, RadioInput } from '../components/formElements/radioGroup';

const StyledOriginContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

export const Origins: React.FC<SimpleComponentProps> = (props) => {
  const { values } = useFormikContext<FormInputs>();
  const selectedBackground = values.background?.general?.background;
  const selectedAlignment = values.background?.general?.alignment;
  const generalDetails = useBackgroundGeneral();

  const handleChange = (field: string, value: string) => {
    props.setFieldValue(field, value);
  };

  return (
    <StyledOriginContainer>
      <StyledSection>
        <StyledStepsSubheader>
          Background: {selectedBackground && BackgroundEnum[selectedBackground]}{' '}
        </StyledStepsSubheader>
        <RadioGroup>
          {generalDetails?.background.map((item) => (
            <RadioInput
              label={item.name}
              name="background.general.background"
              value={item.index}
              checked={item.index === values.background?.general.background}
              onChange={() =>
                handleChange('background.general.background', item.index)
              }
            />
          ))}
        </RadioGroup>
      </StyledSection>
      <StyledSection>
        <StyledStepsSubheader>
          Alignment: {selectedAlignment && AlignmentEnum[selectedAlignment]}
        </StyledStepsSubheader>
        <RadioGroup>
          {generalDetails?.alignment.map((race) => (
            <RadioInput
              label={race.name}
              name="background.general.alignment"
              value={race.index}
              checked={race.index === values.background?.general.alignment}
              onChange={() =>
                handleChange('background.general.alignment', race.index)
              }
            />
          ))}
        </RadioGroup>
      </StyledSection>
      {/* Siblings */}
      {/* Birthplace */}
    </StyledOriginContainer>
  );
};

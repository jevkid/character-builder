import * as React from 'react';
import { useFormikContext } from 'formik';
import styled from 'styled-components';
import { StyledStepsSubheader, StyledSection } from '../styles';
import { FormInputs, SimpleComponentProps } from '../../types';
import { useBackgroundGeneral } from '../../store/selectors/common';
import { RadioGroup, RadioInput } from '../elements/formElements/radioGroup';

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

  return (
    <StyledOriginContainer>
      <StyledSection>
        <StyledStepsSubheader>
          Background: {selectedBackground}{' '}
        </StyledStepsSubheader>
        <RadioGroup>
          {generalDetails?.background.map((item) => (
            <RadioInput
              label={item.name}
              name="background.general.background"
              value={item.index}
            />
          ))}
        </RadioGroup>
      </StyledSection>
      <StyledSection>
        <StyledStepsSubheader>
          Alignment: {selectedAlignment}
        </StyledStepsSubheader>
        <RadioGroup>
          {generalDetails?.alignment.map((race) => (
            <RadioInput
              label={race.name}
              name="background.general.alignment"
              value={race.index}
            />
          ))}
        </RadioGroup>
      </StyledSection>
      {/* Siblings */}
      {/* Birthplace */}
    </StyledOriginContainer>
  );
};

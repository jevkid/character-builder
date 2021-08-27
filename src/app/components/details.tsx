import * as React from 'react';
import { GenericComponentProps } from '../../types';
import {
  StyledInput,
  StyledFieldContainer,
  StyledLabel,
  StyledContainer,
  StyledStepContainer,
  StyledButtonContainer,
  StyledStepButton,
} from '../styles';

export const Details: React.FC<GenericComponentProps> = (props) => {
  return (
    <StyledStepContainer>
      <StyledContainer>
        <StyledFieldContainer hideBorder>
          <StyledLabel>Name:</StyledLabel>
          <StyledInput name="details.name" />
        </StyledFieldContainer>
        <StyledFieldContainer hideBorder>
          <StyledLabel>Age:</StyledLabel>
          <StyledInput name="details.age" />
        </StyledFieldContainer>
        <StyledFieldContainer hideBorder>
          <StyledLabel>Gender:</StyledLabel>
          <StyledInput name="details.gender" />
        </StyledFieldContainer>
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

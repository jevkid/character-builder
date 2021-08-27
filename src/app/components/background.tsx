import * as React from 'react';
import { useFormikContext } from 'formik';
import styled from 'styled-components';
import {
  StyledContainer,
  StyledRadio,
  StyledStepsHeader,
  StyledStepsSubheader,
  StyledRandomiseButton,
  StyledStepContainer,
  StyledButtonContainer,
  StyledStepButton,
  StyledLabel,
  // StyledRadioGroup,
} from '../styles';
import { GenericComponentProps } from '../../types';

const StyledRadioContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

export const StyledRadioGroup = styled.fieldset`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 0;
  align-items: flex-start;
`;

export const Background: React.FC<GenericComponentProps> = (props) => {
  const parentsKnowledge = 'changeme';
  const handleRandomBackground = () => {
    // do something random
  };

  return (
    <StyledStepContainer>
      <StyledContainer>
        <StyledStepsHeader>Step Four: Background</StyledStepsHeader>
        <StyledStepsSubheader>
          Build as much of a background as you'd like, or completely{' '}
          <StyledRandomiseButton onClick={() => handleRandomBackground()}>
            randomise
          </StyledRandomiseButton>{' '}
          it.
        </StyledStepsSubheader>
        {/* Parents */}
        <StyledStepsSubheader>
          <strong>Parents</strong>
        </StyledStepsSubheader>
        <StyledRadioGroup>
          <StyledRadioContainer>
            <StyledLabel>Known</StyledLabel>
            <StyledRadio
              type="radio"
              value="known"
              name="background.parents.knowledge"
            />
          </StyledRadioContainer>
          <StyledRadioContainer>
            <StyledLabel>Unknown</StyledLabel>
            <StyledRadio
              type="radio"
              value="unknown"
              name="background.parents.knowledge"
            />
          </StyledRadioContainer>
        </StyledRadioGroup>
        {/* Birthplace */}
        {/* Siblings */}
        <StyledButtonContainer>
          <StyledStepButton onClick={props.handleStepBack}>
            &#8592; Previous: Ability scores
          </StyledStepButton>
          <StyledStepButton onClick={props.handleStepForward}>
            Next: ? &#8594;
          </StyledStepButton>
        </StyledButtonContainer>
      </StyledContainer>
    </StyledStepContainer>
  );
};

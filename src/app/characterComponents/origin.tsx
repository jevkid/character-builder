import * as React from 'react';
import { useFormikContext } from 'formik';
import styled from 'styled-components';
import { StyledStepsSubheader, StyledSection } from '../styles';
import { FormInputs, AlignmentEnum, BackgroundEnum } from '../../types';
import {
  useAllAlignments,
  useBackgroundGeneral,
} from '../../store/selectors/common';
import { RadioGroup, RadioInput } from '../components/formElements/radioGroup';

const StyledOriginContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

export const Origins: React.FC = () => {
  const { values, setFieldValue } = useFormikContext<FormInputs>();
  const selectedBackground = values.background?.general?.origin;
  const selectedAlignment = values.background?.general?.alignment;
  const generalDetails = useBackgroundGeneral();
  const alignments = useAllAlignments();

  return (
    <StyledOriginContainer>
      <StyledSection>
        <StyledStepsSubheader>
          Background: {selectedBackground && BackgroundEnum[selectedBackground]}{' '}
        </StyledStepsSubheader>
        <RadioGroup>
          {generalDetails?.background.map((item) => (
            <RadioInput
              key={item.index}
              label={item.name}
              name="background.general.origin"
              value={item.index}
              checked={item.index === values.background?.general?.origin}
              onChange={() =>
                setFieldValue('background.general.origin', item.index)
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
          {alignments &&
            alignments.results.map((alignment) => (
              <RadioInput
                key={alignment.index}
                label={alignment.name}
                name="background.general.alignment"
                value={alignment.index}
                checked={
                  alignment.index === values.background?.general?.alignment
                }
                onChange={() =>
                  setFieldValue('background.general.alignment', alignment.index)
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

import * as React from 'react';
import { useFormikContext } from 'formik';
import styled from 'styled-components';
import { StyledStepsSubheader, StyledSection } from '../styles';
import { APIReference, FormInputs, SimpleComponentProps } from '../../types';
import { useBackgroundParents } from '../../store/selectors/common';
import { RadioGroup, RadioInput } from '../components/formElements/radioGroup';

const StyledParentsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Parents: React.FC<SimpleComponentProps> = (props) => {
  const { values } = useFormikContext<FormInputs>();
  const selectedRace = values.race;
  const parentsKnown = values.background?.parents?.knowledge;
  const parentDetails = useBackgroundParents();
  const [parentsRaceOptions, setParentsRaceOptions] = React.useState<
    APIReference[]
  >([]);

  const handleParentsKnowledge = (index: string) => {
    props.setFieldValue('background.parents.knowledge', index);
  };

  const handleParentsRace = (index: string) => {
    props.setFieldValue('background.parents.race', index);
  };

  React.useEffect(() => {
    if (parentsKnown === 'known' && parentDetails?.race[selectedRace]?.race) {
      setParentsRaceOptions(parentDetails.race[selectedRace].race);
    }
  }, [parentDetails?.race, selectedRace, parentsKnown]);

  return (
    <StyledParentsContainer>
      <StyledSection>
        <StyledStepsSubheader>Knowledge of parents</StyledStepsSubheader>
        <RadioGroup>
          {parentDetails?.knowledge.map((item) => (
            <RadioInput
              label={item.name}
              name="background.parents.knowledge"
              value={item.index}
              onChange={() => {
                handleParentsKnowledge(item.index);
              }}
            />
          ))}
        </RadioGroup>
      </StyledSection>
      {parentsKnown === 'known' &&
        parentDetails?.race[selectedRace]?.race &&
        parentDetails?.race[selectedRace]?.race.length > 0 && (
          <StyledSection>
            <StyledStepsSubheader>Parents' race</StyledStepsSubheader>
            <RadioGroup>
              {parentsRaceOptions.map((race) => (
                <RadioInput
                  label={race.name}
                  name="background.parents.race"
                  value={race.index}
                  onChange={() => {
                    handleParentsRace(race.index);
                  }}
                />
              ))}
            </RadioGroup>
          </StyledSection>
        )}
      {/* Siblings */}
      {/* Birthplace */}
    </StyledParentsContainer>
  );
};

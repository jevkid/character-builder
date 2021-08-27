import * as React from 'react';
import { useFormikContext } from 'formik';
import styled from 'styled-components';
import {
  StyledContainer,
  StyledStepsHeader,
  StyledStepsSubheader,
  StyledRandomiseButton,
  StyledStepContainer,
  StyledButtonContainer,
  StyledStepButton,
  StyledLabel,
  StyledSelect,
} from '../styles';
import { APIReference, FormInputs, GenericComponentProps } from '../../types';
import { useAppDispatch } from '../../helpers/hooks';
import { commonActions } from '../../store/slices/common';
import {
  useAllBackgrounds,
  useBackgroundParents,
} from '../../store/selectors/common';

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Background: React.FC<GenericComponentProps> = (props) => {
  const dispatch = useAppDispatch();
  const { values } = useFormikContext<FormInputs>();
  const selectedRace = values.race;
  const parentsKnown = values.background?.parents.knowledge;
  const backgroundDetails = useAllBackgrounds();
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
    dispatch(commonActions.getAllBackgrounds());
  }, [dispatch]);

  React.useEffect(() => {
    if (parentsKnown === 'known' && parentDetails?.race[selectedRace]?.race) {
      setParentsRaceOptions(parentDetails.race[selectedRace].race);
    }
  }, [parentDetails?.race, selectedRace, parentsKnown]);

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
        <StyledSelect
          as="select"
          value={parentsKnown}
          name="background.parents.knowledge"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            handleParentsKnowledge(e.target.value);
          }}
        >
          <option value="" selected disabled>
            - - - -
          </option>
          {parentDetails?.knowledge.map((item) => (
            <option value={item.index} key={item.index}>
              {item.name}
            </option>
          ))}
        </StyledSelect>
        {parentsKnown === 'known' &&
          parentDetails?.race[selectedRace]?.race &&
          parentDetails?.race[selectedRace]?.race.length > 0 && (
            <StyledSection>
              <StyledStepsSubheader>
                <strong>Parents' race</strong>
              </StyledStepsSubheader>
              <StyledSelect
                as="select"
                value={parentsKnown}
                name="background.parents.race"
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  handleParentsRace(e.target.value);
                }}
              >
                <option value="" selected disabled>
                  - - - -
                </option>
                {parentsRaceOptions.map((race) => (
                  <option value={race.index} key={race.index}>
                    {race.name}
                  </option>
                ))}
              </StyledSelect>
            </StyledSection>
          )}

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

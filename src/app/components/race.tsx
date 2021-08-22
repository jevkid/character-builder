import * as React from 'react';
import styled from 'styled-components';
import { DeepMap, FieldError, UseFormRegister } from 'react-hook-form';
import { useAppDispatch } from '../../helpers/hooks';
import { commonActions } from '../../store/slices/common';
import { useAllRaces, useDetailedRace } from '../../store/selectors/common';
import { TEXT_COLOR_PRIMARY, TEXT_COLOR_SECONDARY } from '../styles';
import { handleRandomise } from '../../helpers/randomise';
import {
  AbilityMapEnum,
  APIReference,
  CommonModel,
  FormInputs,
} from '../../types';

interface RaceProps {
  register: UseFormRegister<FormInputs>;
  errors: DeepMap<FormInputs, FieldError>;
  handleStepForward: () => void;
  handleStepBack: () => void;
}

const StyledStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StyledStepsHeader = styled.h3`
  text-align: center;
  margin: 12px 0;
`;

const StyledDetailHeader = styled.h4`
  text-align: center;
  margin: 12px 0;
  text-decoration: underline;
  align-self: center;
`;

const StyledStepsSubheader = styled.h5`
  text-align: center;
  margin: 12px 0;
`;

const StyledSelect = styled.select`
  width: 200px;
  height: 30px;
  border-radius: 5px;
  margin: 12px 0;
`;

const StyledRandomiseButton = styled.a`
  font-size: inherit;
  color: ${TEXT_COLOR_SECONDARY};
  &:hover {
    cursor: pointer;
    color: ${TEXT_COLOR_PRIMARY};
  }
`;

const StyledRaceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  max-width: 500px;
  margin-top: 32px;
`;

const StyledP = styled.p``;

const StyledList = styled.ul`
  text-align: left;
  margin-top: 4px;
`;

const StyledListItem = styled.li``;

const StyledButtonContainer = styled.div`
  display: flex;
  margin-top: 32px;
`;

const StyledStepButton = styled.button`
  border: 0;
  outline: 0;
  background-color: ${TEXT_COLOR_SECONDARY};
  color: #ffffff;
  border-radius: 5px;
  padding: 12px;
  &:hover {
    cursor: pointer;
  }
`;

export const Race: React.FC<RaceProps> = (props) => {
  const dispatch = useAppDispatch();
  const allRaces = useAllRaces();
  const detailedRace = useDetailedRace();
  const [allSubRaces, setAllSubRaces] = React.useState<
    CommonModel[] | undefined
  >([]);
  const [selectedRace, setSelectedRace] = React.useState<
    APIReference | undefined
  >(undefined);
  const [selectedSubRace, setSelectedSubRace] = React.useState<
    APIReference | undefined
  >(undefined);
  const [displayRaceDetails, setDisplayRaceDetails] = React.useState(false);

  // Need to set this to state so that it is accessible anywhere
  const handleSelectedSubRace = (index: string) => {
    const selectedSubRace = allSubRaces?.filter(
      (subRace) => subRace.index === index
    );
    if (selectedSubRace && selectedSubRace.length > 0) {
      setSelectedSubRace({
        index: selectedSubRace[0].index,
        name: selectedSubRace[0].name,
      });
    }
  };

  const handleRandomRace = () => {
    if (allRaces?.results) {
      const randomRace = handleRandomise(allRaces?.results);
      setSelectedRace({ index: randomRace.index, name: randomRace.name });
      dispatch(commonActions.getRaceDetails({ index: randomRace.index }));
    }
  };

  const handleSelectedRace = (index: string) => {
    const selectedRace = allRaces?.results.filter(
      (race) => race.index === index
    );
    if (selectedRace && selectedRace.length > 0) {
      setSelectedRace({
        index: selectedRace[0].index,
        name: selectedRace[0].name,
      });
      dispatch(commonActions.getRaceDetails({ index: selectedRace[0].index }));
    }
  };

  React.useEffect(() => {
    dispatch(commonActions.getAllRaces());
  }, [dispatch]);

  React.useEffect(() => {
    if (detailedRace?.subraces) {
      setAllSubRaces(detailedRace?.subraces);
      setDisplayRaceDetails(true);
    }
    // from here, we need to get the subraces object from the detailed race response and use that to populate the subraces dropdown
  }, [detailedRace]);

  return (
    <StyledRaceContainer>
      <StyledStep>
        <StyledStepsHeader>Step One: Race</StyledStepsHeader>
        <StyledStepsSubheader>
          Select a race or{' '}
          <StyledRandomiseButton onClick={() => handleRandomRace()}>
            randomise
          </StyledRandomiseButton>{' '}
          it.
        </StyledStepsSubheader>
        <StyledSelect
          value={selectedRace?.index}
          {...props.register('race')}
          onChange={(e) => {
            handleSelectedRace(e.target.value);
          }}
        >
          <option value="" disabled>
            - - - -
          </option>
          {allRaces &&
            allRaces?.results?.map((race) => (
              <option key={race.index} value={race.index}>
                {race.name}
              </option>
            ))}
        </StyledSelect>

        {props.errors.race && <span>This field is required</span>}
        {allSubRaces && allSubRaces.length > 0 && (
          <>
            <StyledStepsSubheader>Select a subrace.</StyledStepsSubheader>
            <StyledSelect
              value={selectedSubRace?.name}
              {...props.register('subRace')}
              onChange={(e) => {
                handleSelectedSubRace(e.target.value);
              }}
            >
              {allSubRaces.map((subRace) => (
                <option key={subRace.index} value={subRace.index}>
                  {subRace.name}
                </option>
              ))}
            </StyledSelect>

            {props.errors.subRace && <span>This field is required</span>}
          </>
        )}
        <StyledButtonContainer>
          <StyledStepButton onClick={props.handleStepForward}>
            Next: Class &#8594;
          </StyledStepButton>
        </StyledButtonContainer>
      </StyledStep>
      {detailedRace && displayRaceDetails && (
        <StyledDetails>
          <StyledDetailHeader>{detailedRace.name}</StyledDetailHeader>
          <StyledP>
            <strong>Ability score increase</strong>:
          </StyledP>
          <StyledList>
            {detailedRace.ability_bonuses.map((bonus) => (
              <StyledListItem key={bonus.ability_score.index}>
                Your {AbilityMapEnum[bonus.ability_score.name]} score increases
                by {bonus.bonus}{' '}
              </StyledListItem>
            ))}
          </StyledList>
          <StyledP>
            <strong>Age</strong>: {detailedRace.age}
          </StyledP>
          <StyledP>
            <strong>Alignment</strong>: {detailedRace.alignment}
          </StyledP>
          <StyledP>
            <strong>Size</strong>: {detailedRace.size} -{' '}
            {detailedRace.size_description}
          </StyledP>
          <StyledP>
            <strong>Speed</strong>: {detailedRace.speed}
          </StyledP>
          {detailedRace.traits.length > 0 && (
            <>
              <StyledP>
                <strong>Traits</strong>:
              </StyledP>
              <StyledList>
                {detailedRace.traits.map((trait) => (
                  <StyledListItem key={trait.index}>
                    {trait.name}
                  </StyledListItem>
                ))}
              </StyledList>
            </>
          )}
          <StyledP>
            <strong>Languages</strong>: {detailedRace.language_desc}
          </StyledP>
          <StyledList>
            {detailedRace.languages.map((language) => (
              <StyledListItem key={language.index}>
                {language.name}
              </StyledListItem>
            ))}
          </StyledList>
          {detailedRace.starting_proficiencies.length > 0 && (
            <>
              <StyledP>
                <strong>Starting proficiences</strong>:
              </StyledP>
              <StyledList>
                {detailedRace.starting_proficiencies.map((item) => (
                  <StyledListItem key={item.index}>{item.name}</StyledListItem>
                ))}
              </StyledList>
            </>
          )}
        </StyledDetails>
      )}
    </StyledRaceContainer>
  );
};

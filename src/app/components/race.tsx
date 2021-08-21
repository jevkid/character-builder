import * as React from 'react';
import styled from 'styled-components';
import { DeepMap, FieldError, UseFormRegister } from 'react-hook-form';
import { useAppDispatch } from '../../helpers/hooks';
import { commonActions } from '../../store/slices/common';
import { useAllRaces, useDetailedRace } from '../../store/selectors/common';
import { TEXT_COLOR_PRIMARY, TEXT_COLOR_SECONDARY } from '../styles';
import { handleRandomise } from '../../helpers/randomise';
import { APIReference, CommonModel, FormInputs } from '../../types';

interface RaceProps {
  register: UseFormRegister<FormInputs>;
  errors: DeepMap<FormInputs, FieldError>;
}

const StyledStep = styled.div`
  text-align: center;
`;

const StyledStepsHeader = styled.h3`
  text-align: center;
  margin: 12px 0;
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
  }, []);

  React.useEffect(() => {
    if (detailedRace?.subraces) {
      setAllSubRaces(detailedRace?.subraces);
    }
    // from here, we need to get the subraces object from the detailed race response and use that to populate the subraces dropdown
  }, [detailedRace]);

  return (
    <>
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
      </StyledStep>
      {allSubRaces && allSubRaces.length > 0 && (
        <StyledStep>
          <StyledStepsSubheader>
            Select a subrace (optional).
          </StyledStepsSubheader>
          <StyledSelect
            value={selectedSubRace?.name}
            {...props.register('subRace')}
            onChange={(e) => {
              handleSelectedSubRace(e.target.value);
            }}
          >
            <option value="" disabled>
              - - - -
            </option>
            {allSubRaces.map((subRace) => (
              <option key={subRace.index} value={subRace.index}>
                {subRace.name}
              </option>
            ))}
          </StyledSelect>

          {props.errors.subRace && <span>This field is required</span>}
        </StyledStep>
      )}
    </>
  );
};

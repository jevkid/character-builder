import * as React from 'react';
import { useFormikContext } from 'formik';
import { useAppDispatch } from '../../helpers/hooks';
import { commonActions } from '../../store/slices/common';
import { useAllRaces, useDetailedRace } from '../../store/selectors/common';
import {
  StyledContainer,
  StyledStepsHeader,
  StyledStepsSubheader,
  StyledSelect,
  StyledTextButton,
  StyledStepContainer,
  StyledP,
  StyledList,
  StyledListItem,
  StyledButtonContainer,
  StyledStepButton,
  StyledSection,
} from '../styles';
import { handleRandomise } from '../../helpers/randomise';
import {
  AbilityMapEnum,
  CommonModel,
  FormInputs,
  GenericComponentProps,
} from '../../types';
import { DropdownContainer } from '../components/dropdownContainer';

export const Race: React.FC<GenericComponentProps> = (props) => {
  const dispatch = useAppDispatch();
  const { values, setFieldValue } = useFormikContext<FormInputs>();
  const { setModalData, handleStepForward } = props;
  const allRaces = useAllRaces();
  const selectedRace = values.race;
  const selectedSubRace = values.subRace;
  const detailedRace = useDetailedRace();
  const [allSubRaces, setAllSubRaces] = React.useState<
    CommonModel[] | undefined
  >([]);
  const [displayRaceDetails, setDisplayRaceDetails] = React.useState(false);

  // Need to set this to state so that it is accessible anywhere
  const handleSelectedSubRace = (index: string) => {
    const selectedSubRace = allSubRaces?.filter(
      (subRace) => subRace.index === index
    );
    if (selectedSubRace && selectedSubRace.length > 0) {
      setFieldValue('subRace', selectedSubRace[0].index);
    }
  };

  const handleRandomRace = () => {
    if (allRaces?.results) {
      const randomRace = handleRandomise(allRaces?.results);
      setFieldValue('race', randomRace.index);
      dispatch(commonActions.getRaceDetails({ index: randomRace.index }));
    }
  };

  const handleSelectedRace = (index: string) => {
    const selectedRace = allRaces?.results.filter(
      (race) => race.index === index
    );
    if (selectedRace && selectedRace.length > 0) {
      setFieldValue('race', selectedRace[0].index);
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
  }, [selectedRace, detailedRace]);

  React.useEffect(() => {
    if (allSubRaces && allSubRaces.length > 0) {
      setFieldValue('subRace', allSubRaces[0].index);
    }
  }, [allSubRaces, setFieldValue]);

  return (
    <StyledStepContainer>
      <StyledContainer>
        <StyledStepsHeader>Step One: Race</StyledStepsHeader>
        <StyledStepsSubheader>
          Select a race or{' '}
          <StyledTextButton type="button" onClick={() => handleRandomRace()}>
            randomise
          </StyledTextButton>{' '}
          it.
        </StyledStepsSubheader>
        <StyledSelect
          as="select"
          value={selectedRace}
          name="race"
          onChange={(e: any) => {
            handleSelectedRace(e.target.value);
          }}
        >
          <option value="" disabled>
            - - - -
          </option>
          {allRaces &&
            allRaces.results?.map((race) => (
              <option key={race.index} value={race.index}>
                {race.name}
              </option>
            ))}
        </StyledSelect>

        {allSubRaces && allSubRaces.length > 0 && (
          <>
            <StyledStepsSubheader>Select a subrace.</StyledStepsSubheader>
            <StyledSelect
              as="select"
              value={selectedSubRace}
              name="subRace"
              onChange={(e: any) => {
                handleSelectedSubRace(e.target.value);
              }}
            >
              {allSubRaces.map((subRace) => (
                <option key={subRace.index} value={subRace.index}>
                  {subRace.name}
                </option>
              ))}
            </StyledSelect>
          </>
        )}
        <StyledButtonContainer>
          <StyledStepButton
            type="button"
            onClick={handleStepForward}
            disabled={!selectedRace}
          >
            Next: Class &#8594;
          </StyledStepButton>
        </StyledButtonContainer>
      </StyledContainer>
      {detailedRace && (
        <DropdownContainer
          title={detailedRace?.name}
          displayContent={displayRaceDetails}
          handleToggle={setDisplayRaceDetails}
        >
          <>
            <StyledSection>
              <StyledP>
                <strong>Ability score increase</strong>:
              </StyledP>
              <StyledList>
                {detailedRace.ability_bonuses.map((bonus) => (
                  <StyledListItem key={bonus.ability_score.index}>
                    Your{' '}
                    <StyledTextButton
                      type="button"
                      onClick={() =>
                        setModalData(bonus.ability_score.url, 'race')
                      }
                    >
                      {AbilityMapEnum[bonus.ability_score.name]}
                    </StyledTextButton>{' '}
                    score increases by {bonus.bonus}{' '}
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
            </StyledSection>
            <StyledSection>
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
                        <StyledTextButton
                          type="button"
                          onClick={() => setModalData(trait.url, 'race')}
                        >
                          {trait.name}
                        </StyledTextButton>
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
                    <StyledTextButton
                      type="button"
                      onClick={() => setModalData(language.url, 'race')}
                    >
                      {language.name}
                    </StyledTextButton>
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
                      <StyledListItem key={item.index}>
                        <StyledTextButton
                          type="button"
                          onClick={() => setModalData(item.url, 'race')}
                        >
                          {item.name}
                        </StyledTextButton>
                      </StyledListItem>
                    ))}
                  </StyledList>
                </>
              )}
              {detailedRace.starting_proficiency_options?.from && (
                <>
                  <StyledP>
                    <strong>Starting equipment choices:</strong>
                  </StyledP>
                  <StyledP>
                    <i>Choose 1:</i>
                  </StyledP>
                  <StyledList>
                    {detailedRace.starting_proficiency_options.from.length >
                      0 &&
                      detailedRace.starting_proficiency_options.from.map(
                        (item) =>
                          item.name && (
                            <StyledListItem key={item.index}>
                              <StyledTextButton
                                type="button"
                                onClick={() => setModalData(item.url, 'race')}
                              >
                                {item.name}
                              </StyledTextButton>
                            </StyledListItem>
                          )
                      )}
                  </StyledList>
                </>
              )}
            </StyledSection>
          </>
        </DropdownContainer>
      )}
    </StyledStepContainer>
  );
};

import * as React from 'react';
import { DeepMap, FieldError, UseFormRegister } from 'react-hook-form';
import { useAppDispatch } from '../../helpers/hooks';
import { commonActions } from '../../store/slices/common';
import { useAllClasses, useDetailedClass } from '../../store/selectors/common';
import {
  StyledContainer,
  StyledStepsHeader,
  StyledDetailHeader,
  StyledStepsSubheader,
  StyledSelect,
  StyledRandomiseButton,
  StyledStepContainer,
  StyledDetails,
  StyledP,
  StyledList,
  StyledListItem,
  StyledButtonContainer,
  StyledStepButton,
  StyledRow,
  StyledColumn,
} from '../styles';
import { handleRandomise } from '../../helpers/randomise';
import { APIReference, CommonModel, FormInputs } from '../../types';

interface ClassProps {
  register: UseFormRegister<FormInputs>;
  errors: DeepMap<FormInputs, FieldError>;
  handleStepForward: () => void;
  handleStepBack: () => void;
}

export const Class: React.FC<ClassProps> = (props) => {
  const dispatch = useAppDispatch();
  const allClasses = useAllClasses();
  const detailedClass = useDetailedClass();
  const [allSubClasses, setAllSubClasses] = React.useState<
    CommonModel[] | undefined
  >([]);
  const [selectedClass, setSelectedClass] = React.useState<
    APIReference | undefined
  >(undefined);
  const [selectedSubClass, setSelectedSubClass] = React.useState<
    APIReference | undefined
  >(undefined);
  const [displayClassDetails, setDisplayClassDetails] = React.useState(false);

  // Need to set this to state so that it is accessible anywhere
  const handleSelectedSubClass = (index: string) => {
    const selectedSubClass = allSubClasses?.filter(
      (subClass) => subClass.index === index
    );
    if (selectedSubClass && selectedSubClass.length > 0) {
      setSelectedSubClass({
        index: selectedSubClass[0].index,
        name: selectedSubClass[0].name,
      });
    }
  };

  const handleRandomClass = () => {
    if (allClasses?.results) {
      const randomClass = handleRandomise(allClasses?.results);
      setSelectedClass({ index: randomClass.index, name: randomClass.name });
      dispatch(commonActions.getClassDetails({ index: randomClass.index }));
    }
  };

  const handleSelectedClass = (index: string) => {
    const selectedClass = allClasses?.results.filter(
      (item) => item.index === index
    );
    if (selectedClass && selectedClass.length > 0) {
      setSelectedClass({
        index: selectedClass[0].index,
        name: selectedClass[0].name,
      });
      dispatch(
        commonActions.getClassDetails({ index: selectedClass[0].index })
      );
    }
  };

  React.useEffect(() => {
    dispatch(commonActions.getAllClasses());
  }, [dispatch]);

  React.useEffect(() => {
    if (detailedClass?.subclasses) {
      setAllSubClasses(detailedClass?.subclasses);
      setDisplayClassDetails(true);
    }
    // from here, we need to get the subClasses object from the detailed class response and use that to populate the subClasses dropdown
  }, [detailedClass]);

  return (
    <StyledStepContainer>
      <StyledContainer>
        <StyledStepsHeader>Step Two: Class</StyledStepsHeader>
        <StyledStepsSubheader>
          Select a class or{' '}
          <StyledRandomiseButton onClick={() => handleRandomClass()}>
            randomise
          </StyledRandomiseButton>{' '}
          it.
        </StyledStepsSubheader>
        <StyledSelect
          value={selectedClass?.index}
          {...props.register('class')}
          onChange={(e) => {
            handleSelectedClass(e.target.value);
          }}
        >
          <option value="" disabled>
            - - - -
          </option>
          {allClasses &&
            allClasses?.results?.map((item) => (
              <option key={item.index} value={item.index}>
                {item.name}
              </option>
            ))}
        </StyledSelect>

        {props.errors.class && <span>This field is required</span>}
        {allSubClasses && allSubClasses.length > 0 && (
          <>
            <StyledStepsSubheader>Select a subclass.</StyledStepsSubheader>
            <StyledSelect
              value={selectedSubClass?.name}
              {...props.register('subClass')}
              onChange={(e) => {
                handleSelectedSubClass(e.target.value);
              }}
            >
              {allSubClasses.map((subClass) => (
                <option key={subClass.index} value={subClass.index}>
                  {subClass.name}
                </option>
              ))}
            </StyledSelect>

            {props.errors.subClass && <span>This field is required</span>}
          </>
        )}
        <StyledButtonContainer>
          <StyledStepButton onClick={props.handleStepBack}>
            &#8592; Previous: Race
          </StyledStepButton>
          <StyledStepButton onClick={props.handleStepForward}>
            Next: Ability scores &#8594;
          </StyledStepButton>
        </StyledButtonContainer>
      </StyledContainer>
      {detailedClass && displayClassDetails && (
        <StyledColumn>
          <StyledDetailHeader>{detailedClass.name}</StyledDetailHeader>
          <StyledRow>
            <StyledDetails>
              <StyledP>
                <strong>Hit points: </strong>
                {detailedClass.hit_die}
              </StyledP>
              {detailedClass.proficiencies.length > 0 && (
                <>
                  <StyledP>
                    <strong>Proficiencies</strong>:
                  </StyledP>
                  <StyledList>
                    {detailedClass.proficiencies.map((proficiency) => (
                      <StyledListItem key={proficiency.index}>
                        {proficiency.name}
                      </StyledListItem>
                    ))}
                  </StyledList>
                </>
              )}
              <StyledP>
                <strong>Proficiency choices:</strong>
              </StyledP>
              {detailedClass.proficiency_choices.length > 0 &&
                detailedClass.proficiency_choices.map((choice) => (
                  <>
                    <StyledP>
                      <i>Choose {choice.choose}:</i>
                    </StyledP>
                    <StyledList>
                      {choice.from.map((item) => (
                        <StyledListItem>{item.name}</StyledListItem>
                      ))}
                    </StyledList>
                  </>
                ))}
            </StyledDetails>
            <StyledDetails>
              {detailedClass.starting_equipment.length > 0 && (
                <>
                  <StyledP>
                    <strong>Starting equipment</strong>:
                  </StyledP>
                  <StyledList>
                    {detailedClass.starting_equipment.map((item) => (
                      <StyledListItem key={item.equipment.index}>
                        {item.equipment.name}
                      </StyledListItem>
                    ))}
                  </StyledList>
                </>
              )}
              <StyledP>
                <strong>Starting equipment choices:</strong>
              </StyledP>
              <StyledP>
                <i>Choose 1:</i>
              </StyledP>
              <StyledList>
                {detailedClass.starting_equipment_options.length > 0 &&
                  detailedClass.starting_equipment_options.map((option) =>
                    option.from.map(
                      (item) =>
                        item?.equipment?.name && (
                          <StyledListItem>
                            {item?.equipment?.name}
                          </StyledListItem>
                        )
                    )
                  )}
              </StyledList>
              {detailedClass.saving_throws.length > 0 && (
                <>
                  <StyledP>
                    <strong>Saving throws</strong>:
                  </StyledP>
                  <StyledList>
                    {detailedClass.saving_throws.map((item) => (
                      <StyledListItem key={item.index}>
                        {item.name}
                      </StyledListItem>
                    ))}
                  </StyledList>
                </>
              )}
            </StyledDetails>
          </StyledRow>
        </StyledColumn>
      )}
    </StyledStepContainer>
  );
};

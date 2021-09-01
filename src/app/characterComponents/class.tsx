import * as React from 'react';
import { useFormikContext } from 'formik';
import { useAppDispatch } from '../../helpers/hooks';
import { commonActions } from '../../store/slices/common';
import { useAllClasses, useDetailedClass } from '../../store/selectors/common';
import {
  StyledContainer,
  StyledStepsHeader,
  StyledSection,
  StyledStepsSubheader,
  StyledSelect,
  StyledTextButton,
  StyledStepContainer,
  StyledP,
  StyledList,
  StyledListItem,
  StyledButtonContainer,
  StyledStepButton,
  StyledRow,
} from '../styles';
import { handleRandomise } from '../../helpers/randomise';
import { CommonModel, FormInputs, GenericComponentProps } from '../../types';
import { DropdownContainer } from '../components/dropdownContainer';

export const Class: React.FC<GenericComponentProps> = (props) => {
  const dispatch = useAppDispatch();
  const allClasses = useAllClasses();
  const { values } = useFormikContext<FormInputs>();
  const selectedClass = values.class;
  const selectedSubClass = values.subClass;
  const detailedClass = useDetailedClass();
  const [allSubClasses, setAllSubClasses] = React.useState<
    CommonModel[] | undefined
  >([]);
  const [displayClassDetails, setDisplayClassDetails] = React.useState(false);

  // Need to set this to state so that it is accessible anywhere
  const handleSelectedSubClass = (index: string) => {
    const selectedSubClass = allSubClasses?.filter(
      (subClass) => subClass.index === index
    );
    if (selectedSubClass && selectedSubClass.length > 0) {
      props.setFieldValue('subClass', selectedSubClass[0].index);
    }
  };

  const handleRandomClass = () => {
    if (allClasses?.results) {
      const randomClass = handleRandomise(allClasses?.results);
      props.setFieldValue('class', randomClass.index);
      dispatch(commonActions.getClassDetails({ index: randomClass.index }));
    }
  };

  const handleSelectedClass = (index: string) => {
    const selectedClass = allClasses?.results.filter(
      (item) => item.index === index
    );
    if (selectedClass && selectedClass.length > 0) {
      props.setFieldValue('class', selectedClass[0].index);
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
          <StyledTextButton role="button" onClick={() => handleRandomClass()}>
            randomise
          </StyledTextButton>{' '}
          it.
        </StyledStepsSubheader>
        <StyledSelect
          as="select"
          value={selectedClass}
          name="class"
          onChange={(e: any) => {
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

        {allSubClasses && allSubClasses.length > 0 && (
          <>
            <StyledStepsSubheader>Select a subclass.</StyledStepsSubheader>
            <StyledSelect
              as="select"
              value={selectedSubClass}
              name="subClass"
              onChange={(e: any) => {
                handleSelectedSubClass(e.target.value);
              }}
            >
              {allSubClasses.map((subClass) => (
                <option key={subClass.index} value={subClass.index}>
                  {subClass.name}
                </option>
              ))}
            </StyledSelect>
          </>
        )}
        <StyledButtonContainer>
          <StyledStepButton onClick={props.handleStepBack}>
            &#8592; Previous: Race
          </StyledStepButton>
          <StyledStepButton
            onClick={props.handleStepForward}
            disabled={!selectedClass}
          >
            Next: Ability scores &#8594;
          </StyledStepButton>
        </StyledButtonContainer>
      </StyledContainer>
      {detailedClass && (
        <DropdownContainer
          title={detailedClass.name}
          handleToggle={setDisplayClassDetails}
          displayContent={displayClassDetails}
        >
          <StyledRow>
            <StyledSection>
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
                        <StyledTextButton
                          onClick={() =>
                            props.setModalData(proficiency.url, 'class')
                          }
                        >
                          {proficiency.name}
                        </StyledTextButton>
                      </StyledListItem>
                    ))}
                  </StyledList>
                </>
              )}
              <StyledP>
                <strong>Proficiency choices:</strong>
              </StyledP>
              {detailedClass.proficiency_choices.length > 0 &&
                detailedClass.proficiency_choices.map((choice, index) => (
                  <div key={`${choice.type}-${index}`}>
                    <StyledP>
                      <i>Choose {choice.choose}:</i>
                    </StyledP>
                    <StyledList>
                      {choice.from.map((item) => (
                        <StyledListItem key={item.index}>
                          <StyledTextButton
                            onClick={() =>
                              props.setModalData(item.url, 'class')
                            }
                          >
                            {item.name}
                          </StyledTextButton>
                        </StyledListItem>
                      ))}
                    </StyledList>
                  </div>
                ))}
            </StyledSection>
            <StyledSection>
              {detailedClass.starting_equipment.length > 0 && (
                <>
                  <StyledP>
                    <strong>Starting equipment</strong>:
                  </StyledP>
                  <StyledList>
                    {detailedClass.starting_equipment.map((item) => (
                      <StyledListItem key={item.equipment.index}>
                        <StyledTextButton
                          onClick={() =>
                            props.setModalData(item.equipment.url, 'class')
                          }
                        >
                          {item.equipment.name}
                        </StyledTextButton>
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
                          <StyledListItem key={item.equipment.index}>
                            <StyledTextButton
                              onClick={() =>
                                props.setModalData(item.equipment.url, 'class')
                              }
                            >
                              {item.equipment.name}
                            </StyledTextButton>
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
                        <StyledTextButton
                          onClick={() => props.setModalData(item.url, 'class')}
                        >
                          {item.name}
                        </StyledTextButton>
                      </StyledListItem>
                    ))}
                  </StyledList>
                </>
              )}
            </StyledSection>
          </StyledRow>
        </DropdownContainer>
      )}
    </StyledStepContainer>
  );
};

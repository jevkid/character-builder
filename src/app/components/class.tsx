import * as React from 'react';
import styled from 'styled-components';
import { DeepMap, FieldError, UseFormRegister } from 'react-hook-form';
import { useAppDispatch } from '../../helpers/hooks';
import { commonActions } from '../../store/slices/common';
import { useAllClasses, useDetailedClass } from '../../store/selectors/common';
import { TEXT_COLOR_PRIMARY, TEXT_COLOR_SECONDARY } from '../styles';
import { handleRandomise } from '../../helpers/randomise';
import { APIReference, CommonModel, FormInputs } from '../../types';

interface ClassProps {
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
  }, []);

  React.useEffect(() => {
    if (detailedClass?.subclasses) {
      setAllSubClasses(detailedClass?.subclasses);
    }
  }, [detailedClass]);

  return (
    <>
      <StyledStep>
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
      </StyledStep>
      {allSubClasses && allSubClasses.length > 0 && (
        <StyledStep>
          <StyledStepsSubheader>
            Select a subclass (optional).
          </StyledStepsSubheader>
          <StyledSelect
            value={selectedSubClass?.name}
            {...props.register('subClass')}
            onChange={(e) => {
              handleSelectedSubClass(e.target.value);
            }}
          >
            <option value="" disabled>
              - - - -
            </option>
            {allSubClasses.map((subClass) => (
              <option key={subClass.index} value={subClass.index}>
                {subClass.name}
              </option>
            ))}
          </StyledSelect>

          {props.errors.subClass && <span>This field is required</span>}
        </StyledStep>
      )}
    </>
  );
};

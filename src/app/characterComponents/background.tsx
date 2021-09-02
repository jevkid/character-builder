import * as React from 'react';
import {
  StyledContainer,
  StyledStepsHeader,
  StyledStepsSubheader,
  StyledTextButton,
  StyledStepContainer,
  StyledButtonContainer,
  StyledStepButton,
} from '../styles';
import { GenericComponentProps } from '../../types';
import { useAppDispatch } from '../../helpers/hooks';
import { commonActions } from '../../store/slices/common';
// import { Parents } from './parents';
import { Origins } from './origin';
import { DropdownContainer } from '../components/dropdownContainer';

export const Background: React.FC<GenericComponentProps> = (props) => {
  const dispatch = useAppDispatch();
  const [displayOrigin, setDisplayOrigin] = React.useState(true);
  // const [displayParents, setDisplayParents] = React.useState(true);
  // const [displayDecisions, setDisplayDecisions] = React.useState(false);
  // const [displayLifeEvents, setDisplayLifeEvents] = React.useState(false);

  React.useEffect(() => {
    dispatch(commonActions.getAllBackgrounds());
  }, [dispatch]);

  const handleRandomBackground = () => {
    // do something random
  };

  return (
    <StyledStepContainer>
      <StyledContainer>
        <StyledStepsHeader>Step Four: Background</StyledStepsHeader>
        <StyledStepsSubheader>
          Build as much of a background as you'd like, or completely{' '}
          <StyledTextButton
            type="button"
            onClick={() => handleRandomBackground()}
          >
            randomise
          </StyledTextButton>{' '}
          it.
        </StyledStepsSubheader>
        {/* <DropdownContainer
          title="Parents"
          displayContent={displayParents}
          handleToggle={setDisplayParents}
        >
          <Parents />
        </DropdownContainer> */}

        <DropdownContainer
          title="Origin"
          displayContent={displayOrigin}
          handleToggle={setDisplayOrigin}
        >
          <Origins />
        </DropdownContainer>

        {/* <DropdownContainer
          title="Personal decisions"
          displayContent={displayDecisions}
          handleToggle={setDisplayDecisions}
        ></DropdownContainer>

        <DropdownContainer
          title="Life events"
          displayContent={displayLifeEvents}
          handleToggle={setDisplayLifeEvents}
        ></DropdownContainer> */}

        <StyledButtonContainer>
          <StyledStepButton type="button" onClick={props.handleStepBack}>
            &#8592; Previous: Ability scores
          </StyledStepButton>
          <StyledStepButton type="button" onClick={props.handleStepForward}>
            Next: Details &#8594;
          </StyledStepButton>
        </StyledButtonContainer>
      </StyledContainer>
    </StyledStepContainer>
  );
};

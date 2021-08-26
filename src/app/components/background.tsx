import * as React from 'react';
import { useAppDispatch } from '../../helpers/hooks';
import { commonActions } from '../../store/slices/common';
import {
  useAllBackgrounds,
  useDetailedBackground,
} from '../../store/selectors/common';
import {
  StyledContainer,
  StyledStepsHeader,
  StyledStepsSubheader,
  StyledSelect,
  StyledRandomiseButton,
  StyledStepContainer,
  StyledButtonContainer,
  StyledStepButton,
} from '../styles';
import { handleRandomise } from '../../helpers/randomise';
import { APIReference, GenericComponentProps } from '../../types';

export const Background: React.FC<GenericComponentProps> = (props) => {
  const dispatch = useAppDispatch();
  const allBackgrounds = useAllBackgrounds();
  const detailedBackground = useDetailedBackground();
  const [selectedBackground, setSelectedBackground] = React.useState<
    APIReference | undefined
  >(undefined);
  const [displayBackgroundDetails, setDisplayBackgroundDetails] =
    React.useState(false);

  const handleRandomBackground = () => {
    if (allBackgrounds?.results) {
      const randomBackground = handleRandomise(allBackgrounds?.results);
      setSelectedBackground({
        index: randomBackground.index,
        name: randomBackground.name,
      });
      dispatch(
        commonActions.getBackgroundDetails({ index: randomBackground.index })
      );
    }
  };

  const handleSelectedBackground = (index: string) => {
    const selectedBackground = allBackgrounds?.results.filter(
      (item) => item.index === index
    );
    if (selectedBackground && selectedBackground.length > 0) {
      setSelectedBackground({
        index: selectedBackground[0].index,
        name: selectedBackground[0].name,
      });
      dispatch(
        commonActions.getBackgroundDetails({
          index: selectedBackground[0].index,
        })
      );
    }
  };

  React.useEffect(() => {
    dispatch(commonActions.getAllBackgrounds());
    console.log('allBackgrounds', allBackgrounds);
  }, [dispatch]);

  return (
    <StyledStepContainer>
      <StyledContainer>
        <StyledStepsHeader>Step Four: Background</StyledStepsHeader>
        <StyledStepsSubheader>
          Select a background or{' '}
          <StyledRandomiseButton onClick={() => handleRandomBackground()}>
            randomise
          </StyledRandomiseButton>{' '}
          it.
        </StyledStepsSubheader>
        <StyledSelect
          value={selectedBackground?.index}
          {...props.register('background')}
          onChange={(e) => {
            handleSelectedBackground(e.target.value);
          }}
        >
          <option value="" disabled>
            - - - -
          </option>
          {allBackgrounds &&
            allBackgrounds?.results?.map((item) => (
              <option key={item.index} value={item.index}>
                {item.name}
              </option>
            ))}
        </StyledSelect>

        {props.errors.class && <span>This field is required</span>}
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

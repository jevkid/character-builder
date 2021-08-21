import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';
import { useAppDispatch } from '../../helpers/hooks';
import { commonActions } from '../../store/slices/common';
import { useAllRaces } from '../../store/selectors/common';
import { TEXT_COLOR_PRIMARY, TEXT_COLOR_SECONDARY } from '../styles';

const StyledCharacterBuilderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${TEXT_COLOR_PRIMARY};
`;

const StyledCharacterBuilderTitle = styled.h1`
  text-align: center;
`;

const StyledCharacterBuilderTitleContainer = styled.div`
  text-align: center;
  margin-bottom: 32px;
`;

const StyledStepsContainer = styled.div``;

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

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledP = styled.p`
  margin: 12px 0;
`;

type Inputs = {
  race: string;
  raceRequired: string;
};

export const CharacterBuilder: React.FC = () => {
  const dispatch = useAppDispatch();
  const [displayRandom, setDisplayRandom] = React.useState(false);
  const allRaces = useAllRaces();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const [selectedRace, setSelectedRace] = React.useState<string>('');

  const getRandomInt = (maxInt: number) => {
    return Math.floor(Math.random() * maxInt);
  };

  const handleRandomise = (arr: Array<any>) => {
    const randomInt = getRandomInt(arr.length);
    return arr[randomInt];
  };

  const handleRandomRace = () => {
    const randomRace = handleRandomise(allRaces);
    setSelectedRace(randomRace.name);
  };

  React.useEffect(() => {
    dispatch(commonActions.getAllRaces());
  }, [dispatch]);

  return (
    <StyledCharacterBuilderContainer>
      <StyledCharacterBuilderTitleContainer>
        <StyledCharacterBuilderTitle>
          Character builder
        </StyledCharacterBuilderTitle>
        <StyledP>
          Build your character step by step or completely{' '}
          <StyledRandomiseButton>randomise</StyledRandomiseButton>.
        </StyledP>
      </StyledCharacterBuilderTitleContainer>
      {!displayRandom ? (
        <StyledStepsContainer>
          <StyledStepsHeader>Step One: Race</StyledStepsHeader>
          <StyledStepsSubheader>
            Select a race or{' '}
            <StyledRandomiseButton onClick={() => handleRandomRace()}>
              randomise
            </StyledRandomiseButton>{' '}
            it.
          </StyledStepsSubheader>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <StyledSelect
              value={selectedRace}
              {...register('race')}
              onChange={(e) => {
                setSelectedRace(e.target.value);
              }}
            >
              <option value="" selected disabled>
                - - - -
              </option>
              {allRaces &&
                allRaces.map((race) => (
                  <option key={race.index}>{race.name}</option>
                ))}
            </StyledSelect>
            {/* errors will return when field validation fails  */}
            {errors.raceRequired && <span>This field is required</span>}
          </StyledForm>
        </StyledStepsContainer>
      ) : (
        <h2>Random</h2>
      )}
    </StyledCharacterBuilderContainer>
  );
};

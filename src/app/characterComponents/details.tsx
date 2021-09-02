import * as React from 'react';
import { nameByRace } from 'fantasy-name-generator';
import { useFormikContext } from 'formik';
import styled from 'styled-components';
import { FormInputs, GenericComponentProps } from '../../types';
import {
  StyledInput,
  StyledFieldContainer,
  StyledContainer,
  StyledStepContainer,
  StyledButtonContainer,
  StyledStepButton,
  StyledStepsHeader,
  StyledStepsSubheader,
  StyledTextButton,
  StyledSelect,
  StyledNumberInput,
  StyledP,
} from '../styles';
import { getRandomInt } from '../../helpers/randomise';

type NameGeneraterAllowedGenders = 'male' | 'female';

const StyledFieldColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Details: React.FC<GenericComponentProps> = (props) => {
  const { values } = useFormikContext<FormInputs>();
  const [showGenerate, setShowGenerate] = React.useState(false);
  const [showGenderGenerate, setShowGenderGenerate] = React.useState(false);
  const selectedName = values.details?.name;
  const selectedAge = values.details?.age;
  const selectedGender = values.details?.gender;
  const [selectedNameRace, setSelectedNameRace] = React.useState('');
  const [selectedNameGender, setSelectedNameGender] = React.useState<
    'male' | 'female' | undefined
  >('male');
  const mappedRaces = [
    {
      index: 'cavePerson',
      name: 'Cave Person',
      reqGender: true,
    },
    {
      index: 'dwarf',
      name: 'Dwarf',
      reqGender: true,
    },
    {
      index: 'halfling',
      name: 'Halfling',
      reqGender: true,
    },
    {
      index: 'gnome',
      name: 'Gnome',
      reqGender: true,
    },
    {
      index: 'elf',
      name: 'Elf',
      reqGender: true,
    },
    {
      index: 'highelf',
      name: 'High Elf',
      reqGender: true,
    },
    {
      index: 'fairy',
      name: 'Fairy',
      reqGender: true,
    },
    {
      index: 'highfairy',
      name: 'High Fairy',
      reqGender: true,
    },
    {
      index: 'darkelf',
      name: 'Dark Elf',
      reqGender: true,
    },
    {
      index: 'drow',
      name: 'Drow',
      reqGender: true,
    },
    {
      index: 'halfdemon',
      name: 'Half Demon',
      reqGender: true,
    },
    {
      index: 'dragon',
      name: 'Dragon',
      reqGender: true,
    },
    {
      index: 'angel',
      name: 'Angel',
      reqGender: true,
    },
    {
      index: 'demon',
      name: 'Demon',
      reqGender: false,
    },
    {
      index: 'human',
      name: 'Human',
      reqGender: false,
    },
    {
      index: 'goblin',
      name: 'Goblin',
      reqGender: false,
    },
    {
      index: 'ogre',
      name: 'Ogre',
      reqGender: false,
    },
    {
      index: 'orc',
      name: 'Orc',
      reqGender: false,
    },
  ];

  const handleMappedRace = (value: string) => {
    const selected = mappedRaces.filter((race) => race.index === value);
    if (selected && selected.length > 0) {
      setSelectedNameRace(selected[0].index);
      setShowGenderGenerate(selected[0].reqGender);
    }
  };

  const handleAllowedGenders = (value: string) => {
    if (value !== 'male' && value !== 'female') {
      const genderArr: NameGeneraterAllowedGenders[] = ['male', 'female'];
      const randomInt = getRandomInt(2);
      setSelectedNameGender(genderArr[randomInt]);
    } else {
      setSelectedNameGender(value);
    }
  };

  const handleGenerator = () => {
    // Possible race options for generator: demon, dragon, drow, dwarf, elf, gnome, goblin, half-demon, halfling, high elf, human, ogre, orc
    props.setFieldValue(
      'details.name',
      nameByRace(selectedNameRace, { gender: selectedNameGender })
    );
  };

  const handleGender = (value: string) => {
    props.setFieldValue('details.gender', value);
  };

  return (
    <StyledStepContainer>
      <StyledContainer>
        <StyledStepsHeader>Final step: Details</StyledStepsHeader>
        <StyledFieldColumn>
          <StyledFieldContainer hideBorder>
            <StyledStepsSubheader isInline>Name:</StyledStepsSubheader>
            <StyledInput name="details.name" />
          </StyledFieldContainer>
          <p>
            (you can enter a name or{' '}
            <StyledTextButton
              type="button"
              onClick={() => setShowGenerate(true)}
            >
              generate
            </StyledTextButton>{' '}
            one)
          </p>
          {showGenerate && (
            <StyledFieldContainer column>
              <StyledP>
                Please select a category in order to generate a name
              </StyledP>
              <StyledSelect
                as="select"
                value={selectedNameRace}
                name="details.gender"
                onChange={(e: any) => {
                  handleMappedRace(e.target.value);
                }}
              >
                <option value="">----</option>
                {mappedRaces.map((race) => (
                  <option key={race.index} value={race.index}>
                    {race.name}
                  </option>
                ))}
              </StyledSelect>
              {showGenderGenerate && (
                <>
                  <StyledP>
                    A gender is required in order to generate a name for this
                    race (sorry!)
                  </StyledP>
                  <StyledSelect
                    as="select"
                    onChange={(e: any) => {
                      handleAllowedGenders(e.target.value);
                    }}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="unknown">
                      I don't want to choose a gender
                    </option>
                  </StyledSelect>
                </>
              )}
              <StyledButtonContainer>
                <StyledTextButton
                  type="button"
                  onClick={() => setShowGenerate(false)}
                >
                  Dismiss
                </StyledTextButton>
                <StyledStepButton
                  type="button"
                  onClick={() => handleGenerator()}
                  disabled={!selectedNameRace}
                >
                  Generate
                </StyledStepButton>
              </StyledButtonContainer>
            </StyledFieldContainer>
          )}

          <StyledFieldContainer hideBorder>
            <StyledStepsSubheader isInline>Age:</StyledStepsSubheader>
            <StyledNumberInput name="details.age" value={selectedAge} />
          </StyledFieldContainer>

          <StyledFieldContainer hideBorder>
            <StyledStepsSubheader isInline>Gender: </StyledStepsSubheader>
            <StyledSelect
              as="select"
              value={selectedGender}
              name="details.gender"
              onChange={(e: any) => {
                handleGender(e.target.value);
              }}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="nonbinary">Nonbinary</option>
              <option value="none">None</option>
              <option value="other">Other</option>
            </StyledSelect>
            {values.details?.gender === 'other' && (
              <StyledInput name="details.gender" />
            )}
          </StyledFieldContainer>
        </StyledFieldColumn>
        <StyledButtonContainer>
          <StyledStepButton type="button" onClick={props.handleStepBack}>
            &#8592; Previous: Background
          </StyledStepButton>
          <StyledStepButton type="submit">Submit</StyledStepButton>
        </StyledButtonContainer>
      </StyledContainer>
    </StyledStepContainer>
  );
};

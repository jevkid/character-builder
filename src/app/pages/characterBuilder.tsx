import * as React from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { TEXT_COLOR_PRIMARY, StyledTextButton } from '../styles';
import { characterBuilderActions } from '../../store/slices/characterBuilder';
import { Race } from '../characterComponents/race';
import { Class } from '../characterComponents/class';
import {
  ClassEnum,
  FormInputs,
  RaceEnum,
  BackgroundEnum,
  AlignmentEnum,
} from '../../types';
import { AbilityScores } from '../characterComponents/abilityScores';
import { Background } from '../characterComponents/background';
import { Details } from '../characterComponents/details';
import { Modal } from '../components/modal';
import { useAppDispatch } from '../../store';

const StyledCharacterBuilderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  color: ${TEXT_COLOR_PRIMARY};
  margin-top: 32px;
`;

const StyledCharacterBuilderTitle = styled.h1`
  text-align: center;
`;

const StyledCharacterBuilderTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StyledStepsContainer = styled.div`
  margin-top: 32px;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const StyledP = styled.p`
  margin: 12px 0;
`;

const StyledSelectedOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledOption = styled.div`
  display: flex;
  align-items: center;
  padding: 0 3px;
  @media only screen and (max-width: 480px) {
    padding: 0;
    flex-direction: column;
  }
`;

const initialValues: FormInputs = {
  race: '',
  subRace: '',
  class: '',
  subClass: '',
  abilityScores: {
    strength: '' as unknown as number,
    wisdom: '' as unknown as number,
    charisma: '' as unknown as number,
    constitution: '' as unknown as number,
    dexterity: '' as unknown as number,
    intelligence: '' as unknown as number,
  },
  details: {
    name: '',
  },
};

export const CharacterBuilder: React.FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [stepNum, setStepNum] = React.useState(1);
  const [displayModal, setDisplayModal] = React.useState(false);
  const [modalApiUrl, setModalApiUrl] = React.useState<string | undefined>(
    undefined
  );
  const [modalType, setModalType] = React.useState<string | undefined>(
    undefined
  );

  const handleApiModal = (apiUrl: string, type: string) => {
    setDisplayModal(true);
    setModalApiUrl(apiUrl);
    setModalType(type);
  };

  const handleSubmit = async (
    form: FormInputs,
    formikHelpers: FormikHelpers<FormInputs>
  ) => {
    return new Promise<void>((resolve, reject) => {
      dispatch(
        characterBuilderActions.saveCharacter({
          character: form,
          resolve,
          reject,
        })
      );
    })
      .then(() => {
        history.push('/character-sheet');
      })
      .catch(() => {
        formikHelpers.setSubmitting(false);
      });
  };

  return (
    <StyledCharacterBuilderContainer>
      <StyledCharacterBuilderTitleContainer>
        <StyledCharacterBuilderTitle>
          Character builder
        </StyledCharacterBuilderTitle>
        <StyledP>Build your character step by step</StyledP>
      </StyledCharacterBuilderTitleContainer>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ setFieldValue, values, errors }) => (
          <>
            <StyledSelectedOptions>
              {values.race !== '' && (
                <span>
                  <strong>Race</strong>:{' '}
                  <StyledTextButton role="button" onClick={() => setStepNum(1)}>
                    {RaceEnum[values.race]}
                  </StyledTextButton>
                </span>
              )}
              {values.class !== '' && (
                <span>
                  | <strong>Class</strong>:{' '}
                  <StyledTextButton role="button" onClick={() => setStepNum(2)}>
                    {ClassEnum[values.class]}
                  </StyledTextButton>
                </span>
              )}
            </StyledSelectedOptions>
            <StyledSelectedOptions>
              {values.abilityScores?.strength && (
                <StyledOption>
                  <span>
                    <strong>STR</strong>:{' '}
                  </span>
                  <StyledTextButton role="button" onClick={() => setStepNum(3)}>
                    {values.abilityScores.strength}
                  </StyledTextButton>
                </StyledOption>
              )}
              {values.abilityScores?.dexterity && (
                <StyledOption>
                  <span>
                    <strong>DEX</strong>:{' '}
                  </span>
                  <StyledTextButton role="button" onClick={() => setStepNum(3)}>
                    {values.abilityScores.dexterity}
                  </StyledTextButton>
                </StyledOption>
              )}
              {values.abilityScores?.constitution && (
                <StyledOption>
                  <span>
                    <strong>CON</strong>:{' '}
                  </span>
                  <StyledTextButton role="button" onClick={() => setStepNum(3)}>
                    {values.abilityScores.constitution}
                  </StyledTextButton>
                </StyledOption>
              )}
              {values.abilityScores?.intelligence && (
                <StyledOption>
                  <span>
                    <strong>INT</strong>:{' '}
                  </span>
                  <StyledTextButton role="button" onClick={() => setStepNum(3)}>
                    {values.abilityScores.intelligence}
                  </StyledTextButton>
                </StyledOption>
              )}
              {values.abilityScores?.wisdom && (
                <StyledOption>
                  <span>
                    <strong>WIS</strong>:{' '}
                  </span>
                  <StyledTextButton role="button" onClick={() => setStepNum(3)}>
                    {values.abilityScores.wisdom}
                  </StyledTextButton>
                </StyledOption>
              )}
              {values.abilityScores?.charisma && (
                <StyledOption>
                  <span>
                    <strong>CHA</strong>:{' '}
                  </span>
                  <StyledTextButton role="button" onClick={() => setStepNum(3)}>
                    {values.abilityScores.charisma}
                  </StyledTextButton>
                </StyledOption>
              )}
            </StyledSelectedOptions>
            <StyledSelectedOptions>
              {values.background?.general?.origin && (
                <span>
                  <strong>Background</strong>:{' '}
                  <StyledTextButton role="button" onClick={() => setStepNum(4)}>
                    {BackgroundEnum[values.background?.general.origin]}
                  </StyledTextButton>
                </span>
              )}
              {values.background?.general?.alignment && (
                <span>
                  <strong>Alignment</strong>:{' '}
                  <StyledTextButton role="button" onClick={() => setStepNum(4)}>
                    {AlignmentEnum[values.background?.general.alignment]}
                  </StyledTextButton>
                </span>
              )}
              {values.details?.name && (
                <span>
                  <strong>Name</strong>:{' '}
                  <StyledTextButton role="button" onClick={() => setStepNum(5)}>
                    {values.details?.name}
                  </StyledTextButton>
                </span>
              )}
            </StyledSelectedOptions>
            <StyledStepsContainer>
              <StyledForm>
                {stepNum === 1 && (
                  <Race
                    handleStepForward={() => setStepNum(stepNum + 1)}
                    handleStepBack={() => setStepNum(stepNum - 1)}
                    setFieldValue={setFieldValue}
                    setModalData={handleApiModal}
                  />
                )}
                {stepNum === 2 && (
                  <Class
                    handleStepForward={() => setStepNum(stepNum + 1)}
                    handleStepBack={() => setStepNum(stepNum - 1)}
                    setFieldValue={setFieldValue}
                    setModalData={handleApiModal}
                  />
                )}
                {stepNum === 3 && (
                  <AbilityScores
                    handleStepForward={() => setStepNum(stepNum + 1)}
                    handleStepBack={() => setStepNum(stepNum - 1)}
                    setFieldValue={setFieldValue}
                    setModalData={handleApiModal}
                  />
                )}
                {stepNum === 4 && (
                  <Background
                    handleStepForward={() => setStepNum(stepNum + 1)}
                    handleStepBack={() => setStepNum(stepNum - 1)}
                    setFieldValue={setFieldValue}
                    setModalData={handleApiModal}
                  />
                )}
                {stepNum === 5 && (
                  <Details
                    handleStepForward={() => setStepNum(stepNum + 1)}
                    handleStepBack={() => setStepNum(stepNum - 1)}
                    setFieldValue={setFieldValue}
                    setModalData={handleApiModal}
                  />
                )}
              </StyledForm>
            </StyledStepsContainer>
          </>
        )}
      </Formik>
      <Modal
        apiUrl={modalApiUrl}
        modalType={modalType}
        displayModal={displayModal}
        closeModal={() => setDisplayModal(false)}
      />
    </StyledCharacterBuilderContainer>
  );
};

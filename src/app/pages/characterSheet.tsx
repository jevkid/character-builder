import * as React from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../store';
import { useGetCharacterData } from '../../store/selectors/characterBuilder';
import { characterBuilderActions } from '../../store/slices/characterBuilder';
import { PaperSheet } from '../components/classicSheet';

const StyledSheetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-top: 32px;
`;

export interface CharacterSheetProps {
  isSuccessPage?: boolean;
}

export const CharacterSheet: React.FC<CharacterSheetProps> = (props) => {
  const characterData = useGetCharacterData();
  const [classicVersion, setClassicVersion] = React.useState(true);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (!characterData) {
      dispatch(characterBuilderActions.getCharacter());
    }
  }, [characterData]);

  return (
    <StyledSheetContainer>
      {classicVersion ? <PaperSheet /> : <></>}
    </StyledSheetContainer>
  );
};

import * as React from 'react';
import { AxiosResponse } from 'axios';
import { BaseAxiosInstance } from '../../../api';
import styled from 'styled-components';
import { StyledP } from '../../styles';
import { RaceModalTypes } from '../../../types';

interface ModalProps {
  apiUrl: string;
}

const StyledContent = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10001;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const RaceContent: React.FC<ModalProps> = (props) => {
  const [apiContent, setApiContent] = React.useState<RaceModalTypes | null>();
  const [additionalApiContent, setAdditionalApiContent] =
    React.useState<RaceModalTypes | null>();

  React.useEffect(() => {
    if (props.apiUrl) {
      setApiContent(null);
      BaseAxiosInstance.get(props.apiUrl)
        .then((success: AxiosResponse) => {
          if (success.data) {
            setApiContent(success.data);
            return success;
          }
        })
        .catch((reason: AxiosResponse) => reason);
    }
  }, [props.apiUrl]);

  React.useEffect(() => {
    if (apiContent?.reference?.url) {
      setAdditionalApiContent(null);
      BaseAxiosInstance.get(apiContent.reference.url)
        .then((success: AxiosResponse) => {
          if (success.data) {
            setAdditionalApiContent(success.data);
            return success;
          }
        })
        .catch((reason: AxiosResponse) => reason);
    }
  }, [apiContent]);

  return (
    <StyledContent>
      {apiContent && (
        <>
          {apiContent.name && (
            <StyledP>
              <strong>{apiContent.name}</strong>
            </StyledP>
          )}
          <br />
          {apiContent.desc && (
            <>
              {typeof apiContent.desc !== 'string' &&
                apiContent.desc.map((desc: string) => (
                  <StyledP>{desc}</StyledP>
                ))}
              {apiContent.desc && typeof apiContent.desc === 'string' && (
                <StyledP>{apiContent.desc}</StyledP>
              )}
              <br />
            </>
          )}
          {apiContent.typical_speakers && (
            <>
              <StyledP>
                <strong>Typical speakers:</strong>
              </StyledP>
              {typeof apiContent.typical_speakers !== 'string' &&
                apiContent.typical_speakers.map((desc: string) => (
                  <StyledP>{desc}</StyledP>
                ))}
              {apiContent.typical_speakers &&
                typeof apiContent.typical_speakers === 'string' && (
                  <StyledP>{apiContent.typical_speakers}</StyledP>
                )}
            </>
          )}
          {additionalApiContent && (
            <>
              {additionalApiContent.category_range && (
                <StyledP>
                  <strong>Category range:</strong>{' '}
                  {additionalApiContent.category_range}
                </StyledP>
              )}
              {additionalApiContent.damage && (
                <StyledP>
                  <strong>Damage:</strong>{' '}
                  {additionalApiContent.damage.damage_dice}
                </StyledP>
              )}
            </>
          )}
        </>
      )}
    </StyledContent>
  );
};

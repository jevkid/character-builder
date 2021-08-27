import * as React from 'react';
import { AxiosResponse } from 'axios';
import { BaseAxiosInstance } from '../../api';
import styled from 'styled-components';
import { APP_BORDER_RADIUS, TEXT_COLOR_SECONDARY, StyledP } from '../styles';
import { ApiContentModal } from '../../types';

interface ModalProps {
  displayModal: boolean;
  closeModal: () => void;
  apiUrl?: string;
}

const StyledModal = styled.div`
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

const StyledModalClose = styled.button`
  display: flex;
  align-items: center;
  height: 30px;
  width: 30px;
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${TEXT_COLOR_SECONDARY};
  border-radius: 50%;
  border: none;
  outline: 0;
  color: #fff;

  transform: translate(50%, -50%);
  @media only screen and (max-width: 480px) {
    transform: translate(-50%, 100%);
  }
  &:hover {
    cursor: pointer;
  }
`;

const StyledModalContent = styled.div`
  position: absolute;
  width: fit-content;
  height: fit-content;
  padding: 32px;
  border-radius: ${APP_BORDER_RADIUS};
  max-width: 500px;
  max-height: 500px;
  background-color: #fff;
`;

const StyledCrossIcon = styled.i`
  position: absolute;
  width: 15px;
  height: 15px;
  color: #fff;
  &:hover {
    opacity: 1;
  }

  &:before,
  &:after {
    position: absolute;
    content: ' ';
    height: 15px;
    width: 2px;
    background-color: #fff;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

export const Modal: React.FC<ModalProps> = (props) => {
  const [apiContent, setApiContent] = React.useState<any>();
  const [additionalApiContent, setAdditionalApiContent] = React.useState<any>();

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
        .then((success: AxiosResponse<ApiContentModal>) => {
          if (success.data) {
            setAdditionalApiContent(success.data);
            return success;
          }
        })
        .catch((reason: AxiosResponse) => reason);
    }
    console.log(additionalApiContent);
  }, [apiContent]);

  const escapeKeyCallEvent = (e: KeyboardEvent) => {
    if (e.key === 'Esc' || e.key === 'Escape') {
      props.closeModal();
    }
  };

  React.useEffect(() => {
    document.addEventListener('keyup', escapeKeyCallEvent);

    return () => {
      document.removeEventListener('keyup', escapeKeyCallEvent);
    };
  }, []);

  React.useEffect(() => {
    if (props.displayModal) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  });

  if (props.displayModal) {
    return (
      <StyledModal>
        <StyledModalContent>
          <StyledModalClose onClick={props.closeModal}>
            <StyledCrossIcon />
          </StyledModalClose>
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
          {props.children}
        </StyledModalContent>
      </StyledModal>
    );
  }
  return null;
};

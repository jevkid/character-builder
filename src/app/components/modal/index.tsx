import * as React from 'react';
import styled from 'styled-components';
import { APP_BORDER_RADIUS, TEXT_COLOR_SECONDARY } from '../../styles';
import { ClassContent } from './classContent';
import { RaceContent } from './raceContent';

interface ModalProps {
  displayModal: boolean;
  modalType?: string;
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
    // eslint-disable-next-line
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
          {props.modalType === 'race' && props.apiUrl && (
            <RaceContent apiUrl={props.apiUrl} />
          )}
          {props.modalType === 'class' && props.apiUrl && (
            <ClassContent apiUrl={props.apiUrl} />
          )}
          {props.children}
        </StyledModalContent>
      </StyledModal>
    );
  }
  return null;
};

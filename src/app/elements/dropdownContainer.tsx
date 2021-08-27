import * as React from 'react';
import styled from 'styled-components';
import { StyledStepsSubheader } from '../styles';

interface DropdownContainerProps {
  title: string;
  displayContent: boolean;
  handleToggle: (display: boolean) => void;
}

const StyledContainer = styled.div`
  width: 700px;
`;

const StyledSectionHeader = styled.div`
  display: flex;
  padding: 8px 24px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid threedface;
  &:hover {
    cursor: pointer;
  }
`;

const StyledSectionContent = styled.div`
  padding: 8px 24px;
`;

const StyledArrow = styled.i<{ direction: 'up' | 'down' }>`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  height: 5px;
  width: 5px;
  transform: ${({ direction }) =>
    direction === 'up' ? 'rotate(-135deg)' : 'rotate(45deg);'};
  -webkit-transform: ${({ direction }) =>
    direction === 'up' ? 'rotate(-135deg)' : 'rotate(45deg)'};
`;

export const DropdownContainer: React.FC<DropdownContainerProps> = (props) => {
  return (
    <StyledContainer>
      <StyledSectionHeader
        onClick={() => props.handleToggle(!props.displayContent)}
      >
        <StyledStepsSubheader>
          <strong>{props.title}</strong>
        </StyledStepsSubheader>
        <StyledArrow direction={props.displayContent ? 'up' : 'down'} />
      </StyledSectionHeader>
      <StyledSectionContent>
        {props.displayContent && props.children}
      </StyledSectionContent>
    </StyledContainer>
  );
};

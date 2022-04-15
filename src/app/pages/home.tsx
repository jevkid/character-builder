import styled from 'styled-components';
import {
  APP_BACKGROUND_COLOUR_PRIMARY,
  APP_BORDER_RADIUS,
  TEXT_COLOR_PRIMARY,
} from '../styles';

const StyledTitlePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const StyledTitle = styled.h1`
  font-size: 75px;
  font-family: 'Tenali Ramakrishna';
  color: ${TEXT_COLOR_PRIMARY};
`;

const StyledBeginButton = styled.a`
  padding: 12px;
  border-radius: ${APP_BORDER_RADIUS};
  background-color: ${TEXT_COLOR_PRIMARY};
  color: ${APP_BACKGROUND_COLOUR_PRIMARY};
  text-decoration: none;
`;

export const Home = () => (
  <StyledTitlePage>
    <StyledTitle>Randomi5E</StyledTitle>
    <StyledBeginButton href="/builder">begin</StyledBeginButton>
  </StyledTitlePage>
);

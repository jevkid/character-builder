import styled from 'styled-components';

export const APP_BORDER_RADIUS = '5px';
export const APP_PADDING = '12px 48px';
export const APP_BACKGROUND_COLOUR_PRIMARY = '#eaeaea';
export const APP_FONT_FAMILY = 'Tenali Ramakrishna';

export const TEXT_COLOR_PRIMARY = '#2b2b2b';
export const TEXT_COLOR_PRIMARY_DISABLED = '#7d7289';
export const TEXT_COLOR_PRIMARY_HOVER = '#362c3f';
export const TEXT_COLOR_SECONDARY = '#514260';

export const StyledAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${APP_BACKGROUND_COLOUR_PRIMARY};
  padding: ${APP_PADDING};
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const StyledStepsHeader = styled.h3`
  text-align: center;
  margin: 12px 0;
`;

export const StyledDetailHeader = styled.h4`
  text-align: center;
  margin: 12px 0;
  text-decoration: underline;
  align-self: center;
`;

export const StyledStepsSubheader = styled.h5`
  text-align: center;
  margin: 12px 0;
`;

export const StyledSelect = styled.select`
  width: 200px;
  height: 30px;
  border-radius: ${APP_BORDER_RADIUS};
  margin: 12px 0;
`;

export const StyledRandomiseButton = styled.a`
  font-size: inherit;
  color: ${TEXT_COLOR_SECONDARY};
  &:hover {
    cursor: pointer;
    color: ${TEXT_COLOR_PRIMARY};
  }
`;

export const StyledStepContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  max-width: 500px;
  margin-top: 32px;
`;

export const StyledP = styled.p``;

export const StyledList = styled.ul`
  text-align: left;
  margin-top: 4px;
`;

export const StyledListItem = styled.li``;

export const StyledButtonContainer = styled.div`
  display: flex;
  margin-top: 32px;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const StyledStepButton = styled.button`
  border: 0;
  outline: 0;
  background-color: ${TEXT_COLOR_SECONDARY};
  color: #ffffff;
  border-radius: ${APP_BORDER_RADIUS};
  padding: 12px;
  margin: 0 8px;
  &:hover {
    cursor: pointer;
  }
  @media only screen and (max-width: 480px) {
    margin-bottom: 8px;
    width: 100%;
  }
  &:hover {
    background-color: ${TEXT_COLOR_PRIMARY_HOVER};
  }
  &:disabled {
    background-color: ${TEXT_COLOR_PRIMARY_DISABLED};
    &:hover {
      background-color: ${TEXT_COLOR_PRIMARY_DISABLED};
      cursor: not-allowed;
    }
  }
`;

export const StyledRow = styled.div`
  display: flex;
  margin-top: 12px;
`;

export const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;
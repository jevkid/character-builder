import styled from 'styled-components';

export const APP_PADDING = '12px 48px';
export const APP_BACKGROUND_COLOUR_PRIMARY = '#eaeaea';
export const APP_FONT_FAMILY = 'Tenali Ramakrishna';
export const TEXT_COLOR_PRIMARY = '#2b2b2b';
export const TEXT_COLOR_SECONDARY = '#514260';

export const StyledAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${APP_BACKGROUND_COLOUR_PRIMARY};
  padding: ${APP_PADDING};
`;
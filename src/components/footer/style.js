import { styled } from 'styled-components';
import { Button } from '@mui/material';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #f7f7f7;
  border-top: 1px solid #ddd;
`;

export const FooterButton = styled(Button)`
  margin: 0 8px;
`;
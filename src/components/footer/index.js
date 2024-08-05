import React from 'react';
import { FooterContainer, FooterButton } from './style';

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterButton variant="contained" color="primary">
        Rating
      </FooterButton>
      <FooterButton variant="outlined" color="primary">
        Tasks
      </FooterButton>
    </FooterContainer>
  );
};
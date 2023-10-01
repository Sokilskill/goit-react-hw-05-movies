import { Container } from 'components/App.styled';
import HeaderComponent from 'components/Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <Container>
      <HeaderComponent />
      <Outlet />
    </Container>
  );
};

export default SharedLayout;

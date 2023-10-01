import { Container } from 'components/App.styled';
import HeaderComponent from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <Container>
        <HeaderComponent />
      </Container>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;

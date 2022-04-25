import React from 'react';
import styled from 'styled-components';
import { usePreferences } from '../components/hooks/usePreferences';
import List from '../components/List';
import Navbar from '../components/Navbar';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Favorites = () => {
  const [preferences] = usePreferences();

  console.log(preferences.favorites.length);
  return (
    <>
      <Navbar />
      <Container>
        {preferences.favorites.length > 0 ? (
          <List episodes={preferences.favorites} />
        ) : (
          <h1>Lista vazia</h1>
        )}
      </Container>
    </>
  );
};

export default Favorites;

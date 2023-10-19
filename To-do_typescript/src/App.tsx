import './App.css';
import styled from '@emotion/styled';
import { useState } from 'react';
import DataView from './components/DataView/DataView';
import TextInput from './components/TextInput/TextInput';
import Button from './components/Button/Button';
import ToDoListContextProvider from '../src/context/context';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

function App() {
  return (
    <Container>
      <ToDoListContextProvider>
        <DataView />
        <TextInput />
        <Button label="추가" color="#304FFE" />
      </ToDoListContextProvider>
    </Container>
  );
}

export default App;

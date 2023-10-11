import './App.css';
import styled from '@emotion/styled';
import { useState } from 'react';
import DataView from './components/DataView/DataView';
import TextInput from './components/TextInput/TextInput';
import Button from './components/Button/Button';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

function App() {
  const [toDoList, setToDoList] = useState(['할 일 1', '할 일 2', '할 일 3']);
  const [toDo, setTodo] = useState('');

  const handleClick = (event: any) => {
    setTodo(event.target.value);
  };

  // const onAdd = () => {};

  const handleDelete = (todo: string) => {
    setToDoList(toDoList.filter((item) => item !== todo));
  };

  return (
    <Container>
      <DataView toDoList={toDoList} onDelete={handleDelete} />
      <TextInput value={toDo} onChange={handleClick} />
      <Button label="추가" color="#304FFE" />
    </Container>
  );
}

export default App;

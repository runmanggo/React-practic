import styled from '@emotion/styled';
import ToDoItem from '../ToDoItem/ToDoItem';
import { useContext } from 'react';

const ToDoListBox = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
  readonly toDoList: ReadonlyArray<string>;
  readonly onDelete?: (todo: string) => void;
}

const ToDoList = ({ toDoList, onDelete }: Props) => {
  return (
    <ToDoListBox>
      {toDoList.map((todo) => (
        <ToDoItem
          key={todo}
          label={todo}
          onDelete={() => {
            if (typeof onDelete === 'function') onDelete(todo);
          }}
        />
      ))}
    </ToDoListBox>
  );
};

export default ToDoList;

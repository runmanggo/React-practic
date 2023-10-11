import styled from '@emotion/styled';
import Title from '../Title/Title';
import ToDoList from '../ToDoList/ToDoList';

const DataViewBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 8px;
`;

interface Props {
  readonly toDoList: readonly string[];
  readonly onDelete?: (todo: string) => void;
}

const DataView = ({ toDoList, onDelete }: Props) => {
  return (
    <DataViewBox>
      <Title label="할일 목록" />
      <ToDoList toDoList={toDoList} onDelete={onDelete} />
    </DataViewBox>
  );
};

export default DataView;

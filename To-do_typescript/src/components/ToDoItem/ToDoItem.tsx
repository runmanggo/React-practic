import styled from '@emotion/styled';
import Button from '../Button/Button';

const ToDoItemBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

const Label = styled.div`
  flex: 1;
  font-size: 1.2rem;
  margin-right: 16px;
`;

interface Props {
  label: string;
  onDelete: () => void;
}

const ToDoItem = ({ label, onDelete }: Props) => {
  return (
    <ToDoItemBox>
      <Label>{label}</Label>
      <Button onClick={onDelete} label="삭제"></Button>
    </ToDoItemBox>
  );
};

export default ToDoItem;

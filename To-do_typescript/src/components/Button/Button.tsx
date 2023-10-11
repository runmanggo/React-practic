import styled from '@emotion/styled';

interface ContainerProps {
  color: string;
}

const ButtonBox = styled.button<ContainerProps>`
  border: 0;
  color: #ffffff;
  background-color: ${(props) => props.color};
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;

  &:hover {
    background-color: ${(props) => props.color};
    opacity: 0.8;

    &:active {
      box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
    }
  }
`;

interface Props {
  label: string;
  onClick?: () => void;
  color?: string; // Optional
}

const Button = ({ label, onClick, color = '#ff5722' }: Props) => {
  return (
    <ButtonBox onClick={onClick} color={color}>
      {label}
    </ButtonBox>
  );
};

export default Button;

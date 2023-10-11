import styled from '@emotion/styled';

const TextInputBox = styled.input`
  font-size: 1.2rem;
  padding: 8px;
`;

interface Props {
  value: string;
  onChange: (text: string) => void;
}

const TextInput = ({ value, onChange }: Props) => {
  return (
    <TextInputBox
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    ></TextInputBox>
  );
};
export default TextInput;

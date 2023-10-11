import styled from '@emotion/styled';

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Label = styled.h1`
  margin-top: 0;
`;

interface Props {
  readonly label: string;
}

const Title = ({ label }: Props) => {
  return (
    <TitleBox>
      <Label> {label}</Label>
    </TitleBox>
  );
};

export default Title;

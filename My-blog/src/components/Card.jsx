import styled from "styled-components";
import img2 from "../img/img2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const CardBox = styled.div`
  width: 18rem;
  height: 15rem;
  margin: 1rem;
  box-shadow: rgba(245, 120, 37, 0.267) 0px 4px 16px 0px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const CardImg = styled.div`
  background: url(${img2}) no-repeat center;
  background-size: 52%;
  width: 100%;
  height: 150px;
  border: none;
`;

const ContentBox = styled.div`
  display: flex;
  padding: 0 0.3125rem;
  flex-direction: column;
`;

const ContentH3 = styled.h3`
  font-size: 1rem;
  margin: 0px 0px 0.25rem;
  line-height: 1.5;
  word-break: break-word;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #242424;
`;

const ContentTextbox = styled.div`
  word-break: break-word;
  overflow-wrap: break-word;
  font-size: 0.875rem;
  line-height: 1.5;
  height: 3.125rem;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #242424;
`;

const DeleteBox = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  color: #ff8800;
`;

function Card(props) {
  const { onDelete } = props;

  function CardDel() {
    onDelete(props);
  }

  const { onPlus } = props;

  function CardHeart() {
    onPlus(props.idx);
  }

  return (
    <CardBox>
      <DeleteBox onClick={CardDel}>X</DeleteBox>
      <CardImg></CardImg>
      <ContentBox>
        <ContentH3>{props.title}</ContentH3>
        <ContentTextbox>{props.date}</ContentTextbox>
      </ContentBox>
      <div className="HeartBox">
        {props.heart}
        <FontAwesomeIcon
          icon={faHeart}
          size="sm"
          style={{ color: "#fe2a69" }}
          onClick={CardHeart}
        />
      </div>
    </CardBox>
  );
}
export default Card;

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFish, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import img1 from "../img/img1.jpg";
import Modal from "./Modal";
import { useState } from "react";

const HeaderWrap = styled.div`
  width: 100%;
  height: 64px;
  padding: 0 10px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  background-color: #ff5e00d5;
`;

const LeftWrap = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: bolder;
  align-items: center;
  gap: 3px;
`;

const RightWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const NewTextBox = styled.button`
  border: 1px solid #ff8800;
  background-color: #fffaf4;
  height: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  border-radius: 1rem;
  outline: none;
  font-weight: bold;
  word-break: keep-all;
  transition: all 0.125s ease-in 0s;
  cursor: pointer;
`;

const Profile = styled.img`
  background: url(${img1}) no-repeat center/cover;
  border-radius: 50%;
  height: 50px;
  width: 50px;
`;

function Header(props) {
  const { onUpload } = props;
  {
    /** 
     * props는 부모 컴포넌트로부터 전달된 속성들을 포함하는 객체
     * app.js Headr 컴포넌트에 onUpload={UploadTitle} 먼저 사용해서 
  찐 Header 컴포넌트에다가 만들어준 UploadTitle props라고 지정을 해줌
  객체 분해 :한마디로 객체에서 원하는 것만 분활해서 가져오는 것

  */
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <HeaderWrap>
      <LeftWrap>
        <FontAwesomeIcon icon={faFish} size="xl" style={{ color: "#ffcb65" }} />
        붕어빵 House
      </LeftWrap>
      <RightWrap>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          size="xl"
          style={{ color: "#965000" }}
        />
        <NewTextBox onClick={toggleModal}>새글작성</NewTextBox>
        {isModalOpen ? (
          <Modal onUpload={onUpload} onClose={toggleModal} />
        ) : null}

        {/**isModalOpen이 true라면 모달을 렌더링하고,
         * false라면 null을 반환하여 렌더링 */}

        {/**onUpload 에 위에서 const { onUpload } = props;를 가져와서 전달
         * 그러니깐 현 상태는 APP.js > Header 컴포넌트 > 찐 Header 컴포넌트 전달
         * > Modal 컴포넌트에 전달 : 이유 > Modal 에서 인풋 기능이 있기 때문에
         */}
        <Profile></Profile>
      </RightWrap>
    </HeaderWrap>
  );
}

export default Header;

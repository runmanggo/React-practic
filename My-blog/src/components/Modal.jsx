import { styled } from "styled-components";
import { useState } from "react";
import "../App.css";

const MakeTitleBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 60px;
  right: 30px;
  width: 200px;
  height: 70px;
  padding: 5px;
  background-color: #ff88006f;
  border-radius: 20px;
`;

const MakeTitle = styled.input`
  display: flex;
  width: 150px;
  height: 20px;
  border: none;
  border-radius: 5px;
`;

const MakeBtn = styled.button`
  width: 70px;
  height: 25px;
  border: none;
  border-radius: 30px;
  margin-top: 5px;
  background-color: #fffaf4;
  font-size: smaller;
  font-weight: bold;
`;

function Modal(props) {
  const { onUpload } = props;
  {
    /** 드디어 연어가 여기까지오게됨
     * APP.js > Header 컴포넌트 > 찐 Header 컴포넌트 전달
     * > 찐 Header 안에 사용되는 Modal 컴포넌트 > 찐 Modal 컴포넌트까지 도달
     */
  }
  const [inputBox, setInputBox] = useState("");
  // 인풋데이터를 리셋 코드를 여기서 짠 이유는, 실질적으로 여기서 제목을 입력하는 기능이 생기기 때문에

  function titleChange(e) {
    setInputBox(e.target.value);
  }

  // 랜덤 날짜
  function generateRandomDate() {
    const startTimestamp = new Date("2023-01-01").getTime();
    const endTimestamp = new Date().getTime();

    const randomTimestamp =
      Math.random() * (endTimestamp - startTimestamp) + startTimestamp;

    const randomDate = new Date(randomTimestamp);
    return randomDate.toISOString().split("T")[0];
  }

  function UpdateTitle(props) {
    if (inputBox === "") {
      return alert("붕어빵 메뉴을 말해라!");
    }
    const UpdateNewText = {
      title: inputBox,
      heart: 0,
      date: generateRandomDate(),
    };
    onUpload(UpdateNewText);
    setInputBox("");
  }
  {
    /** 이제는 거슬러 온 연어를 사용할때가 되었다,,, UpdateTitle 함수의 
  인자를 const { onUpload } = props; 를 사용하여 
  App.js 에서 가져온 usestate의 기존 배열을 인풋값을 넣었을때 원하는 값으로 설정 
  onUpload(UpdateNewText) : 우리 연어 함수인 onUpload 호출하여 생성한 UpdateNewText를 업로드
  
  */
  }

  return (
    <MakeTitleBox>
      <div className="Modal">
        <MakeTitle
          type="text"
          placeholder="무슨 붕어빵?"
          value={inputBox}
          onChange={titleChange}></MakeTitle>
        <MakeBtn onClick={UpdateTitle}>업로드</MakeBtn>
        {/** 연어 전달 완료 */}
      </div>
    </MakeTitleBox>
  );
}
export default Modal;

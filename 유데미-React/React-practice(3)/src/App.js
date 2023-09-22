import React, { useState } from "react";
import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  /**
   *사용자 목록의 추가, 수정 또는 삭제와 같은 데이터 작업
   */

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;

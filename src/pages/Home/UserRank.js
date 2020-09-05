import React, { useState, useEffect } from "react";
import axios from 'axios';

function UserRank() {
  const [userId, setUserId] = useState([]);

  useEffect(() => {
    let completed = false;

    async function get(){
      const result = await axios.get(
        "http://127.0.0.1:8000/user"
      );
      if (!completed) setUserId(result.data);
    }
    get();
    return () => {
      completed =true;
    };
    })
    const usersId = userId.map((id)=> id.user_id);
  return (
    <div>
      <h3>이달의 인기 멤버</h3>
      <p>
        <img src={require("./1등.svg")} alt="1등 왕관 이미지" /> {usersId.slice(0,1)}
      </p>
      <p>
        <img src={require("./2등.svg")} alt="2등 왕관 이미지" /> {usersId.slice(1,2)}
      </p>
      <p>
        <img src={require("./3등.svg")} alt="3등 왕관 이미지" /> {usersId.slice(2,3)}
      </p>
    </div>
  );
}

export default UserRank;

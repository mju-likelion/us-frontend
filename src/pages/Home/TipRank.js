import React from "react";

function TipRank(props) {
  return (
    <div>
      <h3>실시간 인기 꿀팁</h3>
      <p>
        <img src={require("./1등.svg")} alt="1등 왕관 이미지" /> {props.first}
      </p>
      <p>
        <img src={require("./2등.svg")} alt="2등 왕관 이미지" /> {props.second}
      </p>
      <p>
        <img src={require("./3등.svg")} alt="3등 왕관 이미지" /> {props.third}
      </p>
    </div>
  );
}

export default TipRank;

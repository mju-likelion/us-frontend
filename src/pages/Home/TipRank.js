import React from 'react';

function TipRank(props) {
  return (
    <div>
      <h3>실시간 인기 꿀팁</h3>
      <p><img src={ require('./1등.svg') } /> {props.first}</p>
      <p><img src={ require('./2등.svg') } /> {props.second}</p>
      <p><img src={ require('./3등.svg') } /> {props.third}</p>  
    </div>
  );
}

export default TipRank;
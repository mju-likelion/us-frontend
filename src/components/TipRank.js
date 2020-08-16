import React, { useState } from 'react';


const dummy_prop = {
  first: '꿀팁1',
  second: '꿀팁2',
  third: '꿀팁3',
}


function TipRank() {
  const {first, second, third} = dummy_prop
  return (
    <div>
      <h3>실시간 인기 꿀팁</h3>
      <p><img src={ require('./1등.svg') } /> {first}</p>
      <p><img src={ require('./2등.svg') } /> {second}</p>
      <p><img src={ require('./3등.svg') } /> {third}</p>  
    </div>
  );
}

export default TipRank;
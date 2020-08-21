import React, { useState } from 'react';


const dummy_prop = {
  first: 'User1',
  second: 'User2',
  third: 'User3',
}


function UserRank(props) {
  const {first, second, third} = dummy_prop
  return (
    <div>
      <h3>이달의 인기 멤버</h3> 
      <p><img src={ require('./1등.svg') } /> {props.first}</p>
      <p><img src={ require('./2등.svg') } /> {props.second}</p>
      <p><img src={ require('./3등.svg') } /> {props.third}</p>
    </div>
  );
}

export default UserRank;
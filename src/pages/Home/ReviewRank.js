import React, { useState } from 'react';

const dummy_prop = {
  first: '리뷰1',
  second: '리뷰2',
  third: '리뷰3',
}


function ReviewRank() {
  const {first, second, third} = dummy_prop
  return (
    <div>
      <h3>실시간 인기 리뷰</h3>
      <p><img src={ require('./1등.svg') } /> {first}</p>
      <p><img src={ require('./2등.svg') } /> {second}</p>
      <p><img src={ require('./3등.svg') } /> {third}</p> 
    </div>
  );
}

export default ReviewRank;
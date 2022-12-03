import React, { useState } from 'react';

export default function App() {
  const [checked, setChecked] = useState({
    age: true,
    name: true,
    membership: true,
  });

  const { age, name, membership } = checked;

  const handleCheck = (e) => {
    const { name } = e.target;
    setChecked({ ...checked, [name]: !checked[name] });
  };

  // Object.entries & reduce 사용
  const handleAllCheck = () => {
    // const checkValue = isAllCheked ? false : true;
    setChecked(
      Object.entries(checked).reduce(
        (acc, [key]) => ({ ...acc, [key]: !isAllCheked }),
        {}
      )
    );
  };

  // for in 반복문 사용
  //   const handleAllCheck = () => {
  //     let newObj = {};
  //     for (let key in checked) {
  //       newObj = { ...newObj, [key]: !isAllCheked };
  //     }
  //     setChecked(newObj);
  //   };

  const isAllCheked = Object.values(checked).every((item) => item === true);

  return (
    <div>
      <div>
        <input
          type="checkbox"
          checked={isAllCheked}
          onChange={handleAllCheck}
        />
        전체선택
      </div>
      <div>
        <input
          type="checkbox"
          name="age"
          checked={age}
          onChange={handleCheck}
        />
        <label htmlFor="">age</label>
        <input
          type="checkbox"
          name="name"
          checked={name}
          onChange={handleCheck}
        />
        <label htmlFor="">name</label>
        <input
          type="checkbox"
          name="membership"
          checked={membership}
          onChange={handleCheck}
        />
        <label htmlFor="">membership</label>
      </div>
    </div>
  );
}

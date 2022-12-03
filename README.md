# Checkbox

## Preview

![checkbox-1](https://user-images.githubusercontent.com/118904460/205425979-d8ab2c28-24df-4125-83f0-a61f0e44c556.gif)

## Code

### src/App.js
```javascript
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
    <div style={containerStyle}>
      <section style={sectionStyle}>
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
          <label htmlFor="">이름</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="name"
            checked={name}
            onChange={handleCheck}
          />
          <label htmlFor="">나이</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="membership"
            checked={membership}
            onChange={handleCheck}
          />
          <label htmlFor="">멤버쉽</label>
        </div>
      </section>
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  width: '100%',
  height: '100%',
};

const sectionStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  position: 'absolute',
  width: '200px',
  height: '100%',
};
```

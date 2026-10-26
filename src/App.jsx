import { useState } from 'react';
import './App.scss';

export const App = () => {
  // const [count] = useState(0);
  const [count, setCount] = useState(0);

  const addOne = () => {
    console.log(count + 1);

    setCount(count + 1);

    // const copy = count;

    // setTimeout(() => {
    //   console.log(copy + 19);
    //   count + 1;
    // }, 2000);

    // return 1;

    // return copy + 1;

    // return count + 1;
    // write code here
  };

  const add100 = () => {
    console.log(count + 100);
    // write code here
  };

  // DON'T change the code below
  const increase = () => {
    if (count % 5 === 0) {
      add100();
    }

    addOne();
  };

  return (
    <div className="App">
      <h1 className="App__title">{`Count: ${count}`}</h1>

      {/* <button type="button" className="App__add-one" onClick={() => addOne(count)}> */}
      <button type="button" className="App__add-one" onClick={addOne}>
        Add 1
      </button>

      <button type="button" className="App__add-100" onClick={add100}>
        Add 100
      </button>

      <button type="button" className="App__increase" onClick={increase}>
        Increase
      </button>
    </div>
  );
};

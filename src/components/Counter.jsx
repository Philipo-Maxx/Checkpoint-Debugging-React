import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="display-1">
      <div>{count}</div>
      <div>
        <Button
          className="btn-lg me-3"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </Button>
        <Button
          className="btn-lg"
          onClick={() => {
            if (count <= 0) {
              return;
            }
            setCount(count - 1);
          }}
        >
          Decrement
        </Button>
      </div>
    </div>
  );
};

export default Counter;

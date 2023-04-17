"use client";

import { useState } from "react";

export default function List() {
  const product = ["Tomatoes", "Pasta", "Coconut"];

  const [orderNum, setOrderNum] = useState([0, 0, 0]);

  const increaseOrderNum = (i) => {
    let copiedOrderNum = [...orderNum];
    copiedOrderNum[i]++;
    setOrderNum(copiedOrderNum);
  };

  const decreaseOrderNum = (i) => {
    let copiedOrderNum = [...orderNum];
    copiedOrderNum[i]--;
    setOrderNum(copiedOrderNum);
  };

  const renderHTML = () => {
    return product.map((cV, i) => {
      return (
        <div className='food' key={i}>
          <img src={`/images/food${i}.png`} className='food-img' />
          <h4>
            상품{i + 1} {cV}
          </h4>

          <button
            style={{ marginRight: "8px" }}
            onClick={() => decreaseOrderNum(i)}
          >
            -
          </button>
          <span style={{ marginRight: "8px" }}>{orderNum[i]}</span>
          <button onClick={() => increaseOrderNum(i)}>+</button>
        </div>
      );
    });
  };

  return (
    <div>
      <h4 className='title'>상품목록</h4>

      {renderHTML()}
    </div>
  );
}

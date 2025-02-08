import React from "react";
import { NumericFormat } from "react-number-format";

export function CartItem({ card, onRemovFromCart }) {
  const { name: name, count: count, price: price } = card;
  //Total price calculation
  const total = count * price;
  return (
    <div className="d-flex pb-3 pt-3 justify-content-between">
      <span className="d-flex flex-column w-50">
        <span className="h-50">{name}</span>
        <span
          style={{ width: "85%" }}
          className=" d-flex justify-content-between mt-2"
        >
          <p className="m-0">{count}</p>{" "}
          <p className="m-0">
            {" "}
            <NumericFormat
              value={price}
              displayType={"text"}
              thousandSeparator={true}
            />
          </p>{" "}
          <NumericFormat
            value={total}
            displayType={"text"}
            thousandSeparator={true}
          />
        </span>
      </span>
      <span
        dir="ltr"
        onClick={() => onRemovFromCart(card)}
        className="d-flex align-items-center p-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          fill="none"
          viewBox="0 0 10 10"
        >
          <path
            fill="#ff5f55"
            d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
          />
        </svg>
      </span>
    </div>
  );
}

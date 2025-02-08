import React, { useState, useEffect } from "react";
import { NumericFormat } from "react-number-format";

export function CartFoother({
  card,
  setCard,
  children = "ثبت سفارش",
  setIsOpenOrderConfirmed,
  open,
  openCartMobile,
}) {
  const [totalPrice, setTotalPrice] = useState(0);
  //Calculate the price of the product inside the card
  const cardTotalPrice = card.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );
  //set value to cardTotalPrice
  useEffect(
    function () {
      setTotalPrice(cardTotalPrice);
    },
    [cardTotalPrice]
  );
  return (
    <div className="d-flex flex-column">
      <span className="w-100 d-flex justify-content-between align-items-center py-4">
        <p style={{ margin: "0px", fontSize: "15px" }}>قیمت نهایی</p>
        <p style={{ margin: "0px", fontSize: "23px" }}>
          <NumericFormat
            value={totalPrice}
            displayType={"text"}
            thousandSeparator={true}
          />
          <img
            style={{ width: "22px", height: "18px", marginRight: "5px" }}
            src="https://emalls.ir/content/2022/img/tooman.svg"
            alt="cart"
          />
        </p>
      </span>
      <span className="w-100 d-flex justify-content-center">
        <button
          onClick={() =>
            open
              ? setIsOpenOrderConfirmed(true)
              : (setIsOpenOrderConfirmed(false), openCartMobile(), setCard([]))
          }
          style={{ fontSize: "17px", padding: "10px" }}
          className="btn btn-danger confirm-button rounded-5"
        >
          {children}
        </button>
      </span>
    </div>
  );
}

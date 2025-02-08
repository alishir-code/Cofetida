import React from "react";
import { NumericFormat } from "react-number-format";

export function Cartitempopup({ card }) {
  const { name: name, count: count, price: price } = card;
   //Total price calculation
  const total = count * price;
  return (
    <div
      style={{
        gap: "1.25rem",
        borderBottom: "2px solid #e5e7eb",
      }}
      className="d-flex flex-row align-items-center justify-content-between py-2 px-1 py-sm-3 px-sm-2"
    >
      <div style={{ width: "90px" }} className="d-flex flex-row w-75 gap-3">
        <img
          style={{ width: "65px" }}
          className="rounded-2"
          src={card.image.thumbnail}
        />
        <span className="d-flex flex-column">
          <span className="h-50">{name}</span>
          <span className=" d-flex mt-2 gap-2 align-items-center">
            <p className="m-0">{count} x</p>
            <p className="m-0">
              {" "}
              <NumericFormat
                value={price}
                displayType={"text"}
                thousandSeparator={true}
              />
            </p>
            <p style={{ fontSize: "10px", margin: "0px" }}>قیمت واحد</p>
          </span>
        </span>
      </div>
      <span dir="ltr" className="d-flex align-items-center gap-1">
        <img
          style={{ width: "22px", height: "18px", marginRight: "5px" }}
          src="https://emalls.ir/content/2022/img/tooman.svg"
          alt="cart"
        />
        <NumericFormat
          value={total}
          displayType={"text"}
          thousandSeparator={true}
        />
      </span>
    </div>
  );
}

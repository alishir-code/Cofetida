import React from "react";
import { NumericFormat } from "react-number-format";

export function DescriptionProduct({ item }) {
  return (
    <div className="d-flex flex-column discription-container">
      <span style={{ color: "#ccc1bf", fontSize: "14px" }}>
        {item.category}
      </span>
      <span className="mt-1" style={{ color: "#524847" }}>
        {item.name}
      </span>
      <div className="d-flex flex-row align-items-center mt-2">
        <span style={{ color: "#ff5f55" }}>
          <NumericFormat
            value={item.price}
            displayType={"text"}
            thousandSeparator={true}
          />
        </span>
        <img
          style={{ width: "22px", height: "18px", marginRight: "5px" }}
          src="https://emalls.ir/content/2022/img/tooman.svg"
          alt="cart"
        />
      </div>
    </div>
  );
}

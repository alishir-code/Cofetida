import React from "react";
import { AddtoCartContainer } from "./AddtoCartContainer";

export function CartSizeMobile({
  openCartMobile,
  card,
  setCard,
  setIsOpenOrderConfirmed,
}) {
  return (
    <div id="a12" className="CartSizeMobile d-sm-none">
      <span
        style={{ width: "40px", height: "40px" }}
        className="m-3 me-2 d-flex justify-content-center align-items-center"
        onClick={openCartMobile}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          fill="none"
          viewBox="0 0 10 10"
        >
          <path
            fill="#ff5f55"
            d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
          ></path>
        </svg>
      </span>
      <div className="ms-4">
        <AddtoCartContainer
          card={card}
          setCard={setCard}
          setIsOpenOrderConfirmed={setIsOpenOrderConfirmed}
          breakpointdisplay={"d-flex"}
        />
      </div>
    </div>
  );
}

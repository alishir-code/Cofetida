import React from "react";
import { Cart } from "./Cart";
import { CartEmpty } from "./CartEmpty";

export function AddtoCartContainer({
  card,
  setIsOpenOrderConfirmed,
  setCard,
  openCartMobile,
  breakpointdisplay = "d-none",
}) {
  return (
    <div
      className={` col-12 col-sm-5 col-lg-4 ${breakpointdisplay} d-sm-block add-to-cart`}
    >
      <div className="col-12 col-sm-11 mt-0 mt-sm-4 main-div-cart rounded-3 p-3 pt-4">
        {card.length > 0 ? (
          <Cart
            card={card}
            setIsOpenOrderConfirmed={setIsOpenOrderConfirmed}
            openCartMobile={openCartMobile}
            setCard={setCard}
          />
        ) : (
          <CartEmpty />
        )}
      </div>
    </div>
  );
}

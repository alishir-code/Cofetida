import React from "react";
import { CartFoother } from "./CartFoother";
import { CartItem } from "./CartItem";

export function Cart({ card, setIsOpenOrderConfirmed, setCard, openCartMobile }) {
  //delet item from cart
  function removFromCart(object) {
    setCard((cardItem) => cardItem.filter((item) => item.id !== object.id));
  }
  return (
    <div className="d-flex flex-column">
      <h3 style={{ color: "#ff5f55" }} className="mb-3">
        سبد خرید شما ({card.length})
      </h3>
      <div style={{ maxHeight: "27rem", overflowY: "auto", direction: "rtl" }}>
        {card.map((item) => (
          <CartItem card={item} key={item.id} onRemovFromCart={removFromCart} />
        ))}
      </div>
      <CartFoother
        card={card}
        setCard={setCard}
        open={true}
        openCartMobile={openCartMobile}
        setIsOpenOrderConfirmed={setIsOpenOrderConfirmed}
      />
    </div>
  );
}

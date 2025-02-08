import React from "react";
import { AddtoCartContainer } from "./cart/AddtoCartContainer";
import { CartSizeMobile } from "./cart/CartSizeMobile";
import { ProductContainer } from "./product/ProductContainer";
//The project's parent container
export function RootContainer({
  data,
  card,
  setCard,
  setIsOpenOrderConfirmed,
  openCartMobile,
  IsOpenCartMobile,
}) {
  return (
    <div className="w-100 w-sm-90 position-relative d-flex flex-row ">
      <AddtoCartContainer
        card={card}
        setIsOpenOrderConfirmed={setIsOpenOrderConfirmed}
        setCard={setCard}
        openCartMobile={openCartMobile}
      />
      <ProductContainer
        data={data}
        card={card}
        setCard={setCard}
        openCartMobile={openCartMobile}
      />
      {IsOpenCartMobile && (
        <CartSizeMobile
        openCartMobile={openCartMobile}
          card={card}
          setCard={setCard}
          setIsOpenOrderConfirmed={setIsOpenOrderConfirmed}
        />
      )}
    </div>
  );
}

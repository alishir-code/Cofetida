import React from "react";
import { ButtonsProduct } from "./ButtonsProduct";
import { DescriptionProduct } from "./DescriptionProduct";

export function ProductItem({
  item,
  handelAddToCard,
  card,
  handelDecreaseToCart,
}) {
  return (
    <div className="d-flex flex-column col-12 col-lg-4 col-sm-6 pb-4">
      <div className="position-relative">
        {
          <picture>
            <source srcSet={item.image.mobile} media="(max-width: 580px)" />
            <source srcSet={item.image.tablet} media="(min-width: 580px)" />
            <img
              className="w-100 h-100 rounded-3"
              src={item.image.desktop}
              alt="k"
            />
          </picture>
        }
        <ButtonsProduct
          handelAddToCard={handelAddToCard}
          handelDecreaseToCart={handelDecreaseToCart}
          item={item}
          card={card}
        />
      </div>
      <DescriptionProduct item={item} />
    </div>
  );
}

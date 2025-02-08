import React from "react";
import { ProductItem } from "./ProductItem";

export function Product({
  filteredResultsItem,
  handelAddToCard,
  card,
  handelDecreaseToCart,
}) {
  return (
    <div className="d-flex justify-content-between row p-2">
      {filteredResultsItem?.length > 0 ? (
        filteredResultsItem.map((item, i) => (
          <ProductItem
            item={item}
            key={i}
            handelAddToCard={handelAddToCard}
            card={card}
            handelDecreaseToCart={handelDecreaseToCart}
          />
        ))
      ) : (
        <h3 style={{ color: "#88645b" }} className="m-auto mt-5 text-center">
          ❗محصول مورد نظر یافت نشد لطفا با دقت جستجو
        </h3>
      )}
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { Product } from "./Product";
import { ProductHeader } from "../header/ProductHeader";

export function ProductContainer({ data, card, setCard, openCartMobile }) {
  //Save the input value
  const [searchinput, setsearchinput] = useState(() => {
    const saved = localStorage.getItem("searchinput");
    const initialValue = JSON.parse(saved);
    return initialValue;
  });
  // save the filter product
  const [filteredResultsItem, setFilteredResultsItem] = useState(() => {
    const saved = localStorage.getItem("filteredResultsItem");
    const initialValue = JSON.parse(saved);
    return initialValue || data;
  });
  const [StatusSortArray, setStatusSortArray] = useState("");
  //set te value to sortarray state
  useEffect(() => {
    if (StatusSortArray === "the expensivest") {
      setFilteredResultsItem((array) =>
        [...array].sort((a, b) => b.price - a.price)
      );
    }
    if (StatusSortArray === "the cheapest") {
      setFilteredResultsItem((array) =>
        [...array].sort((a, b) => a.price - b.price)
      );
    }
  }, [StatusSortArray, filteredResultsItem]);
  //Filter products
  function handelSearchItems(e) {
    setsearchinput(e.target.value);
    console.log(e.target.value);
    setFilteredResultsItem(
      data.filter((item) => item.name.includes(e.target.value))
    );
  }

  function handelAddToCard(object) {
    setCard((prevState) => {
      const existingObject = prevState.find((item) => item.id === object.id);
      if (existingObject) {
        return prevState.map((item) =>
          item.id === object.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...prevState, { ...object, count: 1 }];
      }
    });
  }
  function handelDecreaseToCart(object) {
    setCard((prevState) => {
      const existingObject = prevState.find((item) => item.id === object.id);
      if (existingObject.count <= 1) {
        return prevState.filter((i) => i.id !== object.id);
      }
      if (existingObject) {
        return prevState.map((item) =>
          item.id === object.id ? { ...item, count: item.count - 1 } : item
        );
      }
    });
  }
  //save the search input value
  useEffect(() => {
    localStorage.setItem("searchinput", JSON.stringify(searchinput));
  }, [searchinput]);
  //save the filter product value
  useEffect(() => {
    localStorage.setItem(
      "filteredResultsItem",
      JSON.stringify(filteredResultsItem)
    );
  }, [filteredResultsItem]);
  return (
    <div
      style={{ backgroundColor: "#fcf8f5" }}
      className="col-12 col-sm-7 col-lg-8 d-flex flex-column"
    >
      <ProductHeader
        searchinput={searchinput}
        handelSearchItems={handelSearchItems}
        setStatusSortArray={setStatusSortArray}
        StatusSortArray={StatusSortArray}
        openCartMobile={openCartMobile}
        card={card}
      />
      <Product
        filteredResultsItem={filteredResultsItem}
        handelAddToCard={handelAddToCard}
        handelDecreaseToCart={handelDecreaseToCart}
        card={card}
      />
    </div>
  );
}

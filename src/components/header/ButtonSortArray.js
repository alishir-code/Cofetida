import React from "react";

export function ButtonSortArray({ setStatusSortArray, StatusSortArray }) {
  return (
    <>
      <button
        className={`${
          StatusSortArray === "the expensivest"
            ? "selected-mode-sort"
            : "buttun-sort"
        }`}
        value="the expensivest"
        onClick={(e) => setStatusSortArray(e.target.value)}
      >
        گران ترین
      </button>
      <button
        className={` ${
          StatusSortArray === "the cheapest"
            ? "selected-mode-sort"
            : "buttun-sort"
        }`}
        value="the cheapest"
        onClick={(e) => setStatusSortArray(e.target.value)}
      >
        ارزان ترین
      </button>
    </>
  );
}

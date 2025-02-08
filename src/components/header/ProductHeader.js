import React from "react";
import { ButtonSortArray } from "./ButtonSortArray";

export function ProductHeader({
  searchinput,
  handelSearchItems,
  setStatusSortArray,
  StatusSortArray,
  openCartMobile,
  card,
}) {
  return (
    <header className="d-flex flex-column pt-2">
      <div className="p-1 d-flex flex-row justify-content-start justify-content-sm-between align-items-center">
        <button className=" btn d-sm-none p-0 ms-3 mb-3" onClick={openCartMobile}>
          <div className="countToCartMobile">{card.length}</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="29"
            fill="none"
            viewBox="0 0 21 20"
          >
            <g fill="#C73B0F" clip-path="url(#a)">
              <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
              <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M.333 0h20v20h-20z" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <span
          style={{ backgroundColor: "white" }}
          className="rounded-5 col-9 col-sm-7 col-lg-6 d-flex align-items-center"
        >
          <img
            style={{ width: "30px", height: "30px" }}
            src="assets/images/icon/search.png"
            alt="l"
          />
          <input
            className="serch-bar-header col-12 rounded-5 p-2"
            type="text"
            placeholder="دسر مدنظر را جستجو کنید"
            value={searchinput}
            onChange={handelSearchItems}
          />
        </span>
        <h1 style={{ color: "black" }} className="m-0 d-none d-sm-inline">
          cofetida
        </h1>
      </div>
      <div className="p-2 sort-array-div">
        <div className="d-flex gap-2">
          <ButtonSortArray
            setStatusSortArray={setStatusSortArray}
            StatusSortArray={StatusSortArray}
          />
        </div>
      </div>
    </header>
  );
}

import React, { useEffect, useState } from "react";
import Data from "./data.js";
import "./style.css";
import { RootContainer } from "./components/RootContainer.js";
import { OrderConfirmed } from "./components/cart/OrderConfirmed.js";
function App() {
  //Getting card data
  const [card, setCard] = useState(() => {
    const saved = localStorage.getItem("card");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });
  const [IsOpenOrderConfirmed, setIsOpenOrderConfirmed] = useState(false);
  const [IsOpenCartMobile, setIsOpenCartMobile] = useState(false);
  //set data to card
  useEffect(() => {
    localStorage.setItem("card", JSON.stringify(card));
  }, [card]);
  // toggle IsOpenCartMobile state
  function openCartMobile() {
    setIsOpenCartMobile((cur) => !cur);
  }
  return (
    <div className="background-image-site">
      <div
        style={{ backgroundColor: "#fcf8f5" }}
        className="container-fluid container-lg d-flex justify-content-center"
      >
        <RootContainer
          data={Data}
          card={card}
          setCard={setCard}
          openCartMobile={openCartMobile}
          IsOpenCartMobile={IsOpenCartMobile}
          setIsOpenOrderConfirmed={setIsOpenOrderConfirmed}
        />
        {IsOpenOrderConfirmed && (
          <OrderConfirmed
            card={card}
            setIsOpenOrderConfirmed={setIsOpenOrderConfirmed}
            setCard={setCard}
            openCartMobile={openCartMobile}
          />
        )}
      </div>
    </div>
  );
}
export default App;

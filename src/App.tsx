import { useState } from "react";
import "./App.css";
import NameForm from "./components/NameForm";
import LoginStatus from "./components/LoginStatus";
import ProfuctList from "./components/ProductList";
import type { Product } from "./types";

const demoProducts: Product[] = [
  {
    id: 1,
    title: "Lyklaborð",
    price: 14900,
    imgUrl:
      "https://m.media-amazon.com/images/I/71+p3Hx03dL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 2,
    title: "Mús",
    price: 9900,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP8Bip2dAGCRgdX4gySBjpgFMgpELIz93yYQ&s",
  },
  {
    id: 3,
    title: "Músamottur",
    price: 4900,
    imgUrl:
      "https://m.media-amazon.com/images/I/51XGotAiYYL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 4,
    title: "Skjár",
    price: 49900,
    imgUrl:
      "https://www.simplyshopping.in/cdn/shop/products/81wEGCnscBL._SL1500_13ff08e9-d6f6-4d60-9254-b9a35bff50f1_2048x.jpg?v=1624344762",
  },
];

function App() {
  {
    /* const [isLoggedIn, setIsLoggedIn] = useState(false);

  function toggleLogin() {
    setIsLoggedIn((currentValue) => !currentValue);
  } */
  }

  return (
    <div className="app">
      {/* <NameForm /> 
      <LoginStatus isLoggedIn={isLoggedIn} username="Aron" />
      <button onClick={toggleLogin}>{isLoggedIn ? "Útskrá" : "Innskrá"}</button> */}
      <ProfuctList productList={demoProducts} />
    </div>
  );
}

export default App;

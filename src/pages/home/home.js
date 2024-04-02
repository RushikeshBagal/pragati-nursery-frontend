import React from "react";
import LoginDrawer from "./LoginDrawer";
import Cart from "./cart/Cart";

const Home = (props) => {
  const { isCartOpen, setIsCartOpen, setIsLoginDrawerOpen, isLoginDrawerOpen } =
    props;
  return (
    <>
      <LoginDrawer isLoginDrawerOpen={isLoginDrawerOpen} setIsLoginDrawerOpen={setIsLoginDrawerOpen}/>
      <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </>
  );
};

export default Home;

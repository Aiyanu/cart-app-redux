import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import { useSelector } from "react-redux";
// items


function App() {
  const { isOpen } = useSelector(state => state.modal)
  
  // cart setup

  return (
    <main>
      {isOpen && <Modal/>}
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;

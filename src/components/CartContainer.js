import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { connect, useDispatch, useSelector } from "react-redux";
import { GET_TOTALS } from "../redux/actions/cartActions";
import { open } from "../redux/actions/modalActions";
const CartContainer = () => {
  const { cart, total } = useSelector(state => state.cart)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: GET_TOTALS })
  },[cart])
  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>{total.toFixed(2)}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => dispatch(open())}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

function mapStateToProps(state) {

  return { cart: state.cart.cart, total: state.cart.total };
}

export default connect(mapStateToProps)(CartContainer);

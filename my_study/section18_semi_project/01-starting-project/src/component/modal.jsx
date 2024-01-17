import { useSelector, useDispatch } from "react-redux";
import classes from "./modal.module.css";
import { useEffect, useState } from "react";
import { cartAction } from "../../store/cart";

export default function Modal({ openModal }) {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const [total, setTotal] = useState();

  useEffect(() => {
    // Calculate the total value whenever the cart changes
    const calculateTotal = () => {
      let sum = 0;
      cart.forEach((item) => {
        sum += item[1] * item[2]; // item[1] is the price, item[2] is the count
      });
      setTotal(sum);
    };

    calculateTotal();
  }, [cart]);

  const handlePlusButtonClick = (index) => {
    dispatch(cartAction.plusCart(index));
  };

  const handleMinusButtonClick = (index) => {
    dispatch(cartAction.minusCart(index));
    dispatch(cartAction.removeZeroCountItems()); // Remove items with count 0
  };

  return (
    <>
      <div className={classes.modal_background}>
        <div className={classes.modal}>
          <span className={classes.close} onClick={openModal}>
            &times;
          </span>
          {cart.length > 0 ? (
            <div>
              <ul>
                {cart.map((select, index) => (
                  <li key={index}>
                    {`${select[0]}  ${select[1]}    ${select[2]}`}
                    <button onClick={() => handlePlusButtonClick(index)}>+</button>
                    <button onClick={() => handleMinusButtonClick(index)}>-</button>
                  </li>
                ))}
              </ul>
              <p>Total: {total}</p>
            </div>
          ) : (
            "0"
          )}
        </div>
      </div>
    </>
  );
}

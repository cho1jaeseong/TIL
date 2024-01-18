// Modal.jsx
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartAction } from "../../store/cart";
import AddressForm from "./AddressForm";


export default function Modal({ openModal }) {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const [total, setTotal] = useState();
  const [showAddressForm, setShowAddressForm] = useState(false);

  useEffect(() => {
    const calculateTotal = () => {
      let sum = 0;
      cart.forEach((item) => {
        sum += item[1] * item[2];
      });
      setTotal(sum.toFixed(2));
    };

    calculateTotal();
  }, [cart]);

  const handlePlusButtonClick = (index) => {
    dispatch(cartAction.plusCart(index));
  };

  const handleMinusButtonClick = (index) => {
    dispatch(cartAction.minusCart(index));
    dispatch(cartAction.removeZeroCountItems());
  };

  const handleOrder = () => {
    // 주문 정보 처리 로직 추가
    // 여기에서는 단순히 주문 정보를 콘솔에 출력
    console.log("Order placed:", cart);
    // 주문 정보를 서버로 전송하거나 필요한 작업을 수행할 수 있습니다.
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className="text-black fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 overflow-y-hidden" onClick={openModal}>
        <div className="bg-white p-8 rounded-lg shadow-md w-2/3 h-2/3 overflow-y-auto" onClick={handleModalClick}>
          <span className="absolute top-2 right-2 text-gray-500 cursor-pointer" onClick={openModal}>
            &times;
          </span>
          {showAddressForm ? (
            <AddressForm closeModal={() => setShowAddressForm(false)} handleOrder={handleOrder} />
          ) : (
            <div className="flex flex-col justify-between w-full h-full">
              <ul>
                {cart.map((select, index) => (
                  <li key={index} className="flex justify-between items-center mb-2">
                    <div>{`${select[0]}`}</div>
                    
                    <div className="flex space-x-2 p-4">
                    <div> {`${select[1]}$ * ${select[2]} = ${select[1] * select[2]}$`}</div>
                      <button onClick={() => handlePlusButtonClick(index)} className="bg-blue-500 w-8 h-8 text-center m-0 text-white px-2 py-2 rounded-full">
                        +
                      </button>
                      <button onClick={() => handleMinusButtonClick(index)} className="bg-red-500 w-8 h-8 rounded-full  m-0 text-white px-2 py-2">
                        -
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between">
                <p className="p-2">Total: ${total}</p>
                <button className="bg-sky-500 rounded-lg p-2" onClick={() => setShowAddressForm(true)}>
                  Order
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

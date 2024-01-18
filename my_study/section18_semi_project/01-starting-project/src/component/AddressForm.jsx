// AddressForm.jsx
import { useState } from "react";

export default function AddressForm({ closeModal, handleOrder }) {
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = () => {
    // 주소를 부모 컴포넌트로 전달하고 모달을 닫음
    handleOrder(address);
    closeModal();
  };



  return (
    <div className="w-full h-full flex flex-col justify-center">
      <span className="absolute top-2 right-2 text-gray-500 cursor-pointer" onClick={closeModal}>
        &times;
      </span>
      <h2 className="text-xl font-bold mb-4">Enter Delivery Address</h2>
      <textarea
        value={address}
        onChange={handleAddressChange}
        placeholder="Enter your delivery address"
        className="w-full h-20 p-2 mb-4 resize-none border"
      ></textarea>
      <h2 className="text-xl font-bold mb-4">Name</h2>
      <textarea
        value={name}
        onChange={handleNameChange}
        placeholder="please Enter your name"
        className="w-full h-20 p-2 mb-4 resize-none border"
      ></textarea>
      <button className="bg-sky-500 text-white rounded-lg p-2" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

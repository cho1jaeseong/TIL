// Car.jsx
import "./Car.css";
import { motion } from "framer-motion";

export default function Car({ data, setisWhatCar, toggleCarDropdown ,setCarID}) {
  const handleCar = (info) => {
    setisWhatCar(info.name);
    setCarID(info.carId)
    // console.log(info.carId)
    toggleCarDropdown();
  };

  return (
    <>
      <div className="car-container shadow">
        <div className="car-options">
          {data.map((info) => (
            <motion.div
              key={info.name}
              onClick={() => handleCar(info)}
              className="car-option"
              whileHover={{ cursor: "pointer"  }}
            >
              {info.name}
              <motion.div className="car-description-container" >
                {info.description}
              </motion.div>
            </motion.div>
            
          ))}
        </div>
      </div>
    </>
  );
}

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ReactDatePicker from "react-datepicker";
import Calendar from "./Calendar";
import "react-datepicker/dist/react-datepicker.css";
import Clock from "./Clock";
import Car from "./Car";
import { Link, useNavigate } from "react-router-dom";
const DUMMY_DATA = [
  { name: "다마스", car_description: "어쩌구 저쩌구" },
  { name: "핸들이 고장난 8톤트럭", car_description: " 어쩌구 저쩌구어쩌구 저쩌구" },
  { name: "1톤트럭", car_description: " 어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구" },
  { name: "1톤 리프트트럭", car_description: " 어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구" },
  { name: "1톤 냉장/냉동 탑차", car_description: " 어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구" },
]



export default function DeliveryForm() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [isDropdownClockOpen, setDropdownClockOpen] = useState(false);
  const [isDropdownCarOpen, setDropdownCarOpen] = useState(false)
  const [isWhatTime, setisWhatTime] = useState()
  const [isWhatCar, setisWhatCar] = useState()
  const navigate = useNavigate()
  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const toggleClockDropdown = () => {
    setDropdownClockOpen((prev) => !prev);
  };
  const toggleCarDropdown = () => {
    setDropdownCarOpen((prev) => !prev);
  };


  return (<>
  <motion.div initial={{ opacity: 0 ,x:-300}} animate={{ opacity: 1,x:0 }} exit={{ opacity: 0 ,x:300 }} transition={{duration: 0.2}} >
    <motion.div style={{ position: 'relative' }} whileHover={{fontWeight:"bold" }} >
      {/* 나가기 버튼 이미지 */}
      <Link to="/dashboard" className="d-flex align-items-center gap-2" style={{
        position: 'absolute',
        top: '7rem',
        left: '7rem',
        // 이미지의 높이를 설정해주세요
        cursor: 'pointer',
      }}><img style={{
        width: '2rem', // 이미지의 너비를 설정해주세요
        height: '2rem',
      }}
        src="/box-arrow-left.png"  // 나가기 버튼 이미지의 경로를 설정해주세요
        alt="Exit Button"

        />
        <motion.p className="m-0">뒤로가기</motion.p>
        </Link>


    </motion.div>
    <div className="col-12 d-flex flex-column justify-content-center align-items-center">
      <div className="col-6 gap-5 d-flex flex-column" style={{ marginTop: "12rem", }}>

        <div className="mb-3 d-flex align-items-center ">
          <div className="col-3">
            <Calendar setStartDate={setStartDate} startDate={startDate} />
          </div>
          <h3 className="m-0 col-6">일</h3>
        </div>

        <div>
          <div className="d-flex gap-5 align-items-center">
            {/* 첫 번째 라디오 버튼 */}
            <div className="d-flex gap-3  ">
              <motion.div
                whileHover={{ cursor: "pointer", scale: 1.1 }}
                className={`d-flex gap-3 justify-content-center align-items-center ${selectedOption === 'AM' ? 'checked' : ''}`}
                value="AM"
                onClick={() => handleOptionChange('AM')}
              >
                <motion.img
                  style={{ width: "1.5rem" }}
                  src={selectedOption === 'AM' ? '/Checkbox_Check.png' : '/Checkbox_Unchecked.png'}
                />
                <p className="m-0 fw-bold">AM</p>
              </motion.div>

              {/* 두 번째 라디오 버튼 */}
              <motion.div
                whileHover={{ cursor: "pointer", scale: 1.1 }}
                className={`d-flex gap-3 justify-content-center align-items-center ${selectedOption === 'PM' ? 'checked' : ''}`}
                value="PM"
                onClick={() => handleOptionChange('PM')}
              >
                <motion.img
                  style={{ width: "1.5rem" }}
                  src={selectedOption === 'PM' ? '/Checkbox_Check.png' : '/Checkbox_Unchecked.png'}
                />
                <p className="m-0 fw-bold">PM</p>
              </motion.div>
            </div>
            {/* 드롭다운 버튼 */}
            <div style={{ position: "relative" }} className="d-flex align-items-center gap-4">
              <button className="btn btn-primary rounded-5 d-flex  align-items-center gap-2 p-2 " style={{ width: "10rem", height: "4rem" }} onClick={toggleClockDropdown}>
                <p className="m-0 col-10">{isWhatTime || "시간선택"}</p><img className="col-2" src='/clock.png' style={{ width: "1rem", height: "1rem" }} />
              </button>
              <AnimatePresence>
                {isDropdownClockOpen && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="mt-2" style={{ position: "absolute", top: "100%", left: 0, zIndex: 1 }}>
                    <Clock setisWhatTime={setisWhatTime} toggleClockDropdown={toggleClockDropdown} />
                  </motion.div>
                )}
              </AnimatePresence>
              <h3 className="m-0">시에</h3>
            </div>
          </div>
        </div>

        <div>
          <div style={{ position: "relative" }} className="d-flex align-items-center gap-4">
            <motion.button
              className="btn btn-primary rounded-5 d-flex justify-content-center align-items-center  p-2"
              style={{ width: "10rem", height: "4rem" }}
              onClick={toggleCarDropdown}
            >
              <p className="m-0 col-10">{isWhatCar || "차량선택"}</p>
              <motion.img
                className="col-2"
                src='/caret-down-fill.png'
                style={{ width: "1rem", height: "1rem" }}
                animate={{ rotate: isDropdownCarOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }} // Adjust the duration as needed
              />

            </motion.button>

            <h3 className="m-0"> 가 필요해요</h3>
            <AnimatePresence>
              {isDropdownCarOpen && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="mt-2" style={{ position: "absolute", top: "100%", left: 0, zIndex: 1 }}>
                  <Car data={DUMMY_DATA} setisWhatCar={setisWhatCar} toggleCarDropdown={toggleCarDropdown} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  </>
  );

}

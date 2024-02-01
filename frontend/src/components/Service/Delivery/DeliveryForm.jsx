import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ReactDatePicker from "react-datepicker";
import Calendar from "./Calendar";
import "react-datepicker/dist/react-datepicker.css";
import Clock from "./Clock";
import Car from "./Car";
import { Link, useNavigate } from "react-router-dom";
import CheckButton from "./Check_Button";
import PhotoView from "./PhotoView";
import ProgressBar from "./Progressbar"; // 대소문자 이슈
import "./DeliveryForm.css"
import Address from "./Address";
import Map from "./Map";
import axios from "axios";
import Wave from "../../MainPage/DashBoard/Wave";





export default function DeliveryForm() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [isDropdownClockOpen, setDropdownClockOpen] = useState(false);
  const [isDropdownCarOpen, setDropdownCarOpen] = useState(false)
  const [isWhatTime, setisWhatTime] = useState(null)
  const [isWhatCar, setisWhatCar] = useState(null)
  const [whatPacking, setwhatPacking] = useState(null)
  const [whatRiding, setwhatRiding] = useState(null)
  const [isElavator, setisElavator] = useState(null)
  const [isCarStation, setisCarStation] = useState(null)
  const [userinput, setuserinput] = useState("")
  const [isActive, setIsActive] = useState("first")
  const [isTime, setIsTime] = useState(null)
  const [selectedFiles, setSelectedFiles] = useState([]);
  const navigate = useNavigate()
  const [activeStep, setActiveStep] = useState(1);
  const totalSteps = 3; // 전체 단계 수에 맞게 수정
  const [whatModal, setWhatModal] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [calresult , setcalresult] = useState(null)
  const [whereStart, setwhereStart] = useState({ address: null, lon: null, lat: null })
  const [whereEnd, setwhereEnd] = useState({ address: null, lon: null, lat: null })
  const [carId, setCarID] = useState(null)
  const [carDistance, setCarDistance] = useState(null)
  const [carTime, setCarTime] = useState(null)
  const [startDetailAddress, setStartDetailAddress] = useState(null)
  const [endDetailAddress, setEndDetailAddress] = useState(null)
  const [endTime ,setEndTime] = useState(null)
  const [carData, setCarData] = useState("")
  const hadleElavator = (event) => {
    setisElavator(event.target.innerText)
  }
  const hadleCarStation = (event) => {
    setisCarStation(event.target.innerText)
  }

  const checkRiding = (event) => {
    setwhatRiding(event.target.innerText)
  }
  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const checkPacking = (event) => {
    setwhatPacking(event.target.innerText)
  }
  const toggleClockDropdown = () => {
    setDropdownClockOpen((prev) => !prev);
  };
  const toggleCarDropdown = () => {
    setDropdownCarOpen((prev) => !prev);
  };
  const getToday = (value) => {
    return value.toISOString().split('T')[0];
  };
  const [isLoading,setIsLoading] =useState(false)
  const goToNextForm = async () => {


    if (isActive === "first") {
      if (startDate && selectedOption && isWhatTime && isWhatCar) {
        const today = new Date()
        if (getToday(startDate) === getToday(today)) {
          console.log(startDate)
          const currentTime = new Date().getHours() * 60 + new Date().getMinutes();
          let targetHour = parseInt(isWhatTime.split(':')[0]) % 12;
          const targetMinute = parseInt(isWhatTime.split(':')[1]);
          const targetOption = isWhatTime.split(' ')[1];

          // selectedOption이 PM이면 targetHour에 12를 더해줌
          if (selectedOption === "PM") {
            targetHour += 12;
          }

          const targetTime = targetHour * 60 + targetMinute;

          // 이미 지나간 시간인 경우
          if (currentTime > targetTime) {
            alert("잘못된 시간입니다!")
            return;
          }
          else {
            setIsActive("second")
            if (activeStep < totalSteps) {
              setActiveStep(activeStep + 1);
            }
          }
        } else {
          setIsActive("second")
          if (activeStep < totalSteps) {
            setActiveStep(activeStep + 1);
          }
        }

      } else {
        console.log("다시")
      }
    }
    else if (isActive === "second") {
      if (whereStart && whereEnd && whatPacking && whatRiding && isElavator && isCarStation) {
        const data = await axios_cal()
        console.log(data)
        setIsActive("third")
        if (activeStep < totalSteps) {
          setActiveStep(activeStep + 1);
        }
      } else { console.log("입력을 해주세요") }


    }

  }


  const hadlesubmit = () => {
    navigate('/recommend')
  }
  const goTobeforeForm = () => {
    if (isActive === "second") { setIsActive("first") }
    else if (isActive === "third") { setIsActive("second") }
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  }
  const handleUserInput = (event) => {
    setuserinput(event.target.value);
  };
  const hadleModal = (event) => {
    setWhatModal(event)
    setIsModalOpen(true)
  }
  const axios_car_list = async () => {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InRlc3QxMjM0Iiwicm9sZSI6IlVTRVIiLCJpZCI6NCwic2lndW5ndSI6MTAwLCJpYXQiOjE3MDY3NDc2NzYsImV4cCI6MTcwNzE3OTY3Nn0.0UtQe8QKEO6KriOAAGD5iJTkmyWIqM0WCCpslvOJWLg';

    try {
      const response = await axios.get('http://192.168.30.125:8080/api/delivery/user/car', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setCarData(response.data.result)
    } catch (error) {
      console.error(error);
    }
  };

  const axios_cal = async () => {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InRlc3QxMjM0Iiwicm9sZSI6IlVTRVIiLCJpZCI6NCwic2lndW5ndSI6MTAwLCJpYXQiOjE3MDY3NDc2NzYsImV4cCI6MTcwNzE3OTY3Nn0.0UtQe8QKEO6KriOAAGD5iJTkmyWIqM0WCCpslvOJWLg';
    let packaging = ""
    let move = ""
    let elevator = ""
    let parking = ""
    if (whatPacking === "포장") { packaging = true }
    else { packaging = false }
    if (whatRiding === "탑승") { move = true }
    else { move = false }
    if (isElavator === "있음") { elevator = true }
    else { elevator = false }
    if (isCarStation === "있읍") { parking = true }
    else { parking = false }
    setIsLoading(true)
    try {
      const response = await axios.post('http://192.168.30.125:8080/api/delivery/user/calculation',
        {
          "carId": carId,
          "departureX": whereStart.lon,
          "departureY": whereStart.lat,
          "destinationX": whereEnd.lon,
          "destinationY": whereEnd.lat,
          "packaging": packaging,
          "move": move,
          "elevator": elevator,
          "parking": parking,
          "startTime": "2023-01-01 18:00"
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      
      setcalresult(response.data.result.price)
      setEndTime(response.data.result.endTime)
      setIsLoading(false)

      return response
    } catch (error) {
      console.error(error);
      return error
    }
   
  }



  useEffect(() => {
    axios_car_list();
  }, []);
  return (<>
    <div style={{
      position: 'absolute', width: '20%', top: '15%',
      left: '70%',
    }}>
      <ProgressBar steps={totalSteps} activeStep={activeStep} />
    </div>
    <AnimatePresence>
      {isModalOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)}
          style={{
            zIndex: "99",
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // 배경색 및 투명도 조절
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <div style={{
            position: 'relative',
            width: '40%',
            backgroundColor: 'white', // 내용의 배경색
            padding: '20px',
            borderRadius: '8px', // 내용의 모서리 둥글게
          }}>
            <Address whatModal={whatModal} setwhereStart={setwhereStart} setwhereEnd={setwhereEnd} setIsModalOpen={setIsModalOpen} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>

    <AnimatePresence>
      {isLoading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)}
          style={{
            zIndex: "99",
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // 배경색 및 투명도 조절
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <div style={{
            position: 'relative',
            width: '40%',
            // backgroundColor: 'white', // 내용의 배경색
            padding: '20px',
            borderRadius: '8px', // 내용의 모서리 둥글게
          }}>
            <div className="d-flex justify-content-center align-items-center gap-4 "style={{width:"100%"}}>
            <img style={{width:"20rem",height:"20rem"}}  src="./cal.png"/>
            {/* <h2 style={{color:"white"}}>계산이 진행중입니다..</h2> */}
            <Wave/>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>

    <AnimatePresence mode="wait">

      {isActive === "first" && <motion.div key="firstForm" >

        <motion.div initial={{ opacity: 0.1 }} animate={{ opacity: 1 }} exit={{ opacity: 0.1 }} transition={{ duration: 0.3 }}  >
          <Link to="/dashboard" className="d-flex align-items-center gap-2" style={{
            position: 'absolute',
            top: '10%',
            left: '10%',
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

        <motion.h5 initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} onClick={goToNextForm} className="d-flex align-items-center gap-2" style={{
          position: 'absolute',
          top: '85%',
          left: '85%',
          // 이미지의 높이를 설정해주세요
          cursor: 'pointer',
        }}>
          <motion.p className="m-0" style={{ color: "#006EEE" }}>다음으로&rarr;</motion.p>

        </motion.h5>
        <motion.div className="d-flex justify-content-center align-items-center" style={{ width: "100vw", height: "100vh" }} initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }} transition={{ duration: 0.3 }} >

          <div className="col-12 d-flex flex-column justify-content-center align-items-center">
            <div className="col-6 gap-5 d-flex flex-column" >

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
                        <Car data={carData} setisWhatCar={setisWhatCar} toggleCarDropdown={toggleCarDropdown} setCarID={setCarID} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>}
      {isActive === "second" && <motion.div key="secondForm">
        <motion.h5 initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} onClick={goToNextForm} className="d-flex align-items-center gap-2" style={{
          position: 'absolute',
          top: '85%',
          left: '85%',
          // 이미지의 높이를 설정해주세요
          cursor: 'pointer',
        }}>
          <motion.p className="m-0" style={{ color: "#006EEE" }}>다음으로&rarr;</motion.p>

        </motion.h5>

        <motion.h5 initial={{ opacity: 0.1 }} animate={{ opacity: 1 }} exit={{ opacity: 0.1 }} transition={{ duration: 0.3 }} onClick={goTobeforeForm} to="/dashboard" className="d-flex align-items-center gap-2" style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          // 이미지의 높이를 설정해주세요
          cursor: 'pointer',
        }}><img style={{
          width: '2rem', // 이미지의 너비를 설정해주세요
          height: '2rem',
        }}
          src="/box-arrow-left.png"  // 나가기 버튼 이미지의 경로를 설정해주세요
          alt="Exit Button"

          />
          <motion.p className="m-0" style={{ color: "#006EEE" }}>이전으로</motion.p>
        </motion.h5>
        <motion.div className="col-12 d-flex justify-content-center align-items-center " style={{ height: "100vh", widt: "100vw" }} initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }} transition={{ duration: 0.3 }}  >
          <div className="col-8 d-flex gap-3 ">
            <motion.div className="col-6 d-flex flex-column gap-4 p-3">
              <div className="d-flex justify-content-center gap-1 align-items-center text-center" style={{ width: "100%", height: "2rem" }}>
                <div className="col-1 fw-bold">출발 : </div>
                <div className="col-9 shadow rounded-4 fw-bold d-flex justify-content-center align-items-center" style={{ height: "100%" }} > {whereStart.address ? (
                  <p className="m-0">{whereStart.address}</p>
                ) : (
                  <p className="m-0 text-muted">출발지를 입력해주세요.</p>
                )}</div>
                <button onClick={() => hadleModal("start")} className="btn-primary btn col-2 d-flex justify-content-center align-items-center" style={{ height: "100%" }}><p className="m-0">찾기</p></button>
              </div>
              <div>
                <div className="col-9 d-flex " style={{ width: "100%" }} >
                  <div className="col-2 fw-bold">출발상세주소 : </div>
                  <input style={{ border: "none" }} className="col-10 shadow fw-bold text-center rounded-4 " placeholder="상세주소를 입력해주세요!" type="text" onChange={(event) => setStartDetailAddress(event.target.value)} ></input>
                </div>
              </div>
              <div className="d-flex justify-content-center gap-1 align-items-center text-center" style={{ width: "100%", height: "2rem" }}>
                <div className="col-1 fw-bold">도착 : </div>
                <div className="col-9 shadow rounded-4 fw-bold d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
                  {whereEnd.address ? (
                    <p className="m-0">{whereEnd.address}</p>
                  ) : (
                    <p className="m-0 text-muted">도착지를 입력해주세요.</p>
                  )}
                </div>
                <button onClick={() => hadleModal("end")} className="btn-primary btn col-2 d-flex justify-content-center align-items-center" style={{ height: "100%" }}><p className="m-0">찾기</p></button>
              </div>
              <div className="col-9 d-flex " style={{ width: "100%" }} >
                <div className="col-2 fw-bold">도착상세주소 : </div>
                <input style={{ border: "none" }} className="col-10 shadow fw-bold text-center rounded-4 " placeholder="상세주소를 입력해주세요!" type="text" onChange={(event) => setEndDetailAddress(event.target.value)} ></input>
              </div>
              <AnimatePresence>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="d-flex gap-3">
                  <p className="m-0">거리:{carDistance}</p>
                  <p className="m-0">시간:{carTime}</p>
                </motion.div>
              </AnimatePresence>

              <div style={{ height: "100%", width: "100%", border: "solid 1px #006EEE" }} className=" p-3 shadow rounded-5">{whereEnd.address && whereStart.address && <Map key={`${whereStart.lat}-${whereStart.lon}-${whereEnd.lat}-${whereEnd.lon}`} start_lat={whereStart.lat} start_lon={whereStart.lon} end_lat={whereEnd.lat} end_lon={whereEnd.lon} setCarDistance={setCarDistance} setCarTime={setCarTime} />}</div>
              <div>

              </div>
            </motion.div>

            <div className="col-6 p-3 gap-4 d-flex flex-column" >
              <div className="d-flex justify-content-center gap-2 align-items-center text-center">
                <p className="m-0 col-3 fw-bold">포장여부</p>
                <div className="col-3">
                  <CheckButton checkPacking={checkPacking} isActive={whatPacking === "포장"} name="포장" />
                </div>
                <div className="col-3">
                  <CheckButton className="col-3" checkPacking={checkPacking} isActive={whatPacking === "미포장"} name="미포장" />
                </div>
                <div className="col-3">

                </div>
              </div>

              <div className="d-flex justify-content-center gap-2 align-items-center text-center">
                <p className="m-0 col-3 fw-bold">탑승여부</p>
                <div className="col-3">
                  <CheckButton checkPacking={checkRiding} isActive={whatRiding === "탑승"} name="탑승" />
                </div>
                <div className="col-3">
                  <CheckButton checkPacking={checkRiding} isActive={whatRiding === "미탑승"} name="미탑승" />
                </div>
                <div className="col-3"></div>
              </div>

              <div className="d-flex justify-content-center gap-2 align-items-center text-center">
                <p className="m-0 col-3 fw-bold">엘레베이터</p>
                <div className="col-3">
                  <CheckButton checkPacking={hadleElavator} isActive={isElavator === "있음"} name="있음" />
                </div>
                <div className="col-3">
                  <CheckButton checkPacking={hadleElavator} isActive={isElavator === "없음"} name="없음" />
                </div>
                <div className="col-3"></div>
              </div>

              <div className="d-flex justify-content-center gap-2 align-items-center text-center">
                <p className="m-0 col-3 fw-bold">주차장</p>
                <div className="col-3">
                  <CheckButton checkPacking={hadleCarStation} isActive={isCarStation === "있음"} name="있음" />
                </div>
                <div className="col-3">
                  <CheckButton checkPacking={hadleCarStation} isActive={isCarStation === "없음"} name="없음" />
                </div>
                <div className="col-3"></div>
              </div>
              <div className="d-flex justify-content-center gap-2  text-center">
                <p className="m-0 col-3 fw-bold">가구 사진</p>
                <div className="col-9 d-flex">
                  <PhotoView selectedFiles={selectedFiles} setSelectedFiles={setSelectedFiles} />
                </div>
              </div>
              <div className="d-flex justify-content-center gap-2  text-center">
                <p className="m-0 col-3 fw-bold">추가사항</p>
                <div className="col-9 d-flex">
                  <textarea
                    className="shadow border rounded-3 p-3"
                    value={userinput}
                    onChange={handleUserInput}
                    placeholder="여기에 추가사항을 입력하세요..."
                    rows={4}  // 원하는 행 수로 조절
                    style={{ width: "100%", resize: "none" }}
                  />
                </div>
              </div>
            </div>
          </div>

        </motion.div>

      </motion.div>}
      {isActive === "third" && <div>
        {/* <motion.h5 initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} onClick={goToNextForm} className="d-flex align-items-center gap-2" style={{
          position: 'absolute',
          top: '85%',
          left: '85%',
          // 이미지의 높이를 설정해주세요
          cursor: 'pointer',
        }}>
          <motion.p className="m-0" style={{ color: "#006EEE" }}>다음으로&rarr;</motion.p>

        </motion.h5> */}

        <motion.h5 initial={{ opacity: 0.1 }} animate={{ opacity: 1 }} exit={{ opacity: 0.1 }} transition={{ duration: 0.3 }} onClick={goTobeforeForm} to="/dashboard" className="d-flex align-items-center gap-2" style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          // 이미지의 높이를 설정해주세요
          cursor: 'pointer',
        }}><img style={{
          width: '2rem', // 이미지의 너비를 설정해주세요
          height: '2rem',
        }}
          src="/box-arrow-left.png"  // 나가기 버튼 이미지의 경로를 설정해주세요
          alt="Exit Button"

          />
          <motion.p className="m-0" style={{ color: "#006EEE" }}>이전으로</motion.p>
        </motion.h5>

        <motion.div style={{ width: "100vw", height: "100vh" }} initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 100 }} transition={{ duration: 0.3 }}
          className="col-12 d-flex justify-content-center align-items-center" >
          <div className="col-5 p-3 d-flex flex-column ">
            <div style={{ borderBottom: "solid 1px #006EEE" }} className="d-flex flex-column gap-2 p-3">
              <div className="d-flex text-center">
                <p className="m-0 col-4">일시</p>
                <div className="col-8 d-flex  gap-3  justify-content-center">
                  <p className="m-0">{getToday(startDate)}</p>
                  <p className="m-0">{isWhatTime}</p>
                  <p className="m-0">{selectedOption}</p>
                </div>
              </div>

              <div className="d-flex text-center">
                <p className="m-0 col-4">출발</p>
                <div className="col-8 d-flex  gap-3  justify-content-center">
                  <p className="m-0">{whereStart.address}</p>
                </div>
              </div>

              <div className="d-flex text-center">
                <p className="m-0 col-4">도착</p>
                <div className="col-8 d-flex  gap-3  justify-content-center">
                  <p className="m-0">{whereEnd.address}</p>
                </div>
              </div>

              <div className="d-flex text-center">
                <p className="m-0 col-4">차량</p>
                <div className="col-8 d-flex  gap-3  justify-content-center">
                  <p className="m-0">{isWhatCar}</p>
                </div>
              </div>
            </div>

            <div style={{ borderBottom: "solid 1px #006EEE" }} className="d-flex flex-column gap-2 p-3">
              <div className="d-flex text-center">
                <p className="m-0 col-4">포장</p>
                <div className="col-8 d-flex  gap-3  justify-content-center">
                  <p className="m-0">{whatPacking}</p>
                </div>
              </div>

              <div className="d-flex text-center">
                <p className="m-0 col-4">탑승</p>
                <div className="col-8 d-flex  gap-3  justify-content-center">
                  <p className="m-0">{whatRiding}</p>
                </div>
              </div>

              <div className="d-flex text-center">
                <p className="m-0 col-4">엘레베이터</p>
                <div className="col-8 d-flex  gap-3  justify-content-center">
                  <p className="m-0">{isElavator}</p>
                </div>
              </div>

              <div className="d-flex text-center">
                <p className="m-0 col-4">주차장</p>
                <div className="col-8 d-flex  gap-3  justify-content-center">
                  <p className="m-0">{isCarStation}</p>
                </div>
              </div>

              <div className="d-flex text-center">
                <p className="m-0 col-4">가구사진</p>
                {selectedFiles && selectedFiles.length !== 0 && (
                  <div className="col-8 d-flex gap-3 justify-content-center shadow" style={{ overflowX: "auto" }}>
                    {selectedFiles.map((file, index) => (
                      <div key={index} className="d-flex flex-column justify-content-center align-items-center">
                        <img
                          src={file.previewURL}
                          alt={`선택된 파일 ${index + 1} 미리보기`}
                          style={{ width: "7rem", height: "7rem" }}
                        />
                      </div>
                    ))}
                  </div>
                )}


              </div>

              <div className="d-flex text-center ">
                <p className="m-0 col-4">추가사항</p>
                <div className="col-8 d-flex  gap-3  justify-content-center">
                  {userinput}
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <p className="m-0 col-4 text-center">예상 가격</p>
              <p className="fw-bold m-0 col-8 text-center">{calresult.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
            </div>
            <button onClick={hadlesubmit} className="mt-3 btn btn-primary">제출</button>
          </div>





        </motion.div>
      </div>
      }

    </AnimatePresence>


  </>
  );

}

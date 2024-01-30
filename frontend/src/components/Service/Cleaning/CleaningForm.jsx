import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ReactDatePicker from "react-datepicker";
import Calendar from "./Calendar";
import "react-datepicker/dist/react-datepicker.css";
import Clock from "./Clock";
import { Link, useNavigate } from "react-router-dom";
import CheckButton from "./Check_Button";
import PhotoView from "./PhotoView";
import ProgressBar from "./Progressbar"; // 대소문자 이슈

import Address from "./Address";
import Map from "./Map";




export default function CleaningFrom() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [isDropdownClockOpen, setDropdownClockOpen] = useState(false);
  const [isDropdownCarOpen, setDropdownCarOpen] = useState(false)
  const [isWhatTime, setisWhatTime] = useState()
  const [isWhatCar, setisWhatCar] = useState()
  const [whatPacking, setwhatPacking] = useState(null)
  const [whatRiding, setwhatRiding] = useState(null)
  const [isElavator, setisElavator] = useState(null)
  const [isCarStation, setisCarStation] = useState(null)
  const [userinput, setuserinput] = useState("")
  const [isActive, setIsActive] = useState("first")
  const [isTime, setIsTime] = useState("")
  const [selectedFiles, setSelectedFiles] = useState([]);
  const navigate = useNavigate()
  const [activeStep, setActiveStep] = useState(1);
  const totalSteps = 3; // 전체 단계 수에 맞게 수정
  const [whatModal, setWhatModal] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [whereStart, setwhereStart] = useState({})
  const [whereEnd, setwhereEnd] = useState({})
  const [isBalkoni, setIsBalkoni] = useState(null)
  const [isBok, setIsBok] = useState(null)
  const [detailAddress, setDetailAddress] = useState("")
  const [ispyung, setIsPyung] = useState("m^2")
  const [whatHouse, setWhatHouse] = useState(null)
  const [roomCounts, setRoomCounts] = useState(null)
  const [windowCounts, setWindowCounts] = useState(null)
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

  const goToNextForm = () => {

    if (isActive === "first") { setIsActive("second") }
    else if (isActive === "second") { setIsActive("third") }
    if (activeStep < totalSteps) {
      setActiveStep(activeStep + 1);
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
  const handleIsPyung = () => {
    if (ispyung === "m^2") { setIsPyung("평") }
    else { setIsPyung("m^2") }
  }

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

    <AnimatePresence mode="wait">

      {isActive === "first" && <motion.div key="firstForm">

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
        <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }} transition={{ duration: 0.3 }} >
          <motion.div style={{ position: 'relative' }} whileHover={{ fontWeight: "bold" }} >
            {/* 나가기 버튼 이미지 */}



          </motion.div>
          <div className="col-12 d-flex flex-column justify-content-center align-items-center">
            <div className="col-6 gap-5 d-flex flex-column" style={{ marginTop: "20rem", }}>

              <div className="mb-3 d-flex align-items-center ">
                <div className="col-3">
                  <Calendar setStartDate={setStartDate} startDate={startDate} isTime={isTime} setIsTime={setIsTime} />
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
                    <h3 className="m-0">시에 청소가 필요해요! </h3>
                  </div>
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
        <motion.div className="col-12 d-flex justify-content-center " style={{ marginTop: "14rem" }} initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }} transition={{ duration: 0.3 }}  >
          <div className="col-8 d-flex gap-3 ">
            <div className="col-6 d-flex flex-column gap-5 p-3 justify-content-center align-items-center">
              <div className="d-flex  gap-1 align-items-center " style={{ width: "100%", height: "2rem" }}>
                <div className="col-2 fw-bold">집주소 : </div>
                <div className="col-8 shadow rounded-4 fw-bold d-flex justify-content-center align-items-center" style={{ height: "100%" }} ><p className="m-0"> {whereStart.address ? (
                  <p className="m-0">{whereStart.address}</p>
                ) : (
                  <p className="m-0 text-muted">주소를 입력해주세요!</p>
                )}</p></div>
                <button onClick={() => hadleModal("start")} className="btn-primary btn col-2 d-flex justify-content-center align-items-center" style={{ height: "2rem" }}><p className="m-0">찾기</p></button>
              </div>

              <div className="col-9 d-flex " style={{ width: "100%" }} >
                <div className="col-2 fw-bold">상세주소 : </div>
                <input style={{ border: "none" }} className="col-10 shadow fw-bold text-center rounded-4 " placeholder="상세주소를 입력해주세요!" type="text" onChange={(event) => setDetailAddress(event.target.value)} value={detailAddress}></input>
              </div>

              <div className="col-9 d-flex " style={{ width: "100%" }} >
                <div className="col-2 fw-bold">집크기 : </div>
                <div className="col-12 d-flex gap-2 " >
                  <input style={{ border: "none" }} className="col-8 shadow fw-bold text-center rounded-4 " placeholder="집크기를 입력해주세요!" type="number" onChange={(event) => setWhatHouse(event.target.value)} value={whatHouse}></input>
                  <button style={{ height: "2rem" }} onClick={handleIsPyung} className="btn-primary btn col-2 d-flex justify-content-center align-items-center" ><p className="m-0">{ispyung}</p></button>
                </div>
              </div>
              <div className="d-flex col-12 ">
                <div className=" d-flex col-6 gap-1 align-items-center"  >
                  <div className=" col-4 fw-bold">방개수 : </div>
                  <input style={{ border: "none",height:"2rem" }} className="col-6 shadow fw-bold text-center rounded-4 " placeholder="방개수" type="number" onChange={(event) => setRoomCounts(event.target.value)} value={roomCounts}></input>
                  <div className="d-flex  align-items-center fw-bold">개</div>
                </div>

                <div className="d-flex col-6 gap-1 align-items-center"  >
                  <div className="col-4 fw-bold">창개수 : </div>
                  <input style={{ border: "none",height:"2rem" }} className="col-6 shadow fw-bold text-center rounded-4 " placeholder="창개수" type="number" onChange={(event) => setWindowCounts(event.target.value)} value={windowCounts}></input>
                 <div className="d-flex  align-items-center fw-bold">개</div>
                </div>
              </div>
            </div>

            <div className="col-6 p-3 gap-4 d-flex flex-column" >
              <div className="d-flex justify-content-center gap-2 align-items-center text-center">
                <p className="m-0 col-3 fw-bold">발코니/베란다</p>
                <div className="col-3">
                  <CheckButton checkPacking={() => setIsBalkoni("있음")} isActive={isBalkoni === "있음"} name="있음" />
                </div>
                <div className="col-3">
                  <CheckButton checkPacking={() => setIsBalkoni("없음")} isActive={isBalkoni === "없음"} name="없음" />
                </div>
                <div className="col-3"></div>
              </div>

              <div className="d-flex justify-content-center gap-2 align-items-center text-center">
                <p className="m-0 col-3 fw-bold">복층인가요?</p>
                <div className="col-3">
                  <CheckButton checkPacking={() => setIsBok("네")} isActive={isBok === "네"} name="네" />
                </div>
                <div className="col-3">
                  <CheckButton checkPacking={() => setIsBok("아니요")} isActive={isBok === "아니요"} name="아니요" />
                </div>
                <div className="col-3"></div>
              </div>

              <div className="d-flex flex-column  gap-2">
                <p style={{ width: "100%" }} className="m-0 col-3 fw-bold ">필요 추가 서비스를 선택해 주세요</p>
                <div className="d-flex gap-3 align-items-center">
                  <div className="col" >
                    <CheckButton checkPacking={hadleElavator} isActive={isElavator === "있음"} name="곰팡이 청소" />
                  </div>
                  <div className="col">
                    <CheckButton checkPacking={hadleElavator} isActive={isElavator === "없음"} name="외부 유리창 청소" />
                  </div>
                  <div className="col" >
                    <CheckButton checkPacking={hadleElavator} isActive={isElavator === "없음"} name="세집 증후군 제거" />
                  </div>
                  <div className="col">
                    <CheckButton checkPacking={hadleElavator} isActive={isElavator === "없음"} name="스티커&스트지 제거" />
                  </div>
                </div>

              </div>

              <div className="d-flex justify-content-center gap-2  text-center">
                <p className="m-0 col-3 fw-bold">참고 사진</p>
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

        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 100 }} transition={{ duration: 0.3 }}
          className="col-12 d-flex justify-content-center align-items-center" style={{ marginTop: "11rem" }}>
          <div className="col-5 p-3 d-flex flex-column ">
            <div style={{ borderBottom: "solid 1px #006EEE" }} className="d-flex flex-column gap-2 p-3">
              <div className="d-flex text-center">
                <p className="m-0 col-4">일시</p>
                <div className="col-8 d-flex  gap-3  justify-content-center">
                  <p className="m-0">{isTime}</p>
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
                <div className="col-8 d-flex  gap-3  justify-content-center shadow " style={{ overflowX: "auto" }}>
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
              </div>

              <div className="d-flex text-center ">
                <p className="m-0 col-4">추가사항</p>
                <div className="col-8 d-flex  gap-3  justify-content-center">
                  {userinput}
                </div>
              </div>
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

import { Button } from "react-bootstrap";
import StarRating from "../../Recommend/StarRating";
import { useState } from "react";
import { Link } from 'react-router-dom';

import { AnimatePresence, motion } from "framer-motion"
import UsedProfile from "./SellProduct/UsedProfile";
import UsedView from "./SellProduct/UsedView";
import HelpMeToPeopleView from "./HelpMeToPeople/HelpMeToPeopleView";
import HelpPeopleToMeView from "./HelpPeopleToMe/HelpPeopleToMeView";
import BuyView from "./BuyProduct/BuyView";
import ReviewToMeView from "./ReviewToMe/ReviewToMeView";
import ReviewToPeopleView from "./ReviewToPeople/ReviewToMeView";


export default function UserProfile() {
   const [changeButton,setChangeButton] = useState("판매 물품")
    const handleChangeButton = ( event)  =>{
        setChangeButton(event.target.innerText)
        setShowUsedDropDown(false);
        setShowshowHelpDropDown(false);
        setshowHistoryDropDown(false);
        setshowreviewDropDown(false);
    }



    const [showUsedDropDown, setShowUsedDropDown] = useState(false);

    const handleDropdownToggle = () => {
        setShowUsedDropDown(!showUsedDropDown);
        setShowshowHelpDropDown(false);
        setshowHistoryDropDown(false);
        setshowreviewDropDown(false);
    };

    const [showHelpDropDown, setShowshowHelpDropDown] = useState(false);

    const handleHelpDropdownToggle = () => {
        setShowUsedDropDown(false);
        setShowshowHelpDropDown(!showHelpDropDown);
        setshowHistoryDropDown(false);
        setshowreviewDropDown(false);
    };

    const [showHistoryDropDown, setshowHistoryDropDown] = useState(false);

    const handleHistoryDropdownToggle = () => {
        setShowUsedDropDown(false);
        setShowshowHelpDropDown(false);
        setshowHistoryDropDown(!showHistoryDropDown);
        setshowreviewDropDown(false);
    };

    const [showreviewDropDown, setshowreviewDropDown] = useState(false);

    const handlereviewDropdownToggle = () => {
        setShowUsedDropDown(false);
        setShowshowHelpDropDown(false);
        setshowHistoryDropDown(false);
        setshowreviewDropDown(!showreviewDropDown);
    };
    return <>
        <div className="d-flex col-8 gap-5 align-items-start p-3">
            <div className="d-flex col-4 flex-column align-items-center rounded-5 gap-3 p-4 shadow">
                <div className="d-flex justify-content-center align-items-center gap-2">
                    <img style={{ width: "5rem", height: "5rem" }} src="./randomimg.png" />
                    <div className="text-center">
                        <p className="m-0 fw-bold">OOO님</p>
                        <p className="m-0">반가워요 !</p>
                    </div>
                </div>
                <div className="d-flex gap-2">
                    <p className="text-muted m-0" style={{ fontSize: "0.75rem" }}>회원탈퇴</p>
                    <p className="text-muted m-0" style={{ fontSize: "0.75rem" }}>정보수정</p>
                </div>
                <div className="d-flex flex-column" style={{ width: "80%" }}>
                    <div className="d-flex justify-content-between">
                        <p>이메일 : </p>
                        <p >we0620@naver.com</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="m-0">보유포인트 : </p>
                        <p className="m-0">3950P</p>
                    </div>
                    <Link to={`/mypoint/1`} style={{ fontSize: "0.75rem", marginLeft: "auto" }}>내역조회</Link>
                </div>

                <div className="d-flex justify-content-center gap-3" style={{ width: "100%" }}>
                    <div className="d-flex align-items-center justify-content-center border border-primary rounded-5 bg-white col-3 text-center shadow" style={{ height: "2rem" }}>
                        <p className="m-0">asdf</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-center border border-primary rounded-5 bg-white col-3 text-center shadow" style={{ height: "2rem" }}>
                        <p className="m-0">asdf</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-center border border-primary rounded-5 bg-white col-3 text-center shadow" style={{ height: "2rem" }}>
                        <p className="m-0">asdf</p>
                    </div>
                </div>
                <h4 className="m-0">나의 평점 : 3.8점</h4>
                <StarRating rating={3.8} />
                <div style={{ width: "100%" }} className="d-flex flex-column p-4 gap-2">
                    <div className="d-flex align-items-center justify-content-between" style={{ position: "relative" }}  >
                        <p className="m-0">중고</p>
                        <motion.button className="btn btn-light" onClick={handleDropdownToggle} whileHover={{ x: 5 }} transition={{ duration: 0.3 }} >
                            &rarr;
                        </motion.button>
                        <AnimatePresence>
                            {showUsedDropDown && (
                                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}
                                    className="bg-white gap-2  p-3 shadow rounded-3 d-flex flex-column justify-content-center align-items-center" style={{ position: "absolute", top: "0%", left: "110%", width: "70% ", zIndex: "10" }}>
                                    {/* 드롭다운 아이템이 여기에 들어갑니다 */}
                                    <motion.button whileHover={{ y: -5, fontWeight: "bold" }} onClick={handleChangeButton} className="m-0 btn bg-white">판매 물품</motion.button>
                                    <motion.button whileHover={{ y: -5, fontWeight: "bold" }} onClick={handleChangeButton} className="m-0 btn bg-white">구매 물품</motion.button>
                                    {/* ... 필요한 만큼 아이템을 추가합니다 */}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="d-flex align-items-center justify-content-between" style={{ position: "relative" }}  >
                        <p className="m-0">도움</p>
                        <motion.button className="btn btn-light" onClick={handleHelpDropdownToggle} whileHover={{ x: 5 }} transition={{ duration: 0.3 }} >
                            &rarr;
                        </motion.button>
                        <AnimatePresence>
                            {showHelpDropDown && (
                                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}
                                    className="bg-white gap-2  p-3 shadow rounded-3 d-flex flex-column justify-content-center align-items-center" style={{ position: "absolute", top: "0%", left: "110%", width: "70% ", zIndex: "10" }}>
                                    {/* 드롭다운 아이템이 여기에 들어갑니다 */}
                                    <motion.button whileHover={{ y: -5, fontWeight: "bold" }} onClick={handleChangeButton} className="m-0 btn bg-white">도움 구인</motion.button>
                                    <motion.button whileHover={{ y: -5, fontWeight: "bold" }} onClick={handleChangeButton} className="m-0 btn bg-white">도움 내역</motion.button>
                                    {/* ... 필요한 만큼 아이템을 추가합니다 */}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* <div className="d-flex align-items-center justify-content-between" style={{ position: "relative" }}  >
                        <p className="m-0">활동 이력</p>
                        <motion.button className="btn btn-light" onClick={handleHistoryDropdownToggle} whileHover={{ x: 5 }} transition={{ duration: 0.3 }} >
                            &rarr;
                        </motion.button>
                        <AnimatePresence>
                            {showHistoryDropDown && (
                                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}
                                    className="bg-white gap-2  p-3 shadow rounded-3 d-flex flex-column justify-content-center align-items-center" style={{ position: "absolute", top: "0%", left: "110%", width: "70% ", zIndex: "10" }}>
                                  
                                    <motion.button whileHover={{ y: -5, fontWeight: "bold" }} onClick={handleChangeButton} className="m-0 btn bg-white">알림 내역</motion.button>
                                    <motion.button whileHover={{ y: -5, fontWeight: "bold" }} onClick={handleChangeButton} className="m-0 btn bg-white">포인트 사용이력</motion.button>
                              
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div> */}

                    <div className="d-flex align-items-center justify-content-between" style={{ position: "relative" }}  >
                        <p className="m-0">후기</p>
                        <motion.button className="btn btn-light" onClick={handlereviewDropdownToggle} whileHover={{ x: 5 }} transition={{ duration: 0.3 }} >
                            &rarr;
                        </motion.button>
                        <AnimatePresence>
                            {showreviewDropDown && (
                                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}
                                    className="bg-white gap-2  p-3 shadow rounded-3 d-flex flex-column justify-content-center align-items-center" style={{ position: "absolute", top: "0%", left: "110%", width: "70% ", zIndex: "10" }}>
                                    {/* 드롭다운 아이템이 여기에 들어갑니다 */}
                                    <motion.button whileHover={{ y: -5, fontWeight: "bold" }} onClick={handleChangeButton} className="m-0 btn bg-white">받은 후기</motion.button>
                                    <motion.button whileHover={{ y: -5, fontWeight: "bold" }} onClick={handleChangeButton} className="m-0 btn bg-white">보낸 후기</motion.button>
                                    {/* ... 필요한 만큼 아이템을 추가합니다 */}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>






                </div>
            </div>
            <div className="d-flex col-8 flex-column " style={{height:"100%"}}>
                {changeButton === "판매 물품" && <UsedView/> }
                {changeButton === "구매 물품" && <BuyView/> } 

                {changeButton === "도움 구인" && <HelpPeopleToMeView/> }
                {changeButton === "도움 내역" && <HelpMeToPeopleView/> }

                {/* {changeButton === "알림 내역" && <UsedView/> }
                {changeButton === "포인트 사용이력" && <UsedView/> }       */}

                {changeButton === "받은 후기" && <ReviewToMeView/> }
                {changeButton === "보낸 후기" && <ReviewToPeopleView/> }
            </div>
        </div>
    </>
}
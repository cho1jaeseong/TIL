import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { api } from "../../../services/api";
export default function NewModal({ setRequestId, requestId }) {
    const [result, setResult] = useState(null)
    const [point, setPoint] = useState(null)

    useEffect(() => {
        setRequestId({ "requestList": "청소", mappingId: "1", Id: "1", price: 1000000 })
        // setResult({
        //     "id": 2,
        //     "carName": "1톤트럭",
        //     "startTime": "2024-02-07",
        //     "endTime": "2024-03-05",
        //     "departure": "남양산역",
        //     "departureDetail": "반도유보라5차512동1602호",
        //     "destination": "서울",
        //     "destinationDetail": "서울시 서울역",
        //     "packaging": true,
        //     "move": false,
        //     "elevator": true,
        //     "parking": true,
        //     "movelist": "이게뭔지몰라사실저게뭔지도몰라그냥내짐싸게싸게보내줘",
        //     "deliveryImages": [
        //         "./randomimg.png",
        //         "./randomimg.png",
        //         "./randomimg.png",

        //     ],
        // })
        setResult({
            "reservationTime": "2024-02-07",
            "roomSize": 30,
            "roomCount": 5,
            "balconyExistence": true,
            "windowCount": 10,
            "duplexRoom": true,
            "mold": false,
            "externalWindow": true,
            "houseSyndrome": true,
            "removeSticker": false,
            "address": "경상남도 남양산역",
            "addressDetail": "반도유보라 5차 512동1602호",
            "cleanImages": [
                "./randomimg.png",
                "./randomimg.png",
                "./randomimg.png",
                "./randomimg.png",
                "./randomimg.png",
                "./randomimg.png",
                "./randomimg.png",
                "./randomimg.png",
                "./randomimg.png",
            ],
        })
    }, [])
    // const reservationDetail = async () => {
    //     let service = ""
    //     if (requestId.requestList === "용달") { service = "delivery" }
    //     else { service = "clean" }
    //     try {
    //         const response = await api.get(
    //             `/${service}/${requestId.Id}`,

    //         );
    //         setResult(response.data.result)
    //         return response.data.result
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    // const MakeConfirm = async () => {
    //     let service = ""
    //     if (requestId.requestList === "용달") { service = "delivery" }
    //     else { service = "clean" }
    //     try {
    //         const response = await api.post(
    //             `/${service}/user/reservation-complete`,
    //             {
    //                 "mappingId": requestId.mappingId,
    //                 "point": point,
    //             }
    //         );
    //         console.log(response)
    //         return
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    const handleClose = (e) => {
        // 모달 외부의 영역을 클릭한 경우에만 닫기
        if (e.target === e.currentTarget) {
            setRequestId(null);
        }
    }
    const handleInput = (e) => {
        const inputValue = e.target.value;
        const maxValue = requestId.price / 10;

        if (inputValue > maxValue) {
            // 최대값을 초과하는 경우 혹은 다른 유효성 검사를 수행할 수 있습니다.
            // 여기서는 입력값을 최대값으로 설정합니다.
            setPoint(maxValue);
        } else {
            // 유효한 경우에는 입력값을 설정합니다.
            setPoint(inputValue);
        }
    };
    return <>
        {requestId && requestId.Id && requestId.mappingId && requestId.requestList && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={handleClose}
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
                    height: "50%",
                    overflow: "auto",
                    backgroundColor: 'white', // 내용의 배경색
                    padding: '20px',
                    borderRadius: '8px', // 내용의 모서리 둥글게
                }}>
                    {requestId.requestList === "용달" ? <div>
                        <div className="d-flex justify-content-between"><p>차량 </p><p>{result.carName}</p></div>
                        <div className="d-flex justify-content-between"><p>시작 시간</p><p>{result.startTime}</p></div>
                        <div className="d-flex justify-content-between"><p>끝나는 시간 </p><p>{result.endTime}</p></div>
                        <div className="d-flex justify-content-between"><p>출발지 주소</p><p>{result.departure}</p></div>
                        <div className="d-flex justify-content-between"><p>출발지 상세주소</p><p>{result.departureDetail}</p></div>
                        <div className="d-flex justify-content-between"><p>도착지 주소</p><p>{result.destination}</p></div>
                        <div className="d-flex justify-content-between"><p>도착지 상세주소</p><p>{result.destinationDetail}</p></div>
                        <div className="d-flex justify-content-between"><p>포장여부</p><p>{result.packaging === true ? "포장" : "미포장"}</p></div>
                        <div className="d-flex justify-content-between"><p>탑승 여부</p><p>{result.move === true ? "탑승" : "미탑승"}</p></div>
                        <div className="d-flex justify-content-between"><p>엘레베이터</p><p>{result.elevator === true ? "있음" : "없음"}</p></div>
                        <div className="d-flex justify-content-between"><p>주차장</p><p>{result.parking === true ? "있음" : "없음"}</p></div>
                        <p>추가사항 : {result.moveList}  </p>
                        <div>
                            <p >첨부사진</p>
                            <div style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
                                {result.deliveryImages.map((item, index) => (
                                    <img key={index} style={{ width: "5rem", height: "5rem", marginRight: '5px' }} src={item} alt={`cleanImage-${index}`} />
                                ))}
                            </div>
                        </div>
                        <div className="p-3 rounded-4" style={{ border: "blue 1px solid" }}>
                            <div className="d-flex justify-content-between"><p className="m-0">가격</p><p className="m-0">{requestId.price}</p></div>
                            <div style={{ borderBottom: '1px solid blue' }} className="d-flex justify-content-between"><p style={{ fontSize: "0.75rem", }}>사용포인트</p><div><input value={point} onChange={handleInput} className="text-end  m-0" type="number"></input>P</div></div>
                            <div className="d-flex justify-content-between"><p className="m-0">최종가격</p><p className="m-0">{requestId.price - point}</p></div>
                            <div className="d-flex"><button className="btn btn-primary p-1" style={{ marginLeft: "auto", height: "2rem" }} ><p className="m-0" style={{ fontSize: "0.75rem" }}>포인트사용</p></button></div>
                        </div>
                    </div> : <div className="d-flex flex-column p-3">
                        <div className="d-flex justify-content-between"><p>예약시간 </p><p>{result.reservationTime}</p></div>
                        <div className="d-flex justify-content-between"><p>집크기 </p><p>{result.roomSize}</p></div>
                        <div className="d-flex justify-content-between"><p>방개수 </p><p>{result.roomCount}</p></div>
                        <div className="d-flex justify-content-between"><p>창문개수 </p><p>{result.windowCount}</p></div>
                        <div className="d-flex justify-content-between"><p>발코니/베란다 </p><p>{result.balconyExistence === true ? "있음" : "없음"}</p></div>
                        <div className="d-flex justify-content-between"><p>복층여부 </p><p>{result.duplexRoom === true ? "있음" : "없음"}</p></div>
                        <div className="d-flex justify-content-between"><p>곰팡이 청소 </p><p>{result.mold === true ? "있음" : "없음"}</p></div>
                        <div className="d-flex justify-content-between"><p>외부 유리창 청소 </p><p>{result.externalWindow === true ? "있음" : "없음"}</p></div>
                        <div className="d-flex justify-content-between"><p>세집 증후군 제거 </p><p>{result.houseSyndrome === true ? "있음" : "없음"}</p></div>
                        <div className="d-flex justify-content-between"><p>스티커&스트지 제거 </p><p>{result.removeSticker === true ? "있음" : "없음"}</p></div>
                        <div className="d-flex justify-content-between"><p>주소 </p><p>{result.address}</p></div>
                        <div className="d-flex justify-content-between"><p>상세주소 </p><p>{result.addressDetail}</p></div>
                        <div>
                            <p className="m-0">첨부사진</p>
                            <div style={{ overflowX: 'auto', whiteSpace: 'nowrap', marginBottom: "1rem" }}>
                                {result.cleanImages.map((item, index) => (
                                    <img key={index} style={{ width: "5rem", height: "5rem", marginRight: '5px' }} src={item} alt={`cleanImage-${index}`} />
                                ))}
                            </div>
                        </div>
                        <div className="p-3 rounded-4" style={{ border: "blue 1px solid" }}>
                            <div className="d-flex justify-content-between"><p className="m-0">가격</p><p className="m-0">{requestId.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p></div>
                            <div style={{ borderBottom: '1px solid blue' }} className="d-flex justify-content-between"><p style={{ fontSize: "0.75rem", }}>사용포인트</p><div><input value={point} onChange={handleInput} className="text-end  m-0" type="number"></input>P</div></div>
                            <div className="d-flex justify-content-between"><p className="m-0">최종가격</p><p className="m-0">{(requestId.price - point).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p></div>
                            <div className="d-flex"><button className="btn btn-primary p-1" style={{ marginLeft: "auto", height: "2rem" }} ><p className="m-0" style={{ fontSize: "0.75rem" }}>포인트사용</p></button></div>
                        </div>

                    </div>}




                </div>
            </motion.div>
        )}
    </>

}
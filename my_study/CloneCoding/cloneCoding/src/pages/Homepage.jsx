import Header from "../Header"
import { AnimatePresence, motion } from "framer-motion"
import "./Homepage.css"
import Quest from "../Quest"
import MyButton from "../MyButton"
const DUMMMY_DATA = [
    { title: "넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?", content: "넷플릭스는 장편 영화, 다큐멘터리, 시리즈, 애니메이션, 각종 상을 수상한 넷플릭스 오리지널 등 수많은 콘텐츠를 확보하고 있습니다. 마음에 드는 콘텐츠를 원하는 시간에 원하는 만큼 시청하실 수 있습니다." },
    { title: "넷플릭스란 무엇인가요?", content: "넷플릭스는 각종 수상 경력에 빛나는 시리즈, 영화, 애니메이션, 다큐멘터리 등 다양한 콘텐츠를 인터넷 연결이 가능한 수천 종의 디바이스에서 시청할 수 있는 스트리밍 서비스입니다. " },
    { title: "넷플릭스 요금은 얼마인가요?", content: "스마트폰, 태블릿, 스마트 TV, 노트북, 스트리밍 디바이스 등 다양한 디바이스에서 월정액 요금 하나로 넷플릭스를 시청하세요. 멤버십 요금은 월 5,500원부터 17,000원까지 다양합니다. 추가 비용이나 약정이 없습니다." },
    { title: "어디에서 시청할 수 있나요?", content: "언제 어디서나 시청할 수 있습니다. 넷플릭스 계정으로 로그인하면 PC에서 netflix.com을 통해 바로 시청할 수 있으며, 인터넷이 연결되어 있고 넷플릭스 앱을 지원하는 디바이스(스마트 TV, 스마트폰, 태블릿, 스트리밍 미디어 플레이어, 게임 콘솔 등)에서도 언제든지 시청할 수 있습니다. " },


]
export default function Homepage() {
    return <>
        <Header />
        <div className="startcontainer">
            <h1 style={{ fontSize: "3rem", margin: "0", fontWeight: "bold" }}>영화, 시리즈 등을 무제한으로</h1>
            <h2>어디서나 자유롭게 시청하세요. 해지는 언제든 가능합니다.</h2>
            <h3>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</h3>
            <div className='d-flex gap-3 align-items-center '>
                <motion.div style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", fontSize: "1rem", width: "30rem" }} className='form-floating'>
                    <motion.input whileFocus={{ border: "solid 2px white" }} type="email" className="form-control" id="floatingPassword" placeholder="Password" style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", color: "white" }} />
                    <motion.label htmlFor="floatingPassword">이메일 주소</motion.label>
                </motion.div>
                <MyButton height="3rem" title={`시작하기 →`} />
            </div>
        </div>
        <div style={{ backgroundImage: 'radial-gradient( 51.39% 511.66% at 47.68% -217.91%, #ff9900 0%, #e50914 17.27%, #0e1b4f 79.44%, #000413 100% )', height: "8rem" }} className='d-flex justify-content-center align-items-center gap-5'>
            <img style={{ width: "10rem", height: "3rem" }} src="/logo.png" />
            <div style={{ color: "white" }}>
                <h5>5,500원 이면 만날 수 있는 넷플릭스.</h5>
                <h5 style={{ fontSize: "1rem" }}>광고형 스탠다드 멤버십에 가입하세요.</h5>
                <a href="/">자세히 알아보기 &rarr;</a>
            </div>
        </div>
        <div style={{ backgroundColor: "black", borderBottom: "solid 0.5rem rgba(92, 92, 92, 0.8)", height: "35rem" }} className='d-flex justify-content-center'>
            <div className=' col-12  d-flex justify-content-center align-items-center gap-2'>
                <div className='col-4 d-flex  flex-column' style={{ color: "white" }}>
                    <h1 className='fw-bold'>TV로 즐기세요</h1>
                    <h4>스마트 TV,PlayStation, Xbox, Chromecast,Apple TV,블루레이 플레이어 등 다양한 디바이스에서 시청하세요.</h4>
                </div>
                <div className='col-5 d-flex justify-content-center align-items-center' style={{ color: "white", position: "relative" }}>
                    <img style={{ height: "30rem", width: "40rem", zIndex: "1" }} src='/tv.png' alt="TV" />

                    <video
                        className='d-flex justify-content-center align-items-center'
                        style={{ position: "absolute", top: 60, left: 80, height: "21rem", width: "29rem" }}
                        autoPlay
                        playsInline
                        loop
                        muted
                    >
                        <source src='/video-tv-0819.m4v' type='video/mp4' />
                    </video>
                </div>
            </div>
        </div>
        <div style={{ backgroundColor: "black", borderBottom: "solid 0.5rem rgba(92, 92, 92, 0.8)", height: "35rem" }} className='d-flex justify-content-center'>
            <div className=' col-12  d-flex justify-content-center align-items-center gap-2'>
                <div className='col-5 d-flex justify-content-center align-items-center' style={{ color: "white", position: "relative" }}>

                    <img style={{ height: "25rem", width: "35rem", zIndex: "1" }} src='/device-pile.png' alt="TV" />
                    <video
                        className='d-flex justify-content-center align-items-center'
                        style={{ position: "absolute", top: 60, left: 130, width: "22rem" }}
                        autoPlay
                        playsInline
                        loop
                        muted
                    >
                        <source src='/video-devices.m4v' type='video/mp4' />
                    </video>
                </div>
                <div className='col-4 d-flex  flex-column' style={{ color: "white" }}>
                    <h1 className='fw-bold'>어디서나 자유롭게 시청하세요</h1>
                    <h4>각종 영화와 시리즈를 스마트폰, 태블릿, 노트북, TV에서 무제한으로 스트리밍하세요.</h4>
                </div>
            </div>
        </div>
        <div style={{ backgroundColor: "black", borderBottom: "solid 0.5rem rgba(92, 92, 92, 0.8)", height: "35rem" }} className='d-flex justify-content-center'>
            <div className=' col-12  d-flex justify-content-center align-items-center gap-2'>
                <div className='col-4 d-flex  flex-column' style={{ color: "white" }}>
                    <h1 className='fw-bold'>어린이 전용 프로필을 만들어 보세요</h1>
                    <h4>자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는 모험. 자녀에게 이 특별한 경험을 선물하세요. 넷플릭스 회원이라면 무료입니다.</h4>
                </div>
                <div className='col-5 d-flex justify-content-center align-items-center' style={{ color: "white", position: "relative" }}>
                    <img style={{ height: "30rem", width: "40rem", zIndex: "1" }} src='/kids.png' alt="TV" />
                </div>
            </div>
        </div>
        <div style={{ backgroundColor: "black", borderBottom: "solid 0.5rem rgba(92, 92, 92, 0.8)", height: "50rem" }} className='d-flex flex-column p-5'>
            <div className=' col-12  d-flex justify-content-center gap-2 my-3'>
                <h1 className='fw-bold ' style={{ color: "white" }}>자주 묻는 질문</h1>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='col-10 d-flex flex-column gap-2'>
                    <AnimatePresence>
                        {DUMMMY_DATA.map((data, index) => <Quest key={index} title={data.title} content={data.content} />)}
                    </AnimatePresence>

                </div>
            </div>
        </div>
    </>
}
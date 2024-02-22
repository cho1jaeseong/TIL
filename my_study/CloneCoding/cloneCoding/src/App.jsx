import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyButton from './MyButton'
import { motion } from "framer-motion"
function App() {

  return (
    <>
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
      <div style={{ backgroundColor: "black" , borderBottom:"solid 0.5rem rgba(92, 92, 92, 0.8)" ,height:"30rem" }} className='d-flex justify-content-center'>
        <div className=' col-12  d-flex justify-content-center align-items-center gap-2'>
          <div className='col-4 d-flex  flex-column' style={{ color: "white" }}>
            <h1 className='fw-bold'>TV로 즐기세요</h1>
            <h4>스마트 TV,PlayStation, Xbox, Chromecast,Apple TV,블루레이 플레이어 등 다양한 디바이스에서 시청하세요.</h4>
          </div>
          <div className='col-5 d-flex justify-content-center align-items-center' style={{ color: "white", position: "relative" }}>
            <img style={{ height: "30rem", width: "40rem", zIndex: "1" }} src='/tv.png' alt="TV" />

            <video
              className='d-flex justify-content-center align-items-center'
              style={{ position: "absolute", top:60 , left: 90, height: "21rem", width: "28rem" }}
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
      <div style={{ backgroundColor: "black" , borderBottom:"solid 0.5rem rgba(92, 92, 92, 0.8)" }} className='d-flex justify-content-center'>
        <div className=' col-12  d-flex justify-content-center align-items-center gap-2'>
        <div className='col-5 d-flex justify-content-center align-items-center' style={{ color: "white", position: "relative" }}>
            <img style={{ height: "25rem", width: "35rem", zIndex: "1" }} src='/device-pile.png' alt="TV" />

            <video
              className='d-flex justify-content-center align-items-center'
              style={{ position: "absolute", top:60 , left: 100 , width: "22rem" }}
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
      <div style={{ backgroundColor: "black" , borderBottom:"solid 0.5rem rgba(92, 92, 92, 0.8)" }} className='d-flex justify-content-center'>
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
    </>
  )
}

export default App

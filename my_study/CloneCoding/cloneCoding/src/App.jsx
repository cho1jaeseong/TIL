import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyButton from './MyButton'
import { AnimatePresence, motion } from "framer-motion"
import Quest from './Quest'
import Homepage from './pages/Homepage'
import Carousel from './Carousel'


function App() {

  return (
    <>
      <div className='d-flex justify-content-center align-items-center pt-5' style={{ backgroundColor: "black", color: "white", height: "auto" }}>
        <div className='d-flex flex-column col-10 align-items-center'>
          <div>
            <div className='d-flex flex-column col-5'>
              <h1>넷플릭스 단독, 최고의 콘텐츠</h1>
              <h5>넷플릭스에는 어디에도 없는 훌륭한 오리지널 콘텐츠가 가득합니다. 회원님의 취향을 저격할 영화와 TV 프로그램, 스페셜 그리고 수많은 콘텐츠를 만나세요. 오직 넷플릭스에서.</h5>
            </div>
            <div className='d-flex flex-column col-6'></div>
          </div>
          <div className='mt-5 col-10 d-flex flex-column justify-content-center'>
            <h5>넷플릭스 인기 콘텐츠</h5>
            <Carousel/>
          </div>
        </div>

      </div>
    </>
  )
}

export default App

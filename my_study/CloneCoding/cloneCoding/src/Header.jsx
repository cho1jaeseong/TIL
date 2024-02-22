import "./Header.css"
import { AnimatePresence, motion } from "framer-motion"
import MyButton from "./MyButton"
export default function Header() {
    return <>
        <motion.div style={{paddingLeft:"2rem" ,paddingRight:"2rem"}}  initial={{ opacity: 0 }} animate={{ opacity: 1, }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="header py-4">
            <img style={{ width: "10rem", height: "3rem" }} src="/logo.png" />
            <div className="d-flex gap-3 align-items-center" >
                <div style={{ color: "white" }}>한국어</div>
                <MyButton height="2rem"  title="로그인" />
            </div>
        </motion.div>
    </>
}



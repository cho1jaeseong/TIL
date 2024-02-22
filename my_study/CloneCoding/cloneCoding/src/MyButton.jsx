import { motion } from "framer-motion"
export default function MyButton({height, title}) {

    return <>
        <motion.button whileHover={{
            backgroundColor: "rgba(229, 9, 20, 0.8)", // 약간의 투명도를 더해 어두운 느낌
        }} className="d-flex  align-items-center justify-content-center px-3 py-1" style={{ height: height, border: "solid 0.0625rem", borderColor: "rgba(0,0,0,0)", borderRadius: "0.1875rem", backgroundColor: "rgb(229, 9, 20)", color: "white", fontSize: "0.875rem" }}>
            <p className="m-0">{title}</p>
        </motion.button>
    </>
}
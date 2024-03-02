import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Quest({ title, content }) {
    const [isVisible, setIsVisible] = useState(false);

    const handleDivClick = () => {
        setIsVisible(!isVisible);
    };

    return (
        <>
            <div className="d-flex flex-column gap-1">
                <motion.div
                    whileHover={{ backgroundColor: "rgba(122, 122, 122, 0.5)", cursor: "pointer" }}
                    style={{ width: "100%", height: "5rem", backgroundColor: "rgba(92, 92, 92, 0.5)" }}
                    className="px-5 d-flex justify-content-between align-items-center "
                    onClick={handleDivClick}
                >
                    <div style={{ color: "white" }}>
                        <h4 className="m-0">{title}</h4>
                    </div>
                    <motion.img
                        animate={{
                            rotate: isVisible ? 45 : 0,
                            transition: { duration: 0.2, ease: "easeInOut" },
                        }}
                        src="/Close_MD.png"
                        alt="Close"
                    />
                </motion.div>
                <AnimatePresence >
                    {isVisible && (
                        <motion.div
                            transition={{ duration: 0.3 }}
                            initial={{ opacity: 0, height: "0" }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: "0" }}
                            style={{ width: "100%", backgroundColor: "rgba(92, 92, 92, 0.5)" }}
                        >
                            <motion.h4 className="m-4" style={{ color: "white" }}>
                                {content}
                            </motion.h4>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}

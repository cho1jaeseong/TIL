
import { useState } from "react";
import UsedProfile from "../SellProduct/UsedProfile";
import { AnimatePresence, motion } from "framer-motion"
import HelpMeToPeopleProfile from "./HelpMeToPeopleProfile";
import { api } from "../../../../services/api";

const ITEMS_PER_PAGE = 5;
const MAX_DISPLAY_PAGES=5
export default function HelpMeToPeopleView({ setHelpYouList, helpYouList, helpYouTotalPages }) {
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
        axios_HelpYou(pageNumber)
    };
    const startPage = Math.max(1, currentPage - Math.floor(MAX_DISPLAY_PAGES / 2));
    const endPage = Math.min(
        startPage + MAX_DISPLAY_PAGES - 1,
        Math.ceil(helpYouTotalPages / ITEMS_PER_PAGE)
    );
    const pageButtons = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
    const axios_HelpYou = async (pageNumber) => {

        try {
            const response = await api.get(
                `/helps/profiles/help-you?memberId=4&page=${pageNumber}&size=5`,

            );
            // console.log(response.data.result)
            setHelpYouList(response.data.result.content)
            // setHelpYouTotalPages(response.data.result.totalElements)
            return response
        }
        catch (e) {

        }
    }

    return <>
        <div className="d-flex col-12 flex-column p-3 justify-content-between gap-3" style={{ height: "100%" }}>
            <div className="d-flex flex-column   " >
                <div className="mb-3" style={{ borderBottom: "1px solid " }}><h3>도움 내역</h3></div>
                <AnimatePresence mode="wait">
                    <motion.div className="d-flex flex-column gap-4" >
                        {helpYouList.map((item, index) => (
                            <HelpMeToPeopleProfile writerName={item.writerName} codeSmallName={item.codeSmallName} id={item.boardId} key={index} title={item.title} point={item.point} />
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="pagination d-flex justify-content-center gap-3">
                <div className="pagination d-flex justify-content-center gap-3">
                    {pageButtons.map((pageNumber) => (
                        <motion.button
                            whileHover={{ y: -5 }}
                            className={`btn btn-light${pageNumber === currentPage ? ' active' : ''}`}
                            key={pageNumber}
                            onClick={() => paginate(pageNumber)}
                        >
                            {pageNumber}
                        </motion.button>
                    ))}
                </div>
            </div>
        </div>
    </>
}
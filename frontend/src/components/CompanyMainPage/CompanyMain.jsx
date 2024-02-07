import { motion } from "framer-motion"
import DeliverReservation from "./DeliverReservation"




const CompanyMain = () => {
    // const [requestList, setrequestList] = useState("용달")
    const buttonVariants = {
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.3,
            },
        },
    };
    const userData = JSON.parse(sessionStorage.getItem('userInfo'))
    console.log(userData)

    // 현재 role상태에 따라 버튼 활성화를 위한 변수
    const hasDeliveryRole = userData.roleList.includes("DELIVER");
    const hasCleanupRole = userData.roleList.includes("CLEAN");
    

    return (
      <div
        className="d-flex  justify-content-center align-items-center"
        style={{ height: "100vh", width: "100%" }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="col-10"
        >
          <div className="col-12 px-3">
            <div className="row my-5 " style={{ height: "40rem" }}>
              <div className="col-2 p-3 d-flex flex-column align-items-center justify-content-around text-center border-dark-subtle border-end">
                {/* 좌측 컬럼 */}
                <h3 className="mt-5">{userData.name}님</h3>
                <h3>안녕하세요</h3>
                <div
                  className="d-flex flex-column justify-content-center gap-5"
                  style={{ width: "11rem" }}
                >
                  {hasDeliveryRole && (
                    <motion.button
                      type="button"
                      className="btn btn-primary btn-lg d-flex justify-content-center gap-4 align-items-center"
                      variants={buttonVariants}
                      whileHover="hover"
                      style={{ width: "10rem" }}
                      // onClick={() => handlestatus("용달")}
                    >
                      <img
                        style={{ width: "2rem", height: "2rem" }}
                        src="/truck 1.png"
                        alt=""
                      />
                      <h5 className="m-0">용달</h5>
                    </motion.button>
                  )}

                  {hasCleanupRole && (
                    <motion.button
                      type="button"
                      className="btn btn-primary btn-lg d-flex justify-content-center gap-4 align-items-center"
                      variants={buttonVariants}
                      style={{ width: "10rem" }}
                      whileHover="hover"
                    >
                      <img
                        style={{ width: "2rem", height: "2rem" }}
                        src="/mop (2) 1.png"
                        alt=""
                      />
                      청소
                    </motion.button>
                  )}
                  <motion.button
                    type="button"
                    className="btn btn-light btn-lg"
                    s
                    variants={buttonVariants}
                    whileHover="hover"
                    style={{ width: "10rem" }}
                  >
                    상담하기 <img src="/Wavy_Help.png" alt="" />
                  </motion.button>
                </div>
              </div>
                <DeliverReservation />
            </div>
          </div>
        </motion.div>
      </div>
    );
};

export default CompanyMain;

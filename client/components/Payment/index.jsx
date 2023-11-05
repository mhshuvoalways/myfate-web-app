import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../Utils/Modal";
import AddEdit from "./AddEdit";
import TickIcon from "@/public/pricing/tick.svg";
import Paypal from "./Paypal";
import { userUpdate } from "@/store/actions/userAction";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [userValue, setUserValue] = useState(null);
  const [emailValue, setEmailValue] = useState({
    value: "",
    submit: false,
  });

  const router = useRouter();
  const dispatch = useDispatch();

  const { plan, price } = router.query;

  const userReducer = useSelector((store) => store.userReducer);

  const modalHandler = () => {
    setModalOpen(!modalOpen);
  };

  const confirmMail = () => {
    setEmailValue({
      ...emailValue,
      submit: true,
    });
  };

  const paymentHandler = () => {
    const getLocalValues =
      typeof window !== "undefined" &&
      JSON.parse(localStorage.getItem("userValue"));
    const newObj = getLocalValues;
    newObj.planType = plan.charAt(0).toUpperCase() + plan.slice(1);
    dispatch(userUpdate(newObj, router));
    typeof window !== "undefined" && localStorage.removeItem("userValue");
  };

  const removeValue = () => {
    setUserValue(null);
    typeof window !== "undefined" && localStorage.removeItem("userValue");
  };

  return (
    <div className="mycontainer my-20 flex justify-center gap-20 md:gap-10 flex-wrap">
      <div className="w-10/12 md:w-5/12">
        <p className="font-semibold border-b border-gray-900 pb-3">
          CONTACT INFORMATION
        </p>
        <div className="mt-5">
          <div>
            <small>Email:</small>
            {emailValue.submit &&
            userReducer.user.email === emailValue.value ? (
              <div className="flex items-center gap-5">
                <p className="text-lg">{emailValue.value}</p>
                <Image src={TickIcon} alt="" />
              </div>
            ) : (
              <>
                <input
                  type="text"
                  className={`border w-full p-2 bg-gray-50 rounded outline-0 ${
                    emailValue.submit && "border-red-600"
                  }`}
                  onChange={(e) =>
                    setEmailValue({ submit: false, value: e.target.value })
                  }
                />
                {emailValue.submit && (
                  <p className="text-red-500 mt-2">
                    Please provide the email you are already logged in with
                  </p>
                )}
              </>
            )}
          </div>
          <button
            className="bg-black p-2 w-full text-gray-200 font-bold tracking-widest mt-8 hover:bg-gray-800 rounded"
            onClick={confirmMail}
          >
            CONFIRM EMAIL
          </button>
        </div>
      </div>
      <div className="w-10/12 md:w-5/12">
        <div className="border-b border-gray-900 pb-3">
          <div className="flex items-center gap-2">
            <p className="font-semibold">USER DETAILS</p>
            <p className="font-light text-sm">(PLAN: {plan?.toUpperCase()})</p>
          </div>
        </div>
        <div className="font-light mt-5">
          {userValue && (
            <>
              <p>
                <strong>First Name: </strong>
                {userValue.firstName}
              </p>
              <p>
                <strong>Last Name: </strong>
                {userValue.lastName}
              </p>
              <p>
                <strong>Birth Date: </strong>
                {userValue.birthDate}
              </p>
              {userValue.birthTime && (
                <p>
                  <strong>Birth Time: </strong>
                  {userValue.birthTime}
                </p>
              )}
            </>
          )}
        </div>
        <div className="flex items-center gap-3 mt-8">
          <motion.p
            className="border-b-2 border-black border-dotted text-sm cursor-pointer"
            whileTap={{ scale: 0.9 }}
            onClick={modalHandler}
          >
            Set Details
          </motion.p>
          <motion.p
            className="border-b-2 border-black border-dotted text-sm cursor-pointer"
            whileTap={{ scale: 0.9 }}
            onClick={removeValue}
          >
            Remove
          </motion.p>
        </div>
        <p className="border border-gray-300 mt-10 mb-5" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <p className="text-xl">Total</p>
            <p className="text-xl font-light">(USD)</p>
          </div>
          <p className="text-xl">${price}</p>
        </div>
        {plan === "starter" ? (
          <button
            className={`bg-black p-2 w-full text-gray-200 font-bold tracking-widest mt-8 hover:bg-gray-800 rounded ${
              userValue && emailValue.value && emailValue.submit
                ? "opacity-100"
                : "opacity-50"
            }`}
            onClick={paymentHandler}
            disabled={
              userValue && emailValue.value && emailValue.submit ? false : true
            }
          >
            START WITHOUT PAY
          </button>
        ) : (
          <Paypal
            paymentHandler={paymentHandler}
            userValue={userValue}
            emailValue={emailValue}
          />
        )}
      </div>
      {modalOpen && (
        <Modal modalHandler={modalHandler}>
          <AddEdit setUserValue={setUserValue} modalHandler={modalHandler} />
        </Modal>
      )}
    </div>
  );
};

export default Index;

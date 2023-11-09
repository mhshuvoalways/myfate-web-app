import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RadioBtn from "../FormFound/RadioBtn";

const AddEdit = ({ setUserValue, modalHandler }) => {
  const [dontKnow, setDontKnow] = useState(false);
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    birthDateMM: "",
    birthDateDD: "",
    birthDateYYYY: "",
    birthTimeHH: "",
    birthTimeMM: "",
  });
  const [radioBtn, setRadioBtn] = useState("am");

  const onChangeHandler = (event) => {
    setUserDetails({
      ...userDetails,
      [event.target.name]: event.target.value,
    });
  };

  const birthHandler = (event) => {
    if (event.target.checked) {
      setDontKnow(true);
    } else {
      setDontKnow(false);
    }
  };

  const subitHandler = (e) => {
    if (userDetails) {
      e.preventDefault();
      const hrCalculate =
        radioBtn === "am"
          ? userDetails.birthTimeHH
          : Number(userDetails.birthTimeHH) + 12;
      const formatUserDetails = {
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        birthDate: `${userDetails.birthDateYYYY}-${userDetails.birthDateMM}-${userDetails.birthDateDD}`,
        birthTime: userDetails.birthTimeHH
          ? userDetails.birthTimeMM &&
            `${hrCalculate}:${userDetails.birthTimeMM}:00`
          : "",
      };
      setUserValue(formatUserDetails);
      typeof window !== "undefined" &&
        localStorage.setItem("userValue", JSON.stringify(formatUserDetails));
      modalHandler();
    }
  };

  return (
    <div className="pb-14">
      <p className="text-2xl border-b pb-6">Set Birth Chart Details</p>
      <p className="mt-3">
        Enter your name, place of birth (or nearest city), and date of birth.
        Entering a time is optional but including it will allow your chart to be
        more accurate.
      </p>
      <form onSubmit={subitHandler}>
        <div className="mt-8">
          <p>First Name:</p>
          <input
            type="text"
            className="border-b-2 border-gray-400 outline-0 pr-2 w-full"
            required
            onChange={onChangeHandler}
            name="firstName"
          />
        </div>
        <div className="mt-8">
          <p>Last Name:</p>
          <input
            type="text"
            className="border-b-2 border-gray-400 outline-0 pr-2 w-full"
            required
            onChange={onChangeHandler}
            name="lastName"
          />
        </div>
        <div className="mt-8">
          <p>Birth Date & Time:</p>
          <div className="flex gap-5 items-center mt-5">
            <div>
              <p>Month</p>
              <div className="flex gap-5 items-center">
                <input
                  type="text"
                  className="border-b-2 border-gray-400 outline-0 pr-2 w-full"
                  required
                  placeholder="MM"
                  maxLength={2}
                  onChange={onChangeHandler}
                  name="birthDateMM"
                />
                <p className="font-semibold">/</p>
              </div>
            </div>
            <div>
              <p>Day</p>
              <div className="flex gap-5 items-center">
                <input
                  type="text"
                  className="border-b-2 border-gray-400 outline-0 pr-2 w-full"
                  required
                  placeholder="DD"
                  maxLength={2}
                  onChange={onChangeHandler}
                  name="birthDateDD"
                />
                <p className="font-semibold">/</p>
              </div>
            </div>
            <div>
              <p>Year</p>
              <input
                type="text"
                className="border-b-2 border-gray-400 outline-0 pr-2 w-full"
                required
                placeholder="Year"
                onChange={onChangeHandler}
                name="birthDateYYYY"
                maxLength={4}
              />
            </div>
          </div>
        </div>
        <AnimatePresence>
          {dontKnow && (
            <motion.div
              className={`flex gap-2 items-center`}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 25 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: "0.2" }}
            >
              <input
                type="text"
                className="border-b-2 border-gray-400 outline-0 pr-2 w-full"
                required
                placeholder="hh"
                maxLength={2}
                max={24}
                onChange={onChangeHandler}
                name="birthTimeHH"
              />
              <p className="font-semibold">:</p>
              <input
                type="text"
                className="border-b-2 border-gray-400 outline-0 pr-2 w-full"
                required
                placeholder="mm"
                maxLength={2}
                onChange={onChangeHandler}
                name="birthTimeMM"
              />
              <RadioBtn
                myName="am"
                selectBtn={radioBtn}
                radioHandler={setRadioBtn}
              />
              <RadioBtn
                myName="pm"
                selectBtn={radioBtn}
                radioHandler={setRadioBtn}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <div
          className={`transition-all duration-500 ${
            dontKnow ? "mt-16" : "mt-8"
          }`}
        >
          <label className="flex gap-2">
            <input
              type="checkbox"
              name="check"
              checked={dontKnow}
              onChange={birthHandler}
              className="cursor-pointer"
            />
            <p className="cursor-pointer">{`I don't know my birth time`}</p>
          </label>
        </div>
        <button className="bg-black p-2 w-full text-gray-200 font-bold tracking-widest mt-8">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default AddEdit;

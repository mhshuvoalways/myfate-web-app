import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import RadioBtn from "./RadioBtn";
import Button from "../common/Button";

const Login = () => {
  const [dontKnow, setDontKnow] = useState(false);
  const [radioBtn, setRadioBtn] = useState("am");
  const [userData, setUserData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    gender: "Male",
    birthDateMM: "",
    birthDateDD: "",
    birthDateYYYY: "",
    birthTimeHH: "",
    birthTimeMM: "",
  });

  const userReducer = useSelector((store) => store.userReducer);

  const router = useNavigate();

  const birthHandler = (event) => {
    if (event.target.checked) {
      setDontKnow(true);
    } else {
      setDontKnow(false);
    }
  };

  const onChangeHandler = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    if (userData) {
      e.preventDefault();
      const hrCalculate =
        radioBtn === "am"
          ? userData.birthTimeHH
          : Number(userData.birthTimeHH) + 12;

      const formatuserData = {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        gender: userData.gender,
        birthDate: `${userData.birthDateYYYY}-${userData.birthDateMM}-${userData.birthDateDD}`,
        birthTime: userData.birthTimeHH
          ? userData.birthTimeMM && `${hrCalculate}:${userData.birthTimeMM}:00`
          : "",
      };
      localStorage.setItem("userValue", JSON.stringify(formatuserData));
      router("/answer");
    }
  };

  useEffect(() => {
    if (userReducer.isAuthenticate) {
      router("/");
    }
  }, [router, userReducer.isAuthenticate]);

  return (
    <div className="bg-my-cream p-10 h-full md:h-[100vh] flex justify-center items-center">
      <div className="bg-white max-w-3xl mx-auto flex flex-wrap md:flex-nowrap justify-between p-10 md:p-20 gap-12 items-center flex-col-reverse md:flex-row">
        <div className="space-y-10 w-8/12 md:w-5/12 mx-auto">
          <img src="/images/auth.png" alt="" />
          <p className="text-center">
            <Link
              to={`${import.meta.env.VITE_CLIENT_PANEL_URL}/signup`}
              target="blank"
              className="underline"
            >
              Create an account
            </Link>
          </p>
        </div>
        <form className="w-full md:w-7/12" onSubmit={onSubmitHandler}>
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
            <div className="flex items-center gap-2">
              <p>Email:</p> <small>(Same email you have used in myfates)</small>
            </div>
            <input
              type="email"
              className="border-b-2 border-gray-400 outline-0 pr-2 w-full"
              required
              onChange={onChangeHandler}
              name="email"
            />
          </div>
          <div className="mt-8">
            <p>Gender:</p>
            <select
              className="border-b-2 border-gray-400 outline-0 pr-2 w-full"
              required
              onChange={onChangeHandler}
              name="gender"
            >
              <option>Male</option>
              <option>Female</option>
            </select>
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
          <Button value={"SUBMIT"} className={"mt-8 w-full"} />
        </form>
      </div>
    </div>
  );
};

export default Login;

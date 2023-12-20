import { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ImgTemp from "../../public/images/template/kl.png";
import PoomanImg from "../../public/images/template/poomang.svg";
import { userLogin } from "../../store/actions/userAction";

const questions = [
  {
    id: 1,
    question: "Which of the two is more important to you?",
    firstAns: "believing in myselft",
    secAnd: "loving myselft",
  },
  {
    id: 2,
    question: "If you had a dream tonight, what would you dream about?",
    firstAns: "Dream of becoming the main character in a fantastic fairy tale",
    secAnd: "A dream with a loved one",
  },
  {
    id: 3,
    question: "What would you like to do if you had free time on a sunny day?",
    firstAns: "Have a beer with friends at the Han River",
    secAnd: "Take a walk along the Han River alone while listening to music",
  },
  {
    id: 4,
    question: "When you have to solve a problem, what do you do first?",
    firstAns: "Close your eyes and picture the situation",
    secAnd: "Open your eyes and look around",
  },
  {
    id: 5,
    question: "What gift do you give yourself after working hard all day?",
    firstAns: "A simple but not flashy bouquet",
    secAnd:
      "Clothes that I hesitated to buy because they were a bit expensive.",
  },
  {
    id: 6,
    question: "What do you do when something sad happens?",
    firstAns: "Crying while watching a sad movie or book",
    secAnd: "Calm down your mind and write a diary",
  },
];

const Template = () => {
  const [start, setStart] = useState("initial");
  const [stepQuestions, setStepQuestions] = useState(0);
  const userReducer = useSelector((store) => store.userReducer);

  const dispatch = useDispatch();
  const router = useNavigate();

  const nextHandler = () => {
    const getUser = JSON.parse(localStorage.getItem("userValue"));
    setStepQuestions((prev) => {
      if (prev >= questions.length - 1) {
        setStart("loading");
        setTimeout(() => {
          dispatch(userLogin(getUser, router));
        }, 60 * 1000);
      }
      return prev + 1;
    });
  };

  const myItem = questions[stepQuestions];

  useEffect(() => {
    if (userReducer.isAuthenticate) {
      router("/");
    }
  }, [router, userReducer.isAuthenticate]);

  return (
    <div className={`h-screen template`}>
      <div className="max-w-[500px] w-full mx-auto text-center">
        {start === "initial" && (
          <>
            <img src={ImgTemp} alt="" className="w-7/12 mx-auto pt-20" />
            <div className="fixed bottom-5 max-w-[500px] px-5 sm:px-0 w-full mx-auto">
              <div
                className="template-btn cursor-pointer"
                onClick={() => setStart("start")}
              >
                <p className="text-white text-2xl">Start testing</p>
                <p className="text-gray-300">3,314,527 people visited Aura</p>
              </div>
              <div className="flex items-center justify-center mt-5 gap-2">
                <p className="text-white text-xl">poomang & </p>
                <img src={PoomanImg} alt="" />
              </div>
            </div>
          </>
        )}
        {start === "start" && (
          <div className="py-5">
            <p className="text-white text-5xl font-thin">Q.</p>
            <p className="border w-0 mx-auto h-28 my-2"></p>
            <p className="text-white font-thin">
              {stepQuestions + 1}/{questions.length}
            </p>
            <p className="text-white font-semibold mt-5 text-lg px-5 sm:px-0">
              {myItem.question}
            </p>
            <div className="fixed bottom-5 max-w-[500px] w-full px-5 sm:px-0 mx-auto">
              <div>
                <div className="space-y-3">
                  <Fade right key={myItem.firstAns}>
                    <button
                      className="bg-white text-[#333333] w-full p-5 rounded-full text-[18px]"
                      onClick={nextHandler}
                    >
                      {myItem.firstAns}
                    </button>
                  </Fade>
                  <Fade right key={myItem.secAnd} delay={100}>
                    <button
                      className="bg-white text-[#333333] w-full p-5 rounded-full text-[18px]"
                      onClick={nextHandler}
                    >
                      {myItem.secAnd}
                    </button>
                  </Fade>
                </div>
                <img src={PoomanImg} alt="" className="mx-auto mt-5" />
              </div>
            </div>
          </div>
        )}
        {start === "loading" && (
          <div className="flex justify-center items-center h-screen">
            <div>
              <p className="border-[15px] w-40 h-40 border-white"></p>
              <p className="text-white mt-5 capitalize text-xl">
                Creating your data...
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Template;

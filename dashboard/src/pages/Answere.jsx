import { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ImgTemp from "../../public/images/template/kl.png";
import { userLogin } from "../../store/actions/userAction";

const questions = [
  {
    id: 1,
    question: "1. Which do you feel more comfortable?",
    firstAns: {
      option: "Mountain",
      personality: "",
    },
    secAnd: {
      option: "Ocean",
      personality: "",
    },
  },
  {
    id: 2,
    question: "Which do you feel more comfortable?",
    firstAns: {
      option: "Sun",
      personality: "",
    },
    secAnd: {
      option: "Moon",
      personality: "",
    },
  },
  {
    id: 3,
    question: "Which do you feel more comfortable?",
    firstAns: {
      option: "Sky",
      personality: "",
    },
    secAnd: {
      option: "Ground",
      personality: "",
    },
  },
  {
    id: 4,
    question: "Which do you feel more comfortable?",
    firstAns: {
      option: "Ice",
      personality: "",
    },
    secAnd: {
      option: "Fire",
      personality: "",
    },
  },
  {
    id: 5,
    question:
      "After a long day what situation would you feel more comfortable?",
    firstAns: {
      option: "Being alone and going over your thoughts and questions.",
      personality: "P",
    },
    secAnd: {
      option:
        "Clothes that I hesitated to buy because they were a bit expensive.",
      personality: "K",
    },
  },
  {
    id: 6,
    question: "When faced with a problem in a work or project…",
    firstAns: {
      option:
        "Prefer brainstorming novel ideas and theoretical solutions that haven't been tried before.",
      personality: "O",
    },
    secAnd: {
      option:
        "Focus on practical, tried-and-true methods and data-driven approaches",
      personality: "G",
    },
  },
  {
    id: 7,
    question:
      "In a situation where there is a conflict between colleagues at work",
    firstAns: {
      option:
        "Prioritize understanding each person’s feelings and values to reach a harmonious solution.",
      personality: "E",
    },
    secAnd: {
      option:
        "Prefer to resolve the issue by objectively assessing the facts and interests",
      personality: "B",
    },
  },
  {
    id: 8,
    question: "When faced with a work deadline",
    firstAns: {
      option:
        "Tend to start closer to the deadline, finding that the time pressure can be stimulating and productive?",
      personality: "X",
    },
    secAnd: {
      option:
        "Start working on the task well in advance to ensure it’s completed on time?",
      personality: "R",
    },
  },
];

const Template = () => {
  const [start, setStart] = useState("initial");
  const [stepQuestions, setStepQuestions] = useState(0);
  const [userPersonality, setUserPersonality] = useState("");
  const userReducer = useSelector((store) => store.userReducer);

  const dispatch = useDispatch();
  const router = useNavigate();

  const nextHandler = (person) => {
    setStepQuestions((prev) => {
      if (prev >= questions.length - 1) {
        setStart("loading");
      }
      if (person) {
        setUserPersonality(userPersonality.concat(person).trim());
      }
      return prev + 1;
    });
  };

  useEffect(() => {
    const getUser = JSON.parse(localStorage.getItem("userValue"));
    getUser.personality = userPersonality;
    setTimeout(() => {
      if (userPersonality.length === 4) {
        dispatch(userLogin(getUser, router));
      }
    }, 12000);
  }, [dispatch, router, userPersonality]);

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
                <p className="text-white text-2xl">Start your Journey</p>
                <p className="text-gray-300">720,219 people visited MyFates</p>
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
                  <Fade right key={myItem.firstAns.option}>
                    <button
                      className="bg-white text-[#333333] w-full p-5 rounded-full text-[18px]"
                      onClick={() => nextHandler(myItem.firstAns.personality)}
                    >
                      {myItem.firstAns.option}
                    </button>
                  </Fade>
                  <Fade right key={myItem.secAnd.option} delay={100}>
                    <button
                      className="bg-white text-[#333333] w-full p-5 rounded-full text-[18px]"
                      onClick={() => nextHandler(myItem.secAnd.personality)}
                    >
                      {myItem.secAnd.option}
                    </button>
                  </Fade>
                </div>
                <p className="text-gray-400 mt-5">MyFates</p>
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
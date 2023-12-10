import { useState } from "react";
import Image from "next/image";
import { Fade } from "react-reveal";
import Headers from "@/components/Headers";
import ImgTemp from "@/public/template/kl.png";
import PoomanImg from "@/public/template/poomang.svg";
import ResultImg from "@/public/template/result.png";
import { RWebShare } from "react-web-share";
import ReloadImg from "@/public/template/reload.svg";
import Fb from "@/public/template/fb.svg";
import Copy from "@/public/template/copy.svg";
import Twitter from "@/public/template/twitter.svg";
import Talk from "@/public/template/talk.svg";

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

  const nextHandler = () => {
    setStepQuestions((prev) => {
      if (prev >= questions.length - 1) {
        setStart("loading");
        setTimeout(() => {
          setStart("result");
        }, 3000);
      }
      return prev + 1;
    });
  };

  const myItem = questions[stepQuestions];

  return (
    <div
      className={`${start !== "result" ? "h-screen template" : "result-bg"}`}
    >
      <Headers />
      <div className="max-w-[500px] w-full mx-auto text-center">
        {start === "initial" && (
          <>
            <Image src={ImgTemp} alt="" className="w-7/12 mx-auto pt-20" />
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
                <Image src={PoomanImg} alt="" />
              </div>
            </div>
          </>
        )}
        {start === "start" && (
          <>
            <p className="text-white text-5xl font-thin mt-10">Q.</p>
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
                <Image src={PoomanImg} alt="" className="mx-auto mt-5" />
              </div>
            </div>
          </>
        )}
        {start === "loading" && (
          <div className="flex justify-center items-center h-[80vh]">
            <div>
              <p className="border-[15px] w-40 h-40 border-white"></p>
              <p className="text-white mt-5">Finding your aura...</p>
            </div>
          </div>
        )}
        {start === "result" && (
          <div className="pb-28 pt-10 px-5">
            <Image src={ResultImg} />
            <div>
              <p className="bg-white h-[1px] w-8/12 mt-10"></p>
              <p className="text-2xl text-white text-shadow mt-5">YOU ARE</p>
              <p className="font-semibold mt-2 text-white">- Midnight Navy -</p>
              <ul className="font-light list-disc mt-5 text-start space-y-5">
                <li className="text-gray-200">
                  I really enjoy the process of learning about things I don’t
                  know. I really enjoy the process of learning about things I
                  don’t know. I really enjoy the process of learning about
                  things I don’t know.{" "}
                </li>
                <li className="text-gray-200">
                  I really enjoy the process of learning about things I don’t
                  know. I really enjoy the process of learning about things I
                  don’t know. I really enjoy the process of learning about
                  things I don’t know.{" "}
                </li>
                <li className="text-gray-200">
                  I really enjoy the process of learning about things I don’t
                  know. I really enjoy the process of learning about things I
                  don’t know. I really enjoy the process of learning about
                  things I don’t know.{" "}
                </li>
                <li className="text-gray-200">
                  I really enjoy the process of learning about things I don’t
                  know. I really enjoy the process of learning about things I
                  don’t know. I really enjoy the process of learning about
                  things I don’t know.{" "}
                </li>
              </ul>
            </div>
            <div>
              <p className="bg-white h-[1px] w-8/12 mt-20 ml-auto"></p>
              <p className="text-2xl text-white text-shadow mt-5">SPECIAL</p>
              <ul className="font-light list-disc mt-5 text-start space-y-5">
                <li className="text-gray-200">
                  I really enjoy the process of learning about things I don’t
                  know. I really enjoy the process of learning about things I
                  don’t know. I really enjoy the process of learning about
                  things I don’t know.{" "}
                </li>
              </ul>
            </div>
            <p className="text-white py-10">. . .</p>
            <p className="text-white">
              Restylane® that will make your aura shine brighter
            </p>
            <Image src={PoomanImg} alt="" className="w-9/12 mx-auto py-10" />
            <div className="space-y-5">
              <button
                className="bg-white text-[#333333] w-full p-5 rounded-full text-[18px] font-bold text-lg"
                onClick={nextHandler}
              >
                See all your result
              </button>
              <button
                className="bg-white text-[#333333] w-full p-5 rounded-full text-[18px] font-bold text-lg"
                onClick={nextHandler}
              >
                Take the test find my Aura 2
              </button>
            </div>
            <div className="mt-20 space-y-5">
              <p className="text-white text-xl">Share with friends</p>
              <div className="flex justify-center gap-2">
                <Image src={Copy} alt="" className="cursor-pointer" />
                <Image src={Fb} alt="" className="cursor-pointer" />
                <Image src={Twitter} alt="" className="cursor-pointer" />
                <Image src={Talk} alt="" className="cursor-pointer" />
              </div>
              <p className="text-white">See comments</p>
            </div>
            <div className="bg-black px-5 py-2 fixed bottom-0 left-0 right-0 max-w-[500px] w-full mx-auto flex items-center gap-3">
              <RWebShare
                data={{
                  text: "Like humans, flamingos make friends for life",
                  url: "https://on.natgeo.com/2zHaNup",
                  title: "Flamingos",
                }}
                onClick={() => console.log("shared successfully!")}
              >
                <button className="text-white border-2 border-white rounded-full p-2 w-full text-2xl">
                  Share with friends
                </button>
              </RWebShare>
              <div
                className="border-2 cursor-pointer border-white rounded-full p-2"
                onClick={() => setStart("initial")}
              >
                <Image src={ReloadImg} alt="" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Template;
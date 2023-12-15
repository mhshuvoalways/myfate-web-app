import { AnimatePresence, motion } from "framer-motion";
import parse from "html-react-parser";
import { useState } from "react";
import TextAnimation from "../Utils/TextAnimation";

const Index = () => {
  const faqItems = [
    {
      id: 1,
      faqTitle: "What is MyFates?",
      faqDes: `MyFates is a Japanese-Korean self empowering service that was made to give deeper understanding about oneself. Myfates uses traditional horoscope and psychological methods to give maximum insight about oneself.`,
    },
    {
      id: 2,
      faqTitle: "How can it be so accurate?",
      faqDes: `The report made for each person is totally special. No two people would get the same report. That is, each individual would get an individualized result, giving the best accuracy in the world.`,
    },
    {
      id: 3,
      faqTitle: "Does it tell me the real me?",
      faqDes: `It tells you what you are born with based on our horoscope and psychology method. Our goal is to give positive insights that will eventually motivate you to grow.`,
    },
    {
      id: 4,
      faqTitle: "Will it help me get a romantic partner?",
      faqDes: `It will give you a strategic insight to get yourself a partner that best suits you. To get what you want, you have to know yourself. Our report will definitely help.`,
    },
    {
      id: 5,
      faqTitle: "Will it give me insights about finance?",
      faqDes: `Yes. it can provide valuable insights about your financial choices. Every single person has different personality that can significantly impact their financial decisions. Our goal is to provide analysis of the personality.`,
    },
    {
      id: 6,
      faqTitle: "Why does the premium plan get sold out?",
      faqDes: `As the owner herself, doctor Ji spends much time to give each people maximum insight. Therefore, we stop receiving orders when she believes that we are not capable of meeting our high standards.`,
    },
    {
      id: 7,
      faqTitle: "Who made MyFates?",
      faqDes: `Dr. Ji. A pediatrician who studied horoscope and psychology for decades. She made myfates.com to provide deeper understanding about oneself and provide positive advice to young people that are lost in this rapidly changing world.`,
    },
  ];

  const [faqObj, setFaqObj] = useState(null);

  const clickHandler = (value) => {
    if (faqObj?.id !== value.id) {
      setFaqObj(value);
    } else {
      setFaqObj(null);
    }
  };

  return (
    <div className="mycontainer py-32">
      <TextAnimation
        letters={[
          {
            letter: "Frequently",
          },
        ]}
        className={"text-4xl md:text-5xl lg:text-6xl font-semibold text-center"}
        textCenter
      />
      <TextAnimation
        letters={[
          {
            letter: "Asked",
            delay: "0.25",
          },
          {
            letter: "Questions",
            delay: "0.45",
          },
        ]}
        className={
          "text-4xl md:text-5xl lg:text-6xl mt-0 md:mt-4 font-semibold text-my-blue text-center"
        }
        textCenter
      />
      <div className="mt-20">
        {faqItems.map((faq) => (
          <div key={faq.id} className="border-b py-10">
            <div
              className="flex justify-between gap-2 cursor-pointer items-center"
              onClick={() => clickHandler(faq)}
            >
              <p className="text-2xl font-semibold">{faq.faqTitle}</p>
              <div>
                {faqObj && faqObj.id === faq.id ? (
                  <motion.p
                    animate={{
                      rotate: 45,
                    }}
                    className="text-2xl font-semibold bg-gray-100 w-10 h-10 flex justify-center items-center rounded-full cursor-pointer"
                  >
                    ＋
                  </motion.p>
                ) : (
                  <motion.p
                    initial={{ rotate: 90 }}
                    className="text-2xl font-semibold bg-gray-100 w-10 h-10 flex justify-center items-center rounded-full cursor-pointer"
                  >
                    ＋
                  </motion.p>
                )}
              </div>
            </div>
            <AnimatePresence>
              {faqObj && faqObj.id === faq.id && (
                <motion.p
                  className="text-[21px] text-gray-600 pr-5"
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 20 }}
                  exit={{ opacity: 0, y: -5 }}
                >
                  {parse(faqObj.faqDes)}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;

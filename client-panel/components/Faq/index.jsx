import { AnimatePresence, motion } from "framer-motion";
import parse from "html-react-parser";
import { useState } from "react";
import TextAnimation from "../Utils/TextAnimation";

const Index = () => {
  const faqItems = [
    {
      id: 1,
      faqTitle: "What is Catlog?",
      faqDes: `Catlog helps businesses sell easily on social media.
      <br />
      <br />
      With Catlog, you can create a simple list of all your products and
      get a link you can share with customers anytime, customers can use
      this link to select items they want to buy and send their orders
      directly to your Whatsapp.
      <br />
      <br />
      Catlog also helps you manage your orders and customers, get a bank
      account and collect payment via cards, transfers & split payments.`,
    },
    {
      id: 2,
      faqTitle: "How do I receive orders from my store?",
      faqDes: `On Catlog you receive orders on Whatsapp.
      <br />
      <br />
      When you send your link to customers, they select the items they want to purchase. After selecting items, they provide their delivery information. The order and delivery info is then automatically sent to your Whatsapp.`,
    },
    {
      id: 3,
      faqTitle: "Does Catlog help me get customers?",
      faqDes: `We don't currently showcase everyone's products for people to buy, but we help with search engine optimization for your store. So mainly, you have to use your store link - by adding it to your social media bio & sending it to customers when they reach out.`,
    },
    {
      id: 4,
      faqTitle: "Does Catlog have a mobile app?",
      faqDes: `Right now, Catlog doesn't have a mobile app but the web app was built in a way that allows you to add it to your phone like an app for easy access to your store. See how to add catlog to your phone
      <br />
      <br />
      Also, Anticipate our mobile app soon!`,
    },
    {
      id: 5,
      faqTitle: "Does Catlog have a mobile app?",
      faqDes: `Yes, you can use Catlog for free. However there are paid plans that gives you access to more features, read more about this here`,
    },
    {
      id: 6,
      faqTitle: "What is Catlog?",
      faqDes: `Catlog helps businesses sell easily on social media.
      <br />
      <br />
      With Catlog, you can create a simple list of all your products and
      get a link you can share with customers anytime, customers can use
      this link to select items they want to buy and send their orders
      directly to your Whatsapp.
      <br />
      <br />
      Catlog also helps you manage your orders and customers, get a bank
      account and collect payment via cards, transfers & split payments.`,
    },
    {
      id: 7,
      faqTitle: "How do I receive orders from my store?",
      faqDes: `On Catlog you receive orders on Whatsapp.
      <br />
      <br />
      When you send your link to customers, they select the items they want to purchase. After selecting items, they provide their delivery information. The order and delivery info is then automatically sent to your Whatsapp.`,
    },
    {
      id: 8,
      faqTitle: "Does Catlog help me get customers?",
      faqDes: `We don't currently showcase everyone's products for people to buy, but we help with search engine optimization for your store. So mainly, you have to use your store link - by adding it to your social media bio & sending it to customers when they reach out.`,
    },
    {
      id: 9,
      faqTitle: "Does Catlog have a mobile app?",
      faqDes: `Right now, Catlog doesn't have a mobile app but the web app was built in a way that allows you to add it to your phone like an app for easy access to your store. See how to add catlog to your phone
      <br />
      <br />
      Also, Anticipate our mobile app soon!`,
    },
    {
      id: 10,
      faqTitle: "Does Catlog have a mobile app?",
      faqDes: `Yes, you can use Catlog for free. However there are paid plans that gives you access to more features, read more about this here`,
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

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RadioBtn from "../FormFound/RadioBtn";

const AddEdit = () => {
  const [dontKnow, setDontKnow] = useState(false);

  const birthHandler = (event) => {
    if (event.target.checked) {
      setDontKnow(true);
    } else {
      setDontKnow(false);
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
      <div className="mt-8">
        <div>
          <p>My name is:</p>
          <input
            type="text"
            className="border-b-2 border-gray-400 outline-0 pr-2 w-full"
          />
        </div>
        <div className="mt-8">
          <p>I was born in:</p>
          <input
            type="text"
            className="border-b-2 border-gray-400 outline-0 pr-2 w-full"
          />
        </div>
        <div className="flex gap-5 items-center mt-8">
          <div>
            <p>Month</p>
            <div className="flex gap-5 items-center">
              <input
                type="text"
                className="border-b-2 border-gray-400 outline-0 pr-2 w-full"
                placeholder="MM"
                maxLength={2}
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
                placeholder="DD"
                maxLength={2}
              />
              <p className="font-semibold">/</p>
            </div>
          </div>
          <div>
            <p>Year</p>
            <input
              type="text"
              className="border-b-2 border-gray-400 outline-0 pr-2 w-full"
              placeholder="Year"
              maxLength={4}
            />
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
                placeholder="hh"
                maxLength={2}
              />
              <p className="font-semibold">:</p>
              <input
                type="text"
                className="border-b-2 border-gray-400 outline-0 pr-2 w-full"
                placeholder="mm"
                maxLength={2}
              />
              <RadioBtn myName="am" />
              <RadioBtn myName="pm" />
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
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default AddEdit;

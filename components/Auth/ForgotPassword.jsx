import Image from "next/image";
import Link from "next/link";
import AuthImg from "@/public/auth/auth.png";
import Button from "./Button";

const Signup = () => {
  return (
    <div className="bg-my-cream p-10 h-full md:h-[100vh] flex justify-center items-center">
      <div className="bg-white max-w-3xl mx-auto flex flex-wrap md:flex-nowrap justify-between p-10 md:p-20 gap-12 items-center flex-col-reverse md:flex-row">
        <div className="w-8/12 md:w-5/12 mx-auto">
          <Image src={AuthImg} alt="" />
        </div>
        <div className="w-full md:w-7/12 space-y-8">
          <p className="text-gray-500 text-lg">
            Forgotten your password? Please enter your email below to reset it.
          </p>
          <div className="flex gap-3 border-b-2 border-gray-400 pb-2">
            <i className="fa-solid fa-lock"></i>
            <input type="text" className="w-full outline-0" placeholder="Your Email" />
          </div>
          <Button value={"RESET PASSWORD"} />
        </div>
      </div>
    </div>
  );
};

export default Signup;

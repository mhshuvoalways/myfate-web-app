import Image from "next/image";
import Link from "next/link";
import { useGoogleLogin } from "@react-oauth/google";
import AuthImg from "@/public/auth/auth.png";
import LoginBtn from "@/public/auth/loginbtn.png";
import Button from "./Button";

const Signup = () => {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  return (
    <div className="bg-my-cream p-10 h-full md:h-[100vh] flex justify-center items-center">
      <div className="bg-white max-w-3xl mx-auto flex flex-wrap md:flex-nowrap justify-between p-10 md:p-20 gap-12 items-center flex-col-reverse md:flex-row">
        <div className="space-y-10 w-8/12 md:w-5/12 mx-auto">
          <Image src={AuthImg} alt="" />
          <p className="text-center">
            <Link href="/signup" className="underline">
              Create an account
            </Link>
          </p>
        </div>
        <div className="w-full md:w-7/12">
          <p className="tracking-widest text-3xl font-bold">LOGIN</p>
          <div className="space-y-7 mt-10">
            <div className="flex gap-3 border-b-2 border-gray-400 pb-2">
              <i className="fa-solid fa-user"></i>
              <input type="text" className="w-full outline-0" placeholder="Your Email" />
            </div>
            <div className="flex gap-3 border-b-2 border-gray-400 pb-2">
              <i className="fa-solid fa-lock"></i>
              <input type="text" className="w-full outline-0" placeholder="Your Email" />
            </div>
            <p className="text-gray-400 text-end">
              <Link href={"/forgot-password"}>Forgot Password?</Link>
            </p>
            <Button value={"LOGIN"} />
          </div>
          <div className="mt-5 space-y-5 flex items-center gap-5">
            <p>Or:</p>
            <Image
              src={LoginBtn}
              alt=""
              onClick={() => login()}
              className="cursor-pointer w-6/12 pb-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

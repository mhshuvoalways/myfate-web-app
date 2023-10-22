import Image from "next/image";
import Link from "next/link";
import { useGoogleLogin } from "@react-oauth/google";
import ReCAPTCHA from "react-google-recaptcha";
import AuthImg from "@/public/auth/auth.png";
import LoginBtn from "@/public/auth/loginbtn.png";
import Button from "./Button";

const Signup = () => {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  return (
    <div className="bg-my-cream p-10 h-full md:h-[126vh] flex justify-center items-center">
      <div className="bg-white max-w-3xl mx-auto flex flex-wrap md:flex-nowrap justify-between p-10 md:p-20 gap-12 items-center flex-col-reverse md:flex-row">
        <div className="space-y-10 w-8/12 md:w-5/12 mx-auto">
          <Image src={AuthImg} alt="" />
          <p className="text-center">
            <Link href="/login" className="underline">
              Already have an account? Login here
            </Link>
          </p>
        </div>
        <div className="w-full md:w-7/12">
          <div className="space-y-5">
            <p className="tracking-widest text-4xl font-gabarito">WELCOME</p>
            <p className="text-gray-500 text-lg">
              Create a free account to save your astrology charts. Sign up using
              your google account or by entering an email and password below.
            </p>
          </div>
          <div className="mt-10 space-y-5">
            <Image
              src={LoginBtn}
              alt=""
              onClick={() => login()}
              className="cursor-pointer w-6/12"
            />
            <p>Or</p>
          </div>
          <div className="space-y-7 mt-8">
            <div className="flex gap-3 border-b-2 border-gray-400 pb-2">
              <i className="fa-solid fa-user"></i>
              <input type="text" className="w-full outline-0" placeholder="Your Email" />
            </div>
            <div className="flex gap-3 border-b-2 border-gray-400 pb-2">
              <i className="fa-solid fa-lock"></i>
              <input type="text" className="w-full outline-0" placeholder="Your Email" />
            </div>
            <ReCAPTCHA sitekey={process.env.SITE_KEY} />
            <Button value={"SIGN UP"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

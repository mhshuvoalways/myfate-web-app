import { useRouter } from "next/navigation";

const Button = ({ value, seletGender, nextPath }) => {
  const router = useRouter();

  const clickNext = () => {
    router.push(nextPath);
  };

  return (
    <button
      className={`text-white text-lg p-3 rounded font-bold fixed left-[50%] bottom-3 shadow-md pl-btn mobile:w-[340px] mx-auto w-[83%] ${
        !seletGender ? "bg-[#c3c8d9]" : "bg-[#6446ff]"
      }`}
      onClick={clickNext}
    >
      {value ? value : "Find out about my past life right now"}
    </button>
  );
};

export default Button;

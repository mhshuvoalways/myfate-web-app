const Button = ({ value }) => {
  return (
    <button className="text-white text-lg bg-[#6446ff] p-3 rounded font-bold fixed left-[50%] bottom-3 shadow-md pl-btn mobile:w-[340px] mx-auto w-[83%]">
      {value ? value : "Find out about my past life right now"}
    </button>
  );
};

export default Button;

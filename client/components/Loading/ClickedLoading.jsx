import Image from "next/image";
import { useSelector } from "react-redux";
import LoadingImg from "@/public/loading/loading.svg";

const ClickedLoading = () => {
  const btnReducer = useSelector((state) => state.btnReducer);

  return (
    <>
      {!btnReducer && (
        <>
          <div className="fixed inset-0 flex justify-center items-center z-[100]">
            <Image src={LoadingImg} alt="" />
          </div>
          <p className="fixed inset-0 z-[60] opacity-90 bg-gray-800"></p>
        </>
      )}
    </>
  );
};

export default ClickedLoading;

import { useSelector } from "react-redux";

const ClickedLoading = () => {
  const btnReducer = useSelector((state) => state.btnReducer);

  return (
    <>
      {!btnReducer && (
        <>
          <div className="fixed inset-0 flex justify-center items-center z-[150]">
            <img src='/public/loading.svg' alt="" />
          </div>
          <p className="fixed inset-0 z-[60] opacity-60 bg-gray-900"></p>
        </>
      )}
    </>
  );
};

export default ClickedLoading;

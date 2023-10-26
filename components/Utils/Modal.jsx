const Modal = ({ children, modalHandler }) => {
  return (
    <div>
      <div className="fixed mycontainer inset-0 z-[60] flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-lg w-full lg:w-6/12">
          <p
            onClick={modalHandler}
            className="cursor-pointer text-end p-5 font-bold text-lg"
          >
            ✕
          </p>
          <div className="px-5 md:px-10">{children}</div>
        </div>
      </div>
      <p className="fixed inset-0 bg-gray-700 opacity-50 z-50"></p>
    </div>
  );
};

export default Modal;

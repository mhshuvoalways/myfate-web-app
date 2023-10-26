const Modal = ({ children, modalHandler }) => {
  return (
    <div>
      <div className="fixed inset-0 z-[60] flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-lg w-10/12 md:w-9/12 h-5/6 overflow-y-auto relative">
          <p
            onClick={modalHandler}
            className="cursor-pointer fixed right-10 top-14 z-[60] bg-white px-4 py-2 rounded-lg shadow-lg"
          >
            ✕
          </p>
          <div className="container">{children}</div>
        </div>
      </div>
      <p className="fixed inset-0 bg-gray-700 opacity-50 z-50"></p>
    </div>
  );
};

export default Modal;

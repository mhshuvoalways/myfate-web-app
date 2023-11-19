const Button = ({ value, onClick }) => {
  return (
    <button
      className="bg-gray-900 w-full text-white py-2 text-lg font-semibold rounded"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Button;

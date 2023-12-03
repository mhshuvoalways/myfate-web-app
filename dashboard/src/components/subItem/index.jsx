const index = ({
  selectSubItemValue,
  setSelectSubItemValue,
  selectSubItems,
}) => {
  const keyOfObject = selectSubItems && Object.keys(selectSubItems);
  return (
    <div className="flex items-center gap-5 justify-center">
      {keyOfObject?.map((el, index) => (
        <p
          className={`${
            selectSubItemValue === el
              ? "bg-blue-100 px-3 py-2 rounded-xl font-semibold cursor-pointer"
              : "cursor-pointer px-3 py-2"
          }`}
          key={index}
          onClick={() => setSelectSubItemValue(el)}
        >
          {el}
        </p>
      ))}
    </div>
  );
};

export default index;

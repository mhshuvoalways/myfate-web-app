const index = ({
  top,
  selectSubItemValue,
  setSelectSubItemValue,
  selectSubItems,
}) => {
  const keyOfObject = selectSubItems && Object.keys(selectSubItems);
  return (
    <div className="mt-10">
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
      {!top && (
        <div className="mt-5">
          {keyOfObject?.map((el) => (
            <div
              className={`p-3 rounded-xl flex justify-between text-center cursor-pointer ${
                selectSubItemValue === el && "bg-gray-900"
              }`}
              key={el}
            >
              <img src="/images/cloud.jpg" className="w-16 h-16 rounded-xl" />
              <div>
                <p
                  className={
                    selectSubItemValue === el && "text-gray-100 font-semibold"
                  }
                >
                  {el}
                </p>
                <div
                  className={`flex justify-between items-center gap-5 mt-2 ${
                    selectSubItemValue !== el && "opacity-0"
                  }`}
                >
                  <p className="text-sm bg-gray-100 text-gray-800 rounded-xl px-3 py-1">
                    #happy
                  </p>
                  <p className="text-sm bg-gray-100 text-gray-800 rounded-xl px-3 py-1">
                    #cool
                  </p>
                  <p className="text-sm bg-gray-100 text-gray-800 rounded-xl px-3 py-1">
                    #cloud
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default index;

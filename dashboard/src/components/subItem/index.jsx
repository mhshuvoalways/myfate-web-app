const index = ({ top }) => {
  return (
    <div className="mt-10">
      <div className="flex items-center gap-5 justify-center">
        <p className="bg-blue-100 px-3 py-2 rounded-xl font-semibold cursor-pointer">
          Mood
        </p>
        <p className="cursor-pointer">Energy</p>
        <p className="cursor-pointer">Love</p>
        <p className="cursor-pointer">Spirit</p>
      </div>
      {!top && (
        <div className="mt-5">
          <div className="bg-gray-900 p-3 rounded-xl flex justify-between text-center cursor-pointer">
            <img src="/images/cloud.jpg" className="w-16 h-16 rounded-xl" />
            <div>
              <p className="text-gray-100 font-semibold">Mood</p>
              <div className="flex justify-between items-center gap-5 mt-2">
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
          <div className="p-3 rounded-xl flex justify-between text-center cursor-pointer items-center">
            <img src="/images/cloud.jpg" className="w-16 h-16 rounded-xl" />
            <div>
              <p>Energy</p>
              <div className="flex justify-between items-center gap-5 mt-2 opacity-0">
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
          <div className="p-3 rounded-xl flex justify-between text-center cursor-pointer items-center">
            <img src="/images/cloud.jpg" className="w-16 h-16 rounded-xl" />
            <div>
              <p>Focus</p>
              <div className="flex justify-between items-center gap-5 mt-2 opacity-0">
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
          <div className="p-3 rounded-xl flex justify-between text-center cursor-pointer items-center">
            <img src="/images/cloud.jpg" className="w-16 h-16 rounded-xl" />
            <div>
              <p>Spirit</p>
              <div className="flex justify-between items-center gap-5 mt-2 opacity-0">
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
        </div>
      )}
    </div>
  );
};

export default index;

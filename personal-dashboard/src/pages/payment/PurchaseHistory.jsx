const PurchaseHistory = () => {
  return (
    <div className="mt-10">
      <p className="font-semibold text-xl">Purchase History</p>
      <div className="mt-5">
        <div className="flex items-center gap-20">
          <p className="w-2/12 font-semibold">Date</p>
          <p className="font-semibold">Plan</p>
        </div>
        <p className="border border-[#384256] my-1"></p>
        <div className="flex items-center gap-20">
          <p className="w-2/12">12/12/2023</p>
          <p>Paid</p>
        </div>
      </div>
    </div>
  );
};

export default PurchaseHistory;

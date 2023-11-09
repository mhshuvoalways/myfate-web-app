import Paypal from "./Paypal";
import PurchaseHistory from "./PurchaseHistory";

const index = () => {
  return (
    <div className="text-[#ddd]">
      <p className="font-semibold text-xl">Payment Info</p>
      <div className="border-2 border-[#384256] rounded-[10px] p-[30px] mt-5 flex justify-center sm:justify-start gap-0 sm:gap-20 flex-wrap sm:flex-nowrap">
        <Paypal />
        <p>
          <strong>Renew Date:</strong> 12/12/2023
        </p>
      </div>
      <PurchaseHistory />
    </div>
  );
};

export default index;

import { useRouter } from "next/router";
import axios from "@/utils/axios";
import { useDispatch } from "react-redux";
import btnAction from "@/store/actions/btnAction";

const Stripe = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const checkOut = () => {
    dispatch(btnAction(false));
    axios
      .post("/stripe/subscribe", {
        priceId: "price_1O8dl2SAMR1hLGQqkVh6eCeX",
      })
      .then((res) => {
        router.push(res.data.sessionUrl);
        dispatch(btnAction(true));
      })
      .catch(() => {
        dispatch(btnAction(true));
      });
  };

  return (
    <button
      className="bg-black p-2 w-full text-gray-200 font-bold tracking-widest mt-8 hover:bg-gray-800 rounded"
      onClick={checkOut}
    >
      CHECKOUT
    </button>
  );
};

export default Stripe;

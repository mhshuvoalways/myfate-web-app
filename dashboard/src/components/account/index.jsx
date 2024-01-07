import { useState } from "react";
import { useSelector } from "react-redux";
import Items from "../chart/Items";
import Header from "../header";
import moment from "moment";
import Modal from "../utils/Modal";
import SubscriptionConfirm from "./SubscriptionConfirm";

const Index = () => {
  const [modal, setModal] = useState(true);
  const userReducer = useSelector((state) => state.userReducer);
  const reportsReducer = useSelector((state) => state.reportsReducer);

  return (
    <div>
      <Header reports={reportsReducer.reports} user={userReducer.user} />
      <div className="w-10/12 mx-auto mycontainer">
        <div className="bg-white shadow rounded-xl p-5 mt-10">
          <p className="text-4xl title-font">Account Overview</p>
          <div className="flex sm:justify-between justify-center gap-5 mt-5 flex-wrap md:flex-nowrap">
            <Items
              textcolor={"text-red-800"}
              bgcolor={"bg-[#F1E7FF]"}
              title="Name"
              number={`${userReducer.user?.profile?.firstName || ""} ${
                userReducer.user?.profile?.lastName || ""
              }`}
            />
            <Items
              textcolor={"text-red-800"}
              bgcolor={"bg-[#F1E7FF]"}
              title="Email"
              number={userReducer.user?.email}
            />
            <Items
              textcolor={"text-green-800"}
              bgcolor={"bg-[#E5F5FF]"}
              title="Date of Birth"
              number={userReducer.user?.profile?.birthDate}
            />
            <Items
              textcolor={"text-green-800"}
              bgcolor={"bg-[#FEF6EB]"}
              title="Joined in myfates"
              number={moment(userReducer.user?.createdAt).format("YYYY-MM-DD")}
            />
          </div>
        </div>
        <div className="bg-white shadow rounded-xl p-5 mt-10">
          <p className="text-4xl title-font">Subscription</p>
          <div className="flex sm:justify-between justify-center gap-5 mt-5 flex-wrap md:flex-nowrap">
            <Items
              textcolor={"text-green-800"}
              bgcolor={"bg-[#E5F5FF]"}
              title="Subscription Type"
              number={userReducer.user?.subscriptionPlan?.planType || ""}
            />
            <Items
              textcolor={"text-red-800"}
              bgcolor={"bg-[#F1E7FF]"}
              title="Subscription will be expired"
              number={userReducer.user?.subscriptionPlan?.expireDate || ""}
            />
          </div>
        </div>
      </div>
      <p
        className="fixed bottom-2 right-2 cursor-pointer text-gray-500 hover:text-gray-800 p-2"
        onClick={() => setModal(!modal)}
      >
        Cancel Subscription
      </p>
      {modal && (
        <Modal modalHandler={() => setModal(!modal)}>
          <SubscriptionConfirm modalHandler={() => setModal(!modal)} />
        </Modal>
      )}
    </div>
  );
};

export default Index;

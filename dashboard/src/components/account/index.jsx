import { useSelector } from "react-redux";
import Items from "../chart/Items";
import Header from "../header";
import Button from "../common/Button";
import moment from "moment";

const Index = () => {
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
              textcolor={"text-green-800"}
              bgcolor={"bg-[#FEF6EB]"}
              title="Date of Birth"
              number={userReducer.user?.profile?.birthDate}
            />
            <Items
              textcolor={"text-green-800"}
              bgcolor={"bg-[#E5F5FF]"}
              title="Current Plan Type"
              number={userReducer.user?.subscriptionPlan?.planType || ""}
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
          <div className="mt-5 flex items-center gap-5">
            <div>
              <Items
                textcolor={"text-red-800"}
                bgcolor={"bg-[#F1E7FF]"}
                title="Current subscription plan will be expired"
                number={userReducer.user?.subscriptionPlan?.expireDate || ""}
              />
            </div>
            <Button value={"Cancel Subscription"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

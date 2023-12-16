import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Element } from "react-scroll";
import Header from "../header";
import Items from "../chart/Items";
import List from "../list";
import { getreports } from "../../../store/actions/reportsAction";

const Index = () => {
  const [state, setState] = useState(null);
  const [showItem, setShowItem] = useState(["entireLife"]);
  const userReducer = useSelector((state) => state.userReducer);
  const reportsReducer = useSelector((state) => state.reportsReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getreports());
  }, [dispatch]);

  useEffect(() => {
    if (!state) {
      setState(reportsReducer.reports?.reports.entireLife);
    }
  }, [reportsReducer.reports?.reports?.entireLife, state]);

  const individualWord = (item) => {
    if (item) {
      const words = item.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase();
      const formattedString = words.replace(/&/g, " & ");
      return formattedString.replace(/\b\w/g, (char) => char.toUpperCase());
    }
  };

  return (
    <div>
      <Header />
      <div className="w-10/12 mx-auto mycontainer">
        <div className="bg-white shadow rounded-xl p-5 mt-16">
          <p className="text-4xl title-font">Client Dashboard</p>
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
              bgcolor={"bg-[#E5F5FF]"}
              title="Plan Type"
              number={userReducer.user?.subscriptionPlan?.planType || ""}
            />
          </div>
        </div>
        <img src="/images/treesun.png" className="w-full rounded-3xl mt-10" />
        <div className="flex justify-between items-start flex-wrap md:flex-nowrap flex-col-reverse md:flex-row relative mt-10 gap-5">
          <div className="w-full md:w-7/12 lg:w-8/12">
            <p className="text-4xl font-bold mb-10">
              {individualWord(showItem[0])}
            </p>
            {state &&
              Object.entries(state).map((el, index) => {
                return (
                  <Element name={el[0]} key={index} className="mb-10">
                    <p className="font-semibold text-3xl mb-5 sticky top-0 bg-[#fcfcfc] py-2">
                      {individualWord(el[0])}
                    </p>
                    <p className="text-xl leading-loose text-justify">
                      {el[1]}
                    </p>
                  </Element>
                );
              })}
          </div>
          <List
            reports={reportsReducer.reports}
            setState={setState}
            showItem={showItem}
            setShowItem={setShowItem}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;

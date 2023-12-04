import { useSelector } from "react-redux";
import { Element } from "react-scroll";
import Header from "../header";
import Items from "../chart/Items";
import List from "../list";

const Index = () => {
  const userReducer = useSelector((state) => state.userReducer);

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
              number={`${userReducer.user.profile?.firstName || ""} ${
                userReducer.user.profile?.lastName || ""
              }`}
            />
            <Items
              textcolor={"text-green-800"}
              bgcolor={"bg-[#E5F5FF]"}
              title="Plan Type"
              number={userReducer.user.subscriptionPlan?.planType || ""}
            />
          </div>
        </div>
        <div className="flex justify-between items-start flex-wrap md:flex-nowrap flex-col-reverse md:flex-row relative">
          <div className="space-y-10 mt-16 w-full md:w-7/12 lg:w-8/12">
            <img src="/images/treesun.jpg" className="w-full rounded-3xl" />
            <div className="text-xl leading-loose text-justify">
              <Element name="project">
                Shuvo displays the imaginative creativity of an artistic soul,
                expressive and original. his presence is a celebration of
                individuality, inspiring others to embrace their own creative
                talents and to express themselves authentically. Shuvo displays
                the imaginative creativity of an artistic soul, expressive and
                original. his presence is a celebration of individuality,
                inspiring others to embrace their own creative talents and to
                express themselves authentically.
              </Element>
              <Element name="asset">
                Shuvo displays the imaginative creativity of an artistic soul,
                expressive and original. his presence is a celebration of
                individuality, inspiring others to embrace their own creative
                talents and to express themselves authentically. Shuvo displays
                the imaginative creativity of an artistic soul, expressive and
                original. his presence is a celebration of individuality,
                inspiring others to embrace their own creative talents and to
                express themselves authentically.
              </Element>
              <Element name="image">
                Shuvo displays the imaginative creativity of an artistic soul,
                expressive and original. his presence is a celebration of
                individuality, inspiring others to embrace their own creative
                talents and to express themselves authentically. Shuvo displays
                the imaginative creativity of an artistic soul, expressive and
                original. his presence is a celebration of individuality,
                inspiring others to embrace their own creative talents and to
                express themselves authentically.
              </Element>
              <Element name="person">
                Shuvo displays the imaginative creativity of an artistic soul,
                expressive and original. his presence is a celebration of
                individuality, inspiring others to embrace their own creative
                talents and to express themselves authentically. Shuvo displays
                the imaginative creativity of an artistic soul, expressive and
                original. his presence is a celebration of individuality,
                inspiring others to embrace their own creative talents and to
                express themselves authentically.
              </Element>
            </div>
          </div>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Index;

import Header from "../header";
import Items from "../dashboard/Items";
import List from "../list";

const index = () => {
  return (
    <div>
      <Header />
      <div className="w-10/12 mx-auto mycontainer">
        <div className="bg-white shadow rounded-xl p-5 mt-16">
          <p className="text-4xl">Client Dashboard</p>
          <div className="flex sm:justify-between justify-center gap-5 mt-5 flex-wrap md:flex-nowrap">
            <Items mycolor={"purple"} title="Total User" number={13} />
            <Items mycolor={"green"} title="Premium User" number={3} />
          </div>
        </div>
        <div className="flex justify-between items-start flex-wrap md:flex-nowrap flex-col-reverse md:flex-row">
          <div className="space-y-10 mt-16 w-full md:w-7/12 lg:w-8/12">
            <p className="text-5xl">Life</p>
            <img src="/images/treesun.jpg" className="w-full rounded-3xl" />
            <p className="text-xl leading-loose text-justify">
              Shuvo displays the imaginative creativity of an artistic soul,
              expressive and original. his presence is a celebration of
              individuality, inspiring others to embrace their own creative
              talents and to express themselves authentically. Shuvo displays
              the imaginative creativity of an artistic soul, expressive and
              original. his presence is a celebration of individuality,
              inspiring others to embrace their own creative talents and to
              express themselves authentically. Shuvo displays the imaginative
              creativity of an artistic soul, expressive and original. his
              presence is a celebration of individuality, inspiring others to
              embrace their own creative talents and to express themselves
              authentically. Shuvo displays the imaginative creativity of an
              artistic soul, expressive and original. his presence is a
              celebration of individuality, inspiring others to embrace their
              own creative talents and to express themselves authentically.
              Shuvo displays the imaginative creativity of an artistic soul,
              expressive and original. his presence is a celebration of
              individuality, inspiring others to embrace their own creative
              talents and to express themselves authentically. Shuvo displays
              the imaginative creativity of an artistic soul, expressive and
              original. his presence is a celebration of individuality,
              inspiring others to embrace their own creative talents and to
              express themselves authentically.
            </p>
          </div>
          <List />
        </div>
      </div>
    </div>
  );
};

export default index;

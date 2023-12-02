import List from "../list";

const index = () => {
  return (
    <div>
      <div className="time-top py-10">
        <div className="w-10/12 mx-auto mycontainer">
          <p className="text-5xl">
            Monitor health <br /> and Sajoo
          </p>
          <p className="text-blue-400 mt-8 text-xl">What is it?</p>
        </div>
      </div>
      <div className="flex justify-between items-start flex-wrap md:flex-nowrap flex-col-reverse md:flex-row w-10/12 mx-auto mycontainer">
        <div className="space-y-10 mt-16 w-full md:w-7/12 lg:w-8/12">
          <p className="text-5xl">Life</p>
          <img src="/images/treesun.jpg" className="w-full rounded-3xl" />
          <p className="text-xl leading-loose text-justify">
            Shuvo displays the imaginative creativity of an artistic soul,
            expressive and original. his presence is a celebration of
            individuality, inspiring others to embrace their own creative
            talents and to express themselves authentically. Shuvo displays the
            imaginative creativity of an artistic soul, expressive and original.
            his presence is a celebration of individuality, inspiring others to
            embrace their own creative talents and to express themselves
            authentically. Shuvo displays the imaginative creativity of an
            artistic soul, expressive and original. his presence is a
            celebration of individuality, inspiring others to embrace their own
            creative talents and to express themselves authentically. Shuvo
            displays the imaginative creativity of an artistic soul, expressive
            and original. his presence is a celebration of individuality,
            inspiring others to embrace their own creative talents and to
            express themselves authentically. Shuvo displays the imaginative
            creativity of an artistic soul, expressive and original. his
            presence is a celebration of individuality, inspiring others to
            embrace their own creative talents and to express themselves
            authentically. Shuvo displays the imaginative creativity of an
            artistic soul, expressive and original. his presence is a
            celebration of individuality, inspiring others to embrace their own
            creative talents and to express themselves authentically.
          </p>
        </div>
        <List />
      </div>
    </div>
  );
};

export default index;

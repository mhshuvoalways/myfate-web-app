import useLoading from "@/hooks/useLoading";
import Loading from "@/components/Loading";
import Headers from "@/components/Headers";
import Categories from "@/components/Headers/Categories";
import PastLifeComponent from "@/components/PastLife/WhatHappens";

const PastLife = () => {
  const isLoading = useLoading();

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Headers />
          <Categories />
          <PastLifeComponent />
        </>
      )}
    </>
  );
};

export default PastLife;

const Categories = () => {
  return (
    <div className="border-b border-gray-100 py-2 hidden sm:block">
      <div className="flex justify-evenly gap-5 w-11/12 mx-auto">
        <p className="cursor-pointer hover:text-my-text-gray font-gabarito uppercase text-xs">Home</p>
        <p className="cursor-pointer hover:text-my-text-gray font-gabarito uppercase text-xs">Explore Future</p>
        <p className="cursor-pointer hover:text-my-text-gray font-gabarito uppercase text-xs">E-books</p>
        <p className="cursor-pointer hover:text-my-text-gray font-gabarito uppercase text-xs">Celebrity Future</p>
        <p className="cursor-pointer hover:text-my-text-gray font-gabarito uppercase text-xs">Learn</p>
      </div>
    </div>
  );
};

export default Categories;

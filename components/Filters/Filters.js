import Filter from "../Filter/Filter";
import { useEffect, useState } from "react";
const Filters = ({
  filtersMap,
  selectedFilters,
  setSelectedFilters,
  categoryData,
  onSortChange,
  sort,
  sortKeys,
}) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [activeFilter, setActiveFilter] = useState(null);
  const handleClick = (filter) => {
    setActiveFilter(filter);
  };
  const [activeFilters, setActiveFilters] = useState([]);
  console.log(activeFilters);
  useEffect(() => {
    setActiveFilters(selectedFilters);
  }, [selectedFilters]);
  return (
    <>
      <div className="grid grid-cols-2 2xl:grid-cols-5 3xl:grid-cols-6 max-lg:border-none border">
        {(filtersMap ?? []).map((filter, index) => {
          const isOpen = openIndex === index;
          return (
            <div className="relative max-lg:hidden">
              <div
                className="col-span-1 relative select-none cursor-pointer"
                key={filter?.id}
                onClick={() => {
                  setOpenIndex(isOpen ? null : index);
                }}
              >
                <div
                  className={`border-l border-t border-t-transparent hover:border-t hover:border-t-croonus-4 border-r relative py-4`}
                >
                  <h1 className="uppercase text-[0.9rem] text-center">
                    {filter?.name}
                  </h1>
                  <i className="fa-solid absolute right-0 top-4 fa-chevron-down text-base ml-auto mr-2"></i>
                </div>
              </div>
              {isOpen && (
                <div
                  className={`row-start-2 z-[20] bg-white border-l border-r border-b border-t border-t-white absolute w-full col-start-${
                    index + 1
                  }`}
                >
                  <div className="w-[90%] uppercase mx-auto pb-3.5">
                    <Filter
                      filter={filter}
                      selectedFilters={selectedFilters}
                      setSelectedFilters={setSelectedFilters}
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="grid max-lg:gap-x-5 2xl:grid-cols-5 3xl:grid-cols-6 grid-cols-2">
        <div
          className="mt-6 max-lg:hidden row-start-1 hover:border-black cursor-pointer border py-2 relative flex justify-center items-center gap-3 col-span-1 w-full"
          onClick={() => setSelectedFilters([])}
        >
          <p className="uppercase text-[0.9rem]">Poništi filtere</p>
          <i className="fa-solid fa-x text-xs"></i>
        </div>
        <div className="col-span-2 max-lg:hidden mt-6 flex justify-end gap-5 items-center 2xl:col-start-5 3xl:col-start-5">
          <span className="uppercase font-normal text-[0.9rem]">
            Sortiraj po
          </span>
          <select
            name="sort"
            id="sort"
            className="border-[#f2f2f2] py-3 uppercase text-xs select-none focus:ring-0 focus:border-croonus-1 focus:outline-none"
            onChange={onSortChange}
            value={sort ? sort.field + "_" + sort.direction : "none"}
          >
            {Object.entries(sortKeys).map((item) => (
              <option className="text-xs" value={item[0]} key={item[0]}>
                {item[1].label}
              </option>
            ))}
          </select>
        </div>
        <div
          className="col-span-1 lg:hidden text-center text-white bg-croonus-1"
          onClick={() => setOpenModal(true)}
        >
          <p className="uppercase text-base font-medium py-3.5 max-md:text-xs">
            Filteri
          </p>
        </div>
        <select
          name="sort"
          id="sort"
          className="col-span-1 uppercase focus:ring-0 lg:hidden text-center text-white bg-croonus-1 relative focus:border-croonus-1 focus:outline-none max-md:text-xs"
          onChange={onSortChange}
          value={sort ? sort.field + "_" + sort.direction : "none"}
        >
          <option value="none">Sortiraj</option>
          {Object.entries(sortKeys).map((item) => (
            <option className="text-xs uppercase" value={item[0]} key={item[0]}>
              {item[1].label}
            </option>
          ))}
        </select>
        <div
          className={
            openModal
              ? `fixed top-12 justify-between flex flex-col translate-x-0 transition-all duration-[550ms] left-0 w-screen h-screen bg-white z-[200]`
              : `fixed top-12 justify-between flex flex-col -translate-x-full transition-all duration-[550ms] left-0 w-screen h-screen bg-white z-[200]`
          }
        >
          <div className="w-[95%] relative mt-5 mx-auto ">
            <h1 className="uppercase text-xl pb-4 font-semibold text-center">
              Odaberite filtere
            </h1>
            {activeFilters?.map((item) => {
              item.value.selected.map((item2) => {
                return <p>{item2}</p>;
              });
            })}
            <i
              className="absolute fa-solid fa-x right-10 top-1"
              onClick={() => setOpenModal(false)}
            ></i>

            {(filtersMap ?? []).map((filter, index) => {
              const isOpen = openIndex === index;
              const isActive = filter === activeFilter;

              return (
                <>
                  <details
                    className={`relative border-t border-b px-5 py-5 ${
                      isActive ? "bg-croonus-5" : ""
                    }`}
                    onClick={() => {
                      handleClick(filter);

                      setOpenIndex(isOpen ? null : index);
                    }}
                  >
                    <summary className={`uppercase font-medium text-lg `}>
                      {filter?.name}
                    </summary>
                  </details>
                  {isOpen && (
                    <div
                      className={`row-start-2 z-[20] bg-white mt-5 border-t-white  w-full col-start-${
                        index + 1
                      }`}
                    >
                      <div className="w-[85%] uppercase mx-auto">
                        <Filter
                          filter={filter}
                          selectedFilters={selectedFilters}
                          setSelectedFilters={setSelectedFilters}
                          setActiveFilters={setActiveFilters}
                        />
                      </div>
                    </div>
                  )}
                </>
              );
            })}
          </div>
          <button
            className="py-3.5  w-full text-white text-center bg-croonus-4 uppercase font-medium"
            onClick={() => setOpenModal(false)}
          >
            Prikaži rezultat
          </button>
        </div>
      </div>
    </>
  );
};

export default Filters;

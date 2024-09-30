"use client";

export const Pagination = ({
  getPaginationArray = (r, m) => {},
  data,
  setPage,
}) => {
  return (
    <div
      className={`flex mt-10 py-2 px-2 sm:px-[3rem] bg-[#f2f2f2] items-center justify-center sm:justify-end gap-1 lg:w-[85%] mx-auto`}
    >
      {getPaginationArray(
        data.pagination.selected_page,
        data.pagination.total_pages,
      )?.map((num, index, array) => (
        <>
          {index === 0 && num !== 1 && (
            <>
              <span
                className={`cursor-pointer select-none py-1 px-3 border border-white hover:border-croonus-1 hover:text-croonus-1`}
                onClick={() => {
                  setPage(1);
                  window.scrollTo(0, 0);
                }}
              >
                1
              </span>
              {num - 1 !== 1 && (
                <span className={`select-none py-1 px-3`}>...</span>
              )}
            </>
          )}
          {index > 0 && num - array[index - 1] > 1 && (
            <span className={`select-none py-1 px-3`}>...</span>
          )}
          <span
            className={`${
              num === data.pagination.selected_page
                ? "cursor-pointer select-none bg-croonus-1 py-1 px-3 text-white"
                : "cursor-pointer select-none py-1 px-3 border border-white hover:border-croonus-1 hover:text-croonus-1"
            }`}
            onClick={() => {
              setPage(num);
              window.scrollTo(0, 0);
            }}
          >
            {num}
          </span>
          {index === array.length - 1 &&
            num !== data.pagination.total_pages && (
              <>
                {data.pagination.total_pages - num !== 1 && (
                  <span className={`select-none py-1 px-3 `}>...</span>
                )}
                <span
                  className={`cursor-pointer select-none py-1 px-3 border border-white hover:border-croonus-1 hover:text-croonus-1`}
                  onClick={() => {
                    setPage(data.pagination.total_pages);
                    window.scrollTo(0, 0);
                  }}
                >
                  {data.pagination.total_pages}
                </span>
              </>
            )}
        </>
      ))}
    </div>
  );
};

export default function Loading() {
  return (
    <div>
      <div className="max-lg:w-[95%] lg:w-[85%] mx-auto flex flex-col">
        <div className="animate-pulse bg-slate-300 w-4/5 h-10 mx-auto mt-10"></div>

        <div className="mt-10 h-40 animate-pulse bg-slate-300 "></div>
        <div className='mt-10 w-full animate-pulse h-16 bg-slate-300'></div>
        <div className="mt-6 h-10 w-1/2 animate-pulse bg-slate-300"></div>
        <div className="mt-6 h-10 w-1/3 animate-pulse items-self-end bg-slate-300"></div>
      </div>
      <div className="max-lg:w-[95%] lg:w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2  gap-x-10 gap-y-10 bg-white pt-12 lg:grid-cols-3 2xl:grid-cols-4 ">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className="max-md:h-[407px] max-lg:h-[429px] h-[350px] 3xl:h-[470px] w-full col-span-1 bg-slate-300 object-cover animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  );
}

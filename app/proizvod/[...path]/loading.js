const Loading = () => {
  return (
    
      <div className="max-md:mt-[1rem] mt-[5rem] max-md:w-[95%] max-md:mx-auto mx-[5rem] max-md:mb-[2rem] mb-[5rem]">
        <div className="gap-x-[4.063rem] md:grid md:grid-cols-4">
        <div className="col-span-2 max-md:col-span-4 max-md:h-[450px] md:flex md:flex-row-reverse gap-5 md:max-h-[380px] lg:max-h-[550px] xl:max-h-[680px] 2xl:max-h-[720px] 3xl:max-h-[700px]">
          <div className={`h-[500px] flex flex-row gap-3 w-full`}>
            <div className={`flex flex-col gap-3 max-md:hidden`}>
              <div
                className={`h-[150px] w-[150px] bg-slate-300 animate-pulse`}
              ></div>
              <div
                className={`h-[150px] w-[150px] bg-slate-300 animate-pulse`}
              ></div>
              <div
                className={`h-[150px] w-[150px] bg-slate-300 animate-pulse`}
              ></div>
            </div>
            <div
              className={`max-md:h-[450px] md:h-[500px] bg-slate-300 animate-pulse w-full`}
            ></div>
          </div>
        </div>
        <div className="max-md:col-span-4 w-[100%] max-md:mb-[2rem] text-black mb-[6rem] max-md:mt-[2rem]">
          <div className={`w-full h-[35px] animate-pulse bg-slate-300`}></div>
          <div
            className={`mt-7 h-[25px] w-[20%] animate-pulse bg-slate-300`}
          ></div>
          <div
            className={`mt-12 h-[20px] w-[20%] animate-pulse bg-slate-300`}
          ></div>
          <div
            className={`w-full mt-8 h-[25px] animate-pulse bg-slate-300`}
          ></div>
          <div
            className={`mt-12 h-[35px] w-[25%] animate-pulse bg-slate-300`}
          ></div>
          <div
            className={`mt-20 h-[50px] w-[50%] animate-pulse bg-slate-300`}
          ></div>
        </div>
      </div>
       
        
      <div className="animate-pulse bg-slate-300 w-1/4 h-10"></div>
      <div className="animate-pulse bg-slate-300 h-44 w-full mt-5"></div>

      <div className={`h-[200px] animate-pulse w-full bg-slate-300 mt-10`}></div>
    </div>
  );
};

export default Loading;

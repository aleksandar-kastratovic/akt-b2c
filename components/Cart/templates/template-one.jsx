import {
  GoogleReCaptcha,
  GoogleReCaptchaProvider,
} from "react-google-recaptcha-v3";
import { currencyFormat } from "@/helpers/functions";

export const TemplateOne = ({
  verifyCaptcha,
  data,
  cartCost,
  recommendedProducts,
  children,
}) => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.CAPTCHAKEY}>
      <GoogleReCaptcha onVerify={verifyCaptcha} refreshReCaptcha={true} />
      <div className="mx-auto text-sm 4xl:container mt-[1rem] lg:mt-[4rem] placeholder">
        <div className="md:hidden bg-[#f5f5f6]">
          <div className="font-semibold py-3 text-xl w-[85%] mx-auto">
            Korpa
          </div>
        </div>
        <>
          <div className="grid grid-cols-5 gap-y-3 gap-x-3 max-xl:mx-auto max-xl:w-[95%] xl:mx-[5rem] ">
            <div className="col-span-5 bg-white p-1 max-xl:row-start-1">
              <div className={`xl:hidden py-5`}>
                <div className={`max-xl:w-full xl:w-[400px] mt-2`}>
                  {/*bar for measuring*/}
                  <div className="w-full h-1 bg-[#f5f5f7] mt-3">
                    <div
                      className="h-full relative transition-all duration-500 bg-[#2bc48a]"
                      style={{
                        width: `${
                          (data?.summary?.totals?.items_discount / 6000) * 100 >
                          100
                            ? 100
                            : (data?.summary?.totals?.items_discount / 6000) *
                              100
                        }%`,
                      }}
                    >
                      <div className="absolute top-0 right-0 h-full w-full flex items-center justify-end">
                        <span className="text-black font-bold text-[0.5rem] px-[0.275rem] py-1 bg-white rounded-full border-2 border-[#2bc48a] ">
                          {data?.summary?.totals?.items_discount > 6000
                            ? 100
                            : Math.round(
                                (data?.summary?.totals?.items_discount / 6000) *
                                  100,
                              )}
                          %
                        </span>
                      </div>
                    </div>
                  </div>

                  <h1
                    className={`text-base text-[#e10000] mt-3 font-bold ${
                      data?.summary?.totals?.items_discount > 6000
                        ? "hidden"
                        : ""
                    }`}
                  >
                    Do besplatne dostave nedostaje ti još{" "}
                    {currencyFormat(
                      6000 - data?.summary?.totals?.items_discount,
                    )}
                  </h1>
                </div>
                {cartCost > 6000 && (
                  <h1 className="text-base text-[#2bc48a] mt-3 font-bold">
                    Besplatna dostava
                  </h1>
                )}
              </div>

              <div className={`flex items-center justify-between`}>
                <h2 className="text-xl font-bold ">Informacije</h2>
              </div>
              {children}
            </div>
          </div>
        </>
      </div>
    </GoogleReCaptchaProvider>
  );
};

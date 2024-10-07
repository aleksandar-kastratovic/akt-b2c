import { headers } from "next/headers";
import { get } from "@/app/api/api";
import { StaticBasicData } from "@/_components/static-page";
import { Suspense } from "react";

const getStaticPage = async (slug) => {
  return await get(`/static-pages/content/${slug}`).then((response) => {
    return response?.payload;
  });
};

const Static = ({ params: { slug } }) => {
  return (
    <Suspense
      fallback={
        <>
          <div className={`mt-10 w-full bg-slate-200 animate-pulse`} />
          <div className={`mt-10 w-full bg-slate-200 animate-pulse`} />
          <div className={`mt-10 w-full bg-slate-200 animate-pulse`} />
          <div className={`mt-10 w-full bg-slate-200 animate-pulse`} />
          <div className={`mt-10 w-full bg-slate-200 animate-pulse`} />
          <div className={`mt-10 w-full bg-slate-200 animate-pulse`} />
        </>
      }
    >
      <StaticBasicData slug={slug} />
    </Suspense>
  );
};

export default Static;

export const generateMetadata = async ({ params: { slug } }) => {
  const header_list = headers();
  let canonical = header_list.get("x-pathname");

  const data = await getStaticPage(slug);

  if (!data) {
    return {
      title: "404 | Stefan Tekstil",
      description: "Dobrodošli na Stefan Tekstil Online Shop",
      alternates: {
        canonical: canonical,
      },
      robots: {
        index: true,
        follow: true,
      },
      openGraph: {
        title: "404 | Stefan Tekstil",
        description: "Dobrodošli na Stefan Tekstil Online Shop",
        type: "website",
        images: [
          {
            url: "https://api.akt.croonus.com/croonus-uploads/config/b2c/logo-bcca26522da09b0cfc1a9bd381ec4e99.jpg",
            width: 800,
            height: 600,
            alt: "Stefan Tekstil",
          },
        ],
        locale: "sr_RS",
      },
    };
  } else {
    return {
      title: `${data?.basic_data?.name} | Stefan Tekstil`,
      description: `${data?.basic_data?.name} | Stefan Tekstil`,
      alternates: {
        canonical: canonical,
      },
      robots: {
        index: true,
        follow: true,
      },
      openGraph: {
        title: `${data?.basic_data?.name} | Stefan Tekstil`,
        description: `${data?.basic_data?.name} | Stefan Tekstil`,
        type: "website",
        locale: "sr_RS",
      },
    };
  }
};

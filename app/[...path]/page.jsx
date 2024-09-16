import { get } from "@/app/api/api";
import CategoryPage from "../../_components/category";
import ProductPage from "../../_components/product";
import { convertHttpToHttps } from "@/helpers/convertHttpToHttps";
import { notFound, redirect } from "next/navigation";

const handleData = async (slug) => {
  return await get(`/slugs/product-categories?slug=${slug}`).then(
    (res) => res?.payload
  );
};

const fetchCategorySEO = async (slug) => {
  return await get(`/categories/product/single/seo/${slug}`).then(
    (response) => response?.payload
  );
};

const getProductSEO = async (id) => {
  return await get(`/product-details/seo/${id}`).then(
    (response) => response?.payload
  );
};

const defaultMetadata = {
  title: `Kućni tekstil - posteljine, jastuci i jorgani - Stefan kućni tekstil Arilje`,
  description:
    "AKT doo Arilje proizvodi i prodaje kvalitetan kućni tekstil. Posetite naš online shop i kupite brzo, jednostavno i povoljno.",
  keywords: ["stefan, arilje, tekstil, posteljina, jastuci, disney"],
  openGraph: {
    title:
      "Kućni tekstil - posteljine, jastuci i jorgani - Stefan kućni tekstil Arilje",
    description:
      "AKT doo Arilje proizvodi i prodaje kvalitetan kućni tekstil. Posetite naš online shop i kupite brzo, jednostavno i povoljno.",
    keywords: ["stefan, arilje, tekstil, posteljina, jastuci, disney"],
    images: [
      {
        url: "https://api.akt.croonus.com/croonus-uploads/config/b2c/logo-bcca26522da09b0cfc1a9bd381ec4e99.jpg",
        width: 800,
        height: 800,
      },
    ],
  },
};

export async function generateMetadata({ params: { path }, searchParams:{ viewed: viewed_products,filteri, sort, velicina, boja } }) {
  const str = path?.join("/");
  const data = await handleData(str);
  const viewed = Number(viewed_products) > 0 ? Number(viewed_products) : 0;

  const handleCategoryRobots = (viewed, filteri, sort) => {
    //if any exits, return false
    if (filteri) return { index: false, follow: false };
    //if sort exists, return false
    if (sort) return { index: false, follow: false };
    //if viewed is less than 10, return true
    if (viewed <= 20) {
      return { index: true, follow: true };
    } else {
      if (viewed > 20) {
        return { index: false, follow: true };
      }
    }

    return { index: true, follow: true };
  };

  const handleProductRobots = (velicina, boja) => {
    if (velicina || boja) {
      return { index: false, follow: false };
    } else {
      return { index: true, follow: true };
    }
  };

  switch (true) {
    case data?.status === false &&
      data?.type === null &&
      data?.id === null &&
      data?.redirect_url === false:
      return {
        ...defaultMetadata,
      };

    case data?.type === "category" &&
      data?.status &&
      data?.redirect_url === false:
      const category = await fetchCategorySEO(path[path?.length - 1]);
      const image_category =
        convertHttpToHttps(category?.image) ??
        "https://api.akt.croonus.com/croonus-uploads/config/b2c/logo-bcca26522da09b0cfc1a9bd381ec4e99.jpg";

      if (category) {
        return {
          title: `${category?.title}` ?? "",
          description: category?.description ?? "",
          keywords: category?.keywords ?? "",
          type: category?.type ?? "",
          image: image_category ?? "",
          openGraph: {
            title: `${category?.title}` ?? "",
            description: category?.description ?? "",
            type: category?.type ?? "",
            images: [
              {
                url: image_category ?? "",
                width: 800,
                height: 600,
                alt: category?.description ?? "",
                title: category?.title ?? "",
                description: category?.description ?? "",
              },
            ],
          },
          robots: handleCategoryRobots(viewed, filteri, sort),
        };
      } else {
        return defaultMetadata;
      }

    case data?.type === "product" &&
      data?.status &&
      data?.redirect_url === false:
      const productSEO = await getProductSEO(path[path?.length - 1]);
      const image =
        convertHttpToHttps(productSEO?.meta_image) ??
        "https://api.akt.croonus.com/croonus-uploads/config/b2c/logo-bcca26522da09b0cfc1a9bd381ec4e99.jpg";
      if (productSEO) {
        return {
          title: productSEO?.meta_title ?? "",
          description: productSEO?.meta_description ?? "",
          keywords: productSEO?.meta_keywords ?? "",
          openGraph: {
            title: productSEO?.meta_title ?? "",
            description: productSEO?.meta_description ?? "",
            type: "website",
            images: [
              {
                url: image,
                width: 800,
                height: 800,
                alt: productSEO?.meta_title ?? productSEO?.meta_description,
              },
            ],
          },
          robots: handleProductRobots(productSEO?.size, productSEO?.color),
        };
      } else {
        return defaultMetadata;
      }
  }
}

const CategoryProduct = async ({ params: { path }, params, searchParams }) => {
  const str = path?.join("/");
  const data = await handleData(str);

  switch (true) {
    case data?.type === "category" &&
      data?.status === true &&
      data?.redirect_url === false:
      return <CategoryPage params={params} searchParams={searchParams} />;
    case data?.type === "product" &&
      data?.status === true &&
      data?.redirect_url === false:
      return <ProductPage params={params} />;
    case data?.status === false:
      return notFound();
    default:
      redirect(`/${data?.redirect_url}`);
  }
};

export default CategoryProduct;

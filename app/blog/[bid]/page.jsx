import { get } from "../../api/api";
import dynamic from "next/dynamic";
import parse from "html-react-parser";
import Image from "next/image";
import { convertHttpToHttps } from "@/helpers/convertHttpToHttps";

const getBlogPost = async (bid) => {
  const getBlogPost = await get(`news/details/${bid}`).then(
    (response) => response?.payload,
  );
  return getBlogPost;
};

const BlogPost = async ({ params: { bid } }) => {
  const blogpost = await getBlogPost(bid);

  return (
    <>
      <div className="mx-auto 4xl:container">
        <div className="blogPostHolder mb-16">
          <div className=" imgHolder">
            <div className="relative max-lg:h-[300px] max-h-[340px] h-[340px] w-auto">
              <Image
                src={convertHttpToHttps(blogpost.images?.thumb_image)}
                fill
                className="object-cover rounded-xl"
                alt={blogpost.basic_data.title ?? "AKT"}
              />
            </div>
          </div>
          <div className=" titleHolder">
            <h1 className="text-4xl mt-16 text-center font-bold uppercase">
              {blogpost.basic_data.title}
            </h1>
            <p className=" date text-center font-medium">
              {blogpost.basic_data.short_description}
            </p>
          </div>
          <div className=" mt-5 txtHolder mx-10">
            <div className="text-center">
              {parse(blogpost?.basic_data?.description)}
            </div>
          </div>
          <div className="sliderHolder"></div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;

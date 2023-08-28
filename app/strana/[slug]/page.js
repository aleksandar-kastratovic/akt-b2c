import StaticPage from "@/components/StaticPage/StaticPage";

const Static = ({ params: { slug } }) => {
  return <StaticPage slug={slug} />;
};

export default Static;

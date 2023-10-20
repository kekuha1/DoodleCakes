import { Helmet } from "react-helmet-async";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome To DoodleCakes",
  description: "We sell the best cupcakes",
  keywords: "cupcakes, buy cupcakes, cheap cupcakes",
};

export default Meta;

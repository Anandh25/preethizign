import Home from "./Home";

import FeaturedCollections from "../components/FeaturedCollections";
// import AboutBrand from "../components/AboutBrand";
import CustomOrders from "../components/CustomOrders";
import Testimonials from "../components/Testimonials";
import ProductsShowcase from "../components/ProductsShowcase";
import FAQ from "../components/Faq";
const HomePage = () => {
  return (
    <>
      <Home />
      <FeaturedCollections />
      {/* <AboutBrand /> */}
      <CustomOrders />
      <Testimonials />
      <ProductsShowcase />
      {/* <FAQ /> */}
      <FAQ />
    </>
  );
};

export default HomePage;

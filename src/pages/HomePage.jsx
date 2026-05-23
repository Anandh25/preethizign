import Home from "./Home";

import FeaturedCollections from "../components/FeaturedCollections";
// import AboutBrand from "../components/AboutBrand";
import CustomOrders from "../components/CustomOrders";
import Testimonials from "../components/Testimonials";
import ProductsShowcase from "../components/ProductsShowcase";
import FAQ from "../components/FAQ";
const HomePage = () => {
  return (
    <>
      <Home />
      <FeaturedCollections />
      {/* <AboutBrand /> */}
      <CustomOrders />
      <Testimonials />
      <ProductsShowcase />
      <FAQ />
    </>
  );
};

export default HomePage;

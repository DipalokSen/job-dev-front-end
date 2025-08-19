import Details from "@/Components/Details";
import FeaturedJobs from "@/Components/FeaturedJobs";
import Home from "@/Components/Home";
import Info from "@/Components/Info";
import Pricing from "@/Components/Pricing";
import TopCompany from "@/Components/TopCompany";
import React from "react";

const HomePage = () => {
  return <div className="">
      <Home/>
      <Details/>
      <FeaturedJobs/>
      <TopCompany/>
      <Info/>
      <Pricing/>
  </div>;
};

export default HomePage;

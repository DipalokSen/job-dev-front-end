import Details from "@/Components/Details";
import FeaturedJobs from "@/Components/FeaturedJobs";
import Home from "@/Components/Home";
import TopCompany from "@/Components/TopCompany";
import React from "react";

const HomePage = () => {
  return <div className="">
      <Home/>
      <Details/>
      <FeaturedJobs/>
      <TopCompany/>
  </div>;
};

export default HomePage;

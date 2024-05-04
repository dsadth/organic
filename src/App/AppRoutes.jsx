import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Main from "../Components/Main/Main";
import About from "../Components/About/About";
import Shop from "../Components/Shop/Shop";
import Services from "../Components/Services/Services";
import ServiceSingle from "../Components/ServiceSingle/ServiceSingle";
import Portfolio from "../Components/Portfolio/Portfolio";
import PortfolioSingle from "../Components/PortfolioSingle/PortfolioSingle";
import Team from "../Components/Team/Team";
import Blog from "../Components/Blog/Blog";
import BlogSingle from "../Components/BlogSingle/BlogSingle";
import Contact from "../Components/Contact/Contact";
import Licenses from "../Components/Licenses/Licenses";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/service" element={<Services />} />
        <Route path="/serviceSingle" element={<ServiceSingle />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolioSingle" element={<PortfolioSingle />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogSingle" element={<BlogSingle />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/licenses" element={<Licenses />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;

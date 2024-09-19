import React from "react";
import Navbar from "../components/common/Navbar/Navbar";
import Jumbotron from "@/components/common/Jumbotron/Jumbotron";
import About from "@/pages/About/About";
import Article from "@/pages/Article/Article";
import Footer from "@/components/common/Footer/Footer";
const Home = () => {
  return (
    <div>
      <header>
        <Navbar />
        <Jumbotron />
        <About />
        <Article />
        <Footer />
      </header>
    </div>
  );
};

export default Home;

import React from "react";
import articles from "./../../db/article.json";
import Navbar from "@/components/common/Navbar/Navbar";
import {Link} from "react-router-dom";
import Footer from "@/components/common/Footer/Footer";
const AllArticle = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {articles.map((article) => (
            <Link
              to={`/article/${article.id}`}
              key={article.id}
              className="p-6 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 transition-transform transform hover:shadow-2xl"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full mb-4"
              />
              <p className="text-gray-500 text-sm mt-[50px]">{article.date}</p>{" "}
              <h2 className="text-xl font-semibold mt-[20px]">
                {article.title}
              </h2>
              <p className="text-gray-700">
                {article.description.split(" ").slice(0, 15).join(" ")}...
              </p>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllArticle;

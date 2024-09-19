import React from "react";
import articles from "./../../db/article.json";
import Navbar from "@/components/common/Navbar/Navbar";
import {Link} from "react-router-dom";
const AllArticle = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
          {articles.map((article) => (
            <Link
              to={`/article/${article.id}`}
              key={article.id}
              className="p-6 rounded-lg shadow-lg m-2 transition-transform transform hover:shadow-2xl"
              style={{backgroundColor: article.backgroundColor}}
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full mb-4"
              />
              <h2 className="text-xl font-semibold">{article.title}</h2>
              <p className="text-gray-700">
                {article.description.split(" ").slice(0, 15).join(" ")}...
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllArticle;

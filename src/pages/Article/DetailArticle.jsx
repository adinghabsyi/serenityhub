import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import articlesData from "./../../db/article.json";
import Navbar from "@/components/common/Navbar/Navbar";

const DetailArticle = () => {
  const {id} = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const articleFound = articlesData.find(
      (article) => article.id === parseInt(id)
    );
    setArticle(articleFound);
  }, [id]);

  if (!article) {
    return (
      <div className="container mx-auto p-4 text-center">
        <p className="text-red-500 text-lg font-semibold">Article not found</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 mt-8">
        <div className="max-w-4xl mx-auto  shadow-md rounded-lg overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">
              {article.title}
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              {article.description.split("\n").map((paragraph, index) => (
                <span key={index} className="block mb-4">
                  {paragraph}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailArticle;

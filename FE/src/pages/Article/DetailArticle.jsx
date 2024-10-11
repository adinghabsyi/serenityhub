import React, {useState, useEffect} from "react";
import {useParams, Link} from "react-router-dom";
import articlesData from "@/db/article.json";
import Navbar from "@/components/common/Navbar/Navbar";
import Footer from "@/components/common/Footer/Footer";
import RelatedArticles from "./ReleatedArticle";

const DetailArticle = () => {
  const {id} = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const articleFound = articlesData.find(
      (article) => article.id === parseInt(id)
    );
    setArticle(articleFound);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto p-4 text-center">
        <p className="text-blue-500 text-lg font-semibold">Loading...</p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="container mx-auto p-4 text-center">
        <p className="text-red-500 text-lg font-semibold">Article not found</p>
      </div>
    );
  }

  const relatedArticles = articlesData
    .filter((item) => item.id !== article.id)
    .slice(0, 3);

  const handleRelatedArticleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 mt-8 bg-white shadow-md rounded-lg overflow-hidden">
        <div className="max-w-4xl mx-auto bg-white mt-[60px]">
          <p className="text-lg text-gray-700 text-center">{article.date}</p>
          <h1 className="text-5xl mt-[20px] mb-4 text-gray-800 text-center font-poppins">
            {article.title}
          </h1>
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-auto object-cover mt-[100px]"
          />
          <div className="p-6">
            <p className="text-lg text-gray-700 mb-6">
              {article.description.split("\n").map((paragraph, index) => (
                <span key={index} className="block mb-4">
                  {paragraph}
                </span>
              ))}
            </p>
          </div>
        </div>

        {/* Artikel Terkait */}
        <RelatedArticles
          relatedArticles={relatedArticles}
          onArticleClick={handleRelatedArticleClick}
        />
      </div>
      <Footer />
    </>
  );
};

export default DetailArticle;

// src/components/RelatedArticles.js

import React from "react";
import {Link} from "react-router-dom";

const RelatedArticles = ({relatedArticles, onArticleClick}) => {
  return (
    <div className="m-[100px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl text-gray-800">Artikel Terkait</h2>
        <Link
          to="/all-articles"
          className="border-bl text-gray-800 hover:text-gray-500 rounded-lg px-4 py-2"
        >
          Lihat Semua Artikel
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {relatedArticles.map((relatedArticle) => (
          <Link
            to={`/article/${relatedArticle.id}`}
            key={relatedArticle.id}
            onClick={onArticleClick} // Menggunakan fungsi scroll di sini
            className="p-4 bg-white border border-gray-200 rounded-lg shadow-md transition-transform transform hover:shadow-lg"
          >
            <img
              src={relatedArticle.image}
              alt={relatedArticle.title}
              className="w-full h-40 object-cover mb-4 rounded-t-lg"
            />
            <h3 className="text-xl font-semibold">{relatedArticle.title}</h3>
            <p className="text-gray-700">
              {relatedArticle.description.split(" ").slice(0, 15).join(" ")}
              ...
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;

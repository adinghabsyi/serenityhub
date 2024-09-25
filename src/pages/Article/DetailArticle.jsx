import React,{useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {articlesData} from "./../../db/article.json";

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
    return <p>Article not found</p>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.description}</p>
      <img src={article.image} alt={article.title} />
    </div>
  );
};

export default DetailArticle;

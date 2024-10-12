import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import articles from "./../../db/article.json";

const Article = () => {
  return (
    <div className="bg-[#3B6358] p-[60px]">
      <div className="container bg-[#3B6358]">
        {/* Header Section */}
        <div className="relative mt-2 text-white text-left">
          <h1 className="font-times text-4xl font-bold text-white">Articles</h1>
          <Link
            to="/all-articles"
            className="absolute right-3 text-white underline mt-2"
          >
            Lihat Semua
          </Link>
        </div>

        {/* Carousel Section */}
        <div className="carousel mt-8">
          <Carousel>
            <CarouselContent className="flex">
              {articles.slice(0, 5).map((article) => (
                <CarouselItem
                  key={article.id}
                  className="flex-shrink-0 w-full sm:w-1/2 md:w-1/4" // 100% di mobile, 50% di tablet, 25% di desktop
                >
                  <div
                    className="max-w-[290px] h-[250px] mx-auto rounded-lg overflow-hidden mt-6"
                    style={{ backgroundColor: article.backgroundColor }}
                  >
                    <div className="p-6 flex flex-col justify-between h-full">
                      <div>
                        <h2 className="text-xl text-gray-800 font-bold">
                          {article.title}
                        </h2>
                        <p className="mt-2 text-gray-600 text-xs">
                          {article.description
                            .split(" ")
                            .slice(0, 15)
                            .join(" ")}
                          ...
                        </p>
                      </div>
                      <Button
                        variant="primary"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium mr-[120px] bg-black text-white rounded-[100px] w-[150px] h-[30px] hover:cursor-pointer hover:scale-105 hover:shadow-xl"
                      >
                        <Link
                          to={`/article/${article.id}`}
                          key={article.id}
                          className="flex items-center space-x-1"
                        >
                          <span>Read More</span>
                          <ChevronRightIcon className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Carousel Navigation */}
            <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full -ml-[60px]">
              Previous
            </CarouselPrevious>
            <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full -mr-[60px]">
              Next
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Article;

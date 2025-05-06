import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const [categoryNews, setCategoryNews] = useState([]);
  // console.log(data);

  // useEffect(()=>{

  //     const filteredNews = data.filter(news => news.category_id == id);
  //     console.log(filteredNews);
  // },[data,id])

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
    } else if (id == "1") {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick == true
      );

      setCategoryNews(filteredNews);
    } else {
      const filteredNews = data.filter((news) => news.category_id == id);
      setCategoryNews(filteredNews);
    }
  }, [data, id]);

  return (
    <div className="my-5 mx-3">
      <h1 className="font-bold mb-5"> Total {categoryNews.length} news found</h1>
      <div className="grid grid-cols-1 gap-5">
        {
           categoryNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>) 
        }
      </div>
    </div>
  );
};

export default CategoryNews;

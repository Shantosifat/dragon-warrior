import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/public/categories.json").then((res) =>
  res.json()
);
const Categories = () => {
  // const categories = use(categoryPromise);
  // console.log(categories);
  console.log(categoryPromise);
  const categories = use(categoryPromise);

  return (
    <div>
      <h2 className="font-bold my-5">All Categories {categories.length}</h2>

      <div className="grid grid-cols-1 gap-3">
        {categories.map((category) => (
          <NavLink key={category.id} to={`/category/${category.id}`} className={'btn bg-base-300 border-0 hover:bg-base-100'}>{category.name}</NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;

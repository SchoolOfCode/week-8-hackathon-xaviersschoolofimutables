"use client";

import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import RecipeCard from "../RecipeCards/RecipeCard";

function RecipeCarousel({ recipes }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  console.log(recipes);

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="mt-6">
      {recipes.map((item, index) => (
        <Carousel.Item key={index}>
          <div className="flex justify-center">
            <RecipeCard
              title={item.title}
              instructions={item.instructions}
              servings={item.servings}
            />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default RecipeCarousel;

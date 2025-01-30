"use client";

import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../CarouselImage/ExampleCarouselImage";
import RecipeCard from "../RecipeCards/RecipeCard";

function RecipeCarousel({ recipes }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {recipes.map((item, index) => (
        <Carousel.Item key={index}>
          <RecipeCard
            title={item.title}
            ingredients={item.ingredients}
            servings={item.servings}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default RecipeCarousel;

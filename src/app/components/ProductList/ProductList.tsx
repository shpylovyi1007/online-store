"use client";

import React, { useState } from "react";
import * as Slider from "@radix-ui/react-slider";
import ProductCard from "../ProductCard/ProductCard";
import style from "./ProductList.module.css";

const ProductList: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      title: "Sneakers #1",
      category: "Footwear",
      price: 149,
      description:
        "Love at the first sight for enthusiasts seeking a fresh and whimsical style.",
      imageUrl: "/1.webp",
    },
    {
      title: "Sneakers #2",
      category: "Footwear",
      price: 149,
      description:
        "Love at the first sight for enthusiasts seeking a fresh and whimsical style.",
      imageUrl: "/2.webp",
    },
    {
      title: "Sneakers #3",
      category: "Footwear",
      price: 149,
      description:
        "Love at the first sight for enthusiasts seeking a fresh and whimsical style.",
      imageUrl: "/3.webp",
    },
    {
      title: "Sneakers #4",
      category: "Footwear",
      price: 149,
      description:
        "Love at the first sight for enthusiasts seeking a fresh and whimsical style.",
      imageUrl: "/4.webp",
    },
    {
      title: "Sneakers #5",
      category: "Footwear",
      price: 149,
      description:
        "Love at the first sight for enthusiasts seeking a fresh and whimsical style.",
      imageUrl: "/5.webp",
    },
    {
      title: "Sneakers #6",
      category: "Footwear",
      price: 149,
      description:
        "Love at the first sight for enthusiasts seeking a fresh and whimsical style.",
      imageUrl: "/6.webp",
    },
    {
      title: "Sneakers #7",
      category: "Footwear",
      price: 149,
      description:
        "Love at the first sight for enthusiasts seeking a fresh and whimsical style.",
      imageUrl: "/7.webp",
    },
    {
      title: "Sneakers #8",
      category: "Footwear",
      price: 149,
      description:
        "Love at the first sight for enthusiasts seeking a fresh and whimsical style.",
      imageUrl: "/8.webp",
    },
    {
      title: "Sneakers #9",
      category: "Footwear",
      price: 149,
      description:
        "Love at the first sight for enthusiasts seeking a fresh and whimsical style.",
      imageUrl: "/9.webp",
    },
    {
      title: "Sneakers #10",
      category: "Footwear",
      price: 149,
      description:
        "Love at the first sight for enthusiasts seeking a fresh and whimsical style.",
      imageUrl: "/10.webp",
    },
  ];

  const itemsPerPage = 4; // Кількість видимих карток
  const maxIndex = Math.max(0, products.length - itemsPerPage);

  const handleSliderChange = (value: number[]) => {
    setCurrentIndex(value[0]);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };
  return (
    <div className={style.container}>
      <div className={style.viewport}>
        <div
          className={style.sliderTrack}
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
          }}
        >
          {products.map((product, index) => (
            <div key={index} className={style.slide}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>

      <Slider.Root
        className={style.slider}
        value={[currentIndex]}
        min={0}
        max={maxIndex}
        step={1}
        onValueChange={handleSliderChange}
      ></Slider.Root>

      <button
        onClick={handlePrev}
        className={`${style.navButton} ${style.prevButton}`}
        aria-label="Попередній слайд"
      >
        ←
      </button>

      <button
        onClick={handleNext}
        className={`${style.navButton} ${style.nextButton}`}
        aria-label="Наступний слайд"
      >
        →
      </button>
    </div>
  );
};

export default ProductList;

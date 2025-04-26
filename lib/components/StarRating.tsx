"use client";

import { useRef } from "react";
import "./StarRating.css";

export default function StarRating({
  rating,
  onRatingClick,
  className,
}: {
  rating: number;
  onRatingClick?: (rating: number) => void;
  className?: string;
}) {
  const starRefs = [
    useRef<HTMLSpanElement>(null),
    useRef<HTMLSpanElement>(null),
    useRef<HTMLSpanElement>(null),
    useRef<HTMLSpanElement>(null),
    useRef<HTMLSpanElement>(null),
  ];
  const onMouseEnter = (index: number) => {
    console.log("onMouseEnter", index);
    const stars = starRefs
      .map((ref) => ref.current)
      .filter(Boolean) as HTMLSpanElement[];
    console.log(stars);
    for (let i = 0; i <= index; i++) {
      const star = stars[i];
      if (star) {
        star.classList.add("hovered");
      }
    }
  };
  const onMouseLeave = () => {
    console.log("onMouseLeave");
    const stars = starRefs
      .map((ref) => ref.current)
      .filter(Boolean) as HTMLSpanElement[];
    stars.forEach((star) => {
      if (star) {
        star.classList.remove("hovered");
      }
    });
  };
  const handleClick = (index: number) => {
    console.log("handleClick", index);
    onRatingClick?.(index + 1);
    onMouseLeave();
  };
  const stars = Array.from({ length: 5 }, (_, index) => {
    const starRating = index + 1;
    return (
      <span
        onMouseEnter={() => onMouseEnter(index)}
        onMouseLeave={() => onMouseLeave()}
        onClick={() => handleClick(index)}
        key={index}
        ref={starRefs[index]}
        className={starRating <= rating ? "filled" : "empty"}
      >
        ★
      </span>
    );
  });

  return <div className="star-rating">{stars}</div>;
}

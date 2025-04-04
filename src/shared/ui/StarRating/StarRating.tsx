import { FC } from "react";
import { Star } from "../Star";

interface StarRatingProps {
  rating: number;
  totalStars?: number;
}

export const StarRating: FC<StarRatingProps> = ({ rating, totalStars = 5 }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "0px",
        width: "80px",
        cursor: "pointer",
        height: "18px",
      }}
    >
      {Array.from({ length: totalStars }, (_, i) => (
        <Star key={i} color={i < rating ? "#FFA500" : "#D3D3D3"} />
      ))}
    </div>
  );
};

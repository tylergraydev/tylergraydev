export default function StarRating({ rating }: { rating: number }) {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const starRating = index + 1;
    return (
      <span key={index} className={starRating <= rating ? "filled" : "empty"}>
        ★
      </span>
    );
  });

  return <div className="star-rating">{stars}</div>;
}

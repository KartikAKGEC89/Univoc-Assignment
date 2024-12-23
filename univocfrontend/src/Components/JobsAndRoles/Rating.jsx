const Rating = ({ rating }) => {
  const roundedRating = Math.round(rating);
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 ${i < roundedRating ? 'text-yellow-400' : 'text-yellow-400/30'}`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          />
        </svg>
      ))}
    </div>
  );
};

export default Rating;
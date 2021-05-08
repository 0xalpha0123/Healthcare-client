function Card({ children, className }) {
  return (
    <div className={`py-4 px-8 bg-white shadow-lg rounded-lg my-5 ${className}`}>{children}</div>
  );
}

export default Card;

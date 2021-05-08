function Card({ children, className }) {
  return <div className={`py-4 px-8 bg-white shadow-lg rounded-lg ${className}`}>{children}</div>;
}

export default Card;

function Card({ children, className, style }) {
  return (
    <div className={`py-4 px-8 bg-white shadow-lg rounded-lg ${className}`} style={style}>
      {children}
    </div>
  );
}

export default Card;

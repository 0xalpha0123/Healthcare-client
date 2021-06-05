function Alert({ children }) {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-2 py-1 rounded mt-1"
      role="alert"
    >
      {children}
    </div>
  );
}
export default Alert;

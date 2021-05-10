function Textarea({ value = '', setValue, placeholder, className = '', rows = 10, label }) {
  return (
    <div className={className}>
      <div className="text-xs mb-2">{label}</div>

      <textarea
        className="appearance-none border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        placeholder={placeholder}
        value={value}
        rows={rows}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default Textarea;

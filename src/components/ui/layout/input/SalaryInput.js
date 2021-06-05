const SalaryInput = ({ value, setValue, placeholder, label }) => (
  <div className="flex flex-col w-32 border border-gray-200 rounded-md mx-2 bg-white overflow-hidden">
    <div className="text-xs border-b w-full text-center cursor-default">
      <span>{label}</span>
    </div>
    <div>
      <input
        className="text-gray-600 text-center w-full px-2 hover:border-gray-300 focus:outline-none appearance-none"
        type="text"
        placeholder={placeholder}
        value={value}
        min="0"
        onChange={(e) => {
          const number = e.target.value;

          if (!isNaN(number) && number >= 0) {
            setValue(e.target.value);
          }
        }}
      />
    </div>
  </div>
);

export default SalaryInput;

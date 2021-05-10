import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
function Select({ children, setValue, onClear, label, value, options = [] }) {
  return (
    <div>
      {(onClear || label) && (
        <div className="text-center pb-1 flex justify-center align-center">
          <div className="text-xs mr-2">{label}</div>
          {onClear && value && (
            <div
              className="flex items-center  cursor-pointer  rounded hover:bg-secondary hover:text-white transition duration-500"
              onClick={(e) => setValue('')}
            >
              <FontAwesomeIcon icon={faTimesCircle} />
            </div>
          )}
        </div>
      )}
      <div className="flex">
        <div className="inline-block relative w-full">
          <select
            className="block appearance-none w-full bg-white border border-gray-200 px-4 py-2 pr-8 rounded  leading-tight focus:outline-none"
            value={value || 0}
            onChange={(e) => setValue(e.target.value)}
          >
            <option value={0} className="hidden"></option>

            {options.map((option, key) => (
              <option key={key} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <div className="pointer-events-none absolute inset-y-0 right-0 bottom-0 flex items-center px-2">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Select;

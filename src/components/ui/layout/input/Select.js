import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Select = ({ children, setValue, onClear, label, value = '' }) => (
  <div className="relative bg-white inline-flex overflow-hidden border border-gray-200 rounded-md text-gray-600 h-11 w-40 mx-2 hover:border-gray-300">
    <select
      className="h-full w-full pl-2 cursor-pointer focus:outline-none appearance-none"
      value={value || 0}
      onChange={(e) => setValue(e.target.value)}
    >
      {label && (
        <option value={0} disabled>
          {label}
        </option>
      )}
      {children}
    </select>
    {onClear && value && (
      <div
        className="flex justify-center items-center w-10 h-full text-gray-500 hover:bg-gray-500 hover:text-white cursor-pointer border-l border-gray-200"
        onClick={(e) => setValue('')}
      >
        <FontAwesomeIcon icon={faTimesCircle} />
      </div>
    )}
  </div>
);

export default Select;

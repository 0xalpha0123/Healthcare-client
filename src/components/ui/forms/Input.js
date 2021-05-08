import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Alert from '../Alert';
function Input({
  value = '',
  setValue,
  placeholder,
  type = 'text',
  label,
  onClear,
  className = '',
  error = '',
}) {
  return (
    <div className={className}>
      {(onClear || label) && (
        <div className="text-center pb-1 flex justify-center align-center">
          <div className="text-xs mr-2">{label}</div>
          {onClear && value && (
            <div
              className="flex items-center  cursor-pointer  rounded hover:bg-secondary hover:text-white transition duration-500"
              onClick={(e) => setValue(undefined)}
            >
              <FontAwesomeIcon icon={faTimesCircle} />
            </div>
          )}
        </div>
      )}
      <input
        className="appearance-none border border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        type="text"
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={(e) => setValue(e.target.value)}
      />
      {error && <Alert>{error}</Alert>}
    </div>
  );
}

export default Input;

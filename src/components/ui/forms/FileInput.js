import { useRef } from 'react';
import Alert from '../Alert';

function FileInput({ onChange, label, className, error }) {
  const inputFile = useRef(null);

  return (
    <div className={`overflow-hidden relative w-56  ${className}`}>
      <button
        onClick={() => inputFile.current.click()}
        type="button"
        className="w-full p-2 bg-primary text-white flex align-center mx-auto justify-center rounded-xl  hover:bg- border-none outline-none	"
      >
        <svg
          fill="#FFF"
          height="18"
          viewBox="0 0 24 24"
          width="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
        </svg>
        <span className="ml-2">{label}</span>
      </button>
      <input
        className="cursor-pointer absolute block opacity-0 pin-r pin-t"
        type="file"
        onChange={onChange}
        ref={inputFile}
      />
      {error && <Alert>{error}</Alert>}
    </div>
  );
}

export default FileInput;

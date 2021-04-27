export const Navbar = () => (
  <div className="flex-1 flex flex-col">
    <nav className="px-4 flex justify-between bg-white h-16 border-b-2">
      <ul className="flex items-center">
        <li className="h-12 w-12">
          <img
            className="h-full w-full mx-auto"
            src="/img/logo2.png"
            alt="svelte logo"
          />
        </li>
      </ul>

      <ul className="flex items-center">
        <li>
          <h1 className="pl-8 lg:pl-0 text-gray-700">Healthcare Hireos</h1>
        </li>
      </ul>

      <ul className="flex items-center">
        <li className="pr-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-bell"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        </li>
      </ul>
    </nav>
  </div>
);

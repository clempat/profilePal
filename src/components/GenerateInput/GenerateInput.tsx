interface GenerateInputProps {
  action: (FormData: any) => void;
}

export default function GenrateInput({ action }: GenerateInputProps) {
  return (
    <form action={action} className="w-full">
      <label
        htmlFor="generate"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M21 12a9 9 0 1 0 -8.983 9" />
            <path d="M18.001 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M18.001 14.5v1.5" />
            <path d="M18.001 20v1.5" />
            <path d="M21.032 16.25l-1.299 .75" />
            <path d="M16.27 19l-1.3 .75" />
            <path d="M14.97 16.25l1.3 .75" />
            <path d="M19.733 19l1.3 .75" />
            <path d="M9 10h.01" />
            <path d="M15 10h.01" />
            <path d="M9.5 15c.658 .64 1.56 1 2.5 1" />
          </svg>
        </div>
        <input
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="How many profile?"
          type="number"
          name="generate"
          min="5"
          max="20"
          required
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Generate
        </button>
      </div>
    </form>
  );
}

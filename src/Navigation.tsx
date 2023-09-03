type Props = {
  onClickRestaurants: () => void;
};

export default function Navigation({ onClickRestaurants }: Props) {
  return (
    <nav className="fixed top-2 w-content mx-12 h-20 flex box-border items-center px-8 lg:px-56 place-content-start">
      <button
        type="button"
        className="text-gray-900 w-fit shadow-lg flex space-x-2 items-center bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        onClick={onClickRestaurants}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#6b7280"
            d="M7 22v-9.15q-1.275-.35-2.138-1.4T4 9V2h2v7h1V2h2v7h1V2h2v7q0 1.4-.863 2.45T9 12.85V22H7Zm10 0v-8h-3V7q0-2.075 1.463-3.538T19 2v20h-2Z"
          />
        </svg>
        <span>Restaurants</span>
      </button>
    </nav>
  );
}

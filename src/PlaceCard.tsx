import { useState } from "react";

type Props = {
  isSelected: boolean;
  distance: number;
  name: string;
  opening_hours: string;
  phone: string;
  website: string;
};

export default function PlaceCard({
  isSelected,
  distance,
  name,
  opening_hours,
  phone,
  website,
}: Props) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      id="card"
      data-tooltip-target="tooltip-light"
      data-tooltip-style="light"
      className={
        isSelected
          ? "relative h-32 aspect-[4/3] rounded-lg flex flex-col space-y-1 scale-110 bg-gray-100 px-4 py-2 text-sm shadow-lg duration-300"
          : "relative h-32 aspect-[4/3] rounded-lg flex flex-col space-y-1 bg-gray-100 px-4 py-2 text-sm hover:shadow-lg duration-300"
      }
    >
      <span id="place_name" className="text-base">
        {name}
      </span>
      <span>
        <b>Distance:</b> {distance} km
      </span>

      <button
        id="card_show_more_button"
        className="font-medium text-xs text-gray-600 dark:text-blue-500 hover:underline"
        onClick={() => setShowDetails(true)}
      >
        Show more
      </button>

      {showDetails ? (
        <div className="absolute right-0 bottom-full lg:left-40 lg:top-0 z-10 h-56 lg:h-fit w-48 overflow-x-auto overflow-y-auto rounded-lg flex flex-col space-y-1 bg-gray-100 px-4 py-2 text-sm shadow-xl duration-300">
          <button
            id="close_card_details_button"
            type="button"
            className="ml-auto -mx-1.5 -my-1.5 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-dismiss-target="#toast-default"
            aria-label="Close"
            onClick={() => setShowDetails(false)}
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
          <span>
            <b>Opening Hours:</b> {opening_hours}
          </span>

          <span>
            <b>Phone:</b> {phone}
          </span>

          <span>
            <b>Website:</b> {website}
          </span>
        </div>
      ) : null}
    </div>
  );
}

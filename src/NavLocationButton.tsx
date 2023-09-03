type Props = {
  iconPath: string;
  iconAlt: string;
  onClick: () => void;
};

export default function NavLocationButton({
  iconPath,
  iconAlt,
  onClick,
}: Props) {
  return (
    <button
      className="w-10 aspect-square flex items-center place-content-center bg-white p-2 rounded-full shadow-lg"
      onClick={onClick}
    >
      <img
        src={iconPath}
        alt={iconAlt}
        className="w-full h-full object-contain"
      />
    </button>
  );
}

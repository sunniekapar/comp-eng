export default function ArrowButton({
  direction,
  size,
}: {
  direction: string;
  size: string;
}) {
  return (
    <button>
      <i
        className={`bi bi-arrow-down-short ${direction} ${size} cursor-pointer hover:translate-y-1 transition-all duration-75`}
      ></i>
    </button>
  );
}

export default function SquareButton({
  name,
  color,
  href,
  span,
}: {
  name: string;
  color: string;
  href: string;
  span: string;
}) {
  const redirectToWebsite = () => {
    window.open(`${href}`, "_blank");
  };

  return (
    <button
      onClick={redirectToWebsite}
      className={`${span} text-white text-3xl shadow-md bg-gray-300 w-52 h-52 rounded-3xl font-bold transition-all duration-200 ease-in hover:shadow-2xl ${color}`}
    >
      {name}
    </button>
  );
}

export default function Tile({
  name,
  styles,
  href,
}: {
  name: string;
  styles: string;
  href: string;
}) {
  const redirectToWebsite = () => {
    window.open(`${href}`, "_blank");
  };
  const textStyles = `text-gray-950 hover:text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold`;
  const animationStyles = `transition-all duration-200 ease-in hover:shadow-xl`;
  const buttonStyles = 'shadow-md bg-gray-100 rounded-3xl'
  const allStyles = `${styles} ${textStyles} ${animationStyles} ${buttonStyles}`
  return (
    <button
      onClick={redirectToWebsite}
      className={allStyles}
    >
      {name}
    </button>
  );
}

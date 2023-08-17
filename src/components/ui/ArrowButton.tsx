export default function ArrowButton(){
  return (
    <button className="block w-20 h-20 transition-all duration-200 -translate-y-5 hover:text-blue-900 hover:animate-bounce">
      <i className={`bi bi-arrow-down-short text-7xl`}></i>
    </button>
  );
}

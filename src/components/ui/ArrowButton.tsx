import { FC } from "react";
import { IconContext } from "react-icons";
import { BsArrowDownShort } from "react-icons/bs";

interface ArrowButtonProps {}

const ArrowButton: FC<ArrowButtonProps> = () => {
  return (
    <button className="block w-20 h-20 duration-200 -translate-y-5 on-all place-items-center hover:text-blue-900 hover:animate-bounce">
      <a href="#HeroGridSection">
        <IconContext.Provider value={{ className: "text-7xl" }}>
          <BsArrowDownShort className="mx-auto" />
        </IconContext.Provider>
      </a>
    </button>
  );
};

export default ArrowButton;

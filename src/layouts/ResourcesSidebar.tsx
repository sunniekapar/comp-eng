import { data } from "@/data/data";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Accordion,
} from "@/components/ui/accordion";
import { FC, useState } from "react";
import { Button } from "@/components/ui/button";

import { BsArrowUpRightCircle } from "react-icons/bs";

interface ResourcesSidebarProps {}

const ResourcesSidebar: FC<ResourcesSidebarProps> = () => {
  const cards = data.map((card, index) => {
    return (
      <AccordionItem key={index} value={`item-${index}`}>
        <AccordionTrigger className="text-left">{card.unit}</AccordionTrigger>
        <AccordionContent>
          {card.lessons.map((lesson, index) => {
            return (
              <div
                key={index}
                className="p-5 mb-3 bg-white border rounded-lg shadow-sm border-zinc-200 text-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50"
              >
                {lesson}
              </div>
            );
          })}
        </AccordionContent>
      </AccordionItem>
    );
  });
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 1024);

  const toggleSidebar = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <aside className="w-[300px]">
      <Button onClick={toggleSidebar} variant="link" className="lg:hidden">
        <BsArrowUpRightCircle />
      </Button>
      <Accordion
        type="multiple"
        className={`max-h-[700px] w-64 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-800 scrollbar-thumb-rounded-md p-4 pl-0  transition-all duration-300 ease-in-out transform lg:translate-x-0 lg:opacity-100 ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        {cards}
      </Accordion>
    </aside>
  );
};

export default ResourcesSidebar;


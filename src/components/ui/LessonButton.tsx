import { LessonFileType } from "@/data/data";
import { FC, ReactNode } from "react";
import { IconContext } from "react-icons";
import {
  BsFiletypeDocx,
  BsFiletypePdf,
  BsFiletypePpt,
  BsFiletypeTxt,
  BsFiletypeXls,
} from "react-icons/bs";

interface LessonButtonProps {
  lessonTitle: string;
  fileType?: LessonFileType;
}

const LessonButton: FC<LessonButtonProps> = ({ lessonTitle, fileType }) => {
  let icon: ReactNode = null;
  switch (fileType) {
    case "docx":
      icon = <BsFiletypeDocx />;
      break;
    case "xls":
      icon = <BsFiletypeXls />;
      break;
    case "txt":
      icon = <BsFiletypeTxt />;
      break;
    case "ppt":
      icon = <BsFiletypePpt />;
      break;
    default:
      icon = <BsFiletypePdf />;
  }
  return (
    <div className="flex items-center gap-3 p-5 mb-3 bg-white border rounded-lg shadow-sm border-zinc-200 text-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50">
      <IconContext.Provider value={{ className: "text-xl" }}>
        {icon}
      </IconContext.Provider>
      <p>{lessonTitle}</p>
    </div>
  );
};

export default LessonButton;

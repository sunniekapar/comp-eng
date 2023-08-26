export type LessonFileType = "pdf" | "xls" | "docx" | "ppt" | "txt";
interface Lesson {
  title: string,
  fileType?: LessonFileType;
}

interface Unit {
  unit: string,
  lessons: Lesson[]
}

export interface UnitItem extends Unit {}
export const lessons: UnitItem[] = [
  {
    unit: "Data Structures and Algorithms",
    lessons: [
      { title: "What are algorithms?", fileType: "pdf" },
      { title: "Big O Notation", fileType: "txt"},
    ],
  },
  {
    unit: "Test 2",
    lessons: [
      { title: "What are algorithms?", fileType: "xls" },
      { title: "Big O Notation" },
    ],
  },
  {
    unit: "Test 3",
    lessons: [
      { title: "What are algorithms?", fileType: "ppt" },
      { title: "Big O Notation" },
    ],
  },
  {
    unit: "Data Structures and Algorithms",
    lessons: [
      { title: "What are algorithms?", fileType: "docx" },
      { title: "Big O Notation" },
    ],
  },
];

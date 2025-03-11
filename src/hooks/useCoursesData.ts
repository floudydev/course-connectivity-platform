
import { CourseProps } from "@/components/CourseCard";

// Extended list of sample course data
const allCourses: CourseProps[] = [
  {
    id: "1",
    title: "Основы бухгалтерского учета",
    category: "Бухгалтерия",
    description: "Изучите фундаментальные принципы бухгалтерского учета, необходимые для работы в современных компаниях.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
    price: 12000,
    duration: "8 недель",
    level: "Начальный",
    studentsCount: 350
  },
  {
    id: "2",
    title: "Бизнес-анализ и стратегическое планирование",
    category: "Менеджмент",
    description: "Научитесь анализировать бизнес-процессы и разрабатывать эффективные стратегии для достижения целей организации.",
    image: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    price: 18500,
    duration: "12 недель",
    level: "Средний",
    studentsCount: 215
  },
  {
    id: "3",
    title: "Маркетинг в цифровой экономике",
    category: "Маркетинг",
    description: "Освойте современные инструменты цифрового маркетинга и научитесь эффективно продвигать продукты и услуги в интернете.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    price: 15000,
    duration: "10 недель",
    level: "Средний",
    studentsCount: 280
  },
  {
    id: "4",
    title: "Финансовый менеджмент для руководителей",
    category: "Финансы",
    description: "Углубите понимание финансовых процессов и научитесь принимать стратегические решения для оптимизации финансовых ресурсов.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1730&q=80",
    price: 24000,
    duration: "14 недель",
    level: "Продвинутый",
    studentsCount: 180
  },
  {
    id: "5",
    title: "Экономика предприятия",
    category: "Экономика",
    description: "Изучите основы экономики предприятия, включая ценообразование, планирование и анализ экономических показателей.",
    image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    price: 14000,
    duration: "9 недель",
    level: "Начальный",
    studentsCount: 320
  },
  {
    id: "6",
    title: "Управление персоналом в современной организации",
    category: "Менеджмент",
    description: "Освойте методы эффективного управления человеческими ресурсами, мотивации и развития персонала.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    price: 16000,
    duration: "11 недель",
    level: "Средний",
    studentsCount: 245
  }
];

export const useCoursesData = () => {
  // Extract unique categories from courses
  const categoriesSet = new Set(allCourses.map((course) => course.category));
  const categories = Array.from(categoriesSet);
  
  return {
    allCourses,
    categories
  };
};

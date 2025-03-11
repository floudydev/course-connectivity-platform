
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import CourseCard, { CourseProps } from "./CourseCard";

// Sample course data
const featuredCourses: CourseProps[] = [
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
  }
];

const FeaturedCourses = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Популярные курсы</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Выберите из наших самых востребованных курсов, разработанных экспертами отрасли для развития вашей карьеры
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course, index) => (
            <div key={course.id} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CourseCard course={course} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild>
            <Link to="/courses">
              Все курсы
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;

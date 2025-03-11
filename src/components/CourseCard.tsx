
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Clock, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

export interface CourseProps {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
  duration: string;
  level: "Начальный" | "Средний" | "Продвинутый";
  studentsCount: number;
}

const getLevelColor = (level: CourseProps["level"]) => {
  switch (level) {
    case "Начальный":
      return "bg-green-100 text-green-800";
    case "Средний":
      return "bg-blue-100 text-blue-800";
    case "Продвинутый":
      return "bg-purple-100 text-purple-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const CourseCard = ({ course }: { course: CourseProps }) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hv-effect card-shadow">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        <Badge className="absolute left-3 top-3 z-10">{course.category}</Badge>
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <CardTitle className="line-clamp-2 text-xl">{course.title}</CardTitle>
        </div>
        <CardDescription className="line-clamp-2 mt-1">{course.description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="mt-2 flex flex-wrap gap-2">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{course.studentsCount} студентов</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <BarChart className="h-4 w-4" />
            <span className={`rounded-full px-2 py-0.5 text-xs ${getLevelColor(course.level)}`}>
              {course.level}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between pt-2">
        <div className="text-lg font-semibold">{course.price.toLocaleString('ru-RU')} ₽</div>
        <Button asChild>
          <Link to={`/courses/${course.id}`}>Подробнее</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;

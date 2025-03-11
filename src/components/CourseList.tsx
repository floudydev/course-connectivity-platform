
import { CourseProps } from "./CourseCard";
import CourseCard from "./CourseCard";

interface CourseListProps {
  courses: CourseProps[];
}

export const CourseList = ({ courses }: CourseListProps) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((course, index) => (
        <div 
          key={course.id} 
          className="animate-slide-up" 
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <CourseCard course={course} />
        </div>
      ))}
    </div>
  );
};

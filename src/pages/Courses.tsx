
import { useState } from "react";
import Layout from "@/components/Layout";
import CourseCard, { CourseProps } from "@/components/CourseCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Search, Filter } from "lucide-react";
import { CourseFilters } from "@/components/CourseFilters";
import { CourseList } from "@/components/CourseList";
import { useCoursesData } from "@/hooks/useCoursesData";
import { NoCoursesFound } from "@/components/NoCoursesFound";

const Courses = () => {
  const { allCourses, categories } = useCoursesData();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<number[]>([0, 30000]);
  const [showFilters, setShowFilters] = useState(false);

  // Filter courses based on search and filter criteria
  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch = 
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "all" || course.level === selectedLevel;
    const matchesPrice = course.price >= priceRange[0] && course.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesLevel && matchesPrice;
  });

  // Toggle filters visibility on mobile
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  // Handle price range change
  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Reset filters
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedLevel("all");
    setPriceRange([0, 30000]);
  };

  return (
    <Layout>
      <div className="mt-16 min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold sm:text-5xl">Наши курсы</h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Исследуйте наши образовательные программы, разработанные для развития ваших профессиональных навыков в сфере экономики и торговли
            </p>
          </div>

          {/* Search and Filter Controls */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Поиск курсов..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="pl-10"
                />
              </div>
              <Button 
                variant="outline" 
                onClick={toggleFilters}
                className="lg:hidden"
              >
                <Filter className="mr-2 h-4 w-4" />
                Фильтры
              </Button>
            </div>

            {/* Filters */}
            <CourseFilters 
              showFilters={showFilters}
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedLevel={selectedLevel}
              setSelectedLevel={setSelectedLevel}
              priceRange={priceRange}
              handlePriceChange={handlePriceChange}
              resetFilters={resetFilters}
            />
          </div>

          {/* Course Grid */}
          {filteredCourses.length > 0 ? (
            <CourseList courses={filteredCourses} />
          ) : (
            <NoCoursesFound resetFilters={resetFilters} />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Courses;

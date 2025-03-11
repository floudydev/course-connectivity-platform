
import { useState } from "react";
import Layout from "@/components/Layout";
import CourseCard, { CourseProps } from "@/components/CourseCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Search, Filter } from "lucide-react";

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

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedLevel, setSelectedLevel] = useState<string>("");
  const [priceRange, setPriceRange] = useState<number[]>([0, 30000]);
  const [showFilters, setShowFilters] = useState(false);

  // Extract unique categories from courses
  const categories = [...new Set(allCourses.map((course) => course.category))];
  
  // Filter courses based on search and filter criteria
  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "" || course.level === selectedLevel;
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
    setSelectedCategory("");
    setSelectedLevel("");
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
            <div className={`mt-4 rounded-lg border bg-card p-4 shadow-sm lg:block ${showFilters ? 'block' : 'hidden'}`}>
              <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
                {/* Category Filter */}
                <div>
                  <label className="mb-2 block text-sm font-medium">Категория</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Все категории" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Все категории</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Level Filter */}
                <div>
                  <label className="mb-2 block text-sm font-medium">Уровень</label>
                  <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                    <SelectTrigger>
                      <SelectValue placeholder="Все уровни" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Все уровни</SelectItem>
                      <SelectItem value="Начальный">Начальный</SelectItem>
                      <SelectItem value="Средний">Средний</SelectItem>
                      <SelectItem value="Продвинутый">Продвинутый</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range Filter */}
                <div className="md:col-span-1 lg:col-span-2">
                  <label className="mb-2 block text-sm font-medium">
                    Цена: {priceRange[0].toLocaleString('ru-RU')} ₽ - {priceRange[1].toLocaleString('ru-RU')} ₽
                  </label>
                  <Slider
                    value={priceRange}
                    min={0}
                    max={30000}
                    step={1000}
                    onValueChange={handlePriceChange}
                    className="py-4"
                  />
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <Button variant="ghost" onClick={resetFilters}>
                  Сбросить фильтры
                </Button>
              </div>
            </div>
          </div>

          {/* Course Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCourses.map((course, index) => (
                <div 
                  key={course.id} 
                  className="animate-slide-up" 
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex h-64 flex-col items-center justify-center rounded-lg border border-dashed bg-secondary/30 p-6 text-center animate-fade-in">
              <Search className="mb-4 h-12 w-12 text-muted-foreground" />
              <h3 className="text-2xl font-semibold">Курсы не найдены</h3>
              <p className="mt-2 text-muted-foreground">
                Попробуйте изменить параметры поиска или фильтрации
              </p>
              <Button variant="outline" className="mt-4" onClick={resetFilters}>
                Сбросить фильтры
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Courses;

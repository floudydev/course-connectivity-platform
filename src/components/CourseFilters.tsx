
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

interface CourseFiltersProps {
  showFilters: boolean;
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedLevel: string;
  setSelectedLevel: (level: string) => void;
  priceRange: number[];
  handlePriceChange: (value: number[]) => void;
  resetFilters: () => void;
}

export const CourseFilters = ({
  showFilters,
  categories,
  selectedCategory,
  setSelectedCategory,
  selectedLevel,
  setSelectedLevel,
  priceRange,
  handlePriceChange,
  resetFilters
}: CourseFiltersProps) => {
  return (
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
              <SelectItem value="all">Все категории</SelectItem>
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
              <SelectItem value="all">Все уровни</SelectItem>
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
  );
};

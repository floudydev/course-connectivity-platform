
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface NoCoursesFoundProps {
  resetFilters: () => void;
}

export const NoCoursesFound = ({ resetFilters }: NoCoursesFoundProps) => {
  return (
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
  );
};

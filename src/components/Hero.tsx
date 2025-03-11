
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ 
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      }}></div>
      
      <div className="container relative mx-auto px-4 py-32 sm:py-40">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-xl animate-slide-up">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Образование для будущего
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Торгово-Экономический Колледж
            </h1>
            <p className="mt-6 text-xl leading-8 text-muted-foreground">
              Начните свой путь к успешной карьере в экономике и бизнесе с нашими профессиональными онлайн-курсами.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link to="/courses">
                  Выбрать курс
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">О колледже</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute -left-4 -top-4 h-72 w-72 animate-blur-in rounded-full bg-blue-100 opacity-70 blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 h-72 w-72 animate-blur-in rounded-full bg-indigo-100 opacity-70 blur-3xl"></div>
            <div className="relative z-10 rounded-2xl bg-white p-6 shadow-lg animate-slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
                alt="Студенты за учебой"
                className="h-auto w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

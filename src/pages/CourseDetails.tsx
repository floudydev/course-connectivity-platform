
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CourseProps } from "@/components/CourseCard";
import { ArrowLeft, Users, Clock, BarChart, CheckCircle, ShoppingCart, Check } from "lucide-react";
import { useCoursesData } from "@/hooks/useCoursesData";
import { useCart } from "@/contexts/CartContext";
import { useSettings } from "@/contexts/SettingsContext";

const CourseDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<CourseProps | null>(null);
  const [loading, setLoading] = useState(true);
  const { allCourses } = useCoursesData();
  const { addToCart, isInCart, removeFromCart } = useCart();
  const { t } = useSettings();

  useEffect(() => {
    // Simulate loading
    setLoading(true);
    
    // Find the course by ID
    const foundCourse = allCourses.find(c => c.id === id);
    setCourse(foundCourse || null);
    
    // Simulate API delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [id, allCourses]);

  const handleCartAction = () => {
    if (course) {
      if (isInCart(course.id)) {
        removeFromCart(course.id);
      } else {
        addToCart(course);
      }
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto mt-20 px-4 py-12">
          <div className="animate-pulse space-y-8">
            <div className="h-8 w-3/4 rounded bg-gray-200"></div>
            <div className="h-64 rounded bg-gray-200"></div>
            <div className="space-y-4">
              <div className="h-4 w-full rounded bg-gray-200"></div>
              <div className="h-4 w-5/6 rounded bg-gray-200"></div>
              <div className="h-4 w-4/6 rounded bg-gray-200"></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!course) {
    return (
      <Layout>
        <div className="container mx-auto mt-20 px-4 py-12 text-center">
          <h1 className="mb-4 text-3xl font-bold">Курс не найден</h1>
          <p className="mb-8 text-muted-foreground">
            Курс, который вы ищете, не существует или был удален
          </p>
          <Button asChild>
            <Link to="/courses">Вернуться к списку курсов</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  // Course exists, show details
  return (
    <Layout>
      <div className="container mx-auto mt-20 px-4 py-12">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/courses">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Назад к курсам
            </Link>
          </Button>
          
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left Column - Image */}
            <div className="lg:col-span-1">
              <div className="relative overflow-hidden rounded-lg">
                <Badge className="absolute left-3 top-3 z-10">{course.category}</Badge>
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>
              
              <div className="mt-6 space-y-4 rounded-lg border bg-card p-6">
                <div className="text-2xl font-bold">{course.price.toLocaleString('ru-RU')} ₽</div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    <span>{course.studentsCount} студентов</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BarChart className="h-5 w-5 text-muted-foreground" />
                    <span>{course.level}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    variant={isInCart(course.id) ? "secondary" : "outline"}
                    className="flex-1"
                    onClick={handleCartAction}
                  >
                    {isInCart(course.id) ? (
                      <>
                        <Check className="mr-2 h-4 w-4" />
                        {t('cart.inCart')}
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        {t('cart.add')}
                      </>
                    )}
                  </Button>
                  <Button className="flex-1">
                    {t('course.enroll')}
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Right Column - Details */}
            <div className="lg:col-span-2">
              <h1 className="mb-4 text-3xl font-bold">{course.title}</h1>
              <p className="mb-8 text-muted-foreground">{course.description}</p>
              
              <div className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">Чему вы научитесь</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Понимать ключевые концепции и принципы в области {course.category.toLowerCase()}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Применять полученные знания на практике в реальных бизнес-сценариях</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Анализировать и решать сложные профессиональные задачи</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 flex-shrink-0 text-green-500" />
                    <span>Развить навыки, востребованные на современном рынке труда</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="mb-4 text-2xl font-semibold">О курсе</h2>
                <p className="mb-4">
                  Этот курс разработан опытными специалистами в области {course.category.toLowerCase()} 
                  и предоставляет всестороннее понимание ключевых концепций, методологий и практических 
                  аспектов данной дисциплины. Вы получите не только теоретические знания, но и 
                  практические навыки, которые сможете сразу применить в своей профессиональной деятельности.
                </p>
                <p>
                  Курс подходит для студентов с {course.level === "Начальный" ? "любым уровнем подготовки" : 
                  course.level === "Средний" ? "базовыми знаниями в области" : "солидным опытом в сфере"} {course.category.toLowerCase()} 
                  и направлен на развитие как фундаментальных, так и специализированных компетенций.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CourseDetails;

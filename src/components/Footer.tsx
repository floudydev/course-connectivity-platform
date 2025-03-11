
import { NavLink } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t bg-secondary/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* College Info */}
          <div className="animate-slide-up [animation-delay:100ms]">
            <div className="flex items-center gap-2 font-semibold text-primary">
              <GraduationCap className="h-6 w-6" />
              <span className="text-xl">САОК-2024</span>
            </div>
            <p className="mt-4 text-muted-foreground">
              Торгово-Экономический Колледж - ваш путь к успешной карьере в экономике и бизнесе.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-up [animation-delay:200ms]">
            <h3 className="mb-4 text-lg font-semibold">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-muted-foreground transition-colors hover:text-primary">
                  Главная
                </NavLink>
              </li>
              <li>
                <NavLink to="/courses" className="text-muted-foreground transition-colors hover:text-primary">
                  Курсы
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-muted-foreground transition-colors hover:text-primary">
                  О нас
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-muted-foreground transition-colors hover:text-primary">
                  Контакты
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-up [animation-delay:300ms]">
            <h3 className="mb-4 text-lg font-semibold">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <Phone className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <span className="text-muted-foreground">+7 (123) 456-7890</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <span className="text-muted-foreground">info@saok2024.ru</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <span className="text-muted-foreground">ул. Примерная, д. 123, г. Москва, 123456</span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div className="animate-slide-up [animation-delay:400ms]">
            <h3 className="mb-4 text-lg font-semibold">Режим работы</h3>
            <ul className="space-y-2">
              <li className="flex justify-between text-muted-foreground">
                <span>Понедельник - Пятница:</span>
                <span>9:00 - 18:00</span>
              </li>
              <li className="flex justify-between text-muted-foreground">
                <span>Суббота:</span>
                <span>10:00 - 15:00</span>
              </li>
              <li className="flex justify-between text-muted-foreground">
                <span>Воскресенье:</span>
                <span>Выходной</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ООО «Торгово-Экономический Колледж» (САОК-2024). Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

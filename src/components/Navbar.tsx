
import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, GraduationCap, Settings, LogIn, LogOut, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleLogin = () => {
    closeMenu();
    navigate('/login');
  };

  const handleLogout = () => {
    closeMenu();
    logout();
    navigate('/');
  };

  const handleSettings = () => {
    closeMenu();
    navigate('/settings');
  };

  const navLinks = [
    { name: "Главная", path: "/" },
    { name: "Курсы", path: "/courses" },
    { name: "О нас", path: "/about" },
    { name: "Контакты", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'glass card-shadow py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <NavLink 
          to="/" 
          className="flex items-center gap-2 font-semibold text-primary"
          onClick={closeMenu}
        >
          <GraduationCap className="h-6 w-6" />
          <span className="text-xl">САОК-2024</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => 
                    `relative px-1 py-2 font-medium transition-colors duration-300 hover:text-primary ${
                      isActive ? 'text-primary' : 'text-foreground/80'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 h-[2px] w-full bg-primary" />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sign In/Settings Buttons (Desktop) */}
        <div className="hidden space-x-2 md:flex">
          {user ? (
            <>
              <Button
                variant="ghost" 
                size="sm" 
                onClick={handleSettings}
                className="flex items-center gap-2"
              >
                <Settings className="h-4 w-4" />
                <span>Настройки</span>
              </Button>
              <Button 
                size="sm" 
                onClick={handleLogout}
                className="flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                <span>Выйти</span>
              </Button>
            </>
          ) : (
            <Button 
              size="sm" 
              onClick={handleLogin}
              className="flex items-center gap-2"
            >
              <LogIn className="h-4 w-4" />
              <span>Войти</span>
            </Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="fixed inset-0 top-16 z-50 animate-slide-down bg-background md:hidden">
            <nav className="container mx-auto p-4">
              <ul className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `block p-2 text-lg font-medium ${
                          isActive ? 'text-primary' : 'text-foreground/80'
                        }`
                      }
                      onClick={closeMenu}
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
                {user ? (
                  <>
                    <li>
                      <Button
                        variant="ghost"
                        className="mt-4 flex w-full items-center justify-start gap-2 p-2 text-lg font-medium"
                        onClick={handleSettings}
                      >
                        <Settings className="h-5 w-5" />
                        <span>Настройки</span>
                      </Button>
                    </li>
                    <li>
                      <Button
                        className="mt-4 flex w-full items-center justify-start gap-2"
                        onClick={handleLogout}
                      >
                        <LogOut className="h-5 w-5" />
                        <span>Выйти</span>
                      </Button>
                    </li>
                  </>
                ) : (
                  <li>
                    <Button
                      className="mt-4 flex w-full items-center justify-start gap-2"
                      onClick={handleLogin}
                    >
                      <LogIn className="h-5 w-5" />
                      <span>Войти</span>
                    </Button>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

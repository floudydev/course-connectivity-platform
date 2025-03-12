
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Settings, User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useSettings } from "@/contexts/SettingsContext";
import CartDropdown from "./CartDropdown";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const { t } = useSettings();

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">EduTrade</span>
          </Link>
          <nav className="hidden md:flex">
            <ul className="flex gap-6">
              <li>
                <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {t('nav.courses')}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <CartDropdown />
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link to="/settings">
                  {t('button.settings')}
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={logout}>{t('button.logout')}</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild>
              <Link to="/login">{t('button.login')}</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;

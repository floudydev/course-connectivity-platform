
import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useSettings } from '@/contexts/SettingsContext';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const { settings } = useSettings();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Apply page-specific classes based on current route and settings
  const getPageClasses = () => {
    const baseClasses = "flex-1 animate-fade-in";
    const sizeClass = `text-size-${settings.fontSize}`;
    
    // You can add route-specific classes here if needed
    return `${baseClasses} ${sizeClass}`;
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className={getPageClasses()}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

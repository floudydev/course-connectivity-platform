
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CourseProps } from '@/components/CourseCard';
import { toast } from 'sonner';
import { useSettings } from './SettingsContext';

interface CartItem extends CourseProps {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (course: CourseProps) => void;
  removeFromCart: (courseId: string) => void;
  clearCart: () => void;
  isInCart: (courseId: string) => boolean;
  cartCount: number;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

// Helper function to get cart from localStorage
const getStoredCart = (): CartItem[] => {
  try {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (error) {
    console.error("Error parsing stored cart:", error);
    localStorage.removeItem('cart');
    return [];
  }
};

export const CartProvider = ({ children }: CartProviderProps) => {
  // Initialize with stored cart to avoid flashing empty state
  const [cartItems, setCartItems] = useState<CartItem[]>(getStoredCart());
  const { t } = useSettings();

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (course: CourseProps) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === course.id);
      
      if (existingItem) {
        // Course already in cart, don't change quantity for courses
        toast.info(t('cart.alreadyAdded'));
        return prevItems;
      } else {
        // Add new item
        toast.success(t('cart.added'));
        return [...prevItems, { ...course, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (courseId: string) => {
    setCartItems(prevItems => {
      const newItems = prevItems.filter(item => item.id !== courseId);
      if (newItems.length < prevItems.length) {
        toast.info(t('cart.removed'));
      }
      return newItems;
    });
  };

  const clearCart = () => {
    setCartItems([]);
    toast.info(t('cart.cleared'));
  };

  const isInCart = (courseId: string) => {
    return cartItems.some(item => item.id === courseId);
  };

  // Calculate cart count and total
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        isInCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};


import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ShoppingCart, X, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useSettings } from "@/contexts/SettingsContext";

const CartDropdown = () => {
  const { cartItems, cartCount, cartTotal, removeFromCart, clearCart } = useCart();
  const { t } = useSettings();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {cartCount > 0 && (
            <Badge variant="destructive" className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center p-0 text-xs">
              {cartCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="end">
        <DropdownMenuLabel className="flex items-center justify-between">
          <span>{t('cart.title')}</span>
          {cartItems.length > 0 && (
            <Button variant="ghost" size="icon" onClick={clearCart} className="h-6 w-6">
              <Trash2 className="h-4 w-4" />
            </Button>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        {cartItems.length === 0 ? (
          <div className="p-4 text-center text-muted-foreground">
            {t('cart.empty')}
          </div>
        ) : (
          <>
            <ScrollArea className="h-[300px]">
              <DropdownMenuGroup>
                {cartItems.map((item) => (
                  <DropdownMenuItem key={item.id} className="p-0 focus:bg-transparent">
                    <div className="flex w-full items-center justify-between p-2">
                      <div className="flex items-center gap-2">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="h-12 w-12 rounded-md object-cover"
                        />
                        <div className="flex flex-col">
                          <span className="line-clamp-1 text-sm font-medium">{item.title}</span>
                          <span className="text-sm font-semibold">{item.price.toLocaleString('ru-RU')} ₽</span>
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8" 
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          removeFromCart(item.id);
                        }}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </ScrollArea>
            
            <DropdownMenuSeparator />
            
            <div className="p-4">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-medium">{t('cart.total')}:</span>
                <span className="text-lg font-bold">{cartTotal.toLocaleString('ru-RU')} ₽</span>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" asChild className="flex-1">
                  <Link to="/cart">{t('cart.view')}</Link>
                </Button>
                <Button asChild className="flex-1">
                  <Link to="/checkout">{t('cart.checkout')}</Link>
                </Button>
              </div>
            </div>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CartDropdown;

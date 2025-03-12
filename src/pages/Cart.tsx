
import Layout from "@/components/Layout";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ShoppingCart, X, ArrowRight, Trash2 } from "lucide-react";
import { useSettings } from "@/contexts/SettingsContext";

const Cart = () => {
  const { cartItems, cartTotal, removeFromCart, clearCart } = useCart();
  const { t } = useSettings();

  if (cartItems.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto mt-20 flex min-h-[60vh] flex-col items-center justify-center px-4 py-12">
          <ShoppingCart className="mb-4 h-16 w-16 text-muted-foreground" />
          <h1 className="text-center text-2xl font-bold">{t('cart.empty')}</h1>
          <p className="mb-6 mt-2 text-center text-muted-foreground">
            {t('cart.emptyMessage')}
          </p>
          <Button asChild>
            <Link to="/courses">
              {t('cart.browseCoursesButton')}
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto mt-20 px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">{t('cart.title')}</h1>
          <p className="mt-2 text-muted-foreground">
            {t('cart.itemsInCart', { count: cartItems.length })}
          </p>
        </div>

        <div className="rounded-lg border bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">{t('cart.image')}</TableHead>
                <TableHead>{t('cart.course')}</TableHead>
                <TableHead>{t('cart.price')}</TableHead>
                <TableHead className="text-right">{t('cart.actions')}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cartItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="h-16 w-16 rounded-md object-cover" 
                    />
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.category}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="font-semibold">
                      {item.price.toLocaleString('ru-RU')} ₽
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => removeFromCart(item.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Button 
            variant="outline" 
            className="gap-2" 
            onClick={clearCart}
          >
            <Trash2 className="h-4 w-4" />
            {t('cart.clearCart')}
          </Button>
          
          <div className="flex flex-col items-end gap-4 md:flex-row md:items-center">
            <div className="text-right">
              <div className="text-sm text-muted-foreground">{t('cart.total')}:</div>
              <div className="text-2xl font-bold">{cartTotal.toLocaleString('ru-RU')} ₽</div>
            </div>
            
            <Button asChild size="lg" className="gap-2">
              <Link to="/checkout">
                {t('cart.proceedToCheckout')}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;

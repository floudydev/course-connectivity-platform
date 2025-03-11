
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Layout from "@/components/Layout";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error("Пожалуйста, заполните все поля");
      return;
    }
    
    try {
      setIsSubmitting(true);
      await login(email, password);
      navigate("/");
    } catch (error) {
      console.error(error);
      // Error is already displayed by the auth context
    } finally {
      setIsSubmitting(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Layout>
      <div className="container mx-auto mt-32 max-w-md animate-fade-in p-6">
        <div className="rounded-lg border bg-card p-8 shadow-sm">
          <h1 className="mb-6 text-center text-2xl font-bold">Вход в личный кабинет</h1>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Пароль</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </Button>
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Подождите..." : "Войти"}
            </Button>
            
            <div className="text-center text-sm">
              <span className="text-muted-foreground">Еще нет аккаунта? </span>
              <Link to="/register" className="text-primary hover:underline">
                Зарегистрироваться
              </Link>
            </div>

            <div className="text-center text-xs text-muted-foreground">
              <p>Для демо используйте:</p>
              <p>Email: demo@example.com</p>
              <p>Пароль: password</p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="text-center">
          <div className="text-9xl font-bold mb-4 text-minecraft-primary">404</div>
          <h1 className="text-4xl font-bold mb-4">Страница не найдена</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
            Похоже, этот блок был сломан или никогда не существовал. Возможно, крипер взорвал эту часть сервера.
          </p>
          <Link to="/">
            <Button className="minecraft-btn">
              Вернуться на главную
            </Button>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;

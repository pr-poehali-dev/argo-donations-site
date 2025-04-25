
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="mb-6 text-minecraft-primary text-6xl font-bold">404</div>
          <h1 className="text-3xl font-bold mb-3">Страница не найдена</h1>
          <p className="text-muted-foreground mb-8">
            Похоже, вы забрели в неизведанные земли. Эта страница затерялась где-то в Нижнем мире.
          </p>
          <Link to="/">
            <Button className="minecraft-btn">Вернуться на главную</Button>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;

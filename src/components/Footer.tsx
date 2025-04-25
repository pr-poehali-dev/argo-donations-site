import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-card border-t border-border pt-12 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Колонка 1: Логотип и информация */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-minecraft-primary rounded rotate-45 flex items-center justify-center">
                <div className="w-5 h-5 bg-white rounded-sm -rotate-45"></div>
              </div>
              <span className="text-xl font-bold text-minecraft-primary">ArgoLand</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Лучший Minecraft сервер с уникальными возможностями и дружелюбным сообществом!
            </p>
          </div>
          
          {/* Колонка 2: Навигация */}
          <div>
            <h4 className="font-bold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-minecraft-primary transition-colors">Главная</Link></li>
              <li><Link to="#donate" className="text-sm hover:text-minecraft-primary transition-colors">Донат</Link></li>
              <li><Link to="#about" className="text-sm hover:text-minecraft-primary transition-colors">О сервере</Link></li>
              <li><Link to="#faq" className="text-sm hover:text-minecraft-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          {/* Колонка 3: Информация */}
          <div>
            <h4 className="font-bold mb-4">Информация</h4>
            <ul className="space-y-2">
              <li><Link to="/rules" className="text-sm hover:text-minecraft-primary transition-colors">Правила</Link></li>
              <li><Link to="/privacy" className="text-sm hover:text-minecraft-primary transition-colors">Политика конфиденциальности</Link></li>
              <li><Link to="/terms" className="text-sm hover:text-minecraft-primary transition-colors">Условия использования</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-minecraft-primary transition-colors">Связаться с нами</Link></li>
            </ul>
          </div>
          
          {/* Колонка 4: Социальные сети */}
          <div>
            <h4 className="font-bold mb-4">Наши соцсети</h4>
            <div className="flex gap-4">
              <a href="https://vk.com" target="_blank" rel="noreferrer" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-minecraft-primary hover:text-white transition-colors">
                <span className="text-lg">VK</span>
              </a>
              <a href="https://discord.com" target="_blank" rel="noreferrer" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-minecraft-primary hover:text-white transition-colors">
                <span>🎮</span>
              </a>
              <a href="https://t.me" target="_blank" rel="noreferrer" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-minecraft-primary hover:text-white transition-colors">
                <span>✈️</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-minecraft-primary hover:text-white transition-colors">
                <span>📺</span>
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Присоединяйтесь к нашему сообществу в социальных сетях!
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border text-sm text-center text-muted-foreground">
          © {year} ArgoLand. Все права защищены. Minecraft является товарным знаком Mojang AB.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

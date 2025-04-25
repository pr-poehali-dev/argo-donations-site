import { Button } from '@/components/ui/button';

interface DonatCardProps {
  title: string;
  price: number;
  features: string[];
  popular?: boolean;
  icon: string;
}

const DonatCard = ({ title, price, features, popular = false, icon }: DonatCardProps) => {
  return (
    <div className={`donate-card ${popular ? 'border-minecraft-accent' : ''}`}>
      {popular && (
        <div className="bg-minecraft-accent text-white text-center py-1 font-bold">
          ПОПУЛЯРНЫЙ
        </div>
      )}
      
      <div className="p-6">
        <div className="flex justify-center mb-4">
          <div className="text-3xl">{icon}</div>
        </div>
        
        <h3 className="text-xl font-bold text-center mb-2">{title}</h3>
        
        <div className="text-center mb-6">
          <span className="text-3xl font-bold">{price} ₽</span>
        </div>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 text-minecraft-primary">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button className={`w-full ${popular ? 'bg-minecraft-accent hover:bg-minecraft-accent/80' : 'minecraft-btn'}`}>
          Купить
        </Button>
      </div>
    </div>
  );
};

export default DonatCard;


import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface DonatCardProps {
  title: string;
  price: number;
  features: string[];
  isPopular?: boolean;
  color?: string;
}

const DonatCard = ({ 
  title, 
  price, 
  features, 
  isPopular = false,
  color = 'bg-minecraft-primary' 
}: DonatCardProps) => {
  return (
    <div className={`donate-card ${isPopular ? 'donate-card-popular' : ''}`}>
      <div className={`h-2 ${color}`}></div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex items-end gap-1 mb-4">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-muted-foreground">₽</span>
        </div>
        
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check size={18} className="text-minecraft-accent mt-0.5 shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button className="minecraft-btn w-full">Купить</Button>
      </div>
    </div>
  );
};

export default DonatCard;

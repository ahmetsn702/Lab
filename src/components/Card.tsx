import { ReactNode } from 'react';

type CardVariant = 'elevated' | 'outlined' | 'filled';

interface CardProps {
  variant?: CardVariant;
  title: string;
  image?: string;
  imageAlt?: string;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}

export const Card = ({ 
  variant = 'elevated', 
  title, 
  image, 
  imageAlt, 
  children, 
  footer, 
  className = '' 
}: CardProps) => {
  const variantStyles = {
    elevated: 'bg-white shadow-md dark:bg-gray-800',
    outlined: 'border border-border bg-transparent dark:border-gray-700',
    filled: 'bg-surface dark:bg-gray-800 border-transparent',
  };

  return (
    <article className={`overflow-hidden rounded-lg flex flex-col ${variantStyles[variant]} ${className}`}>
      {image && (
        <img 
          src={image} 
          alt={imageAlt || ''} 
          className="w-full aspect-[4/3] object-cover"
        />
      )}
      <div className="flex-1 p-5 flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{title}</h3>
        <div className="flex-1 text-gray-600 dark:text-gray-300">
          {children}
        </div>
        {footer && (
          <div className="mt-4 pt-4 border-t border-border dark:border-gray-700">
            {footer}
          </div>
        )}
      </div>
    </article>
  );
};

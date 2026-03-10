import { useState, ReactNode } from 'react';

type AlertVariant = 'info' | 'success' | 'warning' | 'error';

interface AlertProps {
  variant?: AlertVariant;
  title: string;
  children?: ReactNode;
  dismissible?: boolean;
  className?: string;
}

export const Alert = ({ 
  variant = 'info', 
  title, 
  children, 
  dismissible = false, 
  className = '' 
}: AlertProps) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const variantStyles = {
    info: 'bg-blue-50 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800',
    success: 'bg-green-50 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800',
    warning: 'bg-yellow-50 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-800',
    error: 'bg-red-50 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800',
  };

  return (
    <div 
      role="alert" 
      className={`relative flex flex-col p-4 border rounded-lg ${variantStyles[variant]} ${className}`}
    >
      <div className="flex items-start justify-between">
        <h4 className="font-semibold text-sm">{title}</h4>
        {dismissible && (
          <button
            onClick={() => setIsVisible(false)}
            aria-label="Uyarıyı Kapat"
            className="ml-auto inline-flex h-6 w-6 -mt-1 -mr-1 items-center justify-center rounded-md opacity-70 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-current transition-colors"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        )}
      </div>
      {children && (
        <div className="mt-2 text-sm opacity-90">
          {children}
        </div>
      )}
    </div>
  );
};

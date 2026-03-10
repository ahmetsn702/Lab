import { InputHTMLAttributes, useId } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helpText?: string;
}

export const Input = ({ 
  label, 
  error, 
  helpText, 
  className = '', 
  id, 
  ...props 
}: InputProps) => {
  const generatedId = useId();
  const inputId = id || generatedId;
  const helpTextId = `${inputId}-help`;
  const errorId = `${inputId}-error`;

  const ariaDescribedBy = error ? errorId : helpText ? helpTextId : undefined;

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={inputId} className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <input
        id={inputId}
        className={`rounded-md border bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 disabled:cursor-not-allowed disabled:opacity-50
          dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 dark:placeholder-gray-500
          ${error 
            ? 'border-error focus:border-error focus:ring-error' 
            : 'border-border focus:border-primary focus:ring-primary'
          }`}
        aria-invalid={!!error}
        aria-describedby={ariaDescribedBy}
        {...props}
      />
      {error && (
        <span id={errorId} className="text-sm font-medium text-error">
          {error}
        </span>
      )}
      {helpText && !error && (
        <span id={helpTextId} className="text-sm text-gray-500 dark:text-gray-400">
          {helpText}
        </span>
      )}
    </div>
  );
};

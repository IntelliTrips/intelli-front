import { HTMLProps } from 'react';

interface AuthInputProps extends HTMLProps<HTMLInputElement> {
  label: string;
  icon: React.ReactNode;
}

export function AuthInput({ label, icon, ...props }: AuthInputProps) {
  return (
    <div className='space-y-1 w-full'>
      <label htmlFor={props.name}>{label}</label>
      <div className='flex py-1 gap-2 border-b-2 border-purple-800 items-center'>
        {icon}
        <input
          className='flex-1 placeholder:text-purple-800/50 text-purple-800 bg-transparent text-xl outline-none'
          {...props}
        />
      </div>
    </div>
  );
}

interface FormItemProps {
  children: React.ReactNode;
  htmlFor: string;
  label: string;
  icon?: React.ReactNode;
}

export function FormItem({ children, htmlFor, label, icon }: FormItemProps) {
  return (
    <div className='w-full min-w-[248px] rounded-xl bg-[#D5B2F0] p-3 shadow-sm lg:w-fit'>
      <div className='flex justify-between'>
        <label
          htmlFor={htmlFor}
          className='text-xl font-semibold text-[#5E258A]'
        >
          {label}
        </label>
        {icon}
      </div>
      {children}
    </div>
  );
}

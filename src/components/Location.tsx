interface LocationProps {
  name: string;
  description: string;
  hora: string;
}

export function Location({ name, description, hora }: LocationProps) {
  return (
    <div className='w-full flex gap-8'>
      <div className='flex-1 space-y-3'>
        <div className='flex justify-between'>
          <h3 className='text-2xl text-purple-800 lg:text-3xl font-bold'>
            {name}
          </h3>
          <p className='text-xl text-purple-800 lg:text-2xl font-bold'>
            {hora}
          </p>
        </div>
        <p className='text-sm lg:text-base text-ellipsis line-clamp-4'>
          {description}
        </p>
      </div>
    </div>
  );
}

interface LocationProps {
  image?: string;
  name: string;
  description: string;
}

export function Location({ image, name, description }: LocationProps) {
  return (
    <div className='w-full flex gap-8'>
      <img
        src={image}
        alt=''
        className='w-24 h-24 lg:w-40 lg:h-40 rounded-md object-cover'
      />
      <div className='flex-1 space-y-3'>
        <h3 className='text-2xl text-[#5E258A] lg:text-3xl font-bold'>
          {name}
        </h3>
        <p className='text-sm lg:text-base text-ellipsis line-clamp-4'>
          {description}
        </p>
      </div>
    </div>
  );
}

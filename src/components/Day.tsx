import { Location } from './Location';

interface DayProps {
  day: string;
  locations: {
    image: string;
    name: string;
    description: string;
  }[];
}

export function Day({ day, locations }: DayProps) {
  return (
    <div className='space-y-4 lg:space-y-8'>
      <h1 className='text-[#752DAE] text-3xl font-bold lg:text-6xl'>
        Dia {day}
      </h1>
      <div className='max-w-[1007px] rounded-xl bg-gradient-to-br from-[#E1C5F6] to-[#D49DFF] p-5 lg:p-10 space-y-6'>
        {locations.map((location) => {
          return (
            <Location
              key={location.name}
              name={location.name}
              description={location.description}
              image={location.image}
            />
          );
        })}
      </div>
    </div>
  );
}

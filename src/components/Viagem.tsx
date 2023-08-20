import { format } from 'date-fns';

interface ViagemProps {
  image: string;
  destino: string;
  checkin: Date;
  checkout: Date;
  viajantes: number;
}

export function Viagem({
  image,
  destino,
  checkin,
  checkout,
  viajantes,
}: ViagemProps) {
  return (
    <div className='flex justify-between bg-white rounded-xl lg:rounded-full w-full items-center gap-6 lg:gap-16 py-6 flex-col lg:py-2 lg:px-4 lg:flex-row text-center lg:text-left'>
      <img src={image} alt='' className='w-24 h-24 rounded-full' />
      <div className='space-y-3'>
        <span className='text-[#5E258A] text-2xl font-light'>Destino</span>
        <p className='text-[#5E258A] font-bold italic text-2xl'>{destino}</p>
      </div>
      <div className='space-y-3'>
        <span className='text-[#5E258A] text-2xl font-light'>Check-in</span>
        <p className='text-[#5E258A] font-bold italic text-2xl'>
          {format(checkin, 'dd/MM')}
        </p>
      </div>
      <div className='space-y-3'>
        <span className='text-[#5E258A] text-2xl font-light'>Checkout</span>
        <p className='text-[#5E258A] font-bold italic text-2xl'>
          {format(checkout, 'dd/MM')}
        </p>
      </div>
      <div className='space-y-3'>
        <span className='text-[#5E258A] text-2xl font-light'>Viajantes</span>
        <p className='text-[#5E258A] font-bold italic text-2xl'>{viajantes}</p>
      </div>
    </div>
  );
}

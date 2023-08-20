import { FloatingMenu } from '@/components/FloatingMenu';
import { Logo } from '@/components/Logo';
import { Viagem } from '@/components/Viagem';
import { addDays } from 'date-fns';
import { Link } from 'react-router-dom';

export function MinhasViagens() {
  const viagens: {
    image: string;
    destino: string;
    checkin: Date;
    checkout: Date;
    viajantes: number;
  }[] = [
    {
      image:
        'https://www.civitatis.com/blog/wp-content/uploads/2022/10/panoramica-rio-janeiro-brasil.jpg',
      destino: 'Rio de Janeiro',
      checkin: new Date(),
      checkout: addDays(new Date(), 7),
      viajantes: 2,
    },
  ];
  return (
    <div className='flex min-h-screen flex-col items-center justify-start gap-12 bg-home py-10 lg:py-24'>
      <FloatingMenu />

      <Link to='/'>
        <Logo className='scale-75 lg:scale-100' />
      </Link>

      <div className='space-y-6 p-4 lg:space-y-8 bg-gradient-to-br from-[#E1C5F6] to-[#D49DFF] rounded-xl max-w-[1000px] w-10/12'>
        <h1 className='text-4xl text-[#5E258A] font-bold text-center'>
          Viagens salvas
        </h1>

        <div>
          {viagens.map((viagem) => {
            return (
              <Link to='/resultado' key={viagem.destino}>
                <Viagem
                  image={viagem.image}
                  destino={viagem.destino}
                  checkin={viagem.checkin}
                  checkout={viagem.checkout}
                  viajantes={viagem.viajantes}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

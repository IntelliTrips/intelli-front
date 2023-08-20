import { Day } from '@/components/Day';
import { FloatingMenu } from '@/components/FloatingMenu';
import { Logo } from '@/components/Logo';
import { Heart } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Resultado() {
  const location = useLocation();
  const navigate = useNavigate();
  const [roteiros, setRoteiros] = useState<
    {
      data_hora: string;
      lugar: string;
      atividade: string;
      custo: number;
    }[]
  >([]);
  const [destino, setDestino] = useState('');

  useEffect(() => {
    if ('state' in location === false) {
      navigate('/');
    }

    const { state } = location as {
      state: {
        roteiros: {
          data_hora: string;
          lugar: string;
          atividade: string;
          custo: number;
        }[];
        destino: string;
      };
    };

    if (state === null) {
      navigate('/');
    }

    const { roteiros: roteirosRecebidos, destino: destinoRecebido } = state as {
      roteiros: {
        data_hora: string;
        lugar: string;
        atividade: string;
        custo: number;
      }[];
      destino: string;
    };

    setRoteiros(roteirosRecebidos);
    setDestino(destinoRecebido);

    console.log(roteirosRecebidos);
  }, []);

  const [hearted, setHearted] = useState(false);
  return (
    <div className='flex min-h-screen flex-col items-center justify-start gap-12 bg-home py-10 lg:py-24'>
      <FloatingMenu />

      <Link to='/'>
        <Logo className='scale-75 lg:scale-100' />
      </Link>
      <div className='flex gap-7 items-center'>
        <h1 className='text-2xl lg:text-6xl font-bold text-[#5E258A]'>
          Viagem para {destino}
        </h1>
        <button>
          <Heart
            className='text-[#5E258A] w-8 h-8 lg:w-24 lg:h-24'
            fill={hearted ? '#5E258A' : '#00000000'}
            onClick={() => setHearted(!hearted)}
          />
        </button>
      </div>
      <div className='space-y-4 p-4 lg:space-y-8'>
        <Day
          day='1'
          key={1}
          locations={[
            {
              image:
                'https://www.melhoresdestinos.com.br/wp-content/uploads/2021/03/cristo-redentor-como-visitar-precos-rio-de-janeiro-capa-820x430.jpg',
              name: 'Cristo Redentor',
              description:
                'O Cristo Redentor é uma estátua art déco que retrata Jesus Cristo, localizada no topo do morro do Corcovado, a 709 metros acima do nível do mar, no Parque Nacional da Tijuca, com vista para a maior parte da cidade do Rio de Janeiro, Brasil.',
            },
            {
              image:
                'https://super.abril.com.br/wp-content/uploads/2021/11/deriva-continental_facebook.jpg?quality=90&strip=info',
              name: 'Pão de Açúcar',
              description:
                'O Pão de Açúcar é um complexo de morros localizado no bairro da Urca, na cidade do Rio de Janeiro, no estado do Rio de Janeiro, no Brasil. É composto pelo Morro da Urca e pelo Morro do Pão de Açúcar, ligados entre si pelo Morro da Babilônia.',
            },
          ]}
        />
        <Day
          day='2'
          key={2}
          locations={[
            {
              image:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Maracana_2022.jpg/1200px-Maracana_2022.jpg',
              name: 'Estádio do Maracanã',
              description:
                'O Estádio Jornalista Mário Filho, mais conhecido como Maracanã, é um estádio de futebol localizado na Zona Norte da cidade do Rio de Janeiro, no Brasil, e inaugurado em 16 de junho de 1950.',
            },
          ]}
        />
      </div>
    </div>
  );
}

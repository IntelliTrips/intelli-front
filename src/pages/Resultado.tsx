import { Day } from '@/components/Day';
import { FloatingMenu } from '@/components/FloatingMenu';
import { Logo } from '@/components/Logo';
import { format } from 'date-fns';
import { Heart } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function transformRoteiros(
  roteiros: {
    data: string;
    hora: string;
    lugar: string;
    atividade: string;
    descricao: string;
    custo: number;
  }[]
) {
  const resultadoArray: {
    data: Date;
    atividades: {
      hora: string;
      lugar: string;
      atividade: string;
      descricao: string;
      custo: number;
    }[];
  }[] = [];

  roteiros.forEach((item) => {
    const dataObj = new Date(item.data.replace('-', '/'));

    const atividade = {
      hora: item.hora,
      lugar: item.lugar,
      atividade: item.atividade,
      descricao: item.descricao,
      custo: item.custo,
    };

    const encontrado = resultadoArray.find(
      (dia) => dia.data.getTime() === dataObj.getTime()
    );

    if (encontrado) {
      encontrado.atividades.push(atividade);
    } else {
      resultadoArray.push({
        data: dataObj,
        atividades: [atividade],
      });
    }
  });

  return resultadoArray;
}

export function Resultado() {
  const location = useLocation();
  const navigate = useNavigate();
  const [roteiros, setRoteiros] = useState<
    {
      data: string;
      hora: string;
      lugar: string;
      atividade: string;
      descricao: string;
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
          data: string;
          hora: string;
          lugar: string;
          atividade: string;
          descricao: string;
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
        data: string;
        hora: string;
        lugar: string;
        atividade: string;
        descricao: string;
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
        <h1 className='text-2xl lg:text-6xl font-bold text-purple-800'>
          Viagem para {destino}
        </h1>
        <button>
          <Heart
            className='text-purple-800 w-8 h-8 lg:w-24 lg:h-24'
            fill={hearted ? '#5E258A' : '#00000000'}
            onClick={() => setHearted(!hearted)}
          />
        </button>
      </div>
      <div className='space-y-6 p-4 lg:space-y-12'>
        {transformRoteiros(roteiros).map((dia) => {
          return (
            <Day
              key={dia.data.getTime()}
              data={format(dia.data, 'dd/MM/yyyy')}
              locations={dia.atividades.map((atividade) => {
                return {
                  name: atividade.atividade,
                  description: atividade.descricao,
                  hora: atividade.hora,
                };
              })}
            />
          );
        })}
      </div>
    </div>
  );
}

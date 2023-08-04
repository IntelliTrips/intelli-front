import { Day } from '@/components/Day';
import { FloatingMenu } from '@/components/FloatingMenu';
import { Logo } from '@/components/Logo';
// import { format } from 'date-fns';
import { Heart } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// function formatDateToYYYYMMDD(date: Date) {
//   const year = date.getFullYear();
//   const month = String(date.getMonth() + 1).padStart(2, '0');
//   const day = String(date.getDate()).padStart(2, '0');
//   return `${year}-${month}-${day}`;
// }

export function Resultado() {
  // const { state } = useLocation();
  // const { checkin, checkout, custo, destino, origem, viajantes } = state as {
  //   checkin: Date;
  //   checkout: Date;
  //   custo: number;
  //   destino: string;
  //   origem: string;
  //   viajantes: number;
  // };

  // const [roteiros, setRoteiros] = useState([]);

  // function onLoad() {
  //   const headers = new Headers();
  //   headers.set('Content-Type', 'application/json');
  //   headers.set('Authorization', 'Basic ' + btoa('gian:senha1234'));

  //   const response = fetch('http://127.0.0.1:8000/roteiro/v1/roteiros', {
  //     method: 'POST',
  //     headers,
  //     mode: 'cors',
  //     body: JSON.stringify({
  //       partida: origem,
  //       destino: destino,
  //       data_ida: formatDateToYYYYMMDD(checkin),
  //       data_volta: formatDateToYYYYMMDD(checkout),
  //       quantidade_pessoas: viajantes,
  //       custo: custo,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then(
  //       (data: {
  //         custo: number;
  //         data_ida: string;
  //         data_volta: string;
  //         destino: string;
  //         id: number;
  //         partida: string;
  //         quantidade_pessoas: number;
  //         resposta_chatgpt: string;
  //         texto_usuario: string;
  //       }) => {

  //         setRoteiros(JSON.parse(data.resposta_chatgpt).roteiro);
  //       }
  //     );
  // }

  // useEffect(() => {
  //   onLoad();
  // }, []);

  const [hearted, setHearted] = useState(false);
  return (
    <div className='flex min-h-screen flex-col items-center justify-start gap-12 bg-gradient-to-b from-violet-300 to-violet-400 py-10 lg:py-24'>
      <FloatingMenu />

      <Link to='/'>
        <Logo className='scale-75 lg:scale-100' />
      </Link>
      <div className='flex gap-7 items-center'>
        <h1 className='text-2xl lg:text-6xl font-bold text-[#5E258A]'>
          Viagem para Rio de Janeiro
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
        {/* {roteiros.map((roteiro) => {
          return (
            <Day
              day={format(
                new Date(roteiro.data_e_hora.replaceAll('-', '/')),
                'dd/MM/yyyy'
              )}
              locations={[]}
            />
          );
        })} */}
        <Day
          day='1'
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

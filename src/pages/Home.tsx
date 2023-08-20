import { Logo } from '../components/Logo';
import { FormItem } from '../components/FormItem';

import rioImage from '../assets/rio.jpg';
import gramadoImage from '../assets/gramado.jpg';
import maceioImage from '../assets/maceio.jpg';
import { DateRange } from 'react-day-picker';
import { CalendarPlus, DollarSign, Search, User2 } from 'lucide-react';
import React, { useState } from 'react';
import { LocationIcon } from '../components/LocationIcon';
import { useNavigate } from 'react-router-dom';
import { FloatingMenu } from '@/components/FloatingMenu';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { ptBR } from 'date-fns/locale';

export function Home() {
  const [origem, setOrigem] = useState('');
  // const [origemOpen, setOrigemOpen] = useState(false);
  const [destino, setDestino] = useState('');
  const [datas, setDatas] = useState<DateRange | undefined>(undefined);
  const [custo, setCusto] = useState('');
  const [viajantes, setViajantes] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // const lugares = [
  //   {
  //     value: 'recife',
  //     label: 'Recife',
  //   },
  //   {
  //     value: 'porto-de-galinhas',
  //     label: 'Porto de Galinhas',
  //   },
  // ];

  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (origem === destino) {
      alert('Origem e destino não podem ser iguais');
      return;
    }

    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set('Authorization', 'Basic ' + btoa('gian1:gian1'));

    setIsLoading(true);

    fetch('http://127.0.0.1:8000/roteiro/v1/roteiros', {
      method: 'POST',
      headers,
      mode: 'cors',
      body: JSON.stringify({
        partida: origem,
        destino: destino,
        data_ida: format(datas?.from ?? new Date(), 'yyyy-MM-dd'),
        data_volta: format(datas?.to ?? new Date(), 'yyyy-MM-dd'),
        quantidade_pessoas: viajantes,
        custo: custo,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          response
            .json()
            .then((data) => {
              const roteiros = JSON.parse(
                data.resposta_chatgpt.replaceAll("'", '"')
              ).roteiro;

              setIsLoading(false);
              navigate('/resultado', {
                state: {
                  roteiros,
                  destino,
                },
              });
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          alert('Erro ao buscar roteiros');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className='flex min-h-screen flex-col items-center justify-start gap-12 py-10 lg:py-24 bg-home'>
      <FloatingMenu />
      <Logo className='scale-75 lg:scale-100' />
      <form
        className='flex w-full flex-col items-center justify-center gap-4 px-4 lg:flex-row'
        onSubmit={handleSubmit}
      >
        {/* <Popover>
          <PopoverTrigger
            className={cn(
              'w-full min-w-[248px] rounded-xl bg-[#D5B2F0] p-3 shadow-sm lg:w-fit flex flex-col'
            )}
          >
            {origem !== ''
              ? lugares.find((lugar) => lugar.value === origem)?.label
              : 'Insira a origem'}
          </PopoverTrigger>
          <PopoverContent>
            <Command>
              <CommandInput placeholder='Insira a origem...' />
              <CommandEmpty>Nenhuma cidade encontrada</CommandEmpty>
              <CommandGroup>
                {lugares.map((lugar) => (
                  <CommandItem
                    key={lugar.value}
                    onSelect={(currentValue) => {
                      setOrigem(currentValue === origem ? '' : currentValue);
                      setOrigemOpen(false);
                    }}
                  >
                    {lugar.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover> */}

        <FormItem
          htmlFor='origem'
          label='Origem'
          icon={<LocationIcon size={24} />}
        >
          <select
            id='origem'
            className={`w-full bg-transparent outline-none ${
              origem === ''
                ? 'font-normal italic text-[#9367B5]'
                : 'font-bold text-[#8A63A9]'
            } text-xl`}
            placeholder='Insira seu Origem'
            value={origem}
            onChange={(e) => setOrigem(e.target.value)}
            required
          >
            <option value='' disabled>
              Selecione a origem
            </option>
            <option value='Recife'>Recife</option>
            <option value='Porto de Galinhas'>Porto de Galinhas</option>
            <option value='São Paulo'>São Paulo</option>
            <option value='Rio de Janeiro'>Rio de Janeiro</option>
            <option value='Salvador'>Salvador</option>
            <option value='Fortaleza'>Fortaleza</option>
          </select>
        </FormItem>

        <FormItem
          htmlFor='destino'
          label='Destino'
          icon={<LocationIcon size={24} />}
        >
          <select
            id='destino'
            className={`w-full bg-transparent outline-none ${
              destino === ''
                ? 'font-normal italic text-[#9367B5]'
                : 'font-bold text-[#8A63A9]'
            } text-xl`}
            placeholder='Insira seu destino'
            value={destino}
            onChange={(e) => setDestino(e.target.value)}
            required
          >
            <option value='' disabled>
              Selecione o destino
            </option>
            <option value='Recife'>Recife</option>
            <option value='Porto de Galinhas'>Porto de Galinhas</option>
            <option value='São Paulo'>São Paulo</option>
            <option value='Rio de Janeiro'>Rio de Janeiro</option>
            <option value='Salvador'>Salvador</option>
            <option value='Fortaleza'>Fortaleza</option>
          </select>
        </FormItem>

        <Popover>
          <PopoverTrigger
            className={cn(
              'w-full min-w-[248px] rounded-xl bg-[#D5B2F0] p-3 shadow-sm lg:w-fit flex flex-col'
            )}
          >
            <div className='flex flex-row justify-between items-center w-full'>
              <label className='text-xl font-semibold text-[#5E258A]'>
                Datas
              </label>
              <CalendarPlus size={24} className='text-[#5E258A]' />
            </div>
            <span
              className='data-[preenchido=true]:font-bold data-[preenchido=true]:text-[#8A63A9] font-normal italic text-[#9367B5] text-xl'
              data-preenchido={datas?.from ? true : false}
            >
              {datas?.from ? (
                datas.to ? (
                  <>
                    {format(datas.from, 'LLL dd, y', { locale: ptBR })} -{' '}
                    {format(datas.to, 'LLL dd, y', { locale: ptBR })}
                  </>
                ) : (
                  format(datas.from, 'LLL dd, y', { locale: ptBR })
                )
              ) : (
                'Escolha as datas'
              )}
            </span>
          </PopoverTrigger>
          <PopoverContent className='w-auto p-0' align='center'>
            <Calendar
              initialFocus
              mode='range'
              defaultMonth={datas?.from || new Date()}
              selected={datas}
              onSelect={setDatas}
              numberOfMonths={2}
            ></Calendar>
          </PopoverContent>
        </Popover>

        {/* <FormItem
          htmlFor='checkin'
          label='Check-in'
          icon={}
        >
          <input
            type='date'
            id='checkin'
            className='w-full bg-transparent font-bold text-[#8A63A9] outline-none placeholder:font-normal placeholder:italic placeholder:text-[#9367B5] text-xl'
            placeholder='Insira as datas'
            value={checkin}
            onChange={(e) => setCheckin(e.target.value)}
            required
          />
        </FormItem>

        <FormItem
          htmlFor='checkout'
          label='Checkout'
          icon={<CalendarPlus size={24} className='text-[#5E258A]' />}
        >
          <input
            type='date'
            id='checkout'
            className='w-full bg-transparent font-bold text-[#8A63A9] outline-none placeholder:font-normal placeholder:italic placeholder:text-[#9367B5] text-xl'
            placeholder='Insira as datas'
            value={checkout}
            onChange={(e) => setCheckout(e.target.value)}
            required
          />
        </FormItem> */}

        <FormItem
          htmlFor='custo'
          label='Custo'
          icon={<DollarSign size={24} className='text-[#5E258A]' />}
        >
          <input
            type='number'
            id='custo'
            className='w-full bg-transparent font-bold text-[#8A63A9] outline-none placeholder:font-normal placeholder:italic placeholder:text-[#9367B5] text-xl'
            placeholder='Insira o custo'
            value={custo}
            onChange={(e) => setCusto(e.target.value)}
            required
          />
        </FormItem>

        <FormItem
          htmlFor='viajantes'
          label='Viajantes'
          icon={<User2 size={24} className='text-[#5E258A]' />}
        >
          <input
            type='number'
            name='viajantes'
            id='viajantes'
            className='w-full bg-transparent font-bold text-[#8A63A9] outline-none placeholder:font-normal placeholder:italic placeholder:text-[#9367B5] text-xl'
            placeholder='Insira os viajantes'
            value={viajantes}
            onChange={(e) => setViajantes(e.target.value)}
            required
          />
        </FormItem>
        <button
          type='submit'
          className='flex w-full items-center justify-center rounded bg-[#5E258A] py-4 lg:w-fit lg:rounded-full lg:p-3 disabled:saturate-50'
          disabled={isLoading}
        >
          {isLoading ? (
            <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-white'></div>
          ) : (
            <Search className='h-8 w-8 text-white' />
          )}
        </button>
      </form>
      <h2 className='text-4xl font-semibold text-[#5E258A] text-center'>
        Destinos mais buscados
      </h2>
      <div className='flex flex-col gap-16 lg:flex-row'>
        <div className='relative'>
          <img
            src={rioImage}
            alt=''
            className='w-80 h-80 rounded-[80px] object-cover'
          />
          <span className='absolute bottom-4 left-1/2 min-w-[150px] -translate-x-1/2 rounded-full bg-[#5E258A] px-7 py-2 text-center text-white'>
            Rio
          </span>
        </div>
        <div className='relative'>
          <img
            src={gramadoImage}
            alt=''
            className='w-80 h-80 rounded-[80px] object-cover'
          />
          <span className='absolute bottom-4 left-1/2 min-w-[150px] -translate-x-1/2 rounded-full bg-[#5E258A] px-7 py-2 text-center text-white'>
            Gramado
          </span>
        </div>
        <div className='relative'>
          <img
            src={maceioImage}
            alt=''
            className='w-80 h-80 rounded-[80px] object-cover'
          />
          <span className='absolute bottom-4 left-1/2 min-w-[150px] -translate-x-1/2 rounded-full bg-[#5E258A] px-7 py-2 text-center text-white'>
            Maceió
          </span>
        </div>
      </div>
    </div>
  );
}

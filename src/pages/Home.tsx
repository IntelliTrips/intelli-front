import { Logo } from '../components/Logo';
import { FormItem } from '../components/FormItem';

import rioImage from '../assets/rio.jpg';
import gramadoImage from '../assets/gramado.jpg';
import maceioImage from '../assets/maceio.jpg';
import { CalendarPlus, DollarSign, Search, User2 } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { LocationIcon } from '../components/LocationIcon';
import { useNavigate } from 'react-router-dom';
import { FloatingMenu } from '@/components/FloatingMenu';

export function Home() {
  const [origem, setOrigem] = useState('');
  const [destino, setDestino] = useState('');
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [custo, setCusto] = useState('');
  const [viajantes, setViajantes] = useState('');

  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate('/resultado', {
      state: {
        origem,
        destino,
        checkin: new Date(checkin),
        checkout: new Date(checkout),
        custo: Number(custo),
        viajantes: Number(viajantes),
      },
    });
  }

  return (
    <div className='flex min-h-screen flex-col items-center justify-start gap-12 bg-gradient-to-b from-violet-300 to-violet-600 py-10 lg:py-24'>
      <FloatingMenu />
      <Logo className='scale-75 lg:scale-100' />
      <form
        className='flex w-full flex-col items-center justify-center gap-4 px-4 lg:flex-row'
        onSubmit={handleSubmit}
      >
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

        <FormItem
          htmlFor='checkin'
          label='Check-in'
          icon={<CalendarPlus size={24} className='text-[#5E258A]' />}
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
        </FormItem>

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
            w-full
            placeholder='Insira os viajantes'
            value={viajantes}
            onChange={(e) => setViajantes(e.target.value)}
            required
          />
        </FormItem>
        <button
          type='submit'
          className='flex w-full items-center justify-center rounded bg-[#5E258A] py-4 lg:w-fit lg:rounded-full lg:p-3'
        >
          <Search className='h-8 w-8 text-white' />
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

import { Logo } from '../components/Logo';
import { Apple, Facebook } from 'lucide-react';
import worldImage from '../assets/world.png';
import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate('/');
  }
  return (
    <div className='min-h-screen grid place-items-center'>
      <div className='flex w-4/5 justify-center gap-60'>
        <div className='flex-1'>
          <h1 className='text-4xl font-semibold'>Faça login</h1>
          <p className='text-2xl mt-4'>Se você ainda não tem conta</p>
          <button className='text-2xl font-semibold'>Registre-se aqui!</button>
          <form className='mt-7' onSubmit={handleSubmit}>
            <div className='flex flex-col gap-4'>
              <label htmlFor='email' className='text-xl'>
                Email
              </label>
              <input
                className='text-xl outline-none border-b-2 border-[#999999]'
                type='email'
                placeholder='Digite seu email'
                name='email'
                id='email'
                required
              />
            </div>
            <div className='flex flex-col gap-4 mt-14'>
              <label htmlFor='password' className='text-xl'>
                Senha
              </label>
              <input
                className='text-xl outline-none border-b-2 border-[#999999]'
                type='password'
                placeholder='Digite sua senha'
                name='password'
                id='password'
                required
              />
            </div>

            <div className='flex justify-between text-lg mt-2'>
              <label htmlFor='lembrar'>
                <input type='checkbox' name='lembrar' id='lembrar' />
                Lembrar
              </label>
              <button type='button'>Esqueceu a senha?</button>
            </div>
            <button
              className='bg-[#5E258A] text-white py-4 w-full text-2xl mt-10 rounded-full shadow-sm'
              type='submit'
            >
              Entrar
            </button>
          </form>
          <p className='text-center mt-6 text-[#737373]'>Ou entre com</p>
          <div className='flex gap-10 justify-center mt-4'>
            <button>
              <Facebook className='w-12 h-12' />
            </button>
            <button>
              <Apple className='w-12 h-12' />
            </button>
            <button className='text-5xl'>G</button>
          </div>
          <Logo className='mt-16 h-24 mx-auto' />
        </div>
        <div className='bg-[#5E258A]/80 rounded-2xl  flex-col justify-center px-24 hidden lg:flex'>
          <img src={worldImage} className='flex-shrink-0' />
          <h2 className='text-4xl font-bold text-white'>Planeje cada viagem</h2>
          <p className='mt-2 text-white'>Torne sua viagem descomplicada 😊</p>
        </div>
      </div>
    </div>
  );
}

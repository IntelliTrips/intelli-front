import { AuthInput } from '@/components/AuthInput';
import { Lock, User } from 'lucide-react';
import { FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import worldImage from '../assets/world.png';
import { Logo } from '../components/Logo';
import { login, setCSRFToken } from '@/lib/api';
import { useAuth } from '@/context/auth';

export function Login() {
  const navigate = useNavigate();

  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { sessionId, login: loginUseAuth } = useAuth();

  useEffect(() => {
    if (sessionId) {
      navigate('/');
    }
  }, [sessionId, navigate]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await setCSRFToken();
    const { sessionId } = await login({ username, password });
    if (sessionId) {
      loginUseAuth(sessionId);
      navigate('/');
    }
  }

  return (
    <div className='min-h-screen flex justify-evenly items-center bg-login'>
      <div className='bg-white py-8 px-12 space-y-8 rounded-2xl shadow-md'>
        <Logo className='h-24 block mx-auto' />
        <h1 className='text-4xl font-semibold'>Faça login</h1>
        <form
          className='space-y-8'
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <AuthInput
            label='Nome de usuário'
            placeholder='Digite seu nome de usuário'
            id='username'
            name='username'
            type='text'
            autoComplete='username'
            icon={<User color='#64318D' />}
            value={username}
            onChange={(event) =>
              setEmail((event.target as HTMLInputElement).value)
            }
            required
          />

          <AuthInput
            label='Senha'
            placeholder='Digite sua senha'
            id='senha'
            name='senha'
            type='password'
            autoComplete='new-password'
            icon={<Lock color='#64318D' />}
            value={password}
            onChange={(event) =>
              setPassword((event.target as HTMLInputElement).value)
            }
            required
          />

          <div className='text-right'>
            <p>
              Se você ainda não tem conta{' '}
              <Link
                to='/register'
                className='font-semibold underline text-purple-800'
              >
                Registre-se aqui!
              </Link>
            </p>
          </div>

          <button
            type='submit'
            className='w-full bg-purple-800 text-white font-medium text-2xl py-3 rounded-full'
          >
            Entrar
          </button>
        </form>
      </div>
      <div className='py-24 px-28 bg-purple-800/80 rounded-2xl hidden md:block space-y-12'>
        <img src={worldImage} />
        <div className='text-center'>
          <h2 className='text-4xl font-bold text-white'>Planeje cada viagem</h2>
          <p className='text-white text-xl mt-4'>
            Torne sua viagem descomplicada 😊
          </p>
        </div>
      </div>
    </div>
  );
}

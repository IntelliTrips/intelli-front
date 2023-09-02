import { Logo } from '../components/Logo';
import worldImage from '../assets/world.png';
import { Link, useNavigate } from 'react-router-dom';
import { AuthInput } from '@/components/AuthInput';
import { Lock, Mail, User } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { register } from '@/lib/api';

export function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const res = await register({ username, password, email, name });

    if (res.status === 200) {
      navigate('/login');
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-evenly bg-login'>
      <div className='bg-white py-8 px-12 space-y-8 rounded-2xl shadow-md'>
        <Logo className='h-24 block mx-auto' />
        <h1 className='text-4xl font-semibold'>Cadastre-se para começar</h1>
        <form className='space-y-8' onSubmit={handleSubmit}>
          <AuthInput
            label='Nome'
            placeholder='Digite seu nome'
            id='nome'
            name='nome'
            type='text'
            autoComplete='name'
            icon={<User color='#64318D' />}
            value={name}
            onChange={(event) =>
              setName((event.target as HTMLInputElement).value)
            }
            required
          />

          <AuthInput
            label='Nome de Usuário'
            placeholder='Digite seu nome de usuário'
            id='username'
            name='username'
            type='text'
            autoComplete='username'
            icon={<User color='#64318D' />}
            value={username}
            onChange={(event) =>
              setUsername((event.target as HTMLInputElement).value)
            }
            required
          />

          <AuthInput
            label='Email'
            placeholder='Digite seu melhor email'
            id='email'
            name='email'
            type='email'
            autoComplete='email'
            icon={<Mail color='#64318D' />}
            value={email}
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

          <p className='text-right'>
            Já possui uma conta?{' '}
            <Link
              to='/login'
              className='text-purple-800 underline font-semibold'
            >
              Faça login
            </Link>
          </p>

          <button
            type='submit'
            className='w-full bg-purple-800 text-white font-medium text-2xl py-3 rounded-full'
          >
            Cadastrar
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

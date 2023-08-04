import { useState } from 'react';
import { PlaneIcon } from './PlaneIcon';
import { Link } from 'react-router-dom';

export function FloatingMenu() {
  const [active, setActive] = useState(false);
  return (
    <Link
      to='/minhas-viagens'
      className='fixed bottom-8 right-8 bg-[#5E258A] p-4 rounded-full transition-colors'
      onClick={() => {
        setActive(!active);
      }}
      data-active={active}
    >
      <PlaneIcon />
    </Link>
  );
}

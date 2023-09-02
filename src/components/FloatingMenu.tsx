import { useState } from 'react';
import { PlaneIcon } from './PlaneIcon';
import { Link } from 'react-router-dom';

export function FloatingMenu() {
  const [active, setActive] = useState(false);
  return (
    <Link
      to='/minhas-viagens'
      className='fixed bottom-8 right-8 bg-purple-700 p-4 rounded-full transition-colors shadow-md'
      onClick={() => {
        setActive(!active);
      }}
      data-active={active}
    >
      <PlaneIcon />
    </Link>
  );
}

{
  /* <Popover>
<PopoverTrigger className='fixed bottom-8 right-8 bg-purple-800 p-4 rounded-full transition-colors'>
  <PlaneIcon />
</PopoverTrigger>
<PopoverContent className=''>Oi</PopoverContent>
</Popover> */
}

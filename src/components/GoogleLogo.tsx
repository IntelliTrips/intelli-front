interface GoogleLogoProps {
  className?: string;
  size?: number;
}

export function GoogleLogo({ className, size = 32 }: GoogleLogoProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 20 20'
      className={className}
    >
      <g fill='none' fillRule='evenodd' stroke='none' strokeWidth='1'>
        <g fill='white' transform='translate(-300 -7399)'>
          <g transform='translate(56 160)'>
            <path d='M263.822 7247.004h-9.61c0 1 0 2.998-.007 3.998h5.569c-.213.999-.97 2.398-2.039 3.103-.001-.001-.002.006-.004.005-1.421.938-3.297 1.151-4.69.871-2.183-.433-3.91-2.016-4.612-4.027.004-.003.007-.031.01-.033-.439-1.248-.439-2.918 0-3.917.565-1.837 2.345-3.513 4.53-3.972 1.759-.373 3.743.031 5.202 1.396.194-.19 2.685-2.622 2.872-2.82-4.985-4.515-12.966-2.926-15.953 2.903l-.006.011a9.767 9.767 0 00.01 8.964l-.01.008a10.18 10.18 0 006.48 5.165c3.01.79 6.843.25 9.41-2.072l.003.003c2.175-1.958 3.529-5.296 2.845-9.586'></path>
          </g>
        </g>
      </g>
    </svg>
  );
}

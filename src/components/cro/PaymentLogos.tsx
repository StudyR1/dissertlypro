interface PaymentLogosProps {
  variant?: 'default' | 'compact' | 'dark';
  className?: string;
  showLabel?: boolean;
}

const PaymentLogos = ({ variant = 'default', className = '', showLabel = true }: PaymentLogosProps) => {
  const logos = [
    { name: 'Visa', svg: (
      <svg viewBox="0 0 48 32" className="h-6 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="32" rx="4" fill="#1A1F71"/>
        <path d="M19.5 21.5H16.5L18.5 10.5H21.5L19.5 21.5Z" fill="white"/>
        <path d="M29 10.7C28.4 10.5 27.5 10.2 26.4 10.2C23.5 10.2 21.5 11.7 21.5 13.8C21.5 15.4 22.9 16.3 24 16.8C25.1 17.4 25.5 17.8 25.5 18.3C25.5 19.1 24.5 19.4 23.6 19.4C22.4 19.4 21.7 19.2 20.7 18.8L20.3 18.6L19.9 21.1C20.6 21.4 21.9 21.7 23.3 21.7C26.4 21.7 28.3 20.2 28.4 18C28.4 16.7 27.6 15.7 25.9 14.9C24.9 14.4 24.3 14 24.3 13.5C24.3 13 24.9 12.5 26 12.5C26.9 12.5 27.6 12.7 28.1 12.9L28.4 13L28.8 10.6L29 10.7Z" fill="white"/>
        <path d="M33.5 10.5H31.2C30.5 10.5 30 10.7 29.7 11.4L25.5 21.5H28.6L29.2 19.8H33L33.4 21.5H36.2L33.5 10.5ZM30.1 17.5C30.3 17 31.3 14.3 31.3 14.3C31.3 14.3 31.5 13.7 31.7 13.3L31.9 14.2C31.9 14.2 32.5 17 32.6 17.5H30.1Z" fill="white"/>
        <path d="M14.5 10.5L11.6 17.9L11.3 16.5C10.7 14.6 9 12.5 7 11.4L9.6 21.4H12.8L17.7 10.5H14.5Z" fill="white"/>
        <path d="M9.5 10.5H4.5L4.4 10.8C8.1 11.7 10.5 14 11.3 16.5L10.4 11.4C10.3 10.7 9.8 10.5 9.5 10.5Z" fill="#F9A533"/>
      </svg>
    )},
    { name: 'Mastercard', svg: (
      <svg viewBox="0 0 48 32" className="h-6 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="32" rx="4" fill="#F5F5F5"/>
        <circle cx="18" cy="16" r="8" fill="#EB001B"/>
        <circle cx="30" cy="16" r="8" fill="#F79E1B"/>
        <path d="M24 10.3C25.8 11.7 27 13.7 27 16C27 18.3 25.8 20.3 24 21.7C22.2 20.3 21 18.3 21 16C21 13.7 22.2 11.7 24 10.3Z" fill="#FF5F00"/>
      </svg>
    )},
    { name: 'PayPal', svg: (
      <svg viewBox="0 0 48 32" className="h-6 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="32" rx="4" fill="#F5F5F5"/>
        <path d="M18.5 8H23.5C26.5 8 28 9.5 27.5 12C27 15.5 24.5 17 21.5 17H20L19 23H15.5L18.5 8Z" fill="#003087"/>
        <path d="M21 10.5H24C25.5 10.5 26 11.5 25.8 12.8C25.5 14.5 24.2 15.5 22.5 15.5H21.3L22 10.5H21Z" fill="white"/>
        <path d="M25.5 11H30.5C33.5 11 35 12.5 34.5 15C34 18.5 31.5 20 28.5 20H27L26 26H22.5L25.5 11Z" fill="#009CDE"/>
        <path d="M28 13.5H31C32.5 13.5 33 14.5 32.8 15.8C32.5 17.5 31.2 18.5 29.5 18.5H28.3L29 13.5H28Z" fill="white"/>
      </svg>
    )},
    { name: 'American Express', svg: (
      <svg viewBox="0 0 48 32" className="h-6 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="32" rx="4" fill="#006FCF"/>
        <path d="M8 16L10 12H12.5L10.5 16L12.5 20H10L8 16Z" fill="white"/>
        <path d="M13 12H16L14.5 15.5L16 12H18.5L15.5 20H13L13.5 18L13 20H10.5L13 16L10.5 12H13Z" fill="white"/>
        <path d="M19 12H24V14H21.5V15H24V17H21.5V18H24V20H19V12Z" fill="white"/>
        <path d="M25 12H28.5C30 12 30.5 13 30.5 14C30.5 15 30 15.5 29.5 15.7C30 15.9 30.5 16.5 30.5 17.5C30.5 19 29.5 20 28 20H25V12ZM27.5 15C28 15 28.3 14.7 28.3 14.3C28.3 13.9 28 13.7 27.5 13.7H27.3V15H27.5ZM27.5 18.3C28 18.3 28.3 18 28.3 17.5C28.3 17 28 16.7 27.5 16.7H27.3V18.3H27.5Z" fill="white"/>
        <path d="M31 12H33.5V15H35.5V12H38V20H35.5V17H33.5V20H31V12Z" fill="white"/>
        <path d="M39 12H41.5L43 16L44.5 12H47L43.5 20H41L39 12Z" fill="white"/>
      </svg>
    )},
    { name: 'Apple Pay', svg: (
      <svg viewBox="0 0 48 32" className="h-6 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="32" rx="4" fill="#000"/>
        <path d="M15.5 11C15.2 11.5 14.7 11.9 14 11.9C13.9 11.2 14.2 10.5 14.5 10C14.9 9.4 15.5 9 16 9C16.1 9.7 15.8 10.4 15.5 11ZM16 12.1C15.1 12.1 14.3 12.6 13.9 12.6C13.4 12.6 12.7 12.1 12 12.2C11 12.2 10.1 12.8 9.6 13.7C8.6 15.5 9.3 18.2 10.3 19.6C10.8 20.3 11.4 21.1 12.1 21.1C12.8 21.1 13 20.6 13.9 20.6C14.7 20.6 14.9 21.1 15.7 21.1C16.4 21.1 17 20.4 17.5 19.7C18.1 18.9 18.3 18.1 18.3 18.1C18.3 18.1 17 17.6 17 16.1C17 14.8 18 14.2 18.1 14.1C17.4 13 16.3 12.9 16 12.1Z" fill="white"/>
        <path d="M22 13.5H23.7C24.9 13.5 25.7 14.3 25.7 15.5C25.7 16.7 24.9 17.5 23.6 17.5H22.9V20H22V13.5ZM22.9 14.3V16.7H23.5C24.3 16.7 24.8 16.2 24.8 15.5C24.8 14.8 24.3 14.3 23.5 14.3H22.9Z" fill="white"/>
        <path d="M26.5 18.3C26.5 17.4 27.2 16.9 28.4 16.8L29.8 16.7V16.3C29.8 15.7 29.4 15.4 28.8 15.4C28.2 15.4 27.8 15.7 27.7 16.1H26.9C27 15.2 27.8 14.6 28.9 14.6C30 14.6 30.7 15.2 30.7 16.2V20H29.9V19.2H29.8C29.5 19.7 28.9 20.1 28.3 20.1C27.3 20.1 26.5 19.4 26.5 18.3ZM29.8 17.9V17.4L28.6 17.5C27.9 17.6 27.5 17.9 27.5 18.3C27.5 18.8 27.9 19.1 28.4 19.1C29.1 19.1 29.8 18.6 29.8 17.9Z" fill="white"/>
        <path d="M32 21.5V20.8C32.1 20.8 32.3 20.8 32.4 20.8C32.8 20.8 33.1 20.6 33.2 20.2L33.3 20L31.5 14.7H32.5L33.8 19L35.1 14.7H36.1L34.2 20.4C33.8 21.4 33.4 21.6 32.5 21.6C32.4 21.5 32.1 21.5 32 21.5Z" fill="white"/>
      </svg>
    )},
  ];

  const isCompact = variant === 'compact';
  
  return (
    <div className={`${className}`}>
      {showLabel && (
        <p className={`text-xs text-muted-foreground mb-2 ${isCompact ? 'text-center' : ''}`}>
          Secure payments powered by
        </p>
      )}
      <div className={`flex items-center gap-2 ${isCompact ? 'justify-center' : ''} flex-wrap`}>
        {logos.map((logo) => (
          <div
            key={logo.name}
            className={`
              ${isCompact ? 'opacity-60 hover:opacity-100' : 'opacity-80 hover:opacity-100'}
              transition-opacity
            `}
            title={logo.name}
          >
            {logo.svg}
          </div>
        ))}
      </div>
      <p className={`text-xs text-muted-foreground mt-2 ${isCompact ? 'text-center' : ''}`}>
        <span className="inline-flex items-center gap-1">
          <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
          256-bit SSL encrypted
        </span>
      </p>
    </div>
  );
};

export default PaymentLogos;

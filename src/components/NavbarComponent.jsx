import Sheet from './Sheet';
const NavbarComponent = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-white shadow-sm'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex-shrink-0 font-bold text-xl text-indigo-600'>
            Zetivo
          </div>
          <Sheet />
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;

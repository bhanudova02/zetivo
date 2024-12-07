import { Link, useLocation } from 'react-router-dom';
import { headerData } from '../lib/data';
import NavbarComponent from './NavbarComponent';
export function HeaderComponent() {
  const location = useLocation();
  return (
    <div className='my-7'>
      <div className='flex justify-between items-center py-2.5'>
        <div className='md:block hidden'>
          <h2 className='font-bold text-indigo-600 text-2xl'>
            <Link to='/'>Zetivo</Link>
          </h2>
        </div>
        <div>
          <ul className='md:flex gap-4 font-semibold text-lg hidden'>
            {headerData.map((data, index) => (
              <li key={index}>
                <Link
                  to={data.url}
                  className={
                    location.pathname === data.url
                      ? 'active-link'
                      : ''
                  }
                >
                  {data.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className='block md:hidden'>
            <NavbarComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { RouterLink } from '../RouterLink';

const liClassSet = 'md:min-h-[auto] min-h-[13rem] flex items-center md:px-0 px-2-0 border-b border-dark md:border-0';

function Navigation({ className }) {
  const { pathname } = useRouter();

  return (
    <nav className={clsx(className, 'md:text-2-2 text-3-6 md:font-neue-lt font-ranua-rg')}>
      <ul className="md:flex items-center">
        <li className={clsx({ 'md:font-neue-bd md:text-dark text-purple': pathname === '/' }, 'md:mr-5-0', liClassSet)}>
          <RouterLink href="/" className="block relative pl-2-5">
            <span className="absolute left-0 top-0">/</span> Registration
          </RouterLink>
        </li>
        <li
          className={clsx(
            { 'md:font-neue-bd md:text-dark text-purple': pathname === '/for-russians' },
            'md:mr-5-0',
            liClassSet
          )}
        >
          <RouterLink href="/for-russians" className="block relative pl-2-5">
            <span className="absolute left-0 top-0">/</span> For Russian Citizens
          </RouterLink>
        </li>
        <li className={clsx({ 'md:font-neue-bd md:text-dark text-purple': pathname === '/menu' }, '', liClassSet)}>
          <RouterLink href="/menu" className="block relative pl-2-5">
            <span className="absolute left-0 top-0">/</span> Menu
          </RouterLink>
        </li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  className: PropTypes.string
};

Navigation.defaultProps = {
  className: ''
};

export default Navigation;

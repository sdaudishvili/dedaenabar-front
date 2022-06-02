import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { RouterLink } from '../RouterLink';

function Navigation({ className }) {
  const { pathname } = useRouter();

  return (
    <nav className={clsx(className, ' text-2-2 font-neue-lt md:block hidden')}>
      <ul className="flex items-center">
        <li className={clsx({ 'font-neue-bd': pathname === '/' }, 'mr-5-0')}>
          <RouterLink href="/">/ Registration</RouterLink>
        </li>
        <li className={clsx({ 'font-neue-bd': pathname === '/for-russians' }, 'mr-5-0')}>
          <RouterLink href="/for-russians">/ For Russian Citizens</RouterLink>
        </li>
        <li className={clsx({ 'font-neue-bd': pathname === '/menu' }, 'cursor-pointer')}>
          <RouterLink href="/for-russians">/ For Russian Citizens</RouterLink>
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

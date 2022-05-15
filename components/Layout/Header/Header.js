import { Logo } from '@/components/Common/Logo';
import { ModeSwitcher } from './components';

function Header() {
  return (
    <header className="flex items-center justify-between h-header-size">
      <Logo className="w-11-5" />
      <div className="flex items-center md:order-3 order-1">
        <ModeSwitcher />
      </div>
    </header>
  );
}

export default Header;

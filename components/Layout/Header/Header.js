import { Logo } from '@/components/Logo';
import { ModeSwitcher } from '@/components/ModeSwitcher';

function Header() {
  return (
    <header className="flex items-center justify-between h-header-size">
      <Logo className="w-11-5" />
      <ModeSwitcher />
    </header>
  );
}

export default Header;

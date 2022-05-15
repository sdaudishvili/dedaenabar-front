import { Logo } from '@/components/Logo';
import { ModeSwitcher } from '@/components/ModeSwitcher';
import { Navigation } from '@/components/Navigation';

function Header() {
  return (
    <header className="flex items-center justify-between h-header-size">
      <Logo className="w-11-5" />
      <Navigation />
      <ModeSwitcher />
    </header>
  );
}

export default Header;

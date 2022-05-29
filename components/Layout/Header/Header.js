import { Logo } from '@/components/Logo';
import { ModeSwitcher } from '@/components/ModeSwitcher';
import { Navigation } from '@/components/Navigation';

function Header() {
  return (
    <header className="flex items-center justify-between md:h-10-0 h-8-3 md:border-0 border-b md:mx-0 -mx-2-0 px-2-0 pt-1-0">
      <Logo className="md:w-11-5 w-5-7" />
      <Navigation />
      <ModeSwitcher />
    </header>
  );
}

export default Header;

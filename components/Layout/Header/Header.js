import clsx from 'clsx';
import { Burger } from '@/components/Burger';
import { Logo } from '@/components/Logo';
import { ModeSwitcher } from '@/components/ModeSwitcher';
import { Navigation } from '@/components/Navigation';
import useDisableScroll from '@/hooks/useDisableScroll';
import { IconButton } from '@/components/IconButton';
import { SVG } from '@/components/SVG';
import { FacebookIcon } from '@/components/Vectors/FacebookIcon';
import { InstagramIcon } from '@/components/Vectors/InstagramIcon';

function Header() {
  const [burgerOpened, setBurgerOpened] = React.useState(false);
  useDisableScroll({ condition: burgerOpened });
  return (
    <header className="flex items-center justify-between md:h-10-0 h-8-3 md:border-0 border-b md:mx-0 -mx-2-0 md:px-5-0 px-2-0 pt-1-0">
      <Logo className="md:w-11-5 w-5-7" />
      <Navigation className="md:block hidden" />
      <ModeSwitcher className="md:ml-0 ml-auto" />
      <Burger isOpened={burgerOpened} className="md:hidden ml-2-1" onClick={() => setBurgerOpened((val) => !val)} />
      <div
        className={clsx(
          { 'opacity-0 pointer-events-none translate-x-100-percent': !burgerOpened },
          'fixed top-8-3 left-0 bottom-0 right-0 bg-light z-100 duration-500 md:hidden flex flex-col'
        )}
      >
        <Navigation />
        <div className="mt-auto p-2-0">
          <div className="flex items-center w-mc ml-auto">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="block mr-2-3">
              <IconButton className="border rounded-full w-8-0 h-8-0 hover:bg-purple text-dark duration-150">
                <SVG src={FacebookIcon} className="w-1-5 duration-150" />
              </IconButton>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <IconButton className="border rounded-full w-8-0 h-8-0 hover:bg-purple text-dark duration-150">
                <SVG src={InstagramIcon} className="w-3-8 duration-150" />
              </IconButton>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

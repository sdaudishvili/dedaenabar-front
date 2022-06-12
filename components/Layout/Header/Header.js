import clsx from 'clsx';
import { useRouter } from 'next/router';
import gsap from 'gsap';
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

  const burgerMenuRef = React.useRef(null);
  const tl = React.useRef(null);

  React.useEffect(() => {
    const navElems = burgerMenuRef.current.querySelectorAll('li');
    tl.current = gsap
      .timeline({ paused: true })
      .fromTo(burgerMenuRef.current, { autoAlpha: 0, x: '100%' }, { autoAlpha: 1, x: 0 })
      .fromTo(navElems, { autoAlpha: 0, x: 80 }, { autoAlpha: 1, x: 0, stagger: 0.2 }, 0.2);
  }, []);

  const router = useRouter();
  React.useEffect(() => {
    if (burgerOpened) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [burgerOpened]);

  React.useEffect(() => {
    if (burgerOpened) setBurgerOpened(false);
  }, [router]);
  return (
    <>
      <header
        id="header"
        className="flex items-center justify-between md:h-10-0 h-8-3 md:border-0 border-b md:mx-0 -mx-2-0 lg:px-5-0 px-2-0 pt-1-0"
      >
        <Logo className="md:w-11-5 w-5-7" />
        <Navigation className="md:block hidden" />
        <ModeSwitcher className="md:ml-0 ml-auto" />
        <Burger isOpened={burgerOpened} className="md:hidden ml-2-1" onClick={() => setBurgerOpened((val) => !val)} />
      </header>
      <div
        ref={burgerMenuRef}
        style={{ opacity: 0 }}
        className={clsx(
          { 'pointer-events-none': !burgerOpened },
          'fixed top-8-3 left-0 bottom-0 right-0 bg-light z-100 md:hidden flex flex-col'
        )}
      >
        <Navigation />
        <div className="mt-auto p-2-0">
          <div className="flex items-center w-mc ml-auto">
            <a href="https://www.facebook.com/dedaenabar" target="_blank" rel="noreferrer" className="block mr-2-3">
              <IconButton className="border rounded-full w-8-0 h-8-0 hover:bg-purple text-dark duration-150">
                <SVG src={FacebookIcon} className="w-1-5 duration-150" />
              </IconButton>
            </a>
            <a href="https://www.instagram.com/dedaenabar" target="_blank" rel="noreferrer">
              <IconButton className="border rounded-full w-8-0 h-8-0 hover:bg-purple text-dark duration-150">
                <SVG src={InstagramIcon} className="w-3-8 duration-150" />
              </IconButton>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

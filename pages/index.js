/* eslint-disable react/no-array-index-key */
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ReactDom from 'react-dom';
import { LogoAnimation } from '@/components/LogoAnimation';
import { Menu } from '@/components/Menu';
import { RegistrationForm } from '@/components/RegistrationForm';
import { drinks } from '@/mocks/drinks';
import { foods } from '@/mocks/foods';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);
  React.useEffect(() => {
    gsap.set(['.menu__title', '.menu__arrows', '.menu__image', '.menu__menu'], { autoAlpha: 0, y: 30 });
    const tl = gsap.timeline({
      scrollTrigger: {
        once: true,
        trigger: '.menu',
        start: 'top center',
        end: '+=0'
        // start: '',
        // end: `+=0`
      }
    });

    gsap.set(['.menu__geo__title', '.menu__geo__food'], { autoAlpha: 0, y: 50, willChange: 'transform' });

    tl.to(['.menu__title', '.menu__arrows', '.menu__image', '.menu__menu'], {
      autoAlpha: 1,
      y: 0,
      duration: 1,
      ease: 'Expo.easeOut'
    }).to(
      ['.menu__geo__title', '.menu__geo__food'],
      { autoAlpha: 1, y: 0, stagger: 0.05, duration: 1, ease: 'Expo.easeOut' },
      0.3
    );
  }, []);

  return (
    <div className="home-page h-full md:border md:pt-13-0 pt-3-0 lg:px-26-5 md:px-7-0 md:pb-16-2 pb-3-0">
      {mounted &&
        ReactDom.createPortal(
          <div className="absolute left-[1%] right-0 bg-light top-36-3 text-dark pt-6-0 pb-3-0 lg:block hidden">
            <div className="w-[95%] m-auto">
              {Array(5)
                .fill()
                .map((_x, i) => (
                  <div key={`row-${i}`} className="flex">
                    {Array(10)
                      .fill()
                      .map((_x, j) => (
                        <LogoAnimation key={`col-${j}`} />
                      ))}
                  </div>
                ))}
            </div>
          </div>,
          document.getElementById('anim')
        )}

      <RegistrationForm className="bg-light relative z-1 text-dark" />
      <div className="absolute left-0 w-full overflow-hidden bg-light text-dark pt-6-0 pb-3-0 md:hidden">
        <div className="flex">
          {Array(3)
            .fill()
            .map((_x, j) => (
              <LogoAnimation secondary key={`col-${j}`} />
            ))}
        </div>
      </div>
      <Menu foods={foods} className="md:mt-16-2 mt-18-5" drinks={drinks} />
    </div>
  );
}

export default Home;

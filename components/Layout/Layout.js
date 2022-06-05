import propTypes from 'prop-types';
import clsx from 'clsx';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { Header } from './Header';
import { Footer } from './Footer';

gsap.registerPlugin(ScrollTrigger);

const LOADER_ON_SCREEN_DURATION = 2000;

function Layout({ children }) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    document.documentElement.classList.add('disable-overflow');
    document.body.classList.add('disable-overflow');
    setTimeout(() => {
      setLoading(false);
      document.documentElement.classList.remove('disable-overflow');
      document.body.classList.remove('disable-overflow');
    }, LOADER_ON_SCREEN_DURATION);
  }, []);

  React.useEffect(() => {
    if (!loading) {
      const headerAndMainTl = gsap.timeline();
      headerAndMainTl
        .to('#main', { autoAlpha: 1, duration: 1, ease: 'Expo.easeOut' })
        .to('#header', { autoAlpha: 1, y: 0, duration: 1, ease: 'Expo.easeOut' }, 0.2);

      gsap.to('#footer', {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: 'Expo.easeOut',
        scrollTrigger: {
          once: true,
          trigger: '#footer',
          start: 'top 90%',
          end: '+=0'
        }
      });
    } else {
      gsap.set('#header', { autoAlpha: 0, y: -30, willChange: 'transform' });
      gsap.set('#main', { autoAlpha: 0, willChange: 'transform' });
      gsap.set('#footer', { autoAlpha: 0, y: -30 });
    }
  }, [loading]);

  return (
    <>
      <div className="grid grid-rows-[max-content_minmax(0,1fr)_max-content] grid-cols-1 min-h-screen container overflow-hidden">
        <Header />
        <main id="main" className="">
          {children}
        </main>
        <Footer />
      </div>
      <div
        className={clsx(
          { 'opacity-0 pointer-events-none': !loading },
          'bg-light fixed top-0 left-0 w-screen h-screen z-100 duration-500 md:py-10-0 flex flex-col'
        )}
      >
        <div className="container h-full md:border font-ranua-rg md:text-15-0 text-5-0 flex items-center justify-center">
          100%
        </div>
      </div>
    </>
  );
}

Layout.propTypes = {
  children: propTypes.node.isRequired
};

export default Layout;

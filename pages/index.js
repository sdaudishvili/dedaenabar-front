/* eslint-disable react/no-array-index-key */
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ReactDom from 'react-dom';
import { LogoAnimation } from '@/components/LogoAnimation';
import { RegistrationForm } from '@/components/RegistrationForm';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
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
      <div className="h-15-0 md:hidden">
        <div className="absolute left-0 w-full overflow-hidden bg-light text-dark pt-6-0 pb-3-0">
          <div className="flex">
            {Array(3)
              .fill()
              .map((_x, j) => (
                <LogoAnimation secondary key={`col-${j}`} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

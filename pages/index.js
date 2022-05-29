/* eslint-disable react/no-array-index-key */
import { LogoAnimation } from '@/components/LogoAnimation';
import { Menu } from '@/components/Menu';
import { RegistrationForm } from '@/components/RegistrationForm';
import { drinks } from '@/mocks/drinks';
import { foods } from '@/mocks/foods';

function Home() {
  return (
    <div className="home-page h-full border pt-13-0 px-26-5 pb-16-2">
      <div className="absolute left-0 right-0 bg-light text-dark pt-6-0 pb-3-0">
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
      </div>
      <RegistrationForm className="bg-light relative z-1 text-dark" />
      <Menu foods={foods} className="mt-16-2" drinks={drinks} />
    </div>
  );
}

export default Home;

/* eslint-disable react/no-array-index-key */
import { Menu } from '@/components/Menu';
import { drinks } from '@/mocks/drinks';
import { foods } from '@/mocks/foods';

function Home() {
  return (
    <div className="home-page h-full border pt-13-0 px-26-5 pb-16-2">
      <Menu foods={foods} drinks={drinks} />
    </div>
  );
}

export default Home;

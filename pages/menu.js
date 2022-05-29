/* eslint-disable react/no-array-index-key */
import { Menu } from '@/components/Menu';
import { drinks } from '@/mocks/drinks';
import { foods } from '@/mocks/foods';

function Home() {
  return (
    <div className="home-page h-full md:border md:pt-13-0 pt-3-0 md:px-26-5 md:pb-16-2 pb-3-0">
      <Menu foods={foods} drinks={drinks} />
    </div>
  );
}

export default Home;

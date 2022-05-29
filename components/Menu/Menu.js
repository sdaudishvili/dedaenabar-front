import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { IconButton } from '@/components/IconButton';
import { SVG } from '@/components/SVG';
import { ArrowLeftIcon } from '@/components/Vectors/ArrowLeftIcon';
import { ArrowRightIcon } from '@/components/Vectors/ArrowRightIcon';
import { MenuLogo } from '@/components/Vectors/MenuLogo';

SwiperCore.use([Navigation]);

const arrowWrapperClassSet =
  'w-5-5 h-5-5 flex items-center justify-center rounded-full border bg-light hover:bg-dark text-dark hover:text-light duration-150';

const swiperOptions = {
  spaceBetween: 50,
  slidesPerView: 1,
  navigation: {
    nextEl: '.menu .swiper-button-next',
    prevEl: '.menu .swiper-button-prev'
  }
};

function Menu({ className, foods, drinks }) {
  const currentSlideIndexRef = React.useRef(null);

  const reducedDrinks = drinks.reduce(
    (acc, cur) => ({ ...acc, [cur.type]: [...(acc[cur.type] || []), { title: cur.title_eng, price: cur.price }] }),
    {}
  );

  console.log(Object.entries(reducedDrinks));

  const foodGeoNode = (
    <div>
      <div className="font-bpg-square-caps text-2-4 mb-4-0">ვეგეტარიანული სამზარეულო</div>
      <ul>
        {foods &&
          foods.map((x, i) => (
            <li className="mb-3-6" key={JSON.stringify(i)}>
              <p className="font-bpg-square-caps text-1-8">
                {x.title_geo} {x.price}
              </p>
              <p className="mt-1-0 font-bpg-square text-1-6">{x.description_geo}</p>
            </li>
          ))}
      </ul>
    </div>
  );

  const foodEngNode = (
    <div>
      <div className="font-ranua-md text-2-4 mb-4-0">VEGETARIAN FOOD</div>
      <ul>
        {foods &&
          foods.map((x, i) => (
            <li className="mb-3-6" key={JSON.stringify(i)}>
              <p className="font-ranua-md text-1-8">
                {x.title_eng} {x.price}
              </p>
              <p className="mt-1-0 font-neue-lt text-1-6">{x.description_eng}</p>
            </li>
          ))}
      </ul>
    </div>
  );

  const drinksNode = (
    <div>
      <ul className="columns-2">
        {Object.entries(reducedDrinks) &&
          Object.entries(reducedDrinks).map(([title, curDrinks]) => {
            const [titleEng, titleGeo] = title?.split('|') || [];
            return (
              <li className="mb-5-0" key={title}>
                <div className="">
                  <span className="font-ranua-md uppercase pr-1-0 text-2-4">{titleEng}</span>
                  <span className="font-bpg-square-caps text-2-0">{titleGeo}</span>
                </div>
                <ul className="mt-0-5 text-1-8 font-ranua-md">
                  {curDrinks &&
                    curDrinks.map((x) => (
                      <li key={x.title}>
                        {x.title} {x.price}
                      </li>
                    ))}
                </ul>
              </li>
            );
          })}
      </ul>
    </div>
  );

  const slideChangeHandler = ({ activeIndex }) => {
    currentSlideIndexRef.current.innerText = activeIndex + 1;
  };

  return (
    <div className={clsx(className, 'menu relative select-none')}>
      <div className="flex items-center justify-between text-6-2 font-ranua-rg">
        <div>/ Menu</div>
        <div className="flex items-center">
          <IconButton className={clsx(arrowWrapperClassSet, 'mr-2-0 swiper-button-prev')}>
            <SVG src={ArrowLeftIcon} className="w-3-0" />
          </IconButton>
          <IconButton className={clsx(arrowWrapperClassSet, 'swiper-button-next')}>
            <SVG src={ArrowRightIcon} className="w-3-0" />
          </IconButton>
        </div>
      </div>
      <div className="absolute top-1-0 left-30-percent w-20-0 h-20-0">
        <img src="/images/menu_thumbnail.png" className="w-full h-full rounded-full" alt="" />
      </div>
      <div className="border mt-1-8 px-13-2 pt-4-4 pb-9-6">
        <div className="ml-auto w-mc text-2-4 font-neue-lt">
          <span ref={currentSlideIndexRef}>1</span> / 3
        </div>
        <div className="mt-2-4">
          <SVG src={MenuLogo} className="w-13-2" />
        </div>
        <div className="h-0-1 bg-current mt-6-0 mb-3-2" />
        <div className="w-full">
          <Swiper {...swiperOptions} className="h-full" onSlideChange={slideChangeHandler}>
            <SwiperSlide className="h-full">{foodGeoNode}</SwiperSlide>
            <SwiperSlide className="h-full">{foodEngNode}</SwiperSlide>
            <SwiperSlide className="h-full">{drinksNode}</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

Menu.propTypes = {
  className: PropTypes.string,
  foods: PropTypes.array,
  drinks: PropTypes.array
};

Menu.defaultProps = {
  className: '',
  foods: [],
  drinks: []
};

export default Menu;

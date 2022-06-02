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
  'md:w-5-5 md:h-5-5 w-4-5 h-4-5 flex items-center justify-center rounded-full border hover:bg-purple duration-150';

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

  const reducedDrinks = React.useMemo(
    () =>
      drinks.reduce(
        (acc, cur) => ({ ...acc, [cur.type]: [...(acc[cur.type] || []), { title: cur.title_eng, price: cur.price }] }),
        {}
      ),
    [drinks]
  );

  const foodGeoNode = (
    <div className="menu">
      <div className="font-bpg-square-caps md:text-2-4 text-1-4 md:mb-4-0 mb-2-5">ვეგეტარიანული სამზარეულო</div>
      <ul>
        {foods &&
          foods.map((x, i) => (
            <li className="md:mb-3-6 mb-2-5" key={JSON.stringify(i)}>
              <p className="font-bpg-square-caps md:text-1-8 text-1-4">
                {x.title_geo} {x.price}
              </p>
              <p className="md:mt-1-0 mt-0-7 font-bpg-square md:text-1-6 text-1-2">{x.description_geo}</p>
            </li>
          ))}
      </ul>
    </div>
  );

  const foodEngNode = (
    <div>
      <div className="font-ranua-md md:text-2-4 text-1-4 md:mb-4-0 mb-2-5">VEGETARIAN FOOD</div>
      <ul>
        {foods &&
          foods.map((x, i) => (
            <li className="md:mb-3-6 mb-2-5" key={JSON.stringify(i)}>
              <p className="font-ranua-md md:text-1-8 text-1-4">
                {x.title_eng} {x.price}
              </p>
              <p className="md:mt-1-0 mt-0-7 font-neue-lt md:text-1-6 text-1-2">{x.description_eng}</p>
            </li>
          ))}
      </ul>
    </div>
  );

  const drinksNode = (
    <div>
      <ul className="md:columns-2">
        {Object.entries(reducedDrinks) &&
          Object.entries(reducedDrinks).map(([title, curDrinks]) => {
            const [titleEng, titleGeo] = title?.split('|') || [];
            return (
              <li className="md:mb-5-0 mb-2-0" key={title}>
                <div className="">
                  <span className="font-ranua-md uppercase pr-1-0 md:text-2-4 text-1-4">{titleEng}</span>
                  <span className="font-bpg-square-caps md:text-2-0 text-1-2">{titleGeo}</span>
                </div>
                <ul className="mt-0-5 md:text-1-8 text-1-2 font-ranua-md">
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
    <div className={clsx(className, 'menu relative select-none')} id="menu">
      <div className="flex items-center justify-between md:text-6-2 text-3-6 font-ranua-rg">
        <div className="menu__title">/ Menu</div>
        <div className="flex items-center menu__arrows">
          <IconButton className={clsx(arrowWrapperClassSet, 'mr-2-0 swiper-button-prev')}>
            <SVG src={ArrowLeftIcon} className="md:w-3-0 w-2-5" />
          </IconButton>
          <IconButton className={clsx(arrowWrapperClassSet, 'swiper-button-next')}>
            <SVG src={ArrowRightIcon} className="md:w-3-0 w-2-5" />
          </IconButton>
        </div>
      </div>
      <div className="absolute top-1-0 left-30-percent w-20-0 h-20-0 md:block hidden menu__image">
        <img src="/images/menu_thumbnail.png" className="w-full h-full rounded-full" alt="" />
      </div>
      <div className="border mt-1-8 md:px-13-2 px-2-5 md:pt-4-4 pt-2-5 md:pb-9-6 pb-3-0 menu__menu">
        <div className="ml-auto w-mc text-2-4 font-neue-lt md:block hidden">
          <span ref={currentSlideIndexRef}>1</span> / 3
        </div>
        <div className="md:mt-2-4">
          <SVG src={MenuLogo} className="md:w-13-2 w-4-6" />
        </div>
        <div className="h-0-1 bg-current md:mt-6-0 mt-1-5 md:mb-3-2 mb-2-5" />
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

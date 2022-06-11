import propTypes from 'prop-types';
import { getAddons, getDrinks, getFoods } from '@/api';
import { Menu } from '@/components/Menu';

function MenuPage({ addons, drinks, foods }) {
  return (
    <div className="home-page h-full md:border md:pt-13-0 pt-3-0 md:px-26-5 md:pb-16-2 pb-3-0">
      <Menu foods={foods} drinks={drinks} addons={addons} />
    </div>
  );
}

MenuPage.propTypes = {
  addons: propTypes.array.isRequired,
  drinks: propTypes.array.isRequired,
  foods: propTypes.array.isRequired
};

export const getStaticProps = async () => {
  try {
    const [{ data: foods }, { data: drinks }, { data: addons }] = await Promise.all([
      getFoods(),
      getDrinks(),
      getAddons()
    ]);
    return { props: { addons, drinks, foods }, revalidate: 60 };
  } catch (error) {
    return { props: { addons: [], drinks: [], foods: [] }, revalidate: 60 };
  }
};

export default MenuPage;

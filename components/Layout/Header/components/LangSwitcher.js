import clsx from 'clsx';
import propTypes from 'prop-types';

const btnClassSet = 'md:py-0-6 py-1-2 md:px-0-8 px-1-8 rounded-78-0 hover:bg-dark hover:text-light base-transition';

function LangSwitcher({ className, onChange, locale }) {
  return (
    <div
      className={clsx(
        className,
        'flex items-center cursor-pointer md:p-0-4 p-0-8 rounded-78-0 border border-dark md:text-1-6 text-2-8 select-none base-transition w-mc'
      )}
      style={{ fontFamily: 'IBMPlexSans-Regular' }}
    >
      <div
        aria-hidden
        onClick={() => onChange('en')}
        className={clsx(btnClassSet, [locale === 'en' ? 'bg-dark text-light' : 'bg-light text-dark'])}
      >
        ENG
      </div>
      <div
        aria-hidden
        onClick={() => onChange('ka')}
        className={clsx(btnClassSet, [locale === 'ka' ? 'bg-dark text-light' : 'bg-light text-dark'])}
      >
        GEO
      </div>
    </div>
  );
}

LangSwitcher.propTypes = {
  className: propTypes.string,
  onChange: propTypes.func,
  locale: propTypes.string
};

LangSwitcher.defaultProps = {
  className: '',
  onChange: () => {},
  locale: 'en'
};

export default LangSwitcher;

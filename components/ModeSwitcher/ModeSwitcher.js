import clsx from 'clsx';
import propTypes from 'prop-types';

function ModeChanger({ className }) {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const elem = document.documentElement;
    if (isDark) {
      elem.classList.add('dark');
    } else {
      elem.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div
      aria-hidden
      onClick={() => setIsDark(!isDark)}
      className={clsx(className, 'flex items-center cursor-pointer group select-none')}
    >
      <div className="mr-2-0 font-neue-lt text-2-2 md:block hidden">{isDark ? 'Light Mode' : 'Dark Mode'}</div>
      <div className="flex items-center relative md:h-2-0 h-4-0 md:w-3-0 w-6-0">
        <div className="absolute top-0 left-0 border border-dark rounded-full bg-dark md:w-2-0 w-4-0 md:h-2-0 h-4-0 group-hover:bg-light base-transition" />
        <div className="absolute top-0 md:left-1-0 left-2-0 border border-dark rounded-full bg-light md:w-2-0 w-4-0 md:h-2-0 h-4-0 group-hover:bg-dark base-transition" />
      </div>
    </div>
  );
}

ModeChanger.propTypes = {
  className: propTypes.string
};

ModeChanger.defaultProps = {
  className: ''
};

export default ModeChanger;

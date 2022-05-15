import clsx from 'clsx';
import PropTypes from 'prop-types';
import { SearchIcon } from '@/components/Vectors/SearchIcon';
import { useDebounce } from '@/hooks/useDebounce';
import { SVG } from '../SVG';

function Input({ className, initialValue, onChange, ...rest }) {
  const [value, setValue] = React.useState(initialValue);

  const debounced = useDebounce(value, 500);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    if (debounced !== initialValue) {
      onChange(debounced);
    }
  }, [debounced]);

  return (
    <div className={clsx(className, 'relative uppercase')}>
      <input
        {...rest}
        value={value}
        onChange={({ target: { value } }) => setValue(value)}
        className="pb-1-0 border-b border-white-100 w-full pr-3-0 font-neue-ebd"
      />
      <SVG src={SearchIcon} className="absolute right-0 top-0-3 w-1-6" />
      <style jsx>{`
        input::placeholder {
          color: #d8d8d8;
        }
      `}</style>
    </div>
  );
}

Input.propTypes = {
  className: PropTypes.string,
  initialValue: PropTypes.string,
  onChange: PropTypes.func
};

Input.defaultProps = {
  className: '',
  initialValue: '',
  onChange: () => {}
};

export default Input;

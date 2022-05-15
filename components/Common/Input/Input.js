import clsx from 'clsx';
import PropTypes from 'prop-types';

function Input({ className, value, onChange, errored, required, placeholder, ...rest }) {
  return (
    <div className={clsx(className, 'relative uppercase', { 'text-red': errored })}>
      <input
        {...rest}
        value={value}
        onChange={onChange}
        className="pb-1-0 pt-0-2 border-b w-full font-ranua-rg"
        placeholder={`${placeholder} ${required ? '*' : ''}`}
      />
      <style jsx>{`
        input::placeholder {
          color: currentColor;
        }
      `}</style>
    </div>
  );
}

Input.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  errored: PropTypes.bool,
  required: PropTypes.bool,
  placeholder: PropTypes.string
};

Input.defaultProps = {
  className: '',
  value: '',
  onChange: () => {},
  errored: false,
  required: false,
  placeholder: ''
};

export default Input;

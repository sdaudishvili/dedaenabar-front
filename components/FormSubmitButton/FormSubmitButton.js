import PropTypes from 'prop-types';
import clsx from 'clsx';

function FormSubmitButton(props) {
  const { className, onClick, success, children } = props;

  return (
    <div className={clsx(className, 'md:h-10-0 h-6-0 w-full font-ranua-rg md:text-3-6 text-2-4 relative')}>
      <button
        type="button"
        onClick={onClick}
        className="absolute left-0 top-0 h-full w-full hover:bg-purple text-dark duration-150"
      >
        {children}
      </button>
      <div
        className={clsx(
          { 'opacity-0 pointer-events-none': !success },
          'absolute left-0 top-0 h-full w-full bg-green flex items-center justify-center duration-150 text-[#243628]'
        )}
      >
        Your Request was successfully sent!
      </div>
    </div>
  );
}

FormSubmitButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  success: PropTypes.bool,
  children: PropTypes.node
};

FormSubmitButton.defaultProps = {
  className: '',
  onClick: () => {},
  success: false,
  children: null
};

export default FormSubmitButton;

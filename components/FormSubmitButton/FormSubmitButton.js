import PropTypes from 'prop-types';
import clsx from 'clsx';

function FormSubmitButton(props) {
  // eslint-disable-next-line no-unused-vars
  const { className, onClick, success, children, disabled } = props;

  return (
    <div
      className={clsx(
        className,
        [success ? 'h-8-0' : 'h-6-0'],
        'md:h-10-0 w-full font-ranua-rg md:text-3-6 text-2-4 relative'
      )}
    >
      <button
        disabled={disabled}
        type="button"
        onClick={onClick}
        className={clsx(
          { 'pointer-events-none opacity-60': disabled },
          'absolute left-0 top-0 h-full w-full hover:bg-purple text-dark duration-150'
        )}
      >
        {children}
      </button>
      <div
        className={clsx(
          { 'opacity-0 pointer-events-none': !success },
          'absolute left-0 top-0 h-full w-full bg-green flex items-center justify-center duration-150 text-[#243628] text-center'
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
  children: PropTypes.node,
  disabled: PropTypes.bool
};

FormSubmitButton.defaultProps = {
  className: '',
  onClick: () => {},
  success: false,
  children: null,
  disabled: false
};

export default FormSubmitButton;

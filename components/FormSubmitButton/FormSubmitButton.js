import PropTypes from 'prop-types';
import clsx from 'clsx';

function FormSubmitButton(props) {
  const { className, onClick, success, children } = props;

  return (
    <div className={clsx(className, 'h-10-0 w-full font-ranua-rg text-3-6 relative')}>
      <button type="button" onClick={onClick} className="absolute inset-0 hover:bg-purple text-dark duration-150">
        {children}
      </button>
      <div
        className={clsx(
          { 'opacity-0 pointer-events-none': !success },
          'absolute inset-0 bg-green flex items-center justify-center duration-150 text-[#243628]'
        )}
      >
        Success
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

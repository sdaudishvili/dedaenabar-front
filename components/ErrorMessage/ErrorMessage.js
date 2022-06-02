import PropTypes from 'prop-types';
import { SVG } from '../SVG';
import { XIcon } from '../Vectors/XIcon';

function ErrorMessage({ message, onClose }) {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full bg-dark opacity-50" aria-hidden onClick={onClose} />
      <div className="fixed top-50-percent left-50-percent -translate-x-50-percent -translate-y-50-percent bg-light w-[62rem] min-h-[23.2rem] p-3-0">
        <div className="w-mc ml-auto cursor-pointer" aria-hidden onClick={onClose}>
          <SVG src={XIcon} className="w-2-0" />
        </div>
        <div className="flex items-center justify-center text-3-6 font-ranua-rg mt-3-0">{message}</div>
      </div>
    </div>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
  onClose: PropTypes.func
};

ErrorMessage.defaultProps = {
  message: '',
  onClose: () => {}
};

export default ErrorMessage;
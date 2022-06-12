import PropTypes from 'prop-types';
import { SVG } from '../SVG';
import { XIcon } from '../Vectors/XIcon';

function ErrorMessage({ message, onClose }) {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full bg-dark opacity-50" aria-hidden onClick={onClose} />
      <div className="fixed top-50-percent md:left-50-percent left-0 right-0 md:right-[unset] md:-translate-x-50-percent -translate-y-50-percent md:mx-0 mx-3-0 bg-light md:w-[62rem] md:min-h-[23.2rem] md:px-7-2 md:py-7-2 px-3-5 py-5-0 border">
        <div
          className="w-mc ml-auto cursor-pointer absolute md:top-3-0 top-1-7 md:right-3-0 right-1-7"
          aria-hidden
          onClick={onClose}
        >
          <SVG src={XIcon} className="w-2-0" />
        </div>
        <div className="flex items-center justify-center md:text-3-6 text-3-0 font-ranua-rg text-center ">
          {message}
        </div>
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

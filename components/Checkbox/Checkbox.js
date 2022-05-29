import PropTypes from 'prop-types';
import clsx from 'clsx';
import { keyEventHandler } from '@/utils/keyEventHandler';
import { SVG } from '../SVG';
import { CheckmarkIcon } from '@/components/Vectors/CheckmarkIcon';

function Checkbox({ className, onClick, label, checked }) {
  return (
    <div
      className={clsx('flex items-start', className)}
      tabIndex="0"
      onClick={onClick}
      role="button"
      onKeyDown={keyEventHandler(onClick)}
    >
      <div className="w-2-5 h-2-5 border mr-1-5 flex items-center justify-center">
        <SVG
          src={CheckmarkIcon}
          withoutStrokes
          original
          className={clsx({ 'opacity-0 scale-0 stroke-current': !checked }, 'w-1-6 pointer-events-none duration-150')}
        />
      </div>
      <div className="text-1-6 font-ranua-rg capitalize flex-1">{label}</div>
    </div>
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string
};

Checkbox.defaultProps = {
  checked: false,
  className: '',
  onClick: () => {},
  label: ''
};

export default Checkbox;

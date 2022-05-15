import clsx from 'clsx';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { keyEventHandler } from '@/utils/keyEventHandler';

const sizeSet = {
  md: 'md:h-6-0 h-8-0 md:text-2-0 text-2-4',
  lg: 'md:h-6-0 h-10-0 md:text-2-0 text-3-2',
  custom: ''
};

const fontVariant = {
  mono: 'font-plexmono-md',
  sans: 'font-plexsans-rg'
};

function Button({ className, px, children, onClick, size, disabled, type, font }) {
  const paddingX = px || 'md:px-3-0 px-4-0';

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      role="button"
      onClick={onClick}
      tabIndex="0"
      className={clsx(
        sizeSet[size],
        fontVariant[font],
        className,
        paddingX,
        'relative rounded-78-0 flex items-center justify-center wc-transform tpnt select-none',
        { 'pointer-events-none opacity-60': disabled }
      )}
      onKeyPress={keyEventHandler(onClick)}
      type={type}
    >
      {children}
    </motion.button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  px: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(sizeSet)),
  disabled: PropTypes.bool,
  type: PropTypes.string,
  font: PropTypes.oneOf(Object.keys(fontVariant))
};

Button.defaultProps = {
  className: '',
  children: null,
  onClick: () => {},
  px: '',
  size: 'md',
  disabled: false,
  type: 'button',
  font: 'mono'
};

export default Button;

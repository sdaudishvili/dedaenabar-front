import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import PropTypes from 'prop-types';
import { LoadingIcon } from '@/components/Vectors/LoadingIcon';
import { SVG } from '../SVG';

function AnimatedImage({ className, loading }) {
  const { t } = useTranslation();
  return (
    <div
      className={clsx(
        className,
        'md:text-1-6 text-3-2 font-plexmono-md flex items-center justify-center pointer-events-none',
        { 'opacity-0': !loading }
      )}
    >
      {t('loading')}
      <SVG src={LoadingIcon} className="md:w-1-8 w-3-6 md:ml-1-1 ml-2-2" original />
    </div>
  );
}

AnimatedImage.propTypes = {
  className: PropTypes.string,
  loading: PropTypes.bool
};

AnimatedImage.defaultProps = {
  className: '',
  loading: false
};

export default AnimatedImage;

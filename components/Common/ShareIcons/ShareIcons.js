import PropTypes from 'prop-types';

import clsx from 'clsx';
import { FacebookIcon } from '@/components/Vectors/FacebookIcon';
import { LinkedinIcon } from '@/components/Vectors/LinkedinIcon';
import useSiteUrl from '@/hooks/useSiteUrl';
import { TwitterIcon } from '@/components/Vectors/TwitterIcon';
import { SVG } from '../SVG';

const svgClassSet = 'cursor-pointer';

const anchorClassSet =
  'md:w-6-0 w-12-0 md:h-6-0 h-12-0 flex items-center justify-center rounded border border-transparent rounded-full hover:text-green hover:border-green base-transition';

function ShareIcons(props) {
  const { className, path } = props;

  const shareUrl = useSiteUrl(path);

  return (
    <div className={clsx(className, 'flex items-center')}>
      <a
        className={anchorClassSet}
        href={`https://www.linkedin.com/sharing/share-offsite?url=${encodeURIComponent(shareUrl)}`}
        rel="noreferrer"
        target="_blank"
        aria-label="Linkedin"
        title="Share on LinkedIn"
      >
        <SVG className={clsx(svgClassSet, 'md:w-2-0 w-4-4')} src={LinkedinIcon} />
      </a>
      <a
        className={anchorClassSet}
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`}
        rel="noreferrer"
        target="_blank"
        aria-label="Twitter"
        title="Share on Twitter"
      >
        <SVG className={clsx(svgClassSet, 'md:w-2-2 w-4-4')} src={TwitterIcon} />
      </a>
      <a
        className={anchorClassSet}
        href={`https://www.facebook.com/sharer/sharer?u=${encodeURIComponent(shareUrl)}`}
        rel="noreferrer"
        target="_blank"
        aria-label="Facebook"
        title="Share on Facebook"
      >
        <SVG className={clsx(svgClassSet, 'md:w-0-9 w-2-0')} src={FacebookIcon} />
      </a>
    </div>
  );
}

ShareIcons.propTypes = {
  className: PropTypes.string,
  path: PropTypes.string
};

ShareIcons.defaultProps = {
  className: '',
  path: null
};

export default ShareIcons;

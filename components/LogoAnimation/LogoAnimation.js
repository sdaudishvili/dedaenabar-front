import clsx from 'clsx';
import PropTypes from 'prop-types';
import { SVG } from '../SVG';
import { LogoA, LogoBigA, LogoBigD, LogoD, LogoE, LogoN } from '../Vectors/LogoAlphabet';

function LogoAnimation({ className }) {
  return (
    <div className={clsx(className, 'flex items-center h-8-7')}>
      <div className="mr-0-1 anim h-full flex items-center" style={{ animationDelay: '0' }}>
        <SVG src={LogoD} className="w-2-1" />
      </div>
      <div className="mr-0-1 anim h-full flex items-center" style={{ animationDelay: '0.6s' }}>
        <SVG src={LogoE} className="w-2-3" />
      </div>
      <div className="mr-0-1 anim h-full flex items-center" style={{ animationDelay: '1.2s' }}>
        <SVG src={LogoBigD} className="w-2-4" />
      </div>
      <div className="mr-0-1 anim h-full flex items-center" style={{ animationDelay: '1.8s' }}>
        <SVG src={LogoA} className="w-2-8" />
      </div>
      <div className="mr-0-1 anim h-full flex items-center" style={{ animationDelay: '2.4s' }}>
        <SVG src={LogoE} className="w-2-3" />
      </div>
      <div className="mr-0-1 anim h-full flex items-center" style={{ animationDelay: '3s' }}>
        <SVG src={LogoN} className="w-2-1" />
      </div>
      <div className="mr-0-1 anim h-full flex items-center" style={{ animationDelay: '3.6s' }}>
        <SVG src={LogoBigA} className="w-3-1" />
      </div>
    </div>
  );
}

LogoAnimation.propTypes = {
  className: PropTypes.string
};

LogoAnimation.defaultProps = {
  className: ''
};

export default LogoAnimation;

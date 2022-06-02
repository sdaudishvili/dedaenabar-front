import clsx from 'clsx';
import PropTypes from 'prop-types';
import { SVG } from '../SVG';
import { LogoA, LogoBigA, LogoBigD, LogoD, LogoE, LogoN } from '../Vectors/LogoAlphabet';

function LogoAnimation({ className, secondary }) {
  const svgAdditionalClass = { 'text-[transparent] stroke-dark ml-0-1': secondary };
  return (
    <div className={clsx(className, 'flex items-center h-8-7')}>
      <div className="mr-0-1 anim h-full flex items-center" style={{ animationDelay: '0' }}>
        <SVG src={LogoD} className={clsx(svgAdditionalClass, 'md:w-2-1 w-1-8')} />
      </div>
      <div className="mr-0-1 anim h-full flex items-center" style={{ animationDelay: '0.7s' }}>
        <SVG src={LogoE} className={clsx(svgAdditionalClass, 'md:w-2-3 w-2-0')} />
      </div>
      <div className="mr-0-1 anim h-full flex items-center" style={{ animationDelay: '1.4s' }}>
        <SVG src={LogoBigD} className={clsx(svgAdditionalClass, 'md:w-2-4 w-2-1')} />
      </div>
      <div className="mr-0-1 anim h-full flex items-center" style={{ animationDelay: '2.1s' }}>
        <SVG src={LogoA} className={clsx(svgAdditionalClass, 'md:w-2-8 w-2-4')} />
      </div>
      <div className="mr-0-1 anim h-full flex items-center" style={{ animationDelay: '2.8s' }}>
        <SVG src={LogoE} className={clsx(svgAdditionalClass, 'md:w-2-3 w-2-0')} />
      </div>
      <div className="mr-0-1 anim h-full flex items-center" style={{ animationDelay: '3.5s' }}>
        <SVG src={LogoN} className={clsx(svgAdditionalClass, 'md:w-2-1 w-1-8')} />
      </div>
      <div className="mr-0-1 anim h-full flex items-center" style={{ animationDelay: '4.3s' }}>
        <SVG src={LogoBigA} className={clsx(svgAdditionalClass, 'md:w-3-1 w-2-7')} />
      </div>
    </div>
  );
}

LogoAnimation.propTypes = {
  className: PropTypes.string,
  secondary: PropTypes.bool
};

LogoAnimation.defaultProps = {
  className: '',
  secondary: false
};

export default LogoAnimation;

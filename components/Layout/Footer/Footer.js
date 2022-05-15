import clsx from 'clsx';
import propTypes from 'prop-types';
import { IconButton } from '@/components/Common/IconButton';
import { SVG } from '@/components/Common/SVG';
import { FacebookIcon } from '@/components/Vectors/FacebookIcon';
import { InstagramIcon } from '@/components/Vectors/InstagramIcon';

function Footer({ socialLinks, className }) {
  JSON.stringify(socialLinks);
  return (
    <footer
      id="footer"
      className={clsx(className, 'h-footer-size flex items-center justify-between text-2-2 font-neue-lt')}
    >
      <div className="flex items-center">
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="block mr-2-3">
          <IconButton className="border rounded-full w-5-5 h-5-5 hover:text-purple duration-150 text-dark">
            <SVG src={FacebookIcon} className="w-1-1" />
          </IconButton>
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <IconButton className="border rounded-full w-5-5 h-5-5 hover:text-purple duration-150 text-dark">
            <SVG src={InstagramIcon} className="w-2-5" />
          </IconButton>
        </a>
      </div>
      <p>© Dedaena Bar 2022</p>
      <p>Embrace The Unknown</p>
    </footer>
  );
}

Footer.propTypes = {
  socialLinks: propTypes.object,
  className: propTypes.string
};

Footer.defaultProps = {
  socialLinks: {},
  className: ''
};

export default Footer;

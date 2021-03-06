import clsx from 'clsx';
import propTypes from 'prop-types';
import { FacebookIcon } from '@/components/Vectors/FacebookIcon';
import { InstagramIcon } from '@/components/Vectors/InstagramIcon';
import { IconButton } from '@/components/IconButton';
import { SVG } from '@/components/SVG';

function Footer({ className }) {
  return (
    <footer id="footer" className={clsx(className, 'md:text-2-2 text-1-6 font-neue-lt md:mx-0 -mx-2-0 lg:px-5-0')}>
      <div className="md:h-13-2 h-7-8 flex items-center justify-between md:border-0 border-t border-b md:px-0 px-2-0">
        <div className="flex items-center">
          <a href="https://www.facebook.com/dedaenabar" target="_blank" rel="noreferrer" className="block mr-2-3">
            <IconButton className="border rounded-full md:w-5-5 w-4-0 md:h-5-5 h-4-0 hover:bg-purple text-dark duration-150">
              <SVG src={FacebookIcon} className="md:w-1-1 w-0-7 duration-150" />
            </IconButton>
          </a>
          <a href="https://www.instagram.com/dedaenabar" target="_blank" rel="noreferrer">
            <IconButton className="border rounded-full md:w-5-5 w-4-0 md:h-5-5 h-4-0 hover:bg-purple text-dark duration-150">
              <SVG src={InstagramIcon} className="md:w-2-5 w-1-8 duration-150" />
            </IconButton>
          </a>
        </div>
        <p className="md:block hidden">© Dedaena Bar 2022</p>
        <p>All Rights Reserved</p>
      </div>
      <div className="md:hidden h-6-0 flex items-center justify-center">
        <p>© Dedaena Bar 2022</p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  className: propTypes.string
};

Footer.defaultProps = {
  className: ''
};

export default Footer;

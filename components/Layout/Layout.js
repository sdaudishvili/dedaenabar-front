import propTypes from 'prop-types';
import { Header } from './Header';
import { Footer } from './Footer';

function Layout({ children, socialLinks }) {
  return (
    <div className="grid grid-rows-[max-content_minmax(0,1fr)_max-content] min-h-screen container">
      <Header />
      <main className="">{children}</main>
      <Footer socialLinks={socialLinks} />
    </div>
  );
}

Layout.propTypes = {
  children: propTypes.node.isRequired,
  socialLinks: propTypes.object
};

Layout.defaultProps = {
  socialLinks: {}
};

export default Layout;

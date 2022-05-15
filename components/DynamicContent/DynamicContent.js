import clsx from 'clsx';
import PropTypes from 'prop-types';

function DynamicContent({ className, text }) {
  return <div className={clsx(className, 'dynamic-content')} dangerouslySetInnerHTML={{ __html: text }} />;
}

DynamicContent.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string
};

DynamicContent.defaultProps = {
  className: '',
  text: ''
};

export default DynamicContent;

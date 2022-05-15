import clsx from 'clsx';
import PropTypes from 'prop-types';

function RegistrationForm({ className }) {
  return <div className={clsx(className, '')}>asfd</div>;
}

RegistrationForm.propTypes = {
  className: PropTypes.string
};

RegistrationForm.defaultProps = {
  className: ''
};

export default RegistrationForm;

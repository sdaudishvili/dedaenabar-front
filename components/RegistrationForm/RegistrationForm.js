import clsx from 'clsx';
import PropTypes from 'prop-types';
import { FormSubmitButton } from '@/components/FormSubmitButton';
import { ImageUploader } from '@/components/ImageUploader';
import { ErrorMessage } from '@/components/ErrorMessage';
import { Input } from '@/components/Input';
import { register } from '@/api';
import useDisableScroll from '@/hooks/useDisableScroll';

function RegistrationForm({ className }) {
  const [values, setValues] = React.useState({});
  const [file, setFile] = React.useState(null);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);

  useDisableScroll({ condition: error });

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submitHandler = async () => {
    const fd = new FormData();
    fd.append('user_image', file);
    try {
      await register(fd, values);
      setValues({});
      setFile(null);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 1000);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  const generateTextFieldProps = (key) => ({
    name: key,
    value: values[key] || '',
    onChange: changeHandler,
    required: true
  });

  return (
    <div className={clsx(className, 'border')}>
      <div className="md:px-13-2 px-2-5 md:pt-6-0 pt-2-5 md:pb-8-3 pb-2-5 md:text-1-8 text-1-4">
        <p className="md:text-4-8 text-3-6 font-ranua-rg">
          Registration <span className="text-purple">Form</span>
        </p>
        <p className="font-neue-lt tracking-wide italic md:mt-3-5 mt-3-0 md:text-1-6 text-1-2">
          Avoid inconvenient moment of Face Control by applying for authorization, gain multi pass QR code and WELCOME
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-3-0 md:gap-y-7-0 gap-y-3-0 md:mt-3-5 mt-3-0">
          <Input {...generateTextFieldProps('first_name')} placeholder="Name" />
          <Input {...generateTextFieldProps('last_name')} placeholder="Surname" />
          <Input
            {...generateTextFieldProps('fb_profile')}
            placeholder="Facebook Profile Link"
            className="md:col-span-2"
          />
          <Input {...generateTextFieldProps('email')} placeholder="E-mail" className="md:col-span-2" />
          <ImageUploader onChange={setFile} className="md:col-span-2" />
        </div>
      </div>
      <FormSubmitButton success={success} onClick={submitHandler} className="border-t">
        Confirm
      </FormSubmitButton>
      {error && <ErrorMessage message="Error occured!" onClose={() => setError(false)} />}
    </div>
  );
}

RegistrationForm.propTypes = {
  className: PropTypes.string
};

RegistrationForm.defaultProps = {
  className: ''
};

export default RegistrationForm;

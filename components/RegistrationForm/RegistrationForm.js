import clsx from 'clsx';
import PropTypes from 'prop-types';
import { FormSubmitButton } from '@/components/FormSubmitButton';
import { ImageUploader } from '@/components/ImageUploader';
import { Input } from '@/components/Input';

function RegistrationForm({ className }) {
  const [values, setValues] = React.useState({});
  const [file, setFile] = React.useState();
  const [success, setSuccess] = React.useState(false);

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submitHandler = () => {
    const fd = new FormData();
    fd.append('first_name', values.first_name);
    fd.append('last_name', values.last_name);
    fd.append('fb_profile', values.fb_profile);
    fd.append('email', values.email);
    fd.append('user_image', file);
    setSuccess(true);
  };

  const generateTextFieldProps = (key) => ({
    name: key,
    value: values[key] || '',
    onChange: changeHandler,
    required: true
  });

  return (
    <div className={clsx(className, 'border')}>
      <div className="px-13-2 pt-6-0 pb-8-3 text-1-8">
        <p className="text-4-8 font-ranua-rg">
          Registration <span className="text-purple">Form</span>
        </p>
        <div className="grid grid-cols-2 gap-x-3-0 gap-y-7-0 mt-6-6">
          <Input {...generateTextFieldProps('first_name')} placeholder="Name" />
          <Input {...generateTextFieldProps('last_name')} placeholder="Surname" />
          <Input {...generateTextFieldProps('fb_profile')} placeholder="Facebook Profile Link" className="col-span-2" />
          <Input {...generateTextFieldProps('email')} placeholder="E-mail" className="col-span-2" />
          <ImageUploader onChange={setFile} className="col-span-2" />
        </div>
      </div>
      <FormSubmitButton success={success} onClick={submitHandler} className="border-t">
        Confirm
      </FormSubmitButton>
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

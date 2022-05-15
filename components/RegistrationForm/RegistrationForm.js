import clsx from 'clsx';
import PropTypes from 'prop-types';
import { ImageUploader } from '../ImageUploader';
import { Input } from '../Input';

function RegistrationForm({ className }) {
  const [values, setValues] = React.useState({});
  const [file, setFile] = React.useState();
  const [success, setSuccess] = React.useState(false);

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submitHandler = () => {
    const fd = new FormData();
    fd.append('name', values.name);
    fd.append('surname', values.surname);
    fd.append('link', values.link);
    fd.append('email', values.email);
    fd.append('file', file);
    console.log(fd);
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
          <Input {...generateTextFieldProps('name')} placeholder="Name" />
          <Input {...generateTextFieldProps('surname')} placeholder="Surname" />
          <Input {...generateTextFieldProps('link')} placeholder="Facebook Profile Link" className="col-span-2" />
          <Input {...generateTextFieldProps('email')} placeholder="E-mail" className="col-span-2" />
          <ImageUploader onChange={setFile} className="col-span-2" />
        </div>
      </div>
      <div className="h-10-0 w-full border-t font-ranua-rg text-3-6 relative">
        <button
          type="button"
          onClick={submitHandler}
          className="absolute inset-0 hover:bg-purple text-dark duration-150"
        >
          Confirm
        </button>
        <div
          className={clsx(
            { 'opacity-0 pointer-events-none': !success },
            'absolute inset-0 bg-green flex items-center justify-center duration-150 text-[#243628]'
          )}
        >
          Success
        </div>
      </div>
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

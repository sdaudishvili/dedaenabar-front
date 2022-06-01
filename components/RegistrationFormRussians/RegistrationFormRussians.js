import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Input } from '@/components/Input';
import { FormSubmitButton } from '@/components/FormSubmitButton';
import { Checkbox } from '../Checkbox';

const firstHalf = [
  { key: 'term_1', label: 'I didn’t vote for Putin, he is a dictator' },
  { key: 'term_2', label: 'I condemn Russian aggression in Ukraine' },
  { key: 'term_3', label: 'Crimea is Ukraine, so are other disputed territories' },
  { key: 'term_4', label: 'Abkhazia and Tskhinvali regions are Georgia' },
  { key: 'term_5', label: '20% of Georgia are occupied by Russia' },
  { key: 'term_6', label: 'Every 12th Georgian turned into a refugee due to Russian invasion' },
  { key: 'term_7', label: 'I like the phrase “russkii voennii karabl, idi na xui”' },
  { key: 'term_8', label: 'Slava Ukraini' }
];

const secondHalf = [
  {
    key: 'term_9',
    label: 'Please understand, after crossing Georgian border, you are in a foreign country, act accordingly'
  },
  { key: 'term_10', label: 'Please use Georgian or English for communicating with the staff' },
  { key: 'term_11', label: 'Do not assume that people speak Russian, ask first' },
  {
    key: 'term_12',
    label:
      'We do appreciate effort, we will be really happy if you learn magic words in Georgian, like “gamarjoba”, “madloba” and “ori ludi tu sheidzleba”'
  },
  { key: 'term_13', label: 'Do not offer us to pay in RUBL' },
  { key: 'term_14', label: 'Leave this box empty to get visa' },
  { key: 'term_15', label: 'Do not engage into political discussions while being drunk' }
];

const defaultValues = {
  term_1: false,
  term_2: false,
  term_3: false,
  term_4: false,
  term_5: false,
  term_6: false,
  term_7: false,
  term_8: false,
  term_9: false,
  term_10: false,
  term_11: false,
  term_12: false,
  term_13: false,
  term_14: false,
  term_15: false,
  first_name: '',
  last_name: '',
  email: ''
};

function RegistrationFormRussians({ className }) {
  const [values, setValues] = React.useState({ ...defaultValues });
  const [success, setSuccess] = React.useState(false);

  const changeHandler = (key, value) => {
    setValues({ ...values, [key]: value });
  };

  const submitHandler = () => {
    console.log(values);
    setSuccess(true);
  };

  const generateTextFieldProps = (key) => ({
    name: key,
    value: values[key] || '',
    onChange: (e) => changeHandler(key, e.target.value),
    required: true
  });

  return (
    <div className={clsx(className, 'border')}>
      <div className="md:px-13-2 px-2-5 md:pt-6-0 pt-2-5 md:pb-8-3 pb-2-5 md:text-1-8 text-1-4">
        <p className="md:text-4-8 text-3-6 font-ranua-rg">
          Registration <span className="text-purple">Form</span>
        </p>
        <div className="font-neue-lt tracking-wide italic md:text-1-6 text-1-2 md:mt-5-0 mt-3-0 capitalize">
          Citizens of russia need a VISA to enter Dedaena bar because not ALL russians are welcome. We stand for
          equality and unity, but we need to make sure, that brainwashed russian imperialists do not end up in our bar.
          Please support us by filling up a VISA application, so nobody has to hang out alongside ass*oles. Thanks for
          understanding.
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-3-0 md:mt-5-0 mt-3-0">
          <Input {...generateTextFieldProps('first_name')} placeholder="Name" />
          <Input {...generateTextFieldProps('last_name')} placeholder="Surname" />
        </div>
        <div className="font-neue-lt tracking-wide italic md:text-1-6 text-1-2 md:mt-5-0 mt-3-0 capitalize">
          I am a citizen of Russia visiting Georgia. Having respect for my host country and its people, I agree to
          following:
        </div>
        <div className="md:mt-4-0 mt-2-5">
          {firstHalf.map((x) => (
            <Checkbox
              className="md:mt-2-0 mt-1-6"
              key={x.key}
              label={x.label}
              checked={!!values[x.key]}
              onClick={() => changeHandler(x.key, !values[x.key])}
            />
          ))}
        </div>
        <div className="font-neue-lt tracking-wide italic md:text-1-6 text-1-2 md:mt-4-0 mt-3-0 capitalize">
          I understand that Dedaena bar is a friendly and tolerant place and Visa policy had been implemented due to a
          delicate political situation and some “bad” Russians who misbehaved in Dedaena bar.
        </div>
        <div className="font-neue-lt tracking-wide italic md:text-1-6 text-1-2 mt-2-0 capitalize">
          I have read through General code of behavior:
        </div>
        <div className="mt-2-0">
          {secondHalf.map((x) => (
            <Checkbox
              className="mt-2-0"
              key={x.key}
              label={x.label}
              checked={!!values[x.key]}
              onClick={() => changeHandler(x.key, !values[x.key])}
            />
          ))}
        </div>
        <div className="font-neue-lt tracking-wide italic md:text-1-6 text-1-2 md:mt-5-0 mt-3-0 capitalize">
          Provide any kind of ID for entering Dedaena Bar. To receive your visa please input your email:
        </div>
        <Input {...generateTextFieldProps('email')} placeholder="Email" className="md:w-50-percent mt-3-0" />
        <div className="font-neue-lt tracking-wide italic md:text-1-6 text-1-2 mt-1-5 capitalize">
          Visa will be delivered in your mail inbox
        </div>
      </div>
      <FormSubmitButton success={success} onClick={submitHandler} className="border-t">
        Sign Up
      </FormSubmitButton>
    </div>
  );
}

RegistrationFormRussians.propTypes = {
  className: PropTypes.string
};

RegistrationFormRussians.defaultProps = {
  className: ''
};

export default RegistrationFormRussians;

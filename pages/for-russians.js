import { RegistrationFormRussians } from '@/components/RegistrationFormRussians';

function ForRussians() {
  return (
    <div className="home-page h-full md:border md:pt-7-0 pt-3-0 md:px-26-5 md:pb-16-2 pb-3-0">
      <div className="md:text-6-2 text-3-4 font-ranua-rg capitalize">/ Visa for citizens of Russia</div>
      <RegistrationFormRussians className="md:mt-2-5 mt-3-3" />
    </div>
  );
}

export default ForRussians;

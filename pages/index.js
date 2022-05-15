import { getHomePageContent } from '@/api/common';
import { RegistrationForm } from '@/components/Common/RegistrationForm';
import { withDefaultProps } from '@/utils/withDefaultProps';

function Home() {
  return (
    <div className="home-page h-full border pt-13-0 px-26-5 pb-16-2">
      <RegistrationForm />
    </div>
  );
}

export const getStaticProps = withDefaultProps(async (context, defaultProps) => {
  const fetchData = () => Promise.all([getHomePageContent({ languageCode: context.locale })]);

  const [homeContent] = await fetchData();

  return {
    props: {
      homeContent,
      ...defaultProps
    },
    revalidate: 10
  };
});

export default Home;

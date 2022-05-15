/* eslint-disable react/no-array-index-key */
import { getHomePageContent } from '@/api/common';
import { LogoAnimation } from '@/components/LogoAnimation';
import { RegistrationForm } from '@/components/RegistrationForm';
import { withDefaultProps } from '@/utils/withDefaultProps';

function Home() {
  return (
    <div className="home-page h-full border pt-13-0 px-26-5 pb-16-2">
      <div className="absolute left-0 right-0 bg-light pt-6-0 pb-3-0">
        <div className="w-[95%] m-auto">
          {Array(5)
            .fill()
            .map((_x, i) => (
              <div key={`row-${i}`} className="flex">
                {Array(10)
                  .fill()
                  .map((_x, j) => (
                    <LogoAnimation key={`col-${j}`} />
                  ))}
              </div>
            ))}
        </div>
      </div>
      <RegistrationForm className="bg-light relative z-1" />
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

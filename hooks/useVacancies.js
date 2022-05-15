import { getVacancies } from '@/api/vacancies';

const minAwait = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 500)
  );

const useVacancies = ({ query, deps }) => {
  const [vacancies, setVacancies] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const totalRef = React.useRef(0);

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const [{ items }] = await Promise.all([getVacancies({ ...query, skip: vacancies.length }), minAwait()]);
      setVacancies([...vacancies, ...items]);
      setLoading(false);
    };
    const footer = document.getElementById('footer');
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (vacancies.length < totalRef.current) {
            fetchData();
          }
        }
      },
      { threshold: 0.7 }
    );

    observer.observe(footer);
    return () => {
      observer.unobserve(footer);
    };
  }, [vacancies]);

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { items, total } = await getVacancies({ ...query });
      setLoading(false);
      totalRef.current = total;
      setVacancies(items);
    };
    fetchData();
  }, deps);

  return { vacancies, total: totalRef.current, loading };
};

export default useVacancies;

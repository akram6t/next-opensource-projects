'use client'

import { ThemeSwitch } from '@/components/ThemeSwitch';
// import useApi from '@/hooks/useApi';

export default function HomePage() {
  // const { error, loading, fetchData } = useApi<object[]>();

  // useEffect(() => {
    // fetchData('https://jsonplaceholder.typicode.com/posts');
  // }, [fetchData])

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-4">
      <ThemeSwitch/>
      <h1 className="text-2xl font-bold mb-4">React Table with Tailwind CSS</h1>
    </div>
  );
};
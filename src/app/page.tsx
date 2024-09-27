'use client'

import { ThemeSwitch } from '@/components/ThemeSwitch';
import useApi from '@/hooks/useApi';
import React, { useEffect } from 'react';

export default function HomePage() {
  const { data, error, loading, fetchData } = useApi<Object[]>();

  useEffect(() => {
    fetchData('https://jsonplaceholder.typicode.com/posts');
  }, [fetchData])

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-4">
      <ThemeSwitch/>
      <h1 className="text-2xl font-bold mb-4">React Table with Tailwind CSS</h1>
      {
        data?.map((item: any) => (
          <div key={item.id} className="border p-4 mb-4">
            <h2 className="text-lg font-bold">{item.title}</h2>
            <p>{item.body}</p>
          </div>
        ))
      }
    </div>
  );
};
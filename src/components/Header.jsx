import React from 'react';
import { Title } from '@mantine/core';

export default function Header() {
  return (
    <header className='text-sky-500 italic h-32 flex items-center justify-center'>
      <Title order={1}>Super Todo-List</Title>
    </header>
  )
}

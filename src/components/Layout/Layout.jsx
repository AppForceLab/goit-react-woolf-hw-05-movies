import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'components/Header/Header';

import style from './Layout.module.css';

export const Layout = () => (
  <>
    <Header />

    <main className={style.main}>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  </>
);

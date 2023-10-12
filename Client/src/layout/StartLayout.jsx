import { Outlet } from 'react-router';

export function StartLayout() {
  return (
    <>
      <section>
        <Outlet />
      </section>
    </>
  );
}

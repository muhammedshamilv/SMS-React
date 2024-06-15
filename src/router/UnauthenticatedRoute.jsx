import { Outlet } from 'react-router-dom';

export default function UnauthenticatedRoute() {
  return (
    <>
      <Outlet />
    </>
  );
}

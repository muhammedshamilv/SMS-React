import { Outlet } from 'react-router-dom';

// import { useAppSelector } from '../store/hooks';
// import { selectUserDetails } from '../store/user';

export default function UserRoute() {
  // const user = useAppSelector(selectUserDetails);

  return (
    <div className=''>
      <div className=''>
        <Outlet />
      </div>
    </div>
  );
}

import {
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
  Route,
} from 'react-router-dom';

import { ErrorBoundary } from '../components/ErrorBoundary';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import LocalStorageService from '../utils/LocalStorageServices';

import AuthenticatedRoute from './AuthenticatedRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';
import UserRoute from './UserRoute';

export const routes = {
  home: () => '/',
  login: () => '/login',
  signup: () => '/signup',
};

const isAuthenticated = () => {
  return LocalStorageService.getAccessToken();
};

const publicLoader = async () => {
  if (isAuthenticated()) {
    throw redirect(routes.home());
  }
  return null;
};

const privateLoader = async () => {
  if (!isAuthenticated()) {
    throw redirect(routes.login());
  }
  return null;
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorBoundary />}>
      <Route element={<UnauthenticatedRoute />}>
        <Route
          element={<Login />}
          path={routes.login()}
          loader={publicLoader}
        />
        <Route
          element={<Signup />}
          path={routes.signup()}
          loader={publicLoader}
        />
      </Route>
      <Route element={<AuthenticatedRoute />} loader={privateLoader}>
        <Route element={<UserRoute />} path={''}>
          <Route path={routes.home()} element={<Home />}></Route>
        </Route>
      </Route>
    </Route>
  )
);

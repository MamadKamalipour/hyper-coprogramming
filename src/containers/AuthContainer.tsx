import { Login } from '@components/Auth/Login/Login';
import { Register } from '@components/Auth/Register/Register';
import { LoginLayout } from '@components/Home/Layout/LoginLayout/LoginLayout';

export const AuthContainer = () => {
  const register = false;

  return (
    <LoginLayout>
      <Login />
      {register && <Register />}
    </LoginLayout>
  );
};

import { Login } from '@components/Auth/Login/Login';
import { Register } from '@components/Auth/Register/Register';
import { LoginLayout } from '@components/Home/Layout/LoginLayout/LoginLayout';
import { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

//style---------------
export const ButtonWrapperStyle = styled.div`
  ${tw`w-full flex justify-center items-center absolute top-2`}
`;

export const ButtonStyle = styled.button`
  ${tw`bg-blue-500 text-[10px] text-white p-3 rounded hover:bg-blue-900 transition-all`}
`;

export const AuthContainer = () => {
  const [isRegister, setIsRegister] = useState(true);

  return (
    <>
      <ButtonWrapperStyle>
        <ButtonStyle onClick={() => setIsRegister(!isRegister)}>
          Chnage Register or Login Page
        </ButtonStyle>
      </ButtonWrapperStyle>
      {isRegister ? (
        <LoginLayout>
          <Login Phone />
        </LoginLayout>
      ) : (
        <Register />
      )}
    </>
  );
};

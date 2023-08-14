import styled from 'styled-components';
import tw from 'twin.macro';

export const LoginStyle = styled.div`
  ${tw`w-[30rem] min-h-[40rem] flex flex-col justify-center text-blue-900`}
`;

export const LoginWrapperStyle = styled.form`
  ${tw` bg-white border-[0.5px] border-gray-600 items-center p-12 rounded flex flex-col min-w-full `}
`;

export const PageTitleStyle = styled.h1`
  ${tw`text-3xl font-extrabold uppercase text-blue-900 dark:text-blue-900 mb-20`}
`;

export const WellcomeStyle = styled.span`
  ${tw`text-lg font-bold text-gray-600 dark:text-blue-900`}
`;

// Input section style-------------------------------------

export const InputWrapperStyle = styled.div`
  ${tw`flex flex-col gap-4 w-full `}
`;

export const InputLableStyle = styled.label`
  ${tw`text-sm font-medium text-gray-600 dark:text-blue-900 capitalize`}
`;

// Input section style-------------------------------------

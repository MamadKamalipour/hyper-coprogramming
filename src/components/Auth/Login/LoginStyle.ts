import styled from 'styled-components';
import tw from 'twin.macro';

export const LoginStyle = styled.div`
  ${tw`w-[30rem] min-h-[30rem] flex flex-col justify-center text-blue-900 bg-white items-center  rounded-2xl transition-all relative`}
`;

export const LoginWrapperStyle = styled.form`
  ${tw`min-w-full`}
`;

export const LoginContainerStyle = styled.div<{ otpShow: boolean }>`
  ${tw`bg-white top-0 absolute z-50 min-w-full h-full flex flex-col items-center p-12 rounded-2xl`}
  position: absolute;
  transform: ${({ otpShow }) => otpShow && 'translateX(0)'};
  opacity: ${({ otpShow }) => otpShow && '0'};
  transition: 200ms ease-in-out;
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

export const OtpContainer = styled.div<{ otpShow: boolean }>`
  ${tw`rounded-2xl`}
  position: absolute;
  transform: ${({ otpShow }) => !otpShow && 'translateX(0)'};
  opacity: ${({ otpShow }) => !otpShow && '0'};
  transition: 200ms ease-in-out;
`;

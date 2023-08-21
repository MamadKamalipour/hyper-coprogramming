import Link from 'next/link';
import styled from 'styled-components';
import tw from 'twin.macro';

export const OTPWrapperStyle = styled.div`
  ${tw``}
`;

export const OTPFormStyle = styled.form`
  ${tw``}
`;

export const OTPFormWrapperStyle = styled.div`
  ${tw`flex flex-col space-y-16`}
`;

export const OTPInputWrapperStyle = styled.div`
  ${tw`flex flex-row items-center justify-between mx-auto w-full max-w-xs gap-3`}
`;

export const OTPFooterStyle = styled.div`
  ${tw`flex flex-col space-y-5`}
`;

export const RecieveSectionStyle = styled.div`
  ${tw`flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500`}
`;

export const OTPResendLinkStyle = styled.p`
  ${tw``}
`;

export const OTPRsendLinkStyle = styled(Link)`
  ${tw`flex flex-row items-center text-blue-500`}
`;

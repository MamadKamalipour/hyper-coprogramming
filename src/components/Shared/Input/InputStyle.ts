import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledInputWrapper = styled.div`
  ${tw`flex flex-col relative grow-[1] pb-3 shrink-[0] `}
`;
export const StyledTextInput = styled.input`
  ${tw`shadow-none rounded focus-visible:outline-none p-2 mt-0.5 box-border bg-gray-200 text-black `}
`;
export const StyledInputError = styled.span`
  ${tw`absolute -bottom-3 right-1 text-sm text-red-600 font-semibold capitalize`}
`;

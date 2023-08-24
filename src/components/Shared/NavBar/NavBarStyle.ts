import styled from 'styled-components';
import tw from 'twin.macro';

export const BurgerWrapper = styled.button<{ open: boolean }>`
  ${tw`z-50 cursor-pointer transition-all duration-150 ease-in-out bg-none relative h-5 w-6 leading-5 inline-block align-middle bg-no-repeat bg-center bg-[100%]`}

  div {
    ${tw`w-full h-[0.225rem] bg-gray-600 block duration-300 rounded-3xl absolute`}

    &:nth-child(1) {
      ${tw`top-[10%]`}
      transform: ${({ open }) =>
        open &&
        'translate3d(0px, 6px, 0px) scale(1, 1) rotate(45deg) scale(1, 1)'};
    }

    &:nth-child(2) {
      ${tw`top-[50%]`}
      transform: ${({ open }) => open && 'scale(0)'};
    }

    &:nth-child(3) {
      ${tw`top-[90%] origin-left `}
      transform: ${({ open }) =>
        open &&
        'translate3d(3px, -2px, 0px) scale(1, 1) rotate(-45deg) scale(1, 1)'};
    }
  }
`;

export const StyleNavbarHamburgerUl = styled.ul<{ open: boolean }>`
  ${tw`absolute left-0 right-0 transition duration-150 ease-linear origin-top bg-amber-300 md:(relative flex) `}
  ${({ open }) => (open ? tw`scale-y-100` : tw`scale-y-0`)}
`;

export const StyleNavbarUl = styled.ul`
  ${tw`bg-amber-300 relative flex`}
`;

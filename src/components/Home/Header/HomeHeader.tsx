import { useBaseComponent } from '@base/BaseComponent';
import { NavBar } from '@components/Shared/NavBar/NavBar';
import LogoDarkMode from '@image/HyperLogoDarkMode.png';
import LogoLightMode from '@image/HyperLogoLightMode.png';
import Image from 'next/image';
import Link from 'next/link';
import { useHomeHeader } from './HomeHeaderHelper';
import {
  LogoWrapper,
  MenuWrapper,
  ProfileAndNotificationWrapper,
  StyledHomeHeaderWrapper,
} from './HomeHeaderStyle';
import { IHomeHeaderProps, IHomeHeaderState } from './HomeHeaderType';

export const HomeHeader = (props: IHomeHeaderProps) => {
  const { helper } = useBaseComponent<
    IHomeHeaderProps,
    IHomeHeaderState,
    ReturnType<typeof useHomeHeader>
  >({
    props,
    helperHook: useHomeHeader,
  });

  const { logoutHandler, NavList } = helper;

  return (
    <StyledHomeHeaderWrapper>
      <ProfileAndNotificationWrapper>
        <div>N</div>
        <div>P</div>
      </ProfileAndNotificationWrapper>
      <MenuWrapper>
        <NavBar list={NavList} />
      </MenuWrapper>
      <LogoWrapper>
        <Link href="#">
          <Image src={LogoDarkMode} alt="logo-dark-mode" width={100} />
          <Image
            src={LogoLightMode}
            alt="logo-light-mode"
            width={100}
            className="hidden"
          />
        </Link>
      </LogoWrapper>
    </StyledHomeHeaderWrapper>
  );
};

// <ThemeSwitcher />
//       <button
//         className="bg-violet-500 rounded px-2 py-1 text-white font-semibold"
//         onClick={logoutHandler}
//       >
//         Logout
//       </button>

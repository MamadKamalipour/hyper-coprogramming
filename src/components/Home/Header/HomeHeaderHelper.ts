import { ICommonHelperParams } from '@base/BaseInterface';
import { INavItem } from '@components/Shared/NavBar/NavBarType';
import { logoutUser } from '@redux/slices/authentication/AuthenticationSlice';

export const useHomeHeader = (params: ICommonHelperParams) => {
  const { dispatch } = params;
  const NavList: INavItem[] = [
    { title: 'item 1', slug: 'item-1' },
    { title: 'item 1', slug: 'item-1' },
    { title: 'item 1', slug: 'item-1' },
    { title: 'item 1', slug: 'item-1' },
  ];

  const logoutHandler = () => {
    dispatch(logoutUser());
  };
  return {
    logoutHandler,
    NavList,
  };
};

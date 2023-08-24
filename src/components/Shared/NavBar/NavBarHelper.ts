import { ICommonHelperParams } from '@base/BaseInterface';
import { useScreenWidth } from '@hooks/useScreenWidth';
import { useEffect } from 'react';
import { INavBarProps, INavBarState } from './NavBarType';

export const useNavBarHelper = (
  params: ICommonHelperParams<INavBarProps, INavBarState>,
) => {
  const { setState, state } = params;
  const { isListOpen } = state;

  const { screenWidth } = useScreenWidth();

  useEffect(() => {
    if (!screenWidth) return;
    if (screenWidth >= 768) {
      setState({ isHamburger: false });
    } else {
      setState({ isHamburger: true });
    }
  }, [screenWidth]);

  const handleToggleMenu = () => {
    setState({ isListOpen: !isListOpen });
  };

  return { handleToggleMenu };
};

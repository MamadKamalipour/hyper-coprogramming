import { useBaseComponent } from '@base/BaseComponent';
import Link from 'next/link';
import { useNavBarHelper } from './NavBarHelper';
import {
  BurgerWrapper,
  StyleNavbarHamburgerUl,
  StyleNavbarUl,
} from './NavBarStyle';
import { INavBarProps, INavBarState } from './NavBarType';

export const NavBar = (props: INavBarProps) => {
  const { state, helper } = useBaseComponent<
    INavBarProps,
    INavBarState,
    ReturnType<typeof useNavBarHelper>
  >({
    props,
    helperHook: useNavBarHelper,
    initialState: {
      isHamburger: false,
      isListOpen: false,
    },
  });
  const { list } = props;
  const { isListOpen, isHamburger } = state;
  const { handleToggleMenu } = helper;

  return (
    <nav className="w-full ">
      <div className="">
        {isHamburger ? (
          <>
            <BurgerWrapper open={isListOpen} onClick={handleToggleMenu}>
              <div></div>
              <div></div>
              <div></div>
            </BurgerWrapper>
            <StyleNavbarHamburgerUl open={isListOpen}>
              {list.map((item, index) => {
                const { title, slug } = item;
                return (
                  <li key={index}>
                    <Link href={slug}>{title}</Link>
                  </li>
                );
              })}
            </StyleNavbarHamburgerUl>
          </>
        ) : (
          <StyleNavbarUl>
            {list.map((item, index) => {
              const { title, slug } = item;
              return (
                <li key={index}>
                  <Link href={slug}>{title}</Link>
                </li>
              );
            })}
          </StyleNavbarUl>
        )}
      </div>
    </nav>
  );
};

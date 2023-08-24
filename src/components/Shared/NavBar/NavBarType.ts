export interface INavItem {
  title: string;
  slug: string;
}

export interface INavBarProps {
  list: INavItem[];
}
export interface INavBarState {
  isHamburger: boolean;
  isListOpen: boolean;
}

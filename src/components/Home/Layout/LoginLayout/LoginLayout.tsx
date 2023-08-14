import { useBaseComponent } from '@base/BaseComponent';
import { StyledLoginLayout } from './LoginLayoutStyle';
import { ILoginLayoutProps } from './LoginLayoutType';

export const LoginLayout = (props: ILoginLayoutProps) => {
  useBaseComponent();
  const { children } = props;
  return <StyledLoginLayout>{children}</StyledLoginLayout>;
};

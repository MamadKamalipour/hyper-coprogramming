import { IPageProps } from '@type/global';
import { AuthContainer } from 'src/containers/AuthContainer';

const login: IPageProps = () => {
  return <AuthContainer />;
};

login.needAuth = false;

export default login;

export async function getStaticProps() {
  return {
    props: {},
  };
}

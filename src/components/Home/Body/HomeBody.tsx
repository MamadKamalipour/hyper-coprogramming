import { useBaseComponent } from '@base/BaseComponent';
import { openLoginModal } from '@redux/slices/modals/modalsSlice';
import { StyledHomeBodyImageWrapper } from './HomeBodyStyle';
import { IHomeBodyType } from './HomeBodyType';

export const HomeBody = (props: IHomeBodyType) => {
  const { dispatch } = useBaseComponent()
  return (
    <StyledHomeBodyImageWrapper>
      <button onClick={() => {
        dispatch(openLoginModal({ isOpen: true, data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia odio rem sunt nesciunt soluta dolore autem adipisci magnam, ullam fuga nostrum ipsum facere error necessitatibus possimus nobis perferendis, dicta deserunt!" }))
      }}>open modal</button>
    </StyledHomeBodyImageWrapper>
  );
};

import { useBaseComponent } from '@base/BaseComponent';
import { openLoginModal } from '@redux/slices/modals/modalsSlice';
import { StyledHomeBodyImageWrapper } from './HomeBodyStyle';
import { IHomeBodyType } from './HomeBodyType';

export const HomeBody = (props: IHomeBodyType) => {
  const { dispatch } = useBaseComponent()
  return (
    <StyledHomeBodyImageWrapper>
      <button onClick={() => {
        dispatch(openLoginModal({
          isOpen: true,
          data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
          name: 'First Modal'
        }))
      }}>open modal</button>
    </StyledHomeBodyImageWrapper>
  );
};

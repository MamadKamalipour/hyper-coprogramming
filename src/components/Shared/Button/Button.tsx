import { ButtonStyle, ButtonWrapperStyle } from './ButtonStyle';
import { IButtonProps } from './ButtonType';

export const Button = ({ ButtonType, ButtonText }: IButtonProps) => {
  return (
    <ButtonWrapperStyle>
      <ButtonStyle type={ButtonType}>{ButtonText}</ButtonStyle>
    </ButtonWrapperStyle>
  );
};

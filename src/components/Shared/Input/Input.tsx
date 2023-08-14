import { forwardRef, Ref } from 'react';
import {
  StyledInputError,
  StyledInputWrapper,
  StyledTextInput,
} from './InputStyle';
import { IProps } from './InputType';

export const Input = forwardRef(
  (
    { value, onChange, error, ...props }: IProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    return (
      <StyledInputWrapper>
        <StyledTextInput
          ref={ref}
          value={value}
          onChange={onChange}
          type="text"
          autoComplete="off"
          {...props}
        />
        {error && <StyledInputError>{error}</StyledInputError>}
      </StyledInputWrapper>
    );
  },
);

Input.displayName = 'Input';

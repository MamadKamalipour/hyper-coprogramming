import { Input } from '@components/Shared/Input/Input';
import { useFormik } from 'formik';
import { loginFormValidation } from 'src/validations/loginFormValidation';
import {
  ButtonStyle,
  ButtonWrapperStyle,
  InputLableStyle,
  InputWrapperStyle,
  LoginStyle,
  LoginWrapperStyle,
  PageTitleStyle,
  WellcomeStyle,
} from './LoginStyle';
import { ILoginInitialValues, ILoginPropsType } from './LoginType';

export const Login = ({ Phone, Email }: ILoginPropsType) => {
  const initialValue: ILoginInitialValues = {
    phone: '',
    email: '',
  };
  const handleSubmit = (value: ILoginInitialValues) => {
    console.log(value);
  };

  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: loginFormValidation,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return (
    <LoginStyle>
      <LoginWrapperStyle onSubmit={formik.handleSubmit}>
        <PageTitleStyle>Login</PageTitleStyle>
        <InputWrapperStyle>
          <WellcomeStyle>Hi</WellcomeStyle>
          {Email ? (
            <>
              <InputLableStyle htmlFor="email">
                Please enter your Email
              </InputLableStyle>
              <Input
                value={formik.values.email}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                type="text"
                id="email"
                name="email"
                onChange={(e) => {
                  formik.setValues({
                    ...formik.values,
                    email: e.target.value,
                  });
                }}
                onFocus={() =>
                  formik.setTouched({
                    email: true,
                  })
                }
                error={
                  formik.errors.email && formik.touched.email
                    ? formik.errors.email
                    : ''
                }
                onBlur={formik.handleBlur}
                className={`${formik.errors && 'border border-red-950'}`}
              />
            </>
          ) : (
            <>
              <InputLableStyle htmlFor="Phone">
                Please enter your Phone
              </InputLableStyle>
              <Input
                value={formik.values.phone}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                type="text"
                id="phone"
                name="phone"
                inputMode="numeric"
                maxLength={11}
                minLength={11}
                onChange={(e) => {
                  formik.setValues({
                    ...formik.values,
                    phone: e.target.value,
                  });
                }}
                onFocus={() =>
                  formik.setTouched({
                    phone: true,
                  })
                }
                error={
                  formik.errors.phone && formik.touched.phone
                    ? formik.errors.phone
                    : ''
                }
                onBlur={formik.handleBlur}
                className={`${
                  formik.errors.phone ? 'border-b-2 border-red-600' : ''
                } `}
              />
            </>
          )}
        </InputWrapperStyle>
        <ButtonWrapperStyle>
          <ButtonStyle type="submit">Send</ButtonStyle>
        </ButtonWrapperStyle>
      </LoginWrapperStyle>
    </LoginStyle>
  );
};

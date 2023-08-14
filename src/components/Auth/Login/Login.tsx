import { Button } from '@components/Shared/Button/Button';
import { Input } from '@components/Shared/Input/Input';
import { useFormik } from 'formik';
import { useState } from 'react';
import { loginFormValidation } from 'src/validations/loginFormValidation';
import { OTPForm } from '../OTPForm/OTPForm';
import {
  InputLableStyle,
  InputWrapperStyle,
  LoginContainerStyle,
  LoginStyle,
  LoginWrapperStyle,
  OtpContainer,
  PageTitleStyle,
  WellcomeStyle,
} from './LoginStyle';
import { ILoginInitialValues, ILoginPropsType } from './LoginType';

export const Login = ({ isPhone }: ILoginPropsType) => {
  const [otpShow, setOtpShow] = useState(false);

  const initialValue: ILoginInitialValues = {
    email: '',
    phone: '',
  };

  const handleSubmit = (value: string) => {
    console.log(value);
    setOtpShow(true);
  };

  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: loginFormValidation,
    onSubmit: (values) => {
      const { email, phone } = values;
      if (!isPhone) {
        if (email.length > 0) {
          handleSubmit(email);
        }
      } else {
        if (phone.length > 0) {
          handleSubmit(phone);
        }
      }
    },
  });

  const { errors } = formik;
  console.log(errors);

  return (
    <LoginStyle>
      <LoginWrapperStyle onSubmit={formik.handleSubmit}>
        <LoginContainerStyle otpShow={otpShow}>
          <PageTitleStyle>Login</PageTitleStyle>
          <InputWrapperStyle>
            <WellcomeStyle>Hi</WellcomeStyle>
            {!isPhone ? (
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
          <Button ButtonText="Send" ButtonType="submit" />
        </LoginContainerStyle>
      </LoginWrapperStyle>
      <OtpContainer otpShow={otpShow}>
        <OTPForm />
      </OtpContainer>
      <span
        onClick={() => setOtpShow(!otpShow)}
        className="bg-red-600 z-50 font-semibold p-1 w-20 text-center absolute bottom-2 text-white rounded cursor-pointer hover:bg-red-950"
      >
        otp
      </span>
    </LoginStyle>
  );
};

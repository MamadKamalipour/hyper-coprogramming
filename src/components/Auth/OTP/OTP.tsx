import { Button } from '@components/Shared/Button/Button';
import { useState } from 'react';
import {
  OTPFooterStyle,
  OTPFormStyle,
  OTPFormWrapperStyle,
  OTPInputWrapperStyle,
  OTPResendLinkStyle,
  OTPRsendLinkStyle,
  OTPWrapperStyle,
  RecieveSectionStyle,
} from './OTPStyle';

export const OTP = () => {
  const [isNew, setIsNew] = useState(false);

  return (
    <OTPWrapperStyle>
      <OTPFormStyle action="" method="post">
        <OTPFormWrapperStyle>
          <OTPInputWrapperStyle>
            <div className="w-16 h-16 ">
              <input
                className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="w-16 h-16 ">
              <input
                className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="w-16 h-16 ">
              <input
                className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="w-16 h-16 ">
              <input
                className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                type="text"
                name=""
                id=""
              />
            </div>
          </OTPInputWrapperStyle>

          <OTPFooterStyle>
            <Button ButtonText="Send" ButtonType="submit" />
            <RecieveSectionStyle>
              <OTPResendLinkStyle>Didnt recieve code?</OTPResendLinkStyle>{' '}
              <OTPRsendLinkStyle
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resend
              </OTPRsendLinkStyle>
            </RecieveSectionStyle>
          </OTPFooterStyle>
        </OTPFormWrapperStyle>
      </OTPFormStyle>
    </OTPWrapperStyle>
  );
};

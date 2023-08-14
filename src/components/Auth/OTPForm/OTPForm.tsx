import { Button } from '@components/Shared/Button/Button';
import { OTPWrapperStyle } from './OTPFormStyle';

export const OTPForm = () => {
  return (
    <OTPWrapperStyle>
      <form action="" method="post">
        <div className="flex flex-col space-y-16">
          <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs gap-3">
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
          </div>

          <div className="flex flex-col space-y-5">
            <div>
              <Button ButtonText="Send" ButtonType="submit" />
            </div>

            <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
              <p>Didnt recieve code?</p>{' '}
              <a
                className="flex flex-row items-center text-blue-600"
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resend
              </a>
            </div>
          </div>
        </div>
      </form>
    </OTPWrapperStyle>
  );
};

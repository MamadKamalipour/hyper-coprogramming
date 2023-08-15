import { toast } from 'react-toastify';
import { IToastifyProps } from './ToastifyType';

export const Toastify = ({
  type,
  text,
  id,
  successText,
  errorText,
  promise,
  pendingText,
}: IToastifyProps) => {
  if (type === 'pending' && promise) {
    toast.promise(promise, {
      pending: pendingText,
      success: {
        render: successText,
        toastId: id,
      },
      error: {
        render: errorText,
        toastId: id,
      },
    });
  }

  if (type === 'success') {
    toast.success(text, { toastId: id });
  }
  if (type === 'error') {
    toast.error(text, { toastId: id });
  }
};

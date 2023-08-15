export interface IToastifyProps {
  type: 'pending' | 'success' | 'error';
  text: string | number;
  id: string | number;
  successText?: string;
  errorText?: string;
  promise?: Promise<any>;
  pendingText?: string;
}

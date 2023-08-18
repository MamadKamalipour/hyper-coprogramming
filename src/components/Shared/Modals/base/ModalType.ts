import { IBaseProps } from '@base/BaseInterface';

export interface IModalProps extends IBaseProps {
  isOpen: boolean;
  onClose: () => void;
  name: string
}
export interface IModalState { }

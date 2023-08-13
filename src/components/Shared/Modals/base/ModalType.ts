import { IBaseProps } from '@base/BaseInterface';

export interface IModalProps extends IBaseProps {
  isOpen: boolean;
  onClose: () => void;
}
export interface IModalState {}

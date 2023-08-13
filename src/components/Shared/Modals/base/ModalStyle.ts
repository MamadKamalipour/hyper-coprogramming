import { Dialog } from '@headlessui/react';
import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledDialogTitle = styled(Dialog.Title)`
  ${tw`border border-b`}
`;

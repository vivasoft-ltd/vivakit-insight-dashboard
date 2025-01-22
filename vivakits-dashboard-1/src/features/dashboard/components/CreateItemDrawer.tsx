import ReactDOM from 'react-dom';
import { VKDrawer, VKFlex, VKTypography } from '@vivakits/react-components';
import { ReactNode } from 'react';
import CrossIcon from '../../../assets/icons/cross';

const CreateItemDrawer = ({
  isOpen,
  onClose,
  children,
  size = 'sm',
  title,
}: {
  isOpen: boolean;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  onClose: Function;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  title?: string;
}) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <VKDrawer
      open={isOpen}
      onClose={() => null}
      closeOnOverlayClick={false}
      className="mt-20 p-4 overflow-hidden shadow-sm"
      size={size}
    >
      <VKFlex direction="row" justify="space-between">
        {title && <VKTypography variant="h4">{title}</VKTypography>}
        <CrossIcon
          color="primary"
          className="hover:cursor-pointer"
          onClick={onClose}
        />
      </VKFlex>
      <hr />
      {children}
    </VKDrawer>,
    document.body
  );
};

export default CreateItemDrawer;

'use client';

import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

interface ConfirmDialogProps {
  visible: boolean;
  onHide: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  icon?: string;
}

export function ConfirmDialog({
  visible,
  onHide,
  onConfirm,
  title,
  message,
  confirmLabel = 'Yes',
  cancelLabel = 'No',
  icon = 'pi pi-exclamation-triangle'
}: ConfirmDialogProps) {
  const footer = (
    <div>
      <Button
        label={cancelLabel}
        icon="pi pi-times"
        onClick={onHide}
        className="p-button-text"
      />
      <Button
        label={confirmLabel}
        icon="pi pi-check"
        onClick={() => {
          onConfirm();
          onHide();
        }}
        autoFocus
      />
    </div>
  );

  return (
    <Dialog
      visible={visible}
      style={{ width: '450px' }}
      header={title}
      modal
      footer={footer}
      onHide={onHide}
    >
      <div className="flex items-center gap-4">
        <i className={`${icon} text-2xl text-yellow-500`} />
        <span>{message}</span>
      </div>
    </Dialog>
  );
} 
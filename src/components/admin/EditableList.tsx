'use client';

import { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';
import { ConfirmDialog } from '@/components/ui/ConfirmDialog';
import { BaseContent } from '@/types/content';

interface Field {
  field: string;
  header: string;
  type: 'text' | 'date' | 'time' | 'dropdown' | 'textarea';
  options?: { label: string; value: string }[];
}

interface EditableListProps<T extends BaseContent> {
  items: T[];
  onSave: (items: T[]) => Promise<void>;
  fields: Field[];
  emptyItem: () => T;
}

export function EditableList<T extends BaseContent>({
  items: initialItems,
  onSave,
  fields,
  emptyItem
}: EditableListProps<T>) {
  const [items, setItems] = useState<T[]>(initialItems);
  const [editingItem, setEditingItem] = useState<T | null>(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<T | null>(null);
  const [showSaveDialog, setShowSaveDialog] = useState(false);

  const handleAdd = () => {
    const newItem = emptyItem();
    setItems([...items, newItem]);
    setEditingItem(newItem);
  };

  const handleEdit = (item: T) => {
    setEditingItem(item);
  };

  const handleDelete = (item: T) => {
    setItemToDelete(item);
    setShowDeleteDialog(true);
  };

  const confirmDelete = () => {
    if (itemToDelete) {
      setItems(items.filter(item => item.id !== itemToDelete.id));
      setItemToDelete(null);
    }
  };

  const handleSave = async () => {
    try {
      await onSave(items);
      setShowSaveDialog(false);
    } catch (error) {
      console.error('Error saving items:', error);
      // You might want to show an error toast here
    }
  };

  const renderEditor = (field: Field, value: unknown, onChange: (value: string) => void) => {
    const stringValue = value?.toString() || '';
    
    switch (field.type) {
      case 'text':
        return (
          <InputText
            value={stringValue}
            onChange={(e) => onChange(e.target.value)}
            className="w-full"
          />
        );
      case 'date':
        return (
          <Calendar
            value={stringValue ? new Date(stringValue) : null}
            onChange={(e) => onChange(e.value?.toISOString() || '')}
            showTime={false}
            dateFormat="yy-mm-dd"
            className="w-full"
          />
        );
      case 'time':
        return (
          <Calendar
            value={stringValue ? new Date(`2000-01-01T${stringValue}`) : null}
            onChange={(e) => onChange(e.value?.toLocaleTimeString('en-US', { hour12: false }) || '')}
            timeOnly
            className="w-full"
          />
        );
      case 'dropdown':
        return (
          <Dropdown
            value={stringValue}
            options={field.options}
            onChange={(e) => onChange(e.value)}
            className="w-full"
          />
        );
      case 'textarea':
        return (
          <InputTextarea
            value={stringValue}
            onChange={(e) => onChange(e.target.value)}
            rows={3}
            className="w-full"
          />
        );
      default:
        return null;
    }
  };

  const actionBodyTemplate = (rowData: T) => {
    return (
      <div className="flex gap-2">
        <Button
          icon="pi pi-pencil"
          onClick={() => handleEdit(rowData)}
          className="p-button-rounded p-button-text"
        />
        <Button
          icon="pi pi-trash"
          onClick={() => handleDelete(rowData)}
          className="p-button-rounded p-button-text p-button-danger"
        />
      </div>
    );
  };

  const bodyTemplate = (rowData: T, field: Field) => {
    if (editingItem?.id === rowData.id) {
      return renderEditor(
        field,
        rowData[field.field as keyof T],
        (value) => {
          const updatedItem = { ...rowData, [field.field]: value };
          setItems(items.map(item => 
            item.id === updatedItem.id ? updatedItem : item
          ));
          setEditingItem(updatedItem as T);
        }
      );
    }
    return <span>{rowData[field.field as keyof T]?.toString() || ''}</span>;
  };

  return (
    <div>
      <div className="mb-4 flex justify-between items-center">
        <Button
          label="Add New"
          icon="pi pi-plus"
          onClick={handleAdd}
        />
        <Button
          label="Save All Changes"
          icon="pi pi-save"
          onClick={() => setShowSaveDialog(true)}
          severity="success"
        />
      </div>

      <DataTable value={items} tableStyle={{ minWidth: '50rem' }}>
        {fields.map((field) => (
          <Column
            key={field.field}
            field={field.field}
            header={field.header}
            body={(data: T) => bodyTemplate(data, field)}
          />
        ))}
        <Column body={actionBodyTemplate} exportable={false} style={{ width: '8rem' }} />
      </DataTable>

      <ConfirmDialog
        visible={showDeleteDialog}
        onHide={() => setShowDeleteDialog(false)}
        onConfirm={confirmDelete}
        title="Confirm Delete"
        message="Are you sure you want to delete this item?"
        icon="pi pi-exclamation-triangle"
      />

      <ConfirmDialog
        visible={showSaveDialog}
        onHide={() => setShowSaveDialog(false)}
        onConfirm={handleSave}
        title="Confirm Save"
        message="Are you sure you want to save all changes?"
        icon="pi pi-save"
        confirmLabel="Save"
      />
    </div>
  );
} 
import { EditableInfoPropsType } from '@/features/EditableInfo';

interface EditableInfoDataType extends EditableInfoPropsType {
  id: string;
}

export const editableInfoData: EditableInfoDataType[] = [
  {
    id: 'cardNumber',
    label: 'Номер карты',
    variants: [
      {
        id: 'card',
        label: 'Номер карты',
      },
      {
        id: 'contract',
        label: 'Номер договора',
      },
    ],
  },
  {
    id: 'name',
    label: 'ФИО владельца',
  },
  {
    id: 'address',
    label: 'Адрес',
  },
];

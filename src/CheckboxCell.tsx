import { Checkbox } from '@alfalab/core-components/checkbox';
import { Typography } from '@alfalab/core-components/typography';
import { useId } from 'react';
import { appSt } from './style.css';

type Props = {
  item: { id: number; title: string };
  checked: boolean;
  img: string;
  onChange: (item: { id: number; title: string }) => void;
};

export const CheckboxCell = ({ checked, onChange, item, img }: Props) => {
  const id = useId();

  return (
    <label htmlFor={id} className={appSt.cell}>
      <img src={img} width={44} height={44} />
      <div>
        <Typography.Text tag="p" view="primary-small" color="secondary" defaultMargins={false}>
          {item.title}
        </Typography.Text>
        <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
          {!checked ? 'Не выбрано' : 'Добавлено'}
        </Typography.Text>
      </div>

      <div style={{ marginLeft: 'auto' }}>
        <Checkbox size={24} onChange={() => onChange(item)} checked={checked} id={id} />
      </div>
    </label>
  );
};

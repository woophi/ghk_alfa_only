import { Checkbox } from '@alfalab/core-components/checkbox';
import { Typography } from '@alfalab/core-components/typography';
import { useId } from 'react';
import { appSt } from './style.css';

type Props = {
  item: { id: number; title: string };
  checked: boolean;
  onChange: (item: { id: number; title: string }) => void;
};

export const CheckboxCell = ({ checked, onChange, item }: Props) => {
  const id = useId();

  return (
    <label htmlFor={id} className={appSt.cell}>
      <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
        {item.title}
      </Typography.Text>

      <div style={{ marginLeft: 'auto' }}>
        <Checkbox size={24} onChange={() => onChange(item)} checked={checked} id={id} />
      </div>
    </label>
  );
};

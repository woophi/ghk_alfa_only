import { BottomSheet } from '@alfalab/core-components/bottom-sheet';
import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { CDNIcon } from '@alfalab/core-components/cdn-icon';
import { Typography } from '@alfalab/core-components/typography';
import { useState } from 'react';
import { appSt } from './style.css';

export type SelectorCellProps = {
  img: string;
  title: string;
  titleBottomSheet: string;
  items: { id: number; title: string }[];
  selectedItems: { id: number; title: string }[];
  onSelect: (item: { id: number; title: string }, allItems: { id: number; title: string }[]) => void;
};

export const SelectorCell = ({ img, items, onSelect, selectedItems, title, titleBottomSheet }: SelectorCellProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={appSt.cell} onClick={() => setOpen(true)}>
        <img src={img} width={44} height={44} />
        <div>
          <Typography.Text tag="p" view="primary-small" color="secondary" defaultMargins={false}>
            {title}
          </Typography.Text>
          <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
            {!selectedItems.length ? 'Не выбрано' : selectedItems.map(si => si.title).join(',')}
          </Typography.Text>
        </div>

        <CDNIcon name="glyph_chevron-down_m" className={appSt.collapseArrow({ open })} />
      </div>

      <BottomSheet
        title={
          <Typography.Text tag="p" view="primary-small" color="secondary" defaultMargins={false}>
            {titleBottomSheet}
          </Typography.Text>
        }
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className={appSt.cellContent}>
          {items.map(item => (
            <ButtonMobile
              className={appSt.cellContentItem}
              view="secondary"
              block
              rightAddons={selectedItems.some(si => si.id === item.id) && <CDNIcon name="glyph_checkmark_m" />}
              key={item.id}
              onClick={() => {
                onSelect(item, items);
                setOpen(false);
              }}
            >
              {item.title}
            </ButtonMobile>
          ))}
        </div>
      </BottomSheet>
    </>
  );
};

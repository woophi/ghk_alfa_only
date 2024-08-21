import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { CDNIcon } from '@alfalab/core-components/cdn-icon';
import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';
import { useCallback, useState } from 'react';
import alfaLogo from './assets/alfa_only_logo.png';

import { CheckboxCell } from './CheckboxCell';
import {
  checkboxItems,
  commission,
  halfMillionIds,
  hundredFiftyK,
  hundredK,
  selectorItems,
  tenK,
  threeMillionsIds,
  twelveMillionsIds,
  twoHundredK,
} from './data';
import { LS, LSKeys } from './ls';
import { SelectorCell } from './SelectorCell';
import { appSt } from './style.css';
import { ThxLayout } from './thx/ThxLayout';
import { sendDataToGA } from './utils/events';

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [selectedItems, setSelected] = useState<{ id: number; title: string }[]>([]);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));

  const selectedItemsIds = selectedItems.map(i => i.id);
  const showSubscription =
    !!selectedItemsIds.filter(id => !commission.skipIds.includes(id)).length &&
    !selectedItemsIds.some(id => commission.notIds.includes(id));

  const mlns = selectedItemsIds.some(id => twelveMillionsIds.includes(id))
    ? 12
    : selectedItemsIds.some(id => threeMillionsIds.includes(id))
    ? 3
    : selectedItemsIds.some(id => halfMillionIds.includes(id))
    ? 1.5
    : 0;

  const grands =
    selectedItemsIds.every(id => tenK.alwaysIds.includes(id)) && selectedItemsIds.some(id => tenK.ids.includes(id))
      ? 10
      : selectedItemsIds.some(id => hundredFiftyK.alwaysIds.includes(id)) &&
        !selectedItemsIds.some(id => twoHundredK.ids.includes(id))
      ? 150
      : selectedItemsIds.some(id => twoHundredK.ids.includes(id)) &&
        !selectedItemsIds.some(id => twoHundredK.notIds.includes(id))
      ? 200
      : selectedItemsIds.some(id => hundredK.alwaysIds.includes(id)) ||
        (selectedItemsIds.some(id => hundredK.ids.includes(id)) &&
          !selectedItemsIds.some(id => hundredK.notIds.includes(id)))
      ? 100
      : 0;

  const submit = useCallback(() => {
    setLoading(true);
    sendDataToGA({
      cashback_rub: selectedItems.find(si => [1, 2, 3].includes(si.id))?.title ?? '',
      cashback_mil: selectedItems.find(si => [4, 5, 6].includes(si.id))?.title ?? '',
      transfers: selectedItems.find(si => [7, 8, 9, 10, 11].includes(si.id))?.title ?? '',
      aeroports: selectedItems.find(si => [12, 13, 14, 15, 16].includes(si.id))?.title ?? '',
      insurance: Number(selectedItems.some(si => si.id === 17)) as 1 | 0,
      money_transfer: Number(selectedItems.some(si => si.id === 18)) as 1 | 0,
      atm: Number(selectedItems.some(si => si.id === 19)) as 1 | 0,
      concierge: Number(selectedItems.some(si => si.id === 20)) as 1 | 0,
      stiker: Number(selectedItems.some(si => si.id === 21)) as 1 | 0,
      metal_card: Number(selectedItems.some(si => si.id === 22)) as 1 | 0,
      savings_account: Number(selectedItems.some(si => si.id === 23)) as 1 | 0,
    }).then(() => {
      LS.setItem(LSKeys.ShowThx, true);
      setThx(true);
      setLoading(false);
    });
  }, [selectedItems]);

  const onItemSelect = useCallback((item: { id: number; title: string }, allItems: { id: number; title: string }[] = []) => {
    const isInGroup = allItems.some(i => i.id === item.id);
    setSelected(selected => {
      const emptyGroup = isInGroup ? selected.filter(s => !allItems.some(i => i.id === s.id && i.id !== item.id)) : selected;
      return emptyGroup.some(s => s.id === item.id) ? emptyGroup.filter(s => s.id !== item.id) : emptyGroup.concat(item);
    });
  }, []);

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.topContainer}>
          <img src={alfaLogo} width={158} height={38} alt="Alfa Only" />
          <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
            Настройте свою подписку — покажем, как её получить
          </Typography.Text>

          {selectorItems.map(item => (
            <SelectorCell
              key={item.title}
              img={item.img}
              title={item.title}
              titleBottomSheet={item.titleBottomSheet}
              items={item.items}
              onSelect={onItemSelect}
              selectedItems={selectedItems.filter(si => item.items.some(i => i.id === si.id))}
            />
          ))}

          {checkboxItems.map(item => (
            <CheckboxCell
              checked={selectedItemsIds.includes(item.id)}
              item={item}
              onChange={onItemSelect}
              key={item.id}
              img={item.img}
            />
          ))}
        </div>
      </div>
      <Gap size={showSubscription ? 256 : 128} />
      <div className={appSt.bottomBtn}>
        <ButtonMobile loading={loading} block view="primary" className={appSt.btn} onClick={submit}>
          {showSubscription && (
            <div>
              <Typography.Text color="secondary-inverted" tag="p" view="primary-medium" defaultMargins={false}>
                2990 ₽ в месяц
              </Typography.Text>
              <Typography.Text color="secondary-inverted" tag="p" view="primary-medium" defaultMargins={false}>
                или
              </Typography.Text>
              <Gap size={16} />
            </div>
          )}
          <div className={appSt.btnContainer}>
            <div>
              <Typography.TitleResponsive font="system" tag="h2" view="xsmall" weight="bold">
                ₽ {mlns} млн
              </Typography.TitleResponsive>
              <Typography.Text color="secondary-inverted" tag="p" view="primary-medium" defaultMargins={false}>
                На счёте
              </Typography.Text>
            </div>

            <div className={appSt.btnContainer}>
              {grands ? (
                <div>
                  <Typography.TitleResponsive font="system" tag="h2" view="xsmall" weight="bold">
                    ₽ {grands} тыс
                  </Typography.TitleResponsive>
                  <Typography.Text color="secondary-inverted" tag="p" view="primary-medium" defaultMargins={false}>
                    Траты в месяц
                  </Typography.Text>
                </div>
              ) : null}
              <div className={appSt.btnArrow}>
                <CDNIcon name="glyph_chevron-right_m" color="#000000" />
              </div>
            </div>
          </div>
        </ButtonMobile>
      </div>
    </>
  );
};

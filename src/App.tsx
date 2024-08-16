import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { CDNIcon } from '@alfalab/core-components/cdn-icon';
import { Gap } from '@alfalab/core-components/gap';
import { Notification } from '@alfalab/core-components/notification';
import { Typography } from '@alfalab/core-components/typography';
import { useCallback, useState } from 'react';
import alfaLogo from './assets/alfa_only_logo.png';

import { CheckboxCell } from './CheckboxCell';
import { checkboxItems, selectorItems, vipIds, visibleSpendings } from './data';
import { LS, LSKeys } from './ls';
import { SelectorCell } from './SelectorCell';
import { appSt } from './style.css';
import { ThxLayout } from './thx/ThxLayout';
import { sendDataToGA } from './utils/events';

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState('');
  const [selectedItems, setSelected] = useState<{ id: number; title: string }[]>([]);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [isVisible, setIsVisible] = useState(false);

  const selectedItemsIds = selectedItems.map(i => i.id);
  const showSubscription = !!selectedItemsIds.length && !selectedItemsIds.some(id => vipIds.includes(id));
  const spendings = visibleSpendings.find(
    s => selectedItemsIds.some(id => s.ids.includes(id)) && !selectedItemsIds.some(id => s.notIds.includes(id)),
  );

  const hideNotification = useCallback(() => setIsVisible(false), []);
  const submit = useCallback(() => {
    if (!selectedItems.length || !selectedItems.some(si => si.id === 1 || si.id === 2)) {
      setError('Выберите кэшбэк рублями');
      setIsVisible(true);
      return;
    }
    setLoading(true);
    sendDataToGA({
      cashback_rub: selectedItems.find(si => [1, 2].includes(si.id))?.title ?? '',
      cashback_mil: selectedItems.find(si => [3, 4].includes(si.id))?.title ?? '',
      transfers: selectedItems.find(si => [5, 6, 7, 8].includes(si.id))?.title ?? '',
      aeroports: selectedItems.find(si => [9, 10, 11, 12].includes(si.id))?.title ?? '',
      insurance: Number(selectedItems.some(si => si.id === 13)) as 1 | 0,
      money_transfer: Number(selectedItems.some(si => si.id === 14)) as 1 | 0,
      atm: Number(selectedItems.some(si => si.id === 15)) as 1 | 0,
      concierge: Number(selectedItems.some(si => si.id === 16)) as 1 | 0,
      stiker: Number(selectedItems.some(si => si.id === 17)) as 1 | 0,
      metal_card: Number(selectedItems.some(si => si.id === 18)) as 1 | 0,
      savings_account: Number(selectedItems.some(si => si.id === 19)) as 1 | 0,
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
            Настройте свою подписку
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
                2990 ₽ / мес.
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
                ₽ {spendings?.mln ?? 0} млн.
              </Typography.TitleResponsive>
              <Typography.Text color="secondary-inverted" tag="p" view="primary-medium" defaultMargins={false}>
                На счете
              </Typography.Text>
            </div>

            <div className={appSt.btnContainer}>
              <div>
                <Typography.TitleResponsive font="system" tag="h2" view="xsmall" weight="bold">
                  ₽ {spendings?.ths ?? 0} тыс.
                </Typography.TitleResponsive>
                <Typography.Text color="secondary-inverted" tag="p" view="primary-medium" defaultMargins={false}>
                  Траты в мес.
                </Typography.Text>
              </div>
              <div className={appSt.btnArrow}>
                <CDNIcon name="glyph_chevron-right_m" color="#000000" />
              </div>
            </div>
          </div>
        </ButtonMobile>
      </div>
      <Notification
        badge="negative"
        title={err}
        visible={isVisible}
        offset={showSubscription ? 172 : 108}
        onClose={hideNotification}
        onCloseTimeout={hideNotification}
        position="bottom"
        className={appSt.btn}
      />
    </>
  );
};

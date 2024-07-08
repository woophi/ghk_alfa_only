import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { CDNIcon } from '@alfalab/core-components/cdn-icon';
import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';
import { useCallback, useState } from 'react';
import alfaLogo from './assets/alfa_only_logo.png';

import { CheckboxCell } from './CheckboxCell';
import { checkboxItems, selectorItems, vipIds, visibleSpendings } from './data';
import { SelectorCell } from './SelectorCell';
import { appSt } from './style.css';

export const App = () => {
  // const [loading, setLoading] = useState(false);
  const [err, setError] = useState('');
  const [selectedItems, setSelected] = useState<{ id: number; title: string }[]>([]);

  const selectedItemsIds = selectedItems.map(i => i.id);
  const showSubscription = !!selectedItemsIds.length && !selectedItemsIds.some(id => vipIds.includes(id));
  const spendings = visibleSpendings.find(
    s => selectedItemsIds.some(id => s.ids.includes(id)) && !selectedItemsIds.some(id => s.notIds.includes(id)),
  );

  const submit = useCallback(() => {
    if (!selectedItems.length || !selectedItems.some(si => si.id === 1 || si.id === 2)) {
      setError('Выберите кэшбэк рублями');
      return;
    }
    // setLoading(true);
    // sendDataToGA(selectedItems).then(() => {
    //   setLoading(false);

    //   (window.location as unknown as string) = 'alfabank://longread?endpoint=v1/adviser/longreads/16096';
    // });
  }, [selectedItems]);

  const onItemSelect = useCallback((item: { id: number; title: string }, allItems: { id: number; title: string }[] = []) => {
    const isInGroup = allItems.some(i => i.id === item.id);
    setSelected(selected => {
      const emptyGroup = isInGroup ? selected.filter(s => !allItems.some(i => i.id === s.id)) : selected;
      return emptyGroup.some(s => s.id === item.id) ? emptyGroup.filter(s => s.id !== item.id) : emptyGroup.concat(item);
    });
  }, []);

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
            <CheckboxCell checked={selectedItemsIds.includes(item.id)} item={item} onChange={onItemSelect} key={item.id} />
          ))}
        </div>
      </div>
      <Gap size={showSubscription ? 256 : 128} />
      <div className={appSt.bottomBtn}>
        <ButtonMobile block view="primary" className={appSt.btn} onClick={submit}>
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
    </>
  );
};
